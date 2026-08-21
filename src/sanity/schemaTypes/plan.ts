import { defineField, defineType } from "sanity";

export const plan = defineType({
  name: "plan",
  title: "Pricing plan",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Plan name",
      description: "e.g. \"Free\" or \"Premium\"",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priceMain",
      title: "Price (main)",
      description: "e.g. \"£0\" or \"£5\"",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priceDecimal",
      title: "Price (decimal suffix)",
      description: "Optional, shown smaller after the main price, e.g. \".99\". Leave blank for whole-number prices like the Free plan.",
      type: "string",
    }),
    defineField({
      name: "annualBadgeMain",
      title: "Annual billing badge — main price",
      description: "Optional pill shown next to the price, e.g. \"£49\". Leave all three annual badge fields blank to hide the badge entirely (used on the Free plan).",
      type: "string",
    }),
    defineField({
      name: "annualBadgeDecimal",
      title: "Annual billing badge — decimal suffix",
      description: "e.g. \".99\"",
      type: "string",
    }),
    defineField({
      name: "annualBadgeLabel",
      title: "Annual billing badge — label",
      description: "e.g. \"when billed annually\"",
      type: "string",
    }),
    defineField({
      name: "featuresIntro",
      title: "Features list intro line",
      description: "e.g. \"All the tracking you need for free:\" or \"Everything in Free, plus:\"",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "planFeature" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "priceMain" },
  },
});
