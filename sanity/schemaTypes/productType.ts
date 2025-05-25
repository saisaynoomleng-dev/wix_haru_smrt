import { defineArrayMember, defineField, defineType } from 'sanity';
import { FaTshirt } from 'react-icons/fa';
import { MdOutlineRateReview } from 'react-icons/md';

export const productType = defineType({
  name: 'product',
  title: 'Products',
  icon: FaTshirt,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .min(10)
          .info(`Item name should have at least 10 characters`),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) =>
        rule.required().info(`Required to generate a page on the website`),
    }),
    defineField({
      name: 'price',
      title: 'Item Price',
      type: 'number',
      initialValue: 10,
      validation: (rule) => rule.required().min(10),
    }),
    defineField({
      name: 'stock',
      title: 'Stocks',
      description: 'Available items in stock',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'mainImage',
      type: 'imageBlock',
      validation: (rule) =>
        rule.required().info(`Required to generate an image on website`),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (rule) =>
        rule.required().info(`Required to generate a filter on the website`),
    }),
    defineField({
      name: 'review',
      title: 'Review',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'number',
              initialValue: 0,
              validation: (rule) => rule.required().min(0).max(5),
            }),
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'reviewedAt',
              title: 'Reviewd Date',
              type: 'date',
              initialValue: () => new Date().toISOString(),
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              name: 'name',
              rating: 'rating',
            },
            prepare({ name, rating }) {
              return {
                title: name,
                subtitle: rating,
                media: MdOutlineRateReview,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'desc',
      title: 'Item Description',
      description:
        'Item description helps users understand about the product more',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      category: 'categories.0.name',
      stock: 'stock',
      image: 'mainImage',
    },
    prepare({ name, price, category, stock, image }) {
      return {
        title: `${name} • $${price}`,
        subtitle: `Stock: ${stock} • (${category?.name})`,
        media: image,
      };
    },
  },
});
