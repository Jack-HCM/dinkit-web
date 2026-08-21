import { defineField, defineType } from "sanity";

export const headingWithHighlight = defineType({
  name: "headingWithHighlight",
  title: "Heading",
  type: "object",
  fields: [
    defineField({
      name: "text",
      title: "Full heading text",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "highlight",
      title: "Highlighted words",
      description:
        "Optional. Must be an exact, case-sensitive substring of the heading text above — that portion is rendered in the accent green colour. Leave blank for no highlight.",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "text", subtitle: "highlight" },
  },
});
