<template>
  <el-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
      <el-form-item label="销售订单号：" style="float: left;padding-right: 20px">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="订单日期：" style="float: left;padding-right: 20px">
        <el-date-picker style="width: 160px"
                        v-model="formInline.value1"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
        至
        <el-date-picker style="width: 160px"
                        v-model="formInline.value2"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单状态：" style="float: left">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 160px">
          <el-option label="已提交" value="shanghai"></el-option>
          <el-option label="待上传附件" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单类型：" style="float: left;padding-right: 20px">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 160px">
          <el-option label="批发采购" value="shanghai"></el-option>
          <el-option label="备货需求" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单金额：" style="float: left">
        <el-input placeholder="请输入" style="width: 160px"></el-input>
        至
        <el-input placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
export default {
  name: "PurchaseOrder",
  data() {
    return {
      formInline: {
        name: '',
        region: '',
        value1: '',
        value2: ''
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
    }
  }
}
</script>

<style scoped>

</style>