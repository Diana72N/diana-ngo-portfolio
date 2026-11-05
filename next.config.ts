import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The resume page was replaced by a direct PDF download; keep old links working.
  async redirects() {
    return [{ source: "/resume", destination: "/resume/Diana_Ngo_Resume.pdf", permanent: false }];
  },
};

export default nextConfig;
