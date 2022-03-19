const domain = `${process.env.API_URL.split("://")[1]}`;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", "sardorweb.s3.amazonaws.com", domain],
  },
};
