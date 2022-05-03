<template>
  <div id="container">
    <div id="title">请选择安装平台</div>
    <div>
      <nobr>
        <ul>
          <li>
            <router-link to="/guide/Windows" class="router">
              <img src="../assets/png/windows.png" />
              <span> Windows </span>
            </router-link>
          </li>
          <li>
            <router-link to="/guide/iPhone" class="router">
              <img src="../assets/png/apple.png" />
              <span> iPhone </span>
            </router-link>
          </li>
          <li>
            <router-link to="/guide/Android" class="router">
              <img src="../assets/png/Android.png" />
              <span> Android </span>
            </router-link>
          </li>
        </ul>
      </nobr>
    </div>
  </div>
</template>

<style scoped>
.router {
  text-decoration: none;
  color: black;
}
#title {
  padding: 2vw;
  font-size: 3vw;
}
#container {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
img {
  height: 4vw;
  width: 4vw;
}
.router:hover {
  color: gray;
  transition: 0.3s;
}
li {
  cursor: pointer;
  list-style: none;
  width: 31%;
  font-size: 5vw;
}
ul {
  flex-direction: row;
  display: -webkit-flex; /* Safari */
  display: flex;
}
#container {
  background-color: whitesmoke;
}
</style>
