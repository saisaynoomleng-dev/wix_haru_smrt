import { defineField, defineType } from 'sanity';

export const imageType = defineType({
  name: 'imageBlock',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      validation: (rule) =>
        rule.required().info(`Requried to generate alt text for screen reader`),
    }),
  ],
});
