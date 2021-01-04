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
         ref="multipleTable"
         @selection-change="handleSelectionChange"
         :data="tableData"
         border
         style="width: 1040px">
       <el-table-column
           type="selection"
           width="40">
       </el-table-column>
       <el-table-column
           fixed
           prop="id"
           label="序号"
           width="50">
       </el-table-column>
       <el-table-column
           prop="source"
           label="订单来源"
           width="80">
       </el-table-column>
       <el-table-column
           prop="usrname"
           label="经销商"
           width="100">
       </el-table-column>
       <el-table-column
           prop="onlstorid"
           label="所属网店"
           width="100">
       </el-table-column>
       <el-table-column
           prop="orderdate"
           label="订单日期"
           width="120">
       </el-table-column>
       <el-table-column
           prop="onlordid"
           label="网上订单号"
           width="110">
       </el-table-column>
       <el-table-column
           prop="ordersts"
           label="订单状态"
           width="110">
       </el-table-column>
       <el-table-column
           prop="logstatus"
           label="物流状态"
           width="110">
       </el-table-column>
       <el-table-column
           prop="proid"
           label="产品编码"
           width="110">
       </el-table-column>
       <el-table-column
           prop="prompdel"
           label="产品型号"
           width="110">
       </el-table-column>
       <el-table-column
           prop="protyp"
           label="产品类别"
           width="110">
       </el-table-column>
       <el-table-column
           prop="OAmount"
           label="订单金额"
           width="110">
       </el-table-column>
       <el-table-column
           prop="tcktpric"
           label="开票价"
           width="110">
       </el-table-column>
       <el-table-column
           prop="cshdpsit"
           label="经销商应缴货款"
           width="110">
       </el-table-column>
       <el-table-column
           prop="SAddress"
           label="收获地址"
           width="120">
       </el-table-column>
       <el-table-column
           prop="OOStts"
           label="网上订单交易状态"
           width="120">
       </el-table-column>
       <el-table-column
           prop="Receiver"
           label="收货人"
           width="120">
       </el-table-column>
       <el-table-column
           prop="RPNum"
           label="收货人手机"
           width="120">
       </el-table-column>
       <el-table-column
           prop="RPhone"
           label="收货人电话"
           width="120">
       </el-table-column>
       <el-table-column
           prop="RCompany"
           label="快递公司"
           width="120">
       </el-table-column>
       <el-table-column
           prop="TNumber"
           label="快递单号"
           width="120">
       </el-table-column>
       <el-table-column
           prop="wareid"
           label="发货仓编码"
           width="120">
       </el-table-column>
       <el-table-column
           prop="warenme"
           label="发货仓库名称"
           width="120">
       </el-table-column>
       <el-table-column
           prop="comment"
           label="电商审核备注"
           width="120">
       </el-table-column>
       <el-table-column
           fixed="right"
           label="操作"
           width="110">
         <template slot-scope="scope">
           <el-button @click="handleClick(scope.row)" size="small" style="background-color: red;color: white" >查看物流</el-button>
         </template>
       </el-table-column>
     </el-table>
     <div class="block">
       <el-pagination
           @size-change="handleSizeChange"
           @current-change="handleCurrentChange"
           :current-page="currentPage4"
           :page-sizes="[100, 200, 300, 400]"
           :page-size="100"
           layout="total, sizes, prev, pager, next, jumper"
           :total="400">
       </el-pagination>
     </div>
    </el-form>
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
        source:'天猫',
        usrname:'易迅科技',
        onlstorid:'易迅电器天猫旗舰店',
        orderdate:'2018-1-1',
        ordersts:'已付款',
        logstatus:'已发货',
        OAmount:'793.1'
      },
        {

        },
        {

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