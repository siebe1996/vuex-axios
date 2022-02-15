<script>
const emoji = ["🍒", "🍋", "🍆", "🍑"];
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
};
</script>

<template>
  <main class="container">
    <div class="machine">
      <h1>Hello slotmachine</h1>
      <div class="slots">
        <div class="slot">
          <span>❓</span>
        </div>
        <div class="slot">
          <span>❓</span>
        </div>
        <div class="slot">
          <span>❓</span>
        </div>
      </div>
      <button>PLAY!</button>
      <div lang="fr">Rien ne va plus</div>
    </div>
  </main>
</template>

<style lang="scss">
@import "./assets/base.css";
</style>
