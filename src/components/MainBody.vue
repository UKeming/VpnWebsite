<template>
  <div id="body">
    <div>
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="container" id="text-block">
      <span> 私人线路，所以<span style="color: grey">最快</span> </span>
      <div class="d-grid gap-2 mb-4 mt-2">
        <router-link to="/login" class="btn btn-dark" v-if="!login"
          >请先<span style="color: white">登录</span></router-link
        >
        <div v-if="login">
          欢迎你，<span style="color: #87cefa">{{ username }}</span>
        </div>
        <div v-if="login" @click="logout()" class="btn btn-danger">
          登出
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { url } from "../domain.js";

export default {
  name: "Body",
  data() {
  },
  props:['login','username'],
  methods: {
    logout() {
      axios.post(url + "logout").then((response) => {
        let data = response.data;
        if (data.code == 200) {
          this.checkAuthAndSetView();
          alert("登出成功！");
        } else alert("登出失败！");
      });
    },
  },
};
</script>
<style scoped>
img {
  animation: zoom-in ease-in-out 1.5s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}

@keyframes zoom-in {
  0% {
    height: 0vw;
  }
  100% {
    height: 50vw;
  }
}
#text-block {
  font-size: 5vw;
}
#body {
  display: flex;
  flex-direction: column;
}
</style>
