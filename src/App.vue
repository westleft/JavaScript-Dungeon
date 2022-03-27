<script setup>
import Header from "@/components/layouts/Header.vue";
import Footer from "@/components/layouts/Footer.vue";
import SideBar from "@/components/layouts/SideBar.vue";
import Loading from "@/components/Loading.vue";
import { ref } from "vue";

const isload = ref(true)

const loadOk = () =>{
  console.log("OK")
  isload.value = false
}


</script>
<template>
  <div class="mask" v-if="isload"></div>
  <Loading :isload="isload" @loadOk="loadOk"/>
  <SideBar />
  <!-- <Header /> -->
  <router-view></router-view>
  <!-- <Footer /> -->
</template>

<style lang="scss" scoped>
.mask {
  width: 100%;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}
</style>