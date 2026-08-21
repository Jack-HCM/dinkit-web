import { defineField, defineType } from "sanity";

export const planFeature = defineType({
  name: "planFeature",
  title: "Plan feature",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "Bold lead-in, e.g. \"Phone GPS Tracking:\"",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "desc" },
  },
});
