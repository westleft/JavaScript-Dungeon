<script setup>
</script>
<template>
  <div id="about">
    <div class="mask">
      <img class="sticker" src="@/assets/images/west.jpg" alt="大頭貼" />
      <h1>Hi, 我是 West !</h1>
      <p>
        是一位渾身菜味的前端工程師，<br />
        正走在讓自己變強的路上，<br />
        希望有朝一日能成為有實力、有貢獻的資深工程師！<br /><br />
        本網站使用
      </p>
      <div class="shields">
        <img
          src="https://img.shields.io/badge/-Vue.js-4FC08D?logo=Vue.js&logoColor=white&logoWidth=24"
          alt="vue.js勳章"
        />
        <img
          src="https://img.shields.io/badge/-Scss-CC6699?logo=sass&logoColor=white&logoWidth=24"
          alt=""
        />
        <!-- <img
          src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white&logoWidth=24"
          alt=""
        /> -->
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#about {
  @include flex(center, center);
  font-family: "WenKai";
  font-display: block;
  width: 100%;
  height: 100vh;
  background-image: url("@/assets/images/Castle_background.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .mask {
    @include flex(center, center);
    flex-direction: column;
    background: radial-gradient(circle, rgba(0, 0, 0, 0) 0%, #020024 58%);
    width: 100%;
    height: 100vh;
    color: #fff;
    img.sticker {
      width: 200px;
      height: 200px;
      object-fit: cover;
      object-position: center;
      border-radius: 100%;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
    h1 {
      font-size: 2.5vw;
      line-height: 140%;
      opacity: 0.8;
      padding: 1% 0;
      @include mobile {
        font-size: 8vw;
        padding: 4% 0;
      }
    }
    p {
      text-align: center;
      line-height: 140%;
      opacity: 0.8;
    }
    .shields {
      @include flex(center, center);
      padding: 1% 0;
      @include mobile {
        padding: 4% 0;
      }
      img {
        margin-right: 8px;
      }
    }
  }
}
</style>