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
           label="订单来源"
           width="80">
       </el-table-column>
       <el-table-column
           prop=""
           label="经销商"
           width="100">
       </el-table-column>
       <el-table-column
           prop=""
           label="所属网店"
           width="100">
       </el-table-column>
       <el-table-column
           prop="date"
           label="订单日期"
           width="120">
       </el-table-column>
       <el-table-column
           prop=""
           label="电商外部单号"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="网上订单号"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="订单状态"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="发货状态"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="发货日期"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="产品编码"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="产品型号"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="产品类别"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="订单金额"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="实付金额"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="优惠金额_支付宝优惠"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="优惠金额_红包"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="优惠金额_积分"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="优惠金额_补贴"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="付款时间"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="开票价"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="溢价"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="经销商应缴货款"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="经销商使用商折"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="重量"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="运费"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="买家留言"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="买家昵称"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="卖家备注"
           width="110">
       </el-table-column>
       <el-table-column
           prop=""
           label="交易类型"
           width="110">
       </el-table-column>
       <el-table-column
           prop="province"
           label="收获地址_省"
           width="120">
       </el-table-column>
       <el-table-column
           prop="province"
           label="收获地址_市"
           width="120">
       </el-table-column>
       <el-table-column
           prop="province"
           label="收获地址_区"
           width="120">
       </el-table-column>
       <el-table-column
           prop="province"
           label="网上订单交易状态"
           width="120">
       </el-table-column>
       <el-table-column
           prop="address"
           label="收货地址"
           width="300">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="收货人"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="收货人手机"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="收货人电话"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="快递公司"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="快递单号"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="发货仓编码"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="发货仓库名称"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="电商审核人"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="电商审核备注"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="电商审核日期"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="电商发货仓库"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="来源手工订单"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="上传人"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="上传时间"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="取消人"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="取消时间"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="是否开票"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="发票号"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="开票时间"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="开票备注"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="售后安装"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="安装时间"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="付款方式"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="上传错误信息"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="发货信息"
           width="120">
       </el-table-column>
       <el-table-column
           prop="zip"
           label="错误信息"
           width="120">
       </el-table-column>
       <el-table-column
           fixed="right"
           label="操作"
           width="100">
         <template slot-scope="scope">
           <el-button @click="handleClick(scope.row)" size="small" style="background-color: red;color: white" >查看物流</el-button>
         </template>
       </el-table-column>
     </el-table>
    </el-form>
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
        id:'1',
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
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