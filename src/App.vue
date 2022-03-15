<script setup>
import Header from "@/components/layouts/Header.vue"
import Footer from "@/components/layouts/Footer.vue"
</script>
<template>
<Header />
  <p>gg</p>
  <Footer />
</template>

<style lang="scss" scoped>
p {
  @include flex(center, center)
}
</style>