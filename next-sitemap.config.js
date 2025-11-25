/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicabihu.cl",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    additionalSitemaps: [`${process.env.NEXT_PUBLIC_SITE_URL || "https://www.clinicabihu.cl"}/sitemap.xml`],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      "/": { priority: 1.0, changefreq: "weekly" },
      "/hospitalizacion-psiquiatrica": { priority: 0.9, changefreq: "weekly" },
      "/servicios": { priority: 0.8, changefreq: "weekly" },
      "/psiquiatria": { priority: 0.8, changefreq: "monthly" },
      "/psicologia": { priority: 0.8, changefreq: "monthly" },
      "/kinesiologia": { priority: 0.7, changefreq: "monthly" },
      "/terapia-ocupacional": { priority: 0.7, changefreq: "monthly" },
      "/nutricion": { priority: 0.7, changefreq: "monthly" },
      "/medicina-general": { priority: 0.7, changefreq: "monthly" },
      "/nosotros": { priority: 0.6, changefreq: "monthly" },
      "/testimonios": { priority: 0.6, changefreq: "weekly" },
      "/faq": { priority: 0.6, changefreq: "monthly" },
      "/costos-y-convenios": { priority: 0.6, changefreq: "monthly" },
      "/contacto": { priority: 0.6, changefreq: "monthly" },
      "/blog": { priority: 0.5, changefreq: "weekly" },
      "/politica-de-privacidad": { priority: 0.3, changefreq: "yearly" },
    }

    const pageConfig = customConfig[path] || { priority: 0.5, changefreq: "monthly" }

    return {
      loc: path,
      lastmod: new Date().toISOString(),
      priority: pageConfig.priority,
      changefreq: pageConfig.changefreq,
    }
  },
}
