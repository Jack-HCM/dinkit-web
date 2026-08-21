import { defineField, defineType } from "sanity";

export const heroSlide = defineType({
  name: "heroSlide",
  title: "Hero carousel slide",
  type: "object",
  fields: [
    defineField({
      name: "pill",
      title: "Pill label",
      description: "Short label shown in the rounded badge above the slide heading, e.g. \"GPS Tracking\".",
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
      name: "image",
      title: "Phone screenshot",
      description:
        "Transparent PNG phone mockup. Export at 612×1324px (aspect ratio ≈ 0.46:1, matches the other hero slides). Transparent background outside the phone frame — no drop shadow baked in, that's applied in CSS. Displayed with object-fit: contain so the exact size can vary slightly, but keep the same aspect ratio so slides don't jump in size when the carousel rotates.",
      type: "image",
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "pill", media: "image" },
  },
});
