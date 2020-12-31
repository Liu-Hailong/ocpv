<template>
  <el-container>
    <el-header>
      <p class="head">
        <img class="logo" src="http://www.chinamacro.cn/images/logo_n.png" />
        <h>OCP全渠道数字平台</h>
      </p>
    </el-header>
    <el-container>
      <el-aside width="200px">

      </el-aside>
      <el-main>

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "Func"
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: rgba(235, 116, 25, 0.8);
  color: #333;
  text-align: center;
  line-height: 60px;
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

body > .el-container {
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
  font-size: 32px;
  color: white;
}

.head > img {
  margin-right: 5px;
  margin-top: 16px;
}

</style>