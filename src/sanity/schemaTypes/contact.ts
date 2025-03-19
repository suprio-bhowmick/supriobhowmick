import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  title: "Contact Me",
  type: "document",
  fields: [
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email().error("Enter a valid email"),
    }),
    defineField({
      name: "mobile",
      title: "Mobile",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .regex(/^\+?[0-9]{10,15}$/, {
            name: "mobile number",
            invert: false,
          })
          .error("Enter a valid mobile number"),
    }),
    defineField({
      name: "address",
      title: "Address",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
