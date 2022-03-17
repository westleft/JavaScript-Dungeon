<script setup>
</script>
<template>
  <section id="projects">
    <h2>project</h2>
  </section>
</template>

<style lang="scss" scoped>
#projects {
  @include flex(center, center);
  @include size(100vh, 100%);
  background: linear-gradient(0deg, rgba(0,0,0,1) 79%, rgba(0,0,0,0) 100%);
  z-index: 2;
  font-family: "WenKai";
  h2 {
    @include flex(center, center);
    color: #fff;
  }
}
</style>