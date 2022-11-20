/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "sahaj",
        mongodb_password: "sahaj",
        mongodb_clustername: "cluster0",
        mongodb_database: "myblogcontactdev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "sahaj",
      mongodb_password: "sahaj",
      mongodb_clustername: "cluster0",
      mongodb_database: "myblogcontact",
    },
  };
};

module.exports = nextConfig;
