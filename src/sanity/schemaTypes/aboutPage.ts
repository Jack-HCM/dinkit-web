import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({
          name: "badge",
          title: "Badge label",
          description: 'e.g. "About Us"',
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "headingWithHighlight",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtext",
          title: "Subtext",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "steps",
      title: "How we built it: steps",
      description: "Reorderable, drag to change the order they appear on the page.",
      type: "array",
      of: [{ type: "aboutStep" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "story",
      title: "Our Story",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          description: 'e.g. "Our Story"',
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "body",
          title: "Body",
          description: "Separate paragraphs with a blank line.",
          type: "text",
          rows: 8,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
