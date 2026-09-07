import { defineField, defineType } from "sanity";

export const aboutStep = defineType({
  name: "aboutStep",
  title: "About step",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      description: "Optional — leave empty to show the step as text only.",
      type: "image",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "body" },
  },
});
