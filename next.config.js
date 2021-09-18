require('dotenv').config();
const { API_URL, NODE_ENV, PORT } = process.env;
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
    NODE_ENV: NODE_ENV,
    PORT,
  },
};
