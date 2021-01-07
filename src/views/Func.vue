<template>
  <el-container style="height: 100%">
    <el-header>
      <p class="head">
        <img class="logo" src="http://www.chinamacro.cn/images/logo_n.png"/>
        <h>OCP全渠道数字平台</h>
        <el-tooltip class="item" content="退出系统" placement="bottom-start">
          <img src="../assets/u127.png" style="float: right;padding-left:16px;height: 30px;cursor: pointer"
               @click="backlogin()">
        </el-tooltip>
        <el-row style="float: right">
          <el-col :span="12">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="color: white;font-size: 19px">admin</span>
              <el-dropdown-menu>
                <el-dropdown-item>水热事业部</el-dropdown-item>
                <el-dropdown-item>厨电事业部</el-dropdown-item>
                <el-dropdown-item>热能事业部</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <img src="../assets/u42.png" style="float: right;height: 30px">
      </p>
    </el-header>

    <el-container style="">
      <el-menu style="width: 240px"
               default-active="1"
               unique-opened="true"
               class="el-menu-vertical-demo"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <router-link to="/SelectFunc">
              <el-menu-item index="1-1">提交订单</el-menu-item>
            </router-link>
            <router-link to="/PendingOrder">
              <el-menu-item index="1-2">待处理订单</el-menu-item>
            </router-link>
            <router-link to="/PurchaseOrder">
              <el-menu-item index="1-3">采购订单</el-menu-item>
            </router-link>
            <router-link to="/RetailOrderList">
              <el-menu-item index="1-4">零售订单列表</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>售后管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">申请退换货</el-menu-item>
            <el-menu-item index="2-2">退换货订单列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">产品信息查询</el-menu-item>
            <el-menu-item index="3-2">库存信息查询</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>会员信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">会员信息</el-menu-item>
            <el-menu-item index="4-2">修改密码</el-menu-item>
            <el-menu-item index="4-3">账户信息</el-menu-item>
            <el-menu-item index="4-4">子账号管理</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>设置</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">网店设置</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
      <el-main style="width: 100%">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    backlogin() {
      this.$router.push("Login");
    }
  }
}
</script>

<style scoped>
* {
  margin: 0px;
  padding: 0px;
  border: 0px;
}

.el-header, .el-footer {
  background-color: rgba(235, 116, 25, 0.8);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}

body > .el-container {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  top: 0px;
}

.logo {
  margin-top: 15px;
}

.head {
  margin: 0px;
}

.head > h {
  font-size: 32px;
  color: white;
}

.head > img {
  margin-right: 5px;
  margin-top: 16px;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

</style>