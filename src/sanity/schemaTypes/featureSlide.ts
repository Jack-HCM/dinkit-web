import { defineField, defineType } from "sanity";

export const featureSlide = defineType({
  name: "featureSlide",
  title: "Feature carousel slide",
  type: "object",
  fields: [
    defineField({
      name: "pill",
      title: "Pill label",
      description: "Short label shown in the rounded badge above the slide heading.",
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
      name: "body",
      title: "Body copy",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "phoneImage",
      title: "Phone screenshot",
      description:
        "Transparent PNG phone mockup. Export at EXACTLY 900×1751px (aspect ratio ≈ 0.514:1) — this image is rendered with object-fit: fill, so an incorrect aspect ratio will visibly stretch or squash the phone. Transparent background outside the phone frame, no drop shadow baked in (that's applied in CSS). Use an existing feature slide image as a template when creating new ones.",
      type: "image",
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "pill", media: "phoneImage" },
  },
});
