// app/sitemap.js
export default async function sitemap() {
    const baseUrl = "https://www.thecabcompany.in";
    // const baseUrl = "http://192.168.0.7:3000";

    // Example: if you have dynamic pages like /products/[id]
    // const products = await fetch(`${baseUrl}/api/products`).then(res => res.json());

    // const productUrls = products.map((p) => ({
    //     url: `${baseUrl}/products/${p.id}`,
    //     lastModified: new Date().toISOString(),
    // }));

    return [
        {
            url: baseUrl,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/refunds-cancellation`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/subscription`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/customer-guidelines`,
            lastModified: new Date().toISOString(),
        },
        {
            url: `${baseUrl}/FAQs`,
            lastModified: new Date().toISOString(),
        },
        // ...productUrls,
    ];
}
