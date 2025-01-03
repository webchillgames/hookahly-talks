// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/hookahly-talks/" : "/",
  },
  ssr: false,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: ["@vite-pwa/nuxt"],
  css: ["normalize.css/normalize.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/_colors.scss" as *;',
        },
      },
    },
  },
});
