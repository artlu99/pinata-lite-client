export async function preprocess(url: string) {
    if (url === "https://bcbhshow.com") {
        return {
        res: {
            title: "The BeavChris and BArt-Head Show",
            description: "A podcast for the Farcaster middle class",
            open_graph: {
            images: [{ url: "https://client-bcbhshow.artlu.xyz/og.png" }],
            },
        },
        content: "website",
        };
    }
    return;
}
