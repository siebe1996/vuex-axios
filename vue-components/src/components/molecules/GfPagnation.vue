<template>
  <div>
    <button @click="$emit('update:modelValue', modelValue - 10)" :disabled="modelValue < 10">back</button>
    <p aria-live=polite>pagina {{ page }}/{{ allPages }}</p>
    <button @click="$emit('update:modelValue', modelValue + 10)" :disabled="modelValue >= nhits - 10">next</button>
  </div>
</template>
<script>
export default {
  props: {
    nhits: {
      required: true,
      type: Number,
    },
    modelValue: {
      required: true,
      type: Number,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    page: function (){
      return Math.ceil(this.modelValue / 10) + 1;
    },
    allPages: function (){
      return Math.ceil(this.nhits / 10);
    }
  },
  methods: {
    test(){
      console.log(this.modelValue);
    },
    getPage(){
      return Math.ceil(this.modelValue / 10);
    },
    getAllPages(){
      return Math.ceil(this.nhits / 10);
    }
  }
}
</script>