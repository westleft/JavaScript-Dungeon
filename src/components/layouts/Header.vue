<script setup>
</script>
<template>
  <div id="header">
    <ul>
      <li>
        <router-link to="/"><span>JS</span> 地下城</router-link>
      </li>
      <li>
        <router-link to="/about">聯絡我</router-link>
      </li>
      <li>
        <router-link to="/about">關於我</router-link>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
#header {
  @include size(6vh, 100%);
  position: fixed;
  top: 0;
  left: 0;
  background-color: $color_black;
  box-sizing: border-box;
  padding: 0 2%;
  z-index: 3;
  ul {
    @include flex(center, space-between);
    box-sizing: border-box;
    background-color: $color_black;
    width: 100%;
    height: 100%;
    li {
      font-family: "WenKai";
      width: 5%;
      a {
        font-size: 1vw;
        color: $color_white;
        text-decoration: none;
      }
    }
    li:first-child {
        width: 100%;
      a {
          font-size: 1.5vw;
        font-family: "Crayon";
        span {
          font-weight: 900;
          color: $color_yellow;
        }
      }
    }
  }
}
</style>