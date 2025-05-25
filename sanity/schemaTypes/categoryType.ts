import { defineField, defineType } from 'sanity';
import { FaTag } from 'react-icons/fa';

export const categoryType = defineType({
  name: 'category',
  icon: FaTag,
  title: 'Categories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Category title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Category Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
  ],
});
