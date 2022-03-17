<script setup>
</script>
<template>
  <section id="projects">
    <p>
      該專案為
      <a target="_blank" href="https://courses.hexschool.com/p/javascript-js"
        >六角學院 | 新手 JS 地下城
      </a>
      中所製作的作品集<br />
      目前專案主要使用原生 JS 開發，部分專案使用 Vue.js<br />
    </p>
    <p>
      過程中寫了不少糞 code，等未來變強時再回來重構！
    </p>
    <ul class="selecter">
      <li>
        <p>全部</p>
      </li>
      <li>
        <p>已完成</p>
      </li>
      <li>
        <p>待完成</p>
      </li>
    </ul>
    <div class="town">

    </div>
  </section>
</template>

<style lang="scss" scoped>
#projects {
  @include flex(center, flex-start);
  flex-direction: column;
  // @include size(100vh, 100%);
  width: 100%;
  padding: 12% 4%;
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
    font-size: 1vw;
  }
  p:last-child {
    padding-bottom: 4%;
  }
  ul.selecter {
    @include flex(center, center);
    width: 30%;
    overflow: hidden;
    li {
      @include flex(center, center);
      flex: 1;
      padding: 8px 8px;
      transition: 0.2s;
      border-bottom: solid $color_yellow 2px;
      cursor: pointer;
      color: $color_black;
      p {
        color: $color_black;
      }
      &:hover {
        border-bottom: solid $color_yellow 4px;
      }

    }
  }
}
</style>