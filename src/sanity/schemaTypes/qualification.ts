import { defineType, defineField } from "sanity";

export default defineType({
  name: "qualification",
  title: "Qualification",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Education", value: "education" },
          { title: "Work Experience", value: "work" },
        ],
      },
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "institution",
      title: "Institution/Company",
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});
