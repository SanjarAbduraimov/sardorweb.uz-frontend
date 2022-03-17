const domain = `${process.env.API_URL.split("://")[1]}`;
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["localhost", domain],
  },
};
