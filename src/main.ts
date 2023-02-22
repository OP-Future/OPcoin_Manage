import { createApp } from "vue";
import "./assets/Css/index.css";
import App from "./App.vue";
import("preline");
/*路由*/
import router from "./.config/routers/Router.config.js";
/*仓库*/
import { createPinia } from "pinia";
/*持久化*/
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(router);
app.use(pinia);
app.mount("#app");

router.afterEach(() => {
  document
    .querySelector("body")!
    .setAttribute("style", "overflow: auto !important;");
});
