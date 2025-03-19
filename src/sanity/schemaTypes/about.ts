import { defineType, defineField } from "sanity";

export default defineType({
  name: "about",
  title: "About Me",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description1",
      title: "First Paragraph",
      type: "text",
    }),
    defineField({
      name: "description2",
      title: "Second Paragraph",
      type: "text",
    }),
    defineField({
      name: "resume",
      title: "Resume Link",
      type: "url",
    }),
    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
    }),
  ],
});
