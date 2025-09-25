import { generateRobotsTxt } from "@forge42/seo-tools/robots";
import type { Route } from "./+types/robots.txt";

export async function loader({ request }: Route.LoaderArgs) {
  const isProductionDeployment = process.env.VERCEL_ENV === "production";
  const { origin } = new URL(request.url);

  const robotsRules = [
    {
      userAgent: "*",
      allow: isProductionDeployment ? ["/"] : undefined,
      disallow: isProductionDeployment ? ["/api/"] : ["/"],
      sitemap: [origin + "/sitemap.xml"],
    },
  ];

  const robotsTxt = generateRobotsTxt(robotsRules);

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}