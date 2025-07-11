import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
  base: "/aniversario2/", // Aquí le dices la base para GitHub Pages
  plugins: [vue(), vuetify({ autoImport: true })],
});
