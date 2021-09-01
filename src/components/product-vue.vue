<template>
    <div>
        <header-vue :cartItemCount="cartItemCount"></header-vue>
        <div>
            <h1>This is the id {{ $route.params.id }}</h1>
            <div class="row">
                <div class="card" style="width: 25rem;">
                    <figure>
                        <img
                            v-bind:src="product.image"
                            class="product"
                            alt="eat"
                        />
                    </figure>
                    <div class="card-body">
                        <p class="card-text">
                            {{ product.title }}
                        </p>
                        <p class="card-text" v-html="product.description"></p>
                        <p class="card-text">
                            {{ product.price }}
                        </p>
                    </div>
                    <button @click="edit">Edit Product</button>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const axios = require("axios");
import headerVue from "./header-vue";
export default {
    components: { headerVue },
    data() {
        return {
            product: "",
        };
    },
    created: function() {
        axios.get("http://localhost:8000/products").then((res) => {
            this.product = res.data.filter(
                (data) => data.id == this.$route.params.id
            )[0];

            console.log(res.data);
        });
    },
    methods: {
        edit() {
            this.$router.push({ name: "edit" });
        },
    },
};
</script>
