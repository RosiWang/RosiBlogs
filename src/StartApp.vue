<template>
    <div id="startApp">
        <router-view ></router-view>
    </div>
</template>

<script>
    import router from './router'
    export default {
       data(){
           return {
           }
       },
        created(){
           console.log("startapp created");
        }
    }
</script>
<style scoped>
</style>