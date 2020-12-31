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

    <el-table
        @selection-change="handleSelectionChange"
        :data="tableData"
        border
        style="width: 1040px">
      <el-table-column
          fixed
          prop="id"
          label="序号"
          width="50">
      </el-table-column>
      <el-table-column
          prop="from"
          label="下单日期"
          width="80">
      </el-table-column>
      <el-table-column
          prop=""
          label="销售订单号"
          width="100">
      </el-table-column>
      <el-table-column
          prop=""
          label="订单类型"
          width="100">
      </el-table-column>
      <el-table-column
          prop="date"
          label="订单状态"
          width="120">
      </el-table-column>
      <el-table-column
          prop=""
          label="提货方式"
          width="110">
      </el-table-column>
      <el-table-column
          prop=""
          label="联系人"
          width="110">
      </el-table-column>
      <el-table-column
          prop=""
          label="联系电话"
          width="110">
      </el-table-column>
      <el-table-column
          prop=""
          label="数量"
          width="110">
      </el-table-column>
      <el-table-column
          prop=""
          label="订单金额"
          width="110">
      </el-table-column>
      <el-table-column
          prop=""
          label="区域负责人"
          width="110">
      </el-table-column>
      <el-table-column
          prop=""
          label="备注"
          width="110">
      </el-table-column>
      <el-table-column
          prop=""
          label="不通过原因"
          width="110">
      </el-table-column>
      <el-table-column
          fixed="right"
          label="操作"
          width="260">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" size="small">提交订单  编辑订单  订单详情  取消订单</el-button>
        </template>
      </el-table-column>
    </el-table>
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
      },
      tableData: [{
        id:'1',
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }]
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
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      console.log(row);
    }
  }
}
</script>

<style scoped>

</style>