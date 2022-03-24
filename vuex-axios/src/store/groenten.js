/**
 * @author Van de Voorde Siebe
 * @Version 22-3-2022
 */
import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      tomaten: [],
    };
  },
  getters: {
    tomaten: (state) => state.tomaten,
  },
  mutations: {
    addTomaten(state, tomaten) {
      state.tomaten = state.tomaten.concat(tomaten);
    },
    removeTomaat(state, tomaat) {
      state.tomaten.splice(state.tomaten.indexOf(tomaat), 1);
    },
  },
  actions: {
    getTomaten(context, count) {
      axios
        .get(
          `https://hub.dummyapis.com/singlelistwithid?text=tomaat&noofRecords=${count}`
        )
        .then(function (response) {
          // handle success
          let tomaten = response.data;
          tomaten.map(function (tomaat) {
            tomaat.naam = "tomaat";
            tomaat.emoji = "🍅";
            tomaat.prijs = 0.25;
          });
          context.commit("addTomaten", tomaten);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {});
    },
    buyTomaat(context, tomaat) {
      context.commit("removeTomaat", tomaat);
      context.commit("addToBasket", tomaat, { root: true });
    },
  },
};
