require('dotenv').config();
const { API_URL, GOOGLE_SITE_KEY_CAPTCHA } = process.env;
module.exports = {
  async rewrites() {
    // if (NODE_ENV === "development") {
    //   return [
    //     {
    //       source: "/api/:path*",
    //       destination: `${API_URL}/:path*`,
    //     },
    //   ];
    // }
    return [];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/about',
        permanent: true,
      },
    ];
  },
  env: {
    GOOGLE_SITE_KEY_CAPTCHA,
  },
};
