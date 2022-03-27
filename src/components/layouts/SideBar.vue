<script setup>
import { ref } from "vue";
const move = ref(false);

const hand = () => {
  move.value = !move.value;
};
</script>
<template>
  <div class="menu_container" @click="hand">
    <span class="menu"></span>
  </div>
  <div class="side_bar" :class="{ move: move }">
    <span class="close" @click="hand">✕</span>
    <ul>
      <li>
        <router-link to="/"> <span>JS</span> 地下城 </router-link>
      </li>
      <li>
        <router-link to="/about" @click="hand"> 關於我 </router-link>
      </li>
      <li>
        <a href="https://github.com/westleft" target="_blank"> Github </a>
      </li>
      <li>
        <a href="https://nerdcc.com" target="_blank">部落格</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu_container {
  @include size(50px, 50px);
  position: fixed;
  top: 40px;
  left: 40px;
  z-index: 5;
  cursor: pointer;
  @include mobile {
    top: 20px;
    left: 20px;
  }
  span.menu {
    @include size(6px, 46px);
    position: fixed;
    z-index: 4;
    background-color: $color_yellow;
    opacity: 0.8;
    border-radius: 8px;
    @include mobile {
      @include size(4px, 28px);
    }
    &::after,
    &::before {
      @include size(6px, 46px);
      content: "";
      display: flex;
      position: fixed;
      background-color: $color_yellow;
      border-radius: 8px;
      @include mobile {
        @include size(4px, 28px);
      }
    }
    &::after {
      top: 56px;
      @include mobile {
        top: 36px;
      }
    }
    &::before {
      top: 24px;
      @include mobile {
        top: 28px;
      }
    }
  }
}

span.close {
  position: absolute;
  top: 12px;
  right: 0px;
  height: 40px;
  width: 40px;
  z-index: 6;
  color: $color_yellow;
  font-weight: 600;
  font-size: 2vw;
  cursor: pointer;
  // display: none;
  @include mobile {
    font-size: 6vw;
    top: 12px;
    right: -12px;
  }
}
.side_bar {
  @include flex(flex-start, flex-start);
  width: 16%;
  height: 100vh;
  background-color: $color_black;
  z-index: 5;
  position: fixed;
  top: 0;
  left: -20%;
  transition: 0.2s;
  font-family: "WenKai";
  @include mobile {
    width: 40%;
    left: -40%;
  }
  ul {
    padding: 12% 20%;
  }
  li {
    padding: 12px 0;
    a {
      color: $color_white;
      text-decoration: none;
    }
  }
  li:first-child {
    padding-bottom: 28px;
    a {
      font-family: "Crayon";
    }
    span {
      font-weight: 900;
      color: $color_yellow;
    }
  }
}
.move {
  left: 0;
}
</style>