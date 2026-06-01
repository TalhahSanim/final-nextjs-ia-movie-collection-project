import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

const nextConfig = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const images = {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "**.**",
      },
      {
        protocol: "https",
        hostname: "**.**.**",
      },
    ],
  };

  const env = {
    // Used by TMDB category pages; set TMDB_API_KEY in Vercel env vars
    TMDB_API_KEY: process.env.TMDB_API_KEY,
    // Optional override for absolute URL fetches (not required for local db pages)
    SERVER_NAME: (() => {
      if (isDev) return "http://localhost:3000/";
      if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}/`;
      return undefined;
    })(),
  };

  return {
    reactStrictMode: true,
    reactCompiler: true,
    images,
    env,
  };
};

export default nextConfig;
