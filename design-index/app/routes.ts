import {
  type RouteConfig,
  route,
  index,
  layout
} from "@react-router/dev/routes";


export default [
  layout("layout.jsx", [
    index("routes/index.jsx"),
    route("/tool/:tools", "routes/tool.$tools.jsx"),
    route("/about", "routes/about.jsx"),
    route("/privacy-policy", "routes/privacy-policy.jsx"),
    route("/terms-and-conditions", "routes/terms.jsx"),
    route("/submit-a-tool", "routes/submit-a-tool.jsx"),
    route("/search","routes/search_suggestions.jsx"),
    route("/search_results","routes/search_results.jsx"),
    route("/feedback","routes/feedback.jsx"),
    route("robots.txt","routes/robots.txt.ts"),
    route("sitemap.xml", "routes/sitemap.xml.ts"),

    route("/colours", "routes/colours/layout.jsx", [
      index("routes/colours/index.jsx"),
      route("/colours/:pricing", "routes/colours/$pricing.jsx"),
    ]),

    route("/mockups", "routes/mockups/layout.jsx", [
      index("routes/mockups/index.jsx"),
      route("/mockups/:pricing", "routes/mockups/$pricing.jsx"),
    ]),
    route("/illustrations", "routes/illustrations/layout.jsx", [
      index("routes/illustrations/index.jsx"),
      route("/illustrations/:pricing", "routes/illustrations/$pricing.jsx"),
    ]),
    route("/design-inspo", "routes/design-inspo/layout.jsx", [
      index("routes/design-inspo/index.jsx"),
      route("/design-inspo/:pricing", "routes/design-inspo/$pricing.jsx"),
    ]),
    route("/fonts", "routes/fonts/layout.jsx", [
      index("routes/fonts/index.jsx"),
      route("/fonts/:pricing", "routes/fonts/$pricing.jsx"),
    ]),
    route("/icons", "routes/icons/layout.jsx", [
      index("routes/icons/index.jsx"),
      route("/icons/:pricing", "routes/icons/$pricing.jsx"),
    ]),
  ]),
] satisfies RouteConfig;
