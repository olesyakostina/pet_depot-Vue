<template>
    <div>
        <header-vue :cartItemCount="cartItemCount"></header-vue>
        <div id="app">
            <div v-for="product in sortedProducts()" :key="product.id">
                <div class="card__item">
                    <div class="card" style="width: 25rem;">
                        <img
                            v-bind:src="product.image"
                            class="card-img-top"
                            alt="eat"
                        />
                        <div class="card-body">
                            <router-link
                                tag="h2"
                                :to="{ name: 'id', params: { id: product.id } }"
                                >{{ product.title }}</router-link
                            >
                            <p
                                class="card-text"
                                v-text="product.description"
                            ></p>
                            <p class="card-text" v-text="product.price"></p>
                        </div>

                        <button
                            class="default"
                            @click="addToCart(product)"
                            v-if="canAddToCart(product)"
                        >
                            add to cart
                        </button>
                        <button class="disabled" @click="addToCart" v-else>
                            add to cart
                        </button>

                        <span
                            class="inventory-message"
                            v-if="
                                product.inventory - cartCount(product.id) === 0
                            "
                        >
                            All Out</span
                        >
                        <span
                            class="inventory-message"
                            v-else-if="
                                product.inventory - cartCount(product.id) < 5
                            "
                        >
                            Only
                            {{
                                product.inventory - cartCount(product.id)
                            }}left</span
                        >
                        <span class="inventory-message" v-else> By now</span>

                        <div class="rating">
                            <span
                                :class="{
                                    'rating-active': checkRating(n, product),
                                }"
                                v-for="n in 5"
                                :key="n"
                                @click="product.rating = n"
                            >
                                <img
                                    class="star"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKX1pwGr2TAFDFxqaz7wt7JvmDI4rgeZ9qbo6Ib6qJl5oRRE7WX8OOQeIMTcky1zAl5Gw&usqp=CAU"
                                />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headerVue from "./header-vue";
import { mapGetters } from "vuex";

export default {
    name: "mainVue",
    components: { headerVue },

    data() {
        return {
            cart: [],
        };
    },
    created() {
        this.$store.dispatch("initStore");
    },
    methods: {
        addToCart(aProduct) {
            this.cart.push(aProduct.id); // помeщаем товар по id в массив cart
        },

        submitForm() {
            alert("submited");
        },
        checkRating(n, myProduct) {
            return myProduct.rating - n >= 0; //возвращает тру или фолс в зависимости от рейтинга
        },
        canAddToCart(aProduct) {
            return aProduct.inventory > this.cartCount(aProduct.id); //сравниваем исчисляемое свойство.inventory с кол-вом элементов в мвссиве
        },
        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        },

        sortedProducts() {
            if (this.products.length > 0) {
                let productsArray = this.products.slice(0);
                return productsArray.sort(this.compare);
            }
        },
        compare(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
            if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
            return 0;
        },
    },
    computed: {
        ...mapGetters(["products"]),
        cartItemCount() {
            return this.cart.length || "";
        },
        // products() {
        //     return this.$store.getters.products;
        // },
    },
};
</script>
<style>
#app {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: rgb(190, 204, 190);
}

.navbar__item {
    text-align: center;
    font-weight: 700;
}
.default {
    background-color: coral;
    font-size: 16px;
    border-radius: 5px;
    color: #ffff;
    margin-top: 20px;
}
button.btn {
    margin: auto;
}
.disabled {
    display: none;
}
.inventory-message {
    font-size: 26px;
    color: red;
    font-weight: 600;
}

.row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 0;
    margin-left: 0;
}
.card {
    margin-left: 20px;
    padding-left: 40px;
    margin-top: 20px;
    text-align: center;
}

.star {
    width: 20px;
    margin-top: 20px;
}
.rating-active {
    background-color: darkgoldenrod;
    cursor: pointer;
}
.btn-default {
    width: 235px;
    height: 43px;
}
</style>
