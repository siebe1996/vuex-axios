/**
 * @author Van de Voorde Siebe
 * @Version 22-3-2022
 */
import { createStore } from "vuex";
import fruit from "./fruit";
import groenten from "./groenten";

// export a new store instance.
export default createStore({
  // looks like our 'data' property
  state() {
    return {
      basket: [],
      total: 0,
    };
  },
  getters: {
    basket: (state) => state.basket,
    total: (state, getters) => {
      if (getters.basket.length > 0) {
        state.total += getters.basket[getters.basket.length - 1].prijs;
        state.total = Math.round(state.total * 100) / 100;
      }
      return state.total;
    },
  },
  mutations: {
    addToBasket(state, eten) {
      state.basket.push(eten);
    },
  },
  actions: {},
  modules: {
    fruit: fruit,
    groenten: groenten,
  },
});
