// app/robots.js
export default function robots() {
    const baseUrl = "https://www.thecabcompany.in";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/admin", // block admin/private routes
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
