import { createApp } from "vue";
import "./assets/css/normalize.css";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");
