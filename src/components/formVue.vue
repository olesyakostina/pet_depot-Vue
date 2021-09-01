<template>
    <div>
        <header-vue :cartItemCount="cartItemCount"></header-vue>
        <div class="row">
            <div class="col-md-6">
                <strong>First Name:</strong>
                <input v-model.lazy="order.firstName" class="form-control" />
            </div>
            <div class="col-md-6">
                <strong>Last Name:</strong>
                <input v-model.trim="order.lastName" class="form-control" />
            </div>

            <div class="form-group">
                <div class="col-md-12">
                    <strong>Address:</strong>
                </div>
                <div class="col-md-12">
                    <input v-model.trim="order.address" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-12"><strong>City:</strong></div>
                <div class="col-md-12">
                    <input v-model.trim="order.city" class="form-control" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-2">
                    <strong>State:</strong>

                    <div class="form-group">
                        <div class="col-md-2">
                            <strong>State</strong>
                            <select v-model="order.state" class="form-control">
                                <option disabled value="">State</option>

                                <option
                                    v-for="(state, key) in states"
                                    v-bind:value="state"
                                    :key="state"
                                    >{{ key }}</option
                                >
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6 col-md-offset-4">
                    <strong>Zip / Postal Code:</strong>
                    <input
                        v-model.number="order.zip"
                        class="form-control"
                        type="number"
                    />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6 boxes">
                    <input
                        type="checkbox"
                        id="gift"
                        value="true"
                        v-bind:true-value="order.sendGift"
                        v-bind:false-value="order.dontSendGift"
                        v-model="order.gift"
                    />
                    <label for="gift">Ship As Gift?</label>
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6 boxes">
                    <input
                        type="radio"
                        id="home"
                        v-bind:value="order.home"
                        v-model="order.method"
                    />
                    <label for="home">Home</label>
                    <input
                        type="radio"
                        id="business"
                        v-bind:value="order.business"
                        v-model="order.method"
                    />
                    <label for="business">Business</label>
                </div>
            </div>

            <div class="col-md-12 verify">
                <pre>
                          First Name: {{ order.firstName }}
                          Last Name: {{ order.lastName }} 
                          Address: {{ order.address }} 
                          City: {{ order.city }} 
                          Zip: {{ order.zip }}
                          State: {{ order.state }} 
                          Method:{{ order.method }} 
                          Gift: {{ order.gift }} 

                        </pre
                >
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <button
                        type="submit"
                        class="btn btn-primary submit"
                        @click="submitForm"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerVue from "./header-vue";
export default {
    name: "formVue",
    components: { headerVue },
    props: ["cartItemCount"],
    data() {
        return {
            order: {
                firstName: "",
                lastName: "",
                address: "",
                city: "",
                zip: "",
                state: "",
                method: "Home Adress",
                home: "Home adress",
                business: "Business adress",
                gift: "Send As А Gift",
                sendGift: "Send As А Gift",
                dontSendGift: "Do not Send As А Gift",
            },
            states: {
                AL: "Alabama",
                AR: "Arizona",
                CА: "California",
                NV: "Nevada",
            },
        };
    },
    methods: {
        submitForm() {
            alert("submited");
        },
    },
};
</script>
<style scope></style>
