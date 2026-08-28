import { defineField, defineType } from "sanity";

export const featureItem = defineType({
  name: "featureItem",
  title: "Feature item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "note",
      title: "Note",
      description: "Optional italic caveat shown under the description, e.g. a scope limitation.",
      type: "string",
    }),
    defineField({
      name: "tag",
      title: "Tag",
      description: "Optional small pill next to the title, e.g. \"No account needed\".",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "desc" },
  },
});
