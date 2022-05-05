<template>
  <div id="container">
    <div>
      <h3 style="text-align: center">请登录</h3>
    </div>
    <form>
      <div>
        账号:
        <input
          class="form-control"
          name="username"
          placeholder="请输入用户名"
          v-model.lazy="user.username"
        />
      </div>
      <div>
        密码:
        <input
          class="form-control"
          name="password"
          type="password"
          placeholder="请输入密码"
          v-model="user.password"
        />
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary center" @click="login()" type="button">
          登录
        </button>
      </div>
      <div class="d-grid gap-2">
        <router-link to="/" class="btn btn-dark">返回</router-link>
      </div>
      <div>注:本站不开放注册，请先网站管理员索要账号</div>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import {domain} from "../domain";

axios.defaults.withCredentials = true;
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      axios.post(`http://${domain}:80/api/login`, this.user).then((data) => {
        if (data.data.code == 200) {
          this.$router.push("/");
        } else {
          alert("登陆失败，请检查用户名和密码是否正确");
        }
      });
    },
  },
};
</script>

<style scoped>
div {
  padding: 10px;
}
#container {
  padding: 10px;
  text-align: left;
  background-color: whitesmoke;
  border-radius: 10px;
}
</style>
