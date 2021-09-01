import Vue from "vue";
import VueRouter from "vue-router";
import formVue from "@/components/formVue";
import mainVue from "@/components/main-vue";
import productVue from "@/components/product-vue";
import editVue from "@/components/edit-product";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "mainVue",
            component: mainVue,
            props: true,
        },
        {
            path: "/form",
            name: "formVue",
            component: formVue,
            props: true,
        },
        {
            path: "/product/:id",
            name: "id",
            component: productVue,
            props: true,
        },
        {
            path: "/edit",
            name: "edit",
            component: editVue,
            props: true,
        },

        {
            path: "*",
            redirect: "/",
        },
    ],
});
