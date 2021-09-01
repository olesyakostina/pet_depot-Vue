<template>
    <header>
        <div class="navbar navbar-default">
            <h1 class="navbar__item">
                <h1>
                    <router-link :to="{ name: 'mainVue' }">
                        {{ sitename }}</router-link
                    >
                </h1>
            </h1>
        </div>
        <div class="row product">
            <!-- <router-link to="/form" custom v-slot="{ navigate }">
                <button>
                    <span
                        @click="navigate"
                        @keypress.enter="navigate"
                        role="link"
                        class="glyphicon glyphicon-shopping-cart"
                        >{{ cartItemCount }}Checkout</span
                    >
                </button>
            </router-link> -->
            <router-link
                active-class="active"
                tag="button"
                class="btn btn-default btn-lg"
                to="/form"
            >
                <span class="glyphicon glyphicon-shopping-cart">
                    {{ cartItemCount }}
                </span>
                Checkout
            </router-link>
        </div>
    </header>
</template>
<script>
export default {
    name: "headerVue",
    data() {
        return {
            sitename: " Eat for pets",
        };
    },
    props: ["cartItemCount"],
    methods: {
        showCheckOut() {
            this.$router.push({ name: "formVue" });
        },
    },
};
</script>
<style>
a {
    text-decoration: none;
    color: darkgreen;
}
</style>
