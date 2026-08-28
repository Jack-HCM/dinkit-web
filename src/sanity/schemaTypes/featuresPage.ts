import { defineField, defineType } from "sanity";

export const featuresPage = defineType({
  name: "featuresPage",
  title: "Features Page",
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
          description: "e.g. \"App features\"",
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
      name: "freeSection",
      title: "Free section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          description: "e.g. \"Free forever\"",
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
        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "featureItem" }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "premiumSection",
      title: "Premium section",
      type: "object",
      fields: [
        defineField({
          name: "heading",
          title: "Heading",
          description: "e.g. \"Premium — £5.99/month\"",
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
        defineField({
          name: "features",
          title: "Features",
          type: "array",
          of: [{ type: "featureItem" }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Features Page" };
    },
  },
});
