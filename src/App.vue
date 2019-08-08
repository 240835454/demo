<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
    layout: ()=>import('./views/index')
  }
}
</script>

<style>
</style>
