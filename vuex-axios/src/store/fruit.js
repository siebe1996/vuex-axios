/**
 * @author Van de Voorde Siebe
 * @Version 22-3-2022
 */
import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      appels: [],
      peren: [],
      bananen: [],
    };
  },
  getters: {
    bananen: (state) => state.bananen,
    appels: (state) => state.appels,
    peren: (state) => state.peren,
  },
  mutations: {
    addBananen(state, bananen) {
      state.bananen = state.bananen.concat(bananen);
    },
    removeBanaan(state, banaan) {
      state.bananen.splice(state.bananen.indexOf(banaan), 1);
    },
    addAppels(state, appels) {
      state.appels = state.appels.concat(appels);
    },
    removeAppel(state, appel) {
      state.appels.splice(state.appels.indexOf(appel), 1);
    },
    addPeren(state, peren) {
      state.peren = state.peren.concat(peren);
    },
    removePeer(state, peer) {
      state.peren.splice(state.peren.indexOf(peer), 1);
    },
  },
  actions: {
    getBananen(context, count) {
      axios
        .get(
          `https://hub.dummyapis.com/singlelistwithid?text=banaan&noofRecords=${count}`
        )
        .then(function (response) {
          // handle success
          let bananen = response.data;
          bananen.map(function (banaan) {
            banaan.naam = "banaan";
            banaan.emoji = "🍌";
            banaan.prijs = 10;
          });
          context.commit("addBananen", bananen);
          //this.$store.commit('addBananen', bananen);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {});
    },
    getAppels(context, count) {
      axios
        .get(
          `https://hub.dummyapis.com/singlelistwithid?text=appel&noofRecords=${count}`
        )
        .then(function (response) {
          // handle success
          response.data.map(function (fruit) {
            fruit.naam = "appel";
            fruit.emoji = "🍎";
            fruit.prijs = 0.6;
          });
          context.commit("addAppels", response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {});
    },
    getPeren(context, count) {
      axios
        .get(
          `https://hub.dummyapis.com/singlelistwithid?text=peer&noofRecords=${count}`
        )
        .then(function (response) {
          // handle success
          response.data.map(function (peren) {
            peren.naam = "peer";
            peren.emoji = "🍐";
            peren.prijs = 0.82;
          });
          context.commit("addPeren", response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {});
    },
    buyBanaan(context, banaan) {
      context.commit("removeBanaan", banaan);
      context.commit("addToBasket", banaan, { root: true });
    },
    buyAppel(context, appel) {
      context.commit("removeAppel", appel);
      context.commit("addToBasket", appel, { root: true });
    },
    buyPeer(context, peer) {
      context.commit("removePeer", peer);
      context.commit("addToBasket", peer, { root: true });
    },
    /*getFruit(context, count, fruit) {
      axios
          .get(
              `https://hub.dummyapis.com/singlelistwithid?text=${fruit[0]}&noofRecords=${count}`
          )
          .then(function (response) {
            // handle success
            let fruiten = response.data;
            console.log(fruit);
            console.log(fruiten);
            if (fruiten[0].value.includes("banaan"){
              bananen.map(function (banaan) {
                banaan.naam = "banaan";
                banaan.emoji = "🍌";
                banaan.prijs = 10;
              })
              context.commit('addBananen', bananen);
            }
            //this.$store.commit('addBananen', bananen);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
          });
    },
    /*makeBananenVooraad(bananen, context){
      bananen.map(function (banaan) {
        banaan.naam = "banaan";
        banaan.emoji = "🍌";
        banaan.prijs = 10;
      })
      context.commit('addBananen', bananen);
    }*/
  },
};
