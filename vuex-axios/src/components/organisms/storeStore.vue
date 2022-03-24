<template>
  <div class="storeContainer">
    <h1>The store</h1>
    <div class="banaan">
      <button
        v-for="b in bananen"
        aria-label="banaan"
        :key="b.id"
        @click="buyBanaan(b)"
      >
        {{ b.emoji }}
      </button>
    </div>
    <div class="appel">
      <button
        v-for="a in appels"
        aria-label="appel"
        :key="a.id"
        @click="buyAppel(a)"
      >
        {{ a.emoji }}
      </button>
    </div>
    <div class="peer">
      <button
        v-for="p in peren"
        aria-label="peer"
        :key="p.id"
        @click="buyPeer(p)"
      >
        {{ p.emoji }}
      </button>
    </div>
    <div class="tomaat">
      <button
        v-for="t in tomaten"
        aria-label="tomaat"
        :key="t.id"
        @click="buyTomaat(t)"
      >
        {{ t.emoji }}
      </button>
    </div>
    <div class="buttons">
      <button
        v-if="bananen.length < 1"
        aria-label="moreBananen"
        @click="this.getBananen(10)"
      >
        more banana's
      </button>
      <button
        v-if="appels.length < 1"
        aria-label="moreAppels"
        @click="this.getAppels(10)"
      >
        more appels
      </button>
      <button
        v-if="peren.length < 1"
        aria-label="morePeren"
        @click="this.getPeren(10)"
      >
        more pears
      </button>
      <button
        v-if="tomaten.length < 1"
        aria-label="moreTomaten"
        @click="this.getTomaten(10)"
      >
        more tomato's
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      bananen: "fruit/bananen",
      appels: "fruit/appels",
      peren: "fruit/peren",
      tomaten: "groenten/tomaten",
    }),
    ...mapState({}),
  },
  methods: {
    ...mapActions({
      getBananen: "fruit/getBananen",
      buyBanaan: "fruit/buyBanaan",
      getFruit: "fruit/getFruit",
      getAppels: "fruit/getAppels",
      buyAppel: "fruit/buyAppel",
      getPeren: "fruit/getPeren",
      buyPeer: "fruit/buyPeer",
      getTomaten: "groenten/getTomaten",
      buyTomaat: "groenten/buyTomaat",
    }),
  },
  mounted() {
    this.getBananen(3);
    this.getAppels(3);
    this.getPeren(3);
    this.getTomaten(3);
  },
};
</script>

<style scoped lang="scss">
.storeContainer {
  font-family: "Roboto Condensed", sans-serif;
  width: 70%;
}
button {
  width: 3rem;
  border: none;
  padding: 0.5rem;
  margin: 0.3rem;
  border-radius: 5px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
}
h1 {
  text-align: center;
  color: #2c3e50;
  font-size: 3rem;
  margin: 0;
}
.buttons {
  & button {
    margin-top: 2rem;
    width: unset;
    background-color: #2c3e50;
    color: white;
    padding: 0.8rem;
  }
}
</style>
