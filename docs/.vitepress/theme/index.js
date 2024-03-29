import DefaultTheme from "vitepress/theme";
import "./tailwindcss.css";

import PreviewCard from "./Components/PreviewCard.vue";

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component("PreviewCard", PreviewCard);
    },
};
