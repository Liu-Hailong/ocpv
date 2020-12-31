<template>
  <el-container>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="经销商名称：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="所属网店：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="发货状态：" style="float: left">
        <el-select v-model="form.region" placeholder="请选择" style="width: 100px">
          <el-option label="待发货" value="shanghai"></el-option>
          <el-option label="已发货" value="beijing"></el-option>
          <el-option label="已签收" value="beijing"></el-option>
          <el-option label="暂停发货" value="beijing"></el-option>
          <el-option label="已取消" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单状态：" style="float: left">
        <el-select v-model="form.region" placeholder="请选择" style="width: 100px">
          <el-option label="已完成" value="shanghai"></el-option>
          <el-option label="已取消" value="beijing"></el-option>
          <el-option label="已签收" value="beijing"></el-option>
          <el-option label="已发货" value="beijing"></el-option>
          <el-option label="已提交" value="beijing"></el-option>
          <el-option label="已审核" value="beijing"></el-option>
          <el-option label="已出仓" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单日期：" style="float: left">
        <el-date-picker style="width: 100px"
                        v-model="value1"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
        至
        <el-date-picker style="width: 100px"
                        v-model="value2"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="网上订单编号：" label-width="120px" style="float: left">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="电商外部订单号：" label-width="140px" style="float: left">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="付款日期：" style="float: left">
        <el-date-picker style="width: 100px"
                        v-model="value1"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
        至
        <el-date-picker style="width: 100px"
                        v-model="value2"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="产品编码：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="产品型号：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="发货日期：" style="float: left">
        <el-date-picker style="width: 100px"
                        v-model="value1"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
        至
        <el-date-picker style="width: 100px"
                        v-model="value2"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="快递公司：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="快递单号：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="订单来源：" style="float: left">
        <el-select v-model="form.region" placeholder="请选择" style="width: 100px">
          <el-option label="京东" value="shanghai"></el-option>
          <el-option label="天猫" value="beijing"></el-option>
          <el-option label="苏宁易购" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收货人姓名：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="收货人电话：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="收货地址：" style="float: left">
        <el-input v-model="form.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="活动性质：" style="float: left">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="买家留言"></el-checkbox>
          <el-checkbox label="卖家留言"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="float: left">查询</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "RetailOrderList",
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
        desc: ''
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
    backlogin() {
      this.$router.push("Login");
    },
    onSubmit() {
      console.log('submit!');
    },
    tosubmit() {
      this.$router.push("SubmitOrder");
    },
    topending() {
      this.$router.push("PendingOrder");
    },
    topurchase() {
      this.$router.push("PurchaseOrder");
    },
    toretail() {
      this.$router.push("RetailOrderList");
    }
  }
}
</script>

<style scoped>

</style>