module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    DB_LOCAL_URI:
      "mongodb+srv://brothergoode:OyTOj11THOLTCciu@cluster0.s2ajg.mongodb.net/Cluster0?retryWrites=true&w=majority",
    mapbox_key:
      "pk.eyJ1Ijoiem91cmR5Y29kZXMiLCJhIjoiY2tzNWl5eWJ2MTc3MDMxcGl2M245cmQ4byJ9.at9VGulqiw_x2k3CqXNWrQ",
    SMTP_FROM_NAME: "Staycation",
    SMTP_FROM_EMAIL: "noreply@staycation.com",
  },
};
