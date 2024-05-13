export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["nuxt-quasar-ui", "@nuxt/image", "nuxt-icon", "@pinia/nuxt"],
  quasar: {
    config: {
      brand: {
        primary: "#afc125",
        secondary: "#f8de55",
        accent: "#12355b",

        dark: "#1d1d1d",
        "dark-page": "#121212",

        positive: "#21BA45",
        negative: "#C10015",
        info: "#31CCEC",
        warning: "#F2C037",
      },
    },
  },
});
