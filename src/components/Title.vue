<script setup>
</script>
<template>
    <section class="fake"></section>
  <section class="mask">
    <h1><span>JS</span> 地下城</h1>
    <p>
      該專案為
      <a target="_blank" href="https://courses.hexschool.com/p/javascript-js"
        >六角學院 | 新手 JS 地下城
      </a>
      中所製作的作品集<br />
      目前專案主要使用原生 JS 開發，部分專案使用 Vue.js<br />
    </p>
  </section>
</template>

<style lang="scss" scoped>
section.fake {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 2;
    position: relative;
}
section.mask {
  @include flex(center, space-around);
  @include size(100vh, 100%);
      top: 0;
    left: 0;
  position: fixed;
  z-index: 1;
  flex-direction: column;
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0) 0%,
    rgba(2, 0, 36, 1) 58%
  );
  h1 {
    font-family: "Crayon";
    font-weight: 600;
    color: $color_white;
    font-size: 5vw;
    span {
      font-weight: 900;
      color: $color_yellow;
    }
  }
  p {
    position: relative;
    font-family: WenKai;
    color: $color_white;
    line-height: 140%;
    font-size: 1vw;
    text-align: center;
    a {
      text-decoration: none;
      color: $color_yellow;
    }
    &:after,
    &:before {
      @include size(20px, 20px);
      position: relative;
      display: flex;
      content: "";
      border-top: $color_yellow solid 4px;
      border-left: $color_yellow solid 4px;
      transform: rotate(-135deg);
      margin-left: auto;
      margin-right: auto;
      top: 100%;
      // display: none;
      animation: arrowMove 1.8s infinite ease-in;
    }
    &:before {
      top: 160%;
    }
  }
}

@keyframes arrowMove {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>