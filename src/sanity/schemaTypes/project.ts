import { defineType, defineField } from "sanity";

export default defineType({
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "text",
    }),
    defineField({
      name: "techs",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "github",
      title: "GitHub Repository",
      type: "url",
    }),
    defineField({
      name: "versal",
      title: "Live Demo (Vercel)",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Project Image",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
