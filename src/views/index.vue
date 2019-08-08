<template>
 <div class='index'>
     <v-header @edit="edit"></v-header>
     <v-main :statu="statu"></v-main>
 </div>
</template>

<script>
 export default {
   data () {
     return {
       statu: null
     }
   },
   methods:{
     edit(n){
       this.statu = n;
     }
   },
   components: {
       vHeader: ()=>import('../components/Header/header'),
       vMain: ()=>import('../components/Main/main')
   }
 }
</script>

<style scoped lang='less'>
.index{
  background-color: rgb(247, 247, 247);
}
 
</style>
