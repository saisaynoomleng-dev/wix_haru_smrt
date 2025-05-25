import { defineArrayMember, defineField, defineType } from 'sanity';
import { RiShoppingBasketLine } from 'react-icons/ri';

export const orderType = defineType({
  name: 'order',
  title: 'Orders',
  icon: RiShoppingBasketLine,
  type: 'document',
  fields: [
    defineField({
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'clerkUserId',
      title: 'Store User Id',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'customerEmail',
      title: 'Customer Email',
      type: 'email',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'product',
              title: 'Product Bought',
              type: 'reference',
              to: [{ type: 'product' }],
            }),
            defineField({
              name: 'quantity',
              title: 'Product Quantity',
              type: 'number',
            }),
          ],
          preview: {
            select: {
              name: 'product.name',
              quantity: 'quantity',
              image: 'product.mainImage',
              price: 'product.price',
            },
            prepare({ name, quantity, image, price }) {
              return {
                title: `${name} | Quantity: ${quantity} `,
                subtitle: `$${price} | total: $${price * quantity}`,
                media: image,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Order date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      name: 'customerName',
      amount: 'totalPrice',
      orderId: 'orderNumber',
      email: 'customerEmail',
    },
    prepare({ name, email, orderId, amount }) {
      const orderIdFormatted =
        orderId && `${orderId.slice(0, 5)}...${orderId.slice(-5)}`;
      return {
        title: `${name} | ${orderIdFormatted}`,
        subtitle: `${amount} • ${email}`,
        media: RiShoppingBasketLine,
      };
    },
  },
});
