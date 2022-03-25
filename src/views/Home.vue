<script setup>
import Projects from "@/components/Projects.vue"
import Title from "@/components/Title.vue"
import SideBar from "@/components/layouts/SideBar.vue"
import { watch, ref } from "@vue/runtime-core"

const isload = ref(true)

console.log(isload)

</script>
<template>
  <div id="home">

    <SideBar />
    <Title />
    <Projects />

    <!-- <button>點我查看專案</button> -->
  </div>
  <div class="cursor"></div>
</template>

<style lang="scss" scoped>

#home {
  @include flex(center, center);
  font-display: block;
  width: 100%;
  flex-direction: column;
  background-image: url("@/assets/images/Castle_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  button {
    display: flex;
    background-color: $color_yellow;
    color: $color_black;
    padding: 12px 28px;
    border: none;
    border-radius: 4px;
  }
}

</style>