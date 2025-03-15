import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
};

const withPWA = require("next-pwa")({
  dest: "public", // Destination folder for the PWA files
  disable: process.env.NODE_ENV === "development", // Disable PWA in development mode
  register: true, // Register the service worker
  skipWaiting: true, // Skip waiting for service worker to activate
});

module.exports = withPWA(nextConfig);