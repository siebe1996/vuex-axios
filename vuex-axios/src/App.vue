<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import storeBasket from "./components/organisms/storeBasket.vue";
import storeStore from "./components/organisms/storeStore.vue";

export default {
  components: { storeBasket, storeStore },
  computed: {
    ...mapGetters({}),
    ...mapState({}),
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {
    //this.getFruit(3, "banaan");
  },
};
</script>

<template>
  <div class="container">
    <storeStore></storeStore>
    <storeBasket></storeBasket>
  </div>
</template>

<style lang="scss" scoped>
@import "./assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,700;1,400&display=swap");
.container {
  width: 80%;
  margin: 5% auto;
  display: flex;
}
body {
  background-color: #dddddd;
}
</style>
