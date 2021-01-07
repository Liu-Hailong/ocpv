<template>
  <el-container class="container">
    <div class="tip">
    <el-header class="head">
      <h style="color: #E9EEF3; font-size: 28px; margin-top: 10px">选择订单类型</h>
    </el-header>
    <el-main>
      <router-link to="/WholesalePurchase">
        <el-button class="button">批发采购</el-button>
      </router-link>
      <router-link to="/Stockdemand">
        <el-button class="button">备货需求</el-button>
      </router-link>
    </el-main>
    </div>
  </el-container>
</template>

<script>
export default {
  name: "SelectFunc"
}
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
  border: 0;
}
.container{
  width: 86%;
  height:93%;
  background-color: rgba(1, 1,1,0.5);
  position: absolute;
}
.tip{
  background-color: white;
  border-radius: 10px 10px 10px 10px;
  width: 300px;
  height: 200px;
  margin: 120px auto 0;
}
.head{
  background-color: rgba(235, 116, 25, 0.8);
  border-radius: 10px 10px 0px 0px;
  color: #E9EEF3;
}
</style>