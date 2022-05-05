<template>
  <div v-if="checked">
    <div v-if="login" id="guide" class="block">
      <Header />
      <div v-if="$route.params.id == 'Windows'">
        <Windows />
      </div>
      <div v-if="$route.params.id == 'iPhone'">
        <iPhone />
      </div>
    </div>
    <div v-if="!login" class="block">未登录用户无权查看本页面</div>
    <div class="d-grid gap-2 d-md-block block">
      <router-link to="/" class="btn btn-light"> 返回 </router-link>
    </div>
  </div>
</template>

<script>
import checkAuth from "../../auth-check.js";
import Header from "./Header.vue";
import Windows from "./WindowsPage.vue";
import iPhone from "./iPhonePage.vue";

export default {
  name: "Guide",
  components: {
    Header,
    Windows,
    iPhone,
  },
  data() {
    return {
      login: false,
      checked: false,
    };
  },
  methods: {
    checkAuthAndSetView() {
      checkAuth().then((login) => {
        this.login = login;
        this.checked = true;
      });
    },
  },
  beforeMount() {
    this.checkAuthAndSetView();
  },
};
</script>
<style>
#guide {
  font-size: 2vw;
  padding-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.big-text {
  font-size: 4vw;
}
.medium-text {
  font-size: 3vw;
}

.block {
  margin: 20px;
}
</style>
