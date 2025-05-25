import { FaUser } from 'react-icons/fa';
import { defineField, defineType } from 'sanity';

export const userType = defineType({
  name: 'user',
  title: 'Users',
  icon: FaUser,
  type: 'document',
  fields: [
    defineField({
      name: 'userId',
      title: 'Clerk User ID',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'userEmail',
      title: 'Clerk User Email',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'firstName',
      title: 'Clerk User First Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'lastName',
      title: 'Clerk User Last Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'orders',
      title: 'Orders',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'order' }] }],
    }),
    defineField({
      name: 'cart',
      title: 'Cart',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        defineField({
          name: 'address1',
          type: 'string',
        }),
        defineField({
          name: 'address2',
          type: 'string',
        }),
        defineField({
          name: 'zip',
          title: 'Zip Code',
          type: 'string',
        }),
        defineField({
          name: 'country',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'isSubscribedToNewsletter',
      title: 'Is User subscribed to Newsletter',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'createdAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Profile Picture',
      type: 'imageBlock',
    }),
  ],
  preview: {
    select: {
      name: 'firstName',
      email: 'userEmail',
      isSubscribed: 'isSubscribedToNewsletter',
      image: 'mainImage',
    },
    prepare({ name, email, isSubscribed, image }) {
      const subText = isSubscribed ? 'Subscribed User' : 'No Subscription';
      return {
        title: `${name} • (${subText})`,
        subtitle: email,
        media: image,
      };
    },
  },
});
