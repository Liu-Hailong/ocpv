<template>
    <el-container >
      <el-menu style="width: 200px"
               default-active="2"
               class="el-menu-vertical-demo"
               @open="handleOpen"
               @close="handleClose"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>订单管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="tosubmit()">提交订单</el-menu-item>
            <el-menu-item index="1-2" @click="topending()">待处理订单</el-menu-item>
            <el-menu-item index="1-3" @click="topurchase()">采购订单</el-menu-item>
            <el-menu-item index="1-4" @click="toretail()">零售订单列表</el-menu-item>
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
      <el-main>
        <div>
          <el-form ref="form" :model="form" label-width="90px">
            <el-form-item label="销售订单号：" >
              <el-input v-model="form.name" placeholder="请输入" style="width: 200px;padding-left: 10px"></el-input>
            </el-form-item>
            <el-form-item label="订单日期：">
              <el-date-picker style="width: 160px"
                              v-model="value1"
                              type="date"
                              placeholder="请输入">
              </el-date-picker>
              至
              <el-date-picker style="width: 160px"
                              v-model="value1"
                              type="date"
                              placeholder="请输入">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="订单金额：">
              <el-input placeholder="请输入" style="width: 160px;padding-left: 10px"></el-input>
              至
              <el-input placeholder="请输入" style="width: 160px;padding-left: 10px"></el-input>
            </el-form-item>
            <el-form-item label="订单状态：">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="已提交" value="shanghai"></el-option>
                <el-option label="待上传附件" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="订单类型：">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="批发采购" value="shanghai"></el-option>
                <el-option label="备货需求" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
</template>

<script>
export default {
  name: "PendingOrder",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        value1: '',
        value2: '',
        value3:'',
        value4:''
      }
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    backlogin(){
      this.$router.push("Login");
    },
    onSubmit() {
      console.log('submit!');
    },
    tosubmit(){
      this.$router.push("SubmitOrder");
    },
    topending(){
      this.$router.push("PendingOrder");
    },
    topurchase(){
      this.$router.push("PurchaseOrder");
    },
    toretail(){
      this.$router.push("RetailOrderList");
    }
  }
}
</script>

<style scoped>

</style>