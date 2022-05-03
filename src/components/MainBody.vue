<template>
<div id="body">
<div>
    <img src="../assets/logo.png" alt="">
</div>
    <div class="container" id="text-block">
        <span>
            私人线路，所以<span style="color:grey;">最快</span>
        </span>
    </div>

</div>
</template>
<script>

export default {
    name: "Body",
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
        height: 50%;
    }
</style>
