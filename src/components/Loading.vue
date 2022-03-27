<script setup>
import { watch, ref, onMounted, reactive } from "@vue/runtime-core";

const imgArr = [
  "Castle_background.jpg",
  "west.jpg",
];

const props = defineProps({
  isload: Boolean,
});

const emit = defineEmits(["loadOk"]);

onMounted(() => {
  loadImg(imgArr);
});

const loadImg = (imgArr) => {
  let i = 0;
  imgArr.forEach((item) => {
    const img = new Image();
    img.src = require(`@/assets/images/${item}`);
    img.onload = () => {
      i++;
      if (imgArr.length === i) {
        emit("loadOk");
      }
    };
  });
};
</script>
<template></template>
<style lang="scss" scoped>
</style>