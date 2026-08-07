import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 rejects any quality not declared here. The proof screenshots
    // carry readable text, so they need more than the default 75.
    qualities: [75, 90],
    // Left on the WebP default deliberately: AVIF was measured larger than
    // WebP for these text-heavy screenshots (69KB vs 48KB on the widest one).
  },
};

export default nextConfig;
