import { defineField, defineType } from "sanity";

export const roadmapFeature = defineType({
  name: "roadmapFeature",
  title: "Roadmap feature",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "In build", value: "inBuild" },
          { title: "Planning", value: "planning" },
          { title: "Planned", value: "planned" },
          { title: "Future consideration", value: "futureConsideration" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "status" },
  },
});
