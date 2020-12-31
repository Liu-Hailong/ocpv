<template>
  <el-container>
    <el-form ref="form" :model="form">
      <el-form-item label="经销商名称：">
        <el-input v-model="form.name" placeholder="请输入" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="发货状态：">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="待发货" value="shanghai"></el-option>
          <el-option label="已发货" value="beijing"></el-option>
          <el-option label="已签收" value="beijing"></el-option>
          <el-option label="暂停发货" value="beijing"></el-option>
          <el-option label="已取消" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动性质：">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="买家留言" name="type"></el-checkbox>
          <el-checkbox label="卖家留言" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
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