<template>
  <div class="container medium-text title">1. 首先，安装shadowrocket</div>
  <div class="container">
    <img src="../../assets/jpg/shadowrocket.jpg" />
  </div>
  <div>
    <a
      :href="`https://apps.apple.com/us/app/shadowrocket/id932747118`"
      class="btn btn-success circle"
      id="button"
      >点此下载</a
    >
  </div>

  <div class="container medium-text title">
    2. 安装完成后，点击下方按钮添加线路
  </div>

  <table class="table table-striped container">
    <col width="100" />
    <col width="100" />
    <col width="100" />
    <thead>
      <th colspan="5">线路名称</th>
      <th>添加线路</th>
      <th>延迟</th>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td colspan="5">{{ item.name }}</td>
        <td>
          <div class="d-grid gap-2 d-md-block">
            <a
              :href="`shadowrocket://add/${item.url}`"
              class="btn btn-dark font-adjust"
              id="button"
              >添加线路</a
            >
          </div>
        </td>
        <td>
          <div v-if="pingList[item.id]" :style="{ color: computeColor(pingList[item.id]) }">
            {{ pingList[item.id] }}
          </div>
          <div v-if="!pingList[item.id]">
            <span
              @click="ping(item.id, item.pingUrl)"
              class="btn btn-light font-adjust"
              id="button"
              >测试延迟</span
            >
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import jQuery from "jquery";
import { url } from "../../domain.js";
import axios from "axios";
global.$ = jQuery;
global.jQuery = jQuery;

export default {
  name: "iPhone",
  methods: {
    ping(id, url) {
      this.pingList[id]="测试中";
      var NB_ITERATIONS = 4; // number of loop iterations
      var MAX_ITERATIONS = 5; // beware: the number of simultaneous XMLHttpRequest is limited by the browser!
      var TIME_PERIOD = 1000; // 1000 ms between each ping
      var i = 0;
      var over_flag = 0;
      var time_cumul = 0;
      var REQUEST_TIMEOUT = 9000;
      var TIMEOUT_ERROR = 0;
      var url = "http://" + url;
      window.pingList = this.pingList;
      var ping_loop = setInterval(function () {
        // let's change non-existent URL each time to avoid possible side effect with web proxy-cache software on the line

        if (i < MAX_ITERATIONS) {
          var ping = new XMLHttpRequest();

          i++;
          ping.seq = i;
          over_flag++;

          ping.date1 = Date.now();

          ping.timeout = REQUEST_TIMEOUT; // it could happen that the request takes a very long time

          ping.onreadystatechange = function () {
            // the request has returned something, let's log it (starting after the first one)

            if (ping.readyState == 4 && TIMEOUT_ERROR == 0) {
              over_flag--;

              if (ping.seq > 1) {
                let delta_time = Date.now() - ping.date1;
                time_cumul += delta_time;
              }
            }
          };

          ping.ontimeout = function () {
            TIMEOUT_ERROR = 1;
          };
          ping.open("GET", url, true);
          ping.send();
        }

        if (i > NB_ITERATIONS && over_flag < 1) {
          // all requests are passed and have returned

          clearInterval(ping_loop);
          window.pingList[id] = Math.round(time_cumul / (i - 1));
          console.log(window.pingList);
        }

        if (TIMEOUT_ERROR == 1) {
          // timeout: data cannot be accurate
          clearInterval(ping_loop);
          window.pingList[id] = "服务器未响应";
        }
      }, TIME_PERIOD);
      window.avg_time;
    },
    computeColor(delay) {
      let color = "";
      if (typeof delay === "number") {
        if (delay <= 250) {
          color = "green";
        } else if (delay <= 500) {
          color = "orange";
        } else {
          color = "red";
        }
        return color;
      }
      if(delay=="测试中"){
        return "black";
      }
      return "red";
    },
  },
  data() {
    return {
      list: [],
      pingList: [],
    };
  },
  beforeMount() {
    axios.get(`${url}site/list`).then((response) => {
      let data = response.data;
      let insideData = data.data;
      if (data.code == 200) {
        this.list = insideData.records;
      }
    });
  },
};
</script>

<style scoped>
img {
  height: 20vw;
  border-radius: 10px;
  border-inline: 1px;
}
.container {
  margin-bottom: 50px;
  padding: 10px;
  border-radius: 20px;
}
#button {
  font-size: 2vw;
}
.title {
  border-radius: 5px;
  color: black;
}
.circle {
  border-radius: 100px;
  padding: 10px;
  margin: 20px;
}
</style>
