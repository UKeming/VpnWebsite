<template>
<div id="body">
<div @load="checkAuth()">
    <img src="../assets/logo.png" alt="">
</div>
    <div class="container" id="text-block">
        <span>
            私人线路，所以<span style="color:grey;">最快</span>
        </span>
        <div class="d-grid gap-2 mb-4 mt-2" v-if="!login">
                <router-link to="/login" class="btn btn-dark">请先<span style="color: white;">登录</span></router-link>
        </div>

    </div>

</div>
</template>
<script>
import checkAuth from '../auth-check.js'
export default {
    name: "Body",
    data(){
        return{
            login:false,
        }
    },
    methods:checkAuth()
}
</script>
<style scoped>
    img{
        height: 50vw;
    }
    #text-block {
        font-size: 5vw;
    }
    #body{
        display: flex;
        flex-direction: column;
    }
</style>
