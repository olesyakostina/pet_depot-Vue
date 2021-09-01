import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import router from "./router";
import store from "./store/store";
require("./assets/app.css");

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
    router,
    store,
    template: "<App/>",
    components: { App },
    render: (h) => h(App),
}).$mount("#app");
