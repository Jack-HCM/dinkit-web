import { defineField, defineType } from "sanity";

export const roadmapRow = defineType({
  name: "roadmapRow",
  title: "Roadmap row",
  type: "object",
  fields: [
    defineField({
      name: "layout",
      title: "Layout",
      description:
        "Image left / copy right, copy left / image right, or two feature columns with no image.",
      type: "string",
      options: {
        list: [
          { title: "Image left", value: "imageLeft" },
          { title: "Image right", value: "imageRight" },
          { title: "Two columns (no image)", value: "twoColumn" },
        ],
      },
      initialValue: "twoColumn",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      hidden: ({ parent }) => parent?.layout === "twoColumn",
    }),
    defineField({
      name: "features",
      title: "Features",
      description: "One feature for an image row, two for a two-column row.",
      type: "array",
      of: [{ type: "roadmapFeature" }],
      validation: (Rule) => Rule.required().min(1).max(2),
    }),
  ],
  preview: {
    select: { layout: "layout", title: "features.0.title" },
    prepare({ layout, title }) {
      return { title: title ?? "Untitled row", subtitle: layout };
    },
  },
});
