// app/robots.js
export default function robots() {
    const baseUrl = "https://thecabcompany.in";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/admin", // block admin/private routes
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
