
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

</style>