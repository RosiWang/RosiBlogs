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
        mounted(){
            document.addEventListener('visibilitychange',this.changeTitle,false)
        },
        created(){
           console.log("startapp created");
           console.log("document:",document);
        },
        methods:{
           changeTitle(){
               if(document.hidden){
                   document.title = this.$t('message').titleHide;
               }else{
                   document.title = this.$t('message').titleShow;
               }
           }
        }
    }
</script>
<style scoped>
</style>
