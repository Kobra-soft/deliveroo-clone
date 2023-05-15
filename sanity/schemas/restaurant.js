export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(500),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a Value between 1 and 5",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: "rating2",
      type: "string",
      title: "Restaurant Rating (Poor, Ok, Good, Very Good, Excellent)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reviews",
      type: "string",
      title: "Reviews (TOTAL number) (500+)",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "delEstimate",
      type: "string",
      title: "Delivery time estimate (25 - 40 min)",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "distance",
      type: "string",
      title: "Distance",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "closeTime",
      type: "string",
      title: "Close time (Closes at 23:30)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "delMinFee",
      type: "number",
      title: "Minimum order fee (9.00)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "delFee",
      type: "number",
      title: "Delivery fee (0.99)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "type",
      type: "string",
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
