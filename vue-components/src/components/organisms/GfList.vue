<template>
  <ul class="no-style">
    <li v-for="r in records" :key="r.recordid">
      <ListItem :event="r.fields"></ListItem>
    </li>
  </ul>
</template>

<script>
import ListItem from "../molecules/ListItem.vue";
export default {
  props: {
    records: {
      required: true,
      type: Object,
    },
  },
  components: {
    ListItem,
  },
};
</script>
<style scoped lang="scss"></style>
