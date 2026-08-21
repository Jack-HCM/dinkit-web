import { defineField, defineType } from "sanity";

export const landingPage = defineType({
  name: "landingPage",
  title: "Landing Page",
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
          description: "e.g. \"COMING SOON\". Hidden on the smallest screens.",
          type: "string",
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
          description: "Waitlist blurb shown under the heading. Also reused in the footer.",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "heroCarousel",
      title: "Hero image carousel",
      type: "object",
      fields: [
        defineField({
          name: "slides",
          title: "Slides",
          type: "array",
          of: [{ type: "heroSlide" }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "featureCarousel",
      title: "Feature carousel",
      type: "object",
      fields: [
        defineField({
          name: "sectionHeading",
          title: "Section heading",
          type: "headingWithHighlight",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "slides",
          title: "Slides",
          description:
            "Only the pill/heading/body/phone screenshot are editable here. The background scene illustration and cloud art behind each phone are hand-tuned per slide in code (each has its own crop percentages) and are not content-managed — adding a slide here also needs a matching scene entry added in code before it will display correctly.",
          type: "array",
          of: [{ type: "featureSlide" }],
          validation: (Rule) => Rule.required().min(1),
        }),
      ],
    }),
    defineField({
      name: "pricing",
      title: "Pricing",
      type: "object",
      fields: [
        defineField({
          name: "eyebrow",
          title: "Eyebrow",
          description: "Small line above the heading, e.g. \"Free tracking. Premium analytics.\"",
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
          name: "subtext",
          title: "Subtext",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "ctaLabel",
          title: "Button label",
          description: "e.g. \"Join waitlist\". Always links to the waitlist form.",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "freePlan",
          title: "Free plan",
          type: "plan",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "premiumPlan",
          title: "Premium plan",
          type: "plan",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: "footer",
      title: "Footer",
      type: "object",
      fields: [
        defineField({
          name: "mobileHeading",
          title: "Heading (mobile)",
          description: "Plain heading shown on small screens — no highlight colour.",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "desktopHeading",
          title: "Heading (tablet/desktop)",
          type: "headingWithHighlight",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "subtext",
          title: "Subtext",
          description: "Waitlist blurb, shown under the heading.",
          type: "text",
          rows: 2,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "disclaimer",
          title: "Beta disclaimer",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "copyright",
          title: "Copyright line",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Landing Page" };
    },
  },
});
