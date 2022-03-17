<script setup>
import Projects from "@/components/Projects.vue"
import Title from "@/components/Title.vue"
import { watch, ref } from "@vue/runtime-core"

const cursor = ref()

const mousemove = (e) => {
  console.log(e.clientX)
}

</script>
<template>
  <div id="home" @mousemove="mousemove" ref="cursor">
    <Title />
    <Projects />

    <!-- <button>點我查看專案</button> -->
  </div>
  <div class="cursor"></div>
</template>

<style lang="scss" scoped>
#home {
  @include flex(center, center);
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
.cursor {
  width: 12px;
  height: 12px;
  background-color: #fff;
  z-index: 5;
}

</style>