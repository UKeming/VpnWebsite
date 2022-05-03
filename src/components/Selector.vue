<template>
<div id="container">
    <div>
        <h4>请选择安装平台</h4>
    </div>
    <div>
        <ul>
            <li>
                <img src="../assets/png/windows.png">
                Windows
            </li>
            <li>
                <img src="../assets/png/apple.png">
                iPhone
            </li>
            <li>
                <img src="../assets/png/Android.png">
                Android
            </li>
        </ul>
    </div>
</div>
</template>

<style scoped>
    img{
        height: 50px;
        width: 50px;
        padding-right: 15px;
    }
    li:hover{
        color: gray;
        transition: 0.3s;
    }
    li{
        cursor: pointer;
        float: left;
        list-style: none;
        padding: 20px;
        padding-right: 50px;
        display: flex;
        font-size: 42px;
    }
    ul{
        display: inline-block;
    }
    #container{
        margin-top: 50px;
        background-color: whitesmoke;
    }
    div{
        padding: 5px;
    }
</style>