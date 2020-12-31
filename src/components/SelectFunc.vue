<template>
  <el-container style="margin-top: 100px">
    <el-header class="head">
      <h>选择订单类型</h>
    </el-header>
    <el-main>
      <router-link to="/WholesalePurchase">
        <el-button class="button">批发采购</el-button>
      </router-link>
      <router-link to="/Stockdemand">
        <el-button class="button">备货需求</el-button>
      </router-link>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "SelectFunc"
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: rgba(235, 116, 25, 0.8);
  color: #333;
  text-align: center;
  line-height: 50px;
  border-radius: 10px 10px 10px 10px;
}

.el-aside {
  background-color: rgba(102, 102, 102, 1);
  color: #333;
  text-align: center;
  line-height: 100%;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 100%;
}

body >#app> .el-container {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.logo {
  margin-top: 15px;
}

.head {
  margin: 0px;
}

.head > h{
  font-size: 24px;
  color: white;
}

.head > img {
  margin-right: 5px;
  margin-top: 16px;
}

.button {
  margin: 20px;
}

</style>