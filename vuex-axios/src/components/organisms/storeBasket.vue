<template>
  <div class="containerBasket">
    <ul>
      <li
        v-for="item in basket"
        :class="item.naam"
        aria-label="item"
        :key="item.id"
      >
        {{ item.naam }} - &#8364; {{ item.prijs }}
      </li>
    </ul>
    <div class="total">&#8364; {{ total }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters({
      basket: "basket",
      total: "total",
    }),
    ...mapState({}),
  },
  methods: {
    ...mapActions({}),
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
.containerBasket {
  width: unset;
  font-family: "Roboto Condensed", sans-serif;
  padding: 1rem 2rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}
.total {
  display: block;
  font-size: 1.5rem;
  font-weight: 500;
}
ul {
  list-style: outside none none;
  padding: 0;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
}
li {
  margin-bottom: 0.5rem;
}
.banaan {
  color: yellow;
}
.appel {
  color: lightgreen;
}
.peer {
  color: green;
}
.tomaat {
  color: red;
}
</style>
