<script setup>
import { reactive } from "vue";

const projects = reactive([
  {
    title: "9x9 乘法表",
    finish: true,
    url: "https://github.com/westleft/99_multiplication",
  },
  { title: "時鐘", finish: true, url: "https://github.com/westleft/JS-Clock" },
  {
    title: "計算機",
    finish: true,
    url: "https://github.com/westleft/Calculator",
  },
  {
    title: "時區",
    finish: true,
    url: "https://github.com/westleft/worldClock",
  },
  {
    title: "全台空氣指標儀表板",
    finish: true,
    url: "https://github.com/westleft/AQI",
  },
  {
    title: "60秒算數遊戲",
    finish: true,
    url: "https://github.com/westleft/60secGame",
  },
  { title: "畫版", finish: false },
  { title: "井字遊戲", finish: false },
  { title: "抽獎轉盤", finish: false },
  { title: "Chrome 應用程式 (幹話產生器)", finish: false },
  {
    title: "燈箱效果",
    finish: true,
    url: "https://github.com/westleft/lightBox",
  },
  { title: "拼圖", finish: false },
  { title: "貪吃蛇", finish: false },
  {
    title: "神明求籤",
    finish: true,
    url: "https://github.com/westleft/fortuneStick",
  },
  { title: "死亡筆記本", finish: false },
]);
</script>
<template>
  <section id="projects">
    <p class="project_text">
      該專案為
      <a target="_blank" href="https://courses.hexschool.com/p/javascript-js"
        >六角學院 | 新手 JS 地下城
      </a>
      中所製作的作品集<br />
      目前專案主要使用原生 JS 開發，部分專案使用 Vue.js<br />
    </p>
    <ul class="selecter">
      <li v-for="(item, index) in projects" :key="item.title">
        <a
          :href="item.url"
          target="_blank"
          :class="{ grayscale: !item.finish }"
          :disabled="!item.finish"
        >
          <h3>
            <span>{{ index + 1 }}F</span> | {{ item.title }}
          </h3>
          <img :src="`/img/${index + 1}F.png`" alt="" />
        </a>
      </li>
    </ul>
    <div class="town"></div>
  </section>
</template>

<style lang="scss" scoped>
#projects {
  @include flex(center, flex-start);
  flex-direction: column;
  // @include size(100vh, 100%);
  width: 100%;
  padding: 28% 4% 4%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 79%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 2;
  font-family: "WenKai";
  a {
    text-decoration: none;
    color: $color_yellow;
  }
  p {
    text-align: center;
    color: #fff;
    line-height: 140%;
    padding: 1% 0;
  }
  p.project_text {
    padding-bottom: 8%;
    font-size: 1.2vw;
  }
  ul.selecter {
    @include flex(center, space-around);
    flex-wrap: wrap;
    width: 80%;
    .grayscale {
      filter: grayscale(1);
    }
    li {
      @include flex(flex-start, flex-start);
      flex-direction: column;
      width: 30%;
      background-color: #10181f;
      box-shadow: 0 0 40px #232c33;
      padding: 2%;
      border-radius: 12px;
      margin: 1% 0 2% 0;
      transition: 0.2s;
      a {
        width: 100%;
      }
      &:hover {
        background-color: #1e2d3a;
        img {
          opacity: 0.9;
          filter: grayscale(0);
        }
      }
      h3 {
        padding-bottom: 8px;
        color: $color_white;
        span {
          color: $color_yellow;
        }
      }
      img {
        object-fit: cover;
        object-position: center;
        height: 140px;
        width: 100%;
        opacity: 0.7;

        transition: 0.2s;
      }
    }
  }
}
</style>