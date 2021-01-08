<template>
  <div id="app" v-app-scroll style="height: 100vh;overflow-y: scroll">
    <tableDemo/>
  </div>
</template>

<script>
import tableDemo from './components/tableDemo'

export default {
  name: 'App',
  components: {
    tableDemo
  }
}
</script>

<style>
  *{padding: 0;margin: 0;}
</style>
