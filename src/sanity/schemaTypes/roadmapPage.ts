import { defineField, defineType } from "sanity";

export const roadmapPage = defineType({
  name: "roadmapPage",
  title: "Roadmap Page",
  type: "document",
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          type: "string",
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
      name: "rows",
      title: "Rows",
      description: "Reorderable — drag to change the order they appear on the page.",
      type: "array",
      of: [{ type: "roadmapRow" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Roadmap Page" };
    },
  },
});
