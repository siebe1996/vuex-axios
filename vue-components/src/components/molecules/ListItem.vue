<template>
  <div class="card">
    <h3>{{ event.name_nl }}</h3>
    <div class="dates">
      {{ toGhentTime(event.startdate, event.enddate) }}
    </div>
    <p>{{ ellipsis(event.description_nl, 200) }}</p>
    <div>
      <ItemTag v-if="!event.iswheelchairunfriendly">wheelchair friendly</ItemTag>
      <ItemTag v-if="parseInt(event.isaccessibleforfree)">free</ItemTag>
    </div>
  </div>
</template>
<script>
import { useFilters } from "../../composables/filters.js";
import ItemTag from "../atoms/ItemTag.vue";
export default {
  components: {ItemTag},
  props: {
    event: {
      required: true,
      type: Object,
    },
  },
  methods: {
    toGhentTime(startDate, endDate) {
      return useFilters().toGhentTime(startDate, endDate);
    },
    ellipsis(eventDescription, value) {
      return useFilters().ellipsis(eventDescription, value);
    },
  },
};
</script>
<style scoped lang="scss"></style>
