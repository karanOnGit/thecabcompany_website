// app/robots.js
export default function robots() {
    // const baseUrl = "http://192.168.0.7:3000";
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
