import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: Request) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error('MISSING WEBHOOK');
  }

  const headerPayloads = headers();
  const svix_id = (await headerPayloads).get('svix-id') as string;
  const svix_timestamp = (await headerPayloads).get('svix-timestamp') as string;
  const svix_signature = (await headerPayloads).get('svix-signature') as string;

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing SVIX headers', { status: 400 });
  }

  const payload = await req.json();
  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let event: WebhookEvent;

  try {
    event = wh.verify(body, {
      'svix-id': svix_id,
      'svix-signature': svix_signature,
      'svix-timestamp': svix_timestamp,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook', err);
    return new Response('Error Occurred', { status: 400 });
  }

  const eventType = event.type;

  if (eventType === 'user.created') {
    try {
      const {
        email_addresses,
        primary_email_address_id,
        first_name,
        id,
        last_name,
      } = event.data;

      const emailObject = email_addresses.find(
        (email) => email.id === primary_email_address_id,
      );
      const email = emailObject?.email_address;

      await client.create({
        _type: 'user',
        _id: id,
        userEmail: email,
        firstName: first_name,
        lastName: last_name,
        userId: id,
      });

      console.log('User created in Sanity');
    } catch (err) {
      console.error('Error creating user in Sanity:', err);
    }
  }

  return new Response('Webhook received', { status: 200 });
}
