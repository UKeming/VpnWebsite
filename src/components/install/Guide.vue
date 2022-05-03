
<template>
    <Header/>
    <div v-if="$route.params.id=='Windows'">
        <Windows />
    </div>
    
    <router-link to="/" class="button">
        返回
    </router-link>
</template>

<script>
import Header from './Header.vue'
import Windows from './WindowsPage.vue'
export default{
    name: 'Guide',
    components: {
        Header,
        Windows
    }
}
</script>
<style scoped>
    .button:hover{
        color: white;
        transition: 0.3s ease-in-out;
    }
    .button{
        text-decoration: none;
        background-color: whitesmoke;
        padding: 2vw;
        border-radius: 1vw;
        color: grey;
    }
</style>