<template>
  <div id="app" style="height: 100%;">
    <router-view></router-view>
  </div>
</template>

<style>
*{
  margin: 0px;
  padding: 0px;
  border: 0px;
}
html, body{
  height: 100%;
}
</style>
<script>
import Login from "@/views/Login";
export default {
  components: {Login}
}
</script>