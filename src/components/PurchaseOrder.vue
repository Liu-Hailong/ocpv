<template>
  <el-container>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="销售订单号："  style="float: left">
        <el-input v-model="form.name" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="订单日期：" style="float: left">
        <el-date-picker style="width: 160px"
                        v-model="value1"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
        至
        <el-date-picker style="width: 160px"
                        v-model="value2"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单状态：" style="float: left">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="已提交" value="shanghai"></el-option>
          <el-option label="待上传附件" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单类型：" style="float: left">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="批发采购" value="shanghai"></el-option>
          <el-option label="备货需求" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单金额：" style="float: left;padding-right: 50px">
        <el-input placeholder="请输入" style="width: 160px;padding-left: 10px"></el-input>
        至
        <el-input placeholder="请输入" style="width: 160px;padding-left: 10px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="float: left">查询</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "PurchaseOrder",
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
        value3: '',
        value4: ''
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