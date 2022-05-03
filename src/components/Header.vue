<template>
    <header>
        <div id="title">
            <span>{{title}}</span>
        </div>
        <div id="float">
            快速 高效 稳定
        </div>
    </header>
</template>

<script>
export default{
    name: 'Header',
    props: ['title'],
}
</script>


<style scoped>
#title{
    font-size: 5vw;
    padding: 2%;
    font-family: 'Trebuchet MS', sans-serif;
}
#float{
    background-color: gray;
}

div{
    background-color: #313132;
    padding: 1%;
    color: #ececec;
    font-size: 1vw;
    letter-spacing: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: normal;
}

 header{
    align-self: center;
    background-color: white;
    text-align: center;
    height: 20%;
 }
</style>