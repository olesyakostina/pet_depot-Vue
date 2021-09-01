const state = {
    products: {},
};
const getters = {
    products: (state) => {
        console.log(state.products);
        return state.products;
    },
};
const actions = {
    initStore: async ({ commit }) => {
        let response = await fetch("http://localhost:8000/products");
        response = await response.json();
        commit("SET_STORE", response);
    },
};
const mutations = {
    SET_STORE(state, products) {
        state.products = products;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
