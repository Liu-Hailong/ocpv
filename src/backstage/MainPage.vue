<template>
  <el-container style="height: 100%">
    <el-header>
      <p class="head">
        <img class="logo" src="http://www.chinamacro.cn/images/logo_n.png" />
        <h>OCP全渠道数字平台</h>
        <el-tooltip class="item" content="退出系统" placement="bottom-start">
          <img src="../assets/u127.png" style="float: right;padding-left:16px;height: 30px;cursor: pointer" @click="backlogin()">
        </el-tooltip>
        <el-row style="float: right">
          <el-col :span="12">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link" style="color: white;font-size: 19px">admin</span>
              <el-dropdown-menu style="height: 20px">
                <el-button type="text" @click="dialogFormVisible = true" style="padding-top:0;color: black">修改密码</el-button>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <img src="../assets/u42.png" style="float: right;height: 30px">
      </p>
      <el-dialog title="修改密码" :visible="dialogFormVisible" :show-close="false">
        <el-form :model="form" :rules="rules" ref="form">
          <el-form-item label="原密码" prop="oldpassword" :label-width="formLabelWidth">
            <el-input placeholder="请输入密码" v-model="form.oldpassword" show-password></el-input>
          </el-form-item>
          <el-form-item label="新密码" prop="newpassword" :label-width="formLabelWidth">
            <el-input placeholder="请输入密码" v-model="form.newpassword" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </el-header>

    <el-container style="">
      <el-menu style="width: 240px"
               default-active="1"
               unique-opened="true"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>备货计划管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">备货计划列表</el-menu-item>
            <router-link to="/WaitList_Stockdemand"><el-menu-item index="1-2">待审核备货订单</el-menu-item></router-link>
            <router-link to="/Recheck_Stockdemand"><el-menu-item index="1-3">待复核备货订单</el-menu-item></router-link>
            <el-menu-item index="1-4">汇总计划列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>销售订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">零售订单列表</el-menu-item>
            <el-menu-item index="2-2">批发订单列表</el-menu-item>
            <router-link to="/WaitList_Wholesale"><el-menu-item index="2-3">待审核批发订单</el-menu-item></router-link>
            <router-link to="/Recheck_Wholesale"><el-menu-item index="2-4">待复核批发订单</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>售后管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">带审核退换货订单列表</el-menu-item>
            <el-menu-item index="3-2">退换货订单列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>经销商管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">带经销商列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>库存管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="5-1">仓库维护</el-menu-item>
            <el-menu-item index="5-2">菜鸟仓库存列表</el-menu-item>
            <el-menu-item index="5-3">工厂库存列表</el-menu-item>
            <el-menu-item index="5-4">调拨单列表</el-menu-item>
            <el-menu-item index="5-5">创建调拨单</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>产品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="6-1">产品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>内容维护</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="7-1">首页公告列表</el-menu-item>
            <el-menu-item index="7-2">首页资讯列表</el-menu-item>
            <el-menu-item index="7-3">首页信息平台列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="8">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>库存管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="8-1">运营账号管理</el-menu-item>
            <el-menu-item index="8-2">经销商账号管理</el-menu-item>
            <el-menu-item index="8-3">菜单管理</el-menu-item>
            <el-menu-item index="8-4">运营角色管理</el-menu-item>
            <el-menu-item index="8-5">日志</el-menu-item>
            <el-menu-item index="8-6">数据字典</el-menu-item>
            <el-menu-item index="8-7">机构管理</el-menu-item>
            <el-menu-item index="8-8">产品类别</el-menu-item>
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
name: "MainPage",
  data(){
    return{
      dialogFormVisible: false,
      form:{
        oldpassword: '',
        newpassword: ''
      },
      rules: {
        oldpassword: [
          { required: true, message: '请输入密码'}
        ],
        newpassword: [
          { required: true, message: '请输入密码'}
        ]
      },
      formLabelWidth: '120px',
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    backlogin() {
      this.$router.push("Login");
    },
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>


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

.head > h{
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