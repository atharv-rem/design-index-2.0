import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: true,
  prerender:["/"],
  presets: [vercelPreset()],
} satisfies Config;


