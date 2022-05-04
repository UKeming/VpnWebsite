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
    testCoockies() {
      var enabled = false;
      // Quick test if browser has cookieEnabled host property
      if (navigator.cookieEnabled) {
        enabled = true;
      }
      // Create cookie test
      document.cookie = "testcookie=1";
      enabled = document.cookie.indexOf("testcookie=") != -1;
      // Delete cookie test
      document.cookie = "testcookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
      return enabled;
    },
    login() {
      document.cookie="samesite=none;"
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.user),
      };
      if (!this.testCoockies()) {
        alert("未开启第三方cookie，可能导致登录不成功");
      }

      axios
        .post("http://localhost:80/api/login", this.user)
        .then((data) => {
          if (data.data.code == 200) {
            this.$cookies.set("username", data.data.data.username);
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
