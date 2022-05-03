<template>
<div id="container">
    <div id="title">
        <h4>请选择安装平台</h4>
    </div>
    <div>
        <ul>
                            <li>
            <router-link to="/guide/Windows" class="router">

                    <img src="../assets/png/windows.png">
                    <span>
                    Windows
                    </span>
            </router-link>
                            </li>
                                        <li>
            <router-link to="/guide/iPhone" class="router">

                <img src="../assets/png/apple.png">
                <span>
                iPhone
                </span>

            </router-link>
                        </li>
                                    <li>
                        <router-link to="/guide/Android" class="router">

                <img src="../assets/png/Android.png">
                <span>
                Android
                </span>

                        </router-link>
                                    </li>
        </ul>
    </div>
</div>
</template>

<style scoped>


.router{
    text-decoration: none;
    color: black;
}
#title{
    font-size: 2vw;
}
    #container{
        display: flex;
        flex-direction: column;
        
    }
    img{
        height: 4vw;
        width: 4vw;
    }
    .router:hover{
        color: gray;
        transition: 0.3s;
    }
    li{
        cursor: pointer;
        list-style: none;
        width: 31%;
        font-size: 5vw;
    }
    ul{
        flex-direction: row;
        display: -webkit-flex; /* Safari */
        display: flex;
    }
    #container{
        margin-top: 50px;
        background-color: whitesmoke;
    }
</style>