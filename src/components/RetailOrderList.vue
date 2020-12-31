<template>
  <el-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
      <el-form-item label="经销商名称：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="所属网店：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 180px"></el-input>
      </el-form-item>
      <el-form-item label="发货状态：" style="float: left">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 115px">
          <el-option label="待发货" value="shanghai"></el-option>
          <el-option label="已发货" value="beijing"></el-option>
          <el-option label="已签收" value="beijing"></el-option>
          <el-option label="暂停发货" value="beijing"></el-option>
          <el-option label="已取消" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单状态：" style="float: left">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 115px">
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
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 100px"></el-input>
        至
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="网上订单编号：" label-width="120px" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="电商外部订单号：" label-width="140px" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 200px"></el-input>
      </el-form-item>
      <el-form-item label="付款日期：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 100px"></el-input>
        至
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="产品编码：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="产品型号：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="发货日期：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 100px"></el-input>
        至
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 100px"></el-input>
      </el-form-item>
      <el-form-item label="快递公司：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="快递单号：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="订单来源：" style="float: left">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 115px">
          <el-option label="京东" value="shanghai"></el-option>
          <el-option label="天猫" value="beijing"></el-option>
          <el-option label="苏宁易购" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="收货人姓名：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="收货人电话：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="收货地址：" style="float: left">
        <el-input v-model="formInline.name" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item style="float: left;padding-left: 20px">
        <el-checkbox-group v-model="formInline.type">
          <el-checkbox label="买家留言"></el-checkbox>
          <el-checkbox label="卖家留言"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" style="float: right">查询</el-button>
      </el-form-item>
    </el-form>

    <!--数据表格-->
    <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
      <el-table-column
          type="selection"
          width="55">
      </el-table-column>
      <el-table-column
          label="日期"
          width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="120">
      </el-table-column>
      <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </el-container>
</template>

<script>
export default {
  name: "RetailOrderList",
  data() {
    return {
      formInline: {
        name: '',
        region: '',
        type:[]
      },
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      multipleSelection: []
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
    }
  }
}
</script>

<style scoped>

</style>