<template>
  <GfFilter v-on:filter="filter($event)" />
  <GfList v-if="records?.length" :records="records" />
  <p v-else-if="error" class="error">
    Geen resultaten gevonden...<br />(● ︵ ●)
  </p>
  <GfPagnation v-model:model-value="start" v-model:nhits="nhits"/>
</template>
<script>
import GfFilter from "./components/organisms/GfFilter.vue";
import GfList from "./components/organisms/GfList.vue";
import GfPagnation from "./components/molecules/GfPagnation.vue";
export default {
  components: {GfPagnation, GfList, GfFilter },
  data() {
    let q = "";
    let nhits;
    let records;
    let error;
    let start = 0;
    return {
      nhits,
      records,
      error,
      q,
      start,
    };
  },
  computed: {
    /*url: function () {
      let url = "https://data.stad.gent/api/records/1.0/search/?";
      url += "dataset=gentse-feesten-evenementen-2019";
      url += "&sort=-startdate";
      return encodeURI(url);
    },*/
    url: function () {
      let url = "https://data.stad.gent/api/records/1.0/search/?";
      url += "dataset=gentse-feesten-evenementen-2019";
      url += "&sort=-startdate";
      url += "&q=" + this.q;
      url += "&start=" + this.start;
      return encodeURI(url);
    },
  },
  methods: {
    fetchData() {
      fetch(this.url)
        .then((res) => res.json())
        .then(({ nhits, records }) => {
          this.nhits = nhits;
          this.records = records;
          console.log(this.nhits);
          console.log(this.records);
        })
        .catch((err) => (this.error = err));
    },
    filter(value) {
      this.q = value;
      this.fetchData();
    },
  },
  watch:{
    start: function (){
      this.fetchData();
    },
    q: function (){
      this.start = 0;
    }
  },
  /*mounted() {
    this.fetchData();
  },*/
};
</script>

<style lang="scss">
@import "./assets/base.css";
</style>
