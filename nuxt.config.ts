// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["./app/assets/css/main.css"],
    app: {
        head: {
            title: "blog do josé", // default fallback title    
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        },
    },
});
