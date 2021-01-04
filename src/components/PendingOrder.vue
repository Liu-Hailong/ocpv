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
          ref="multipleTable"
          :data="PendingOrderTable"
          border
          style="width: 1040px"
          @selection-change="handleSelectionChange">
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
            prop="orderdate"
            label="下单日期"
            width="100">
        </el-table-column>
        <el-table-column
            prop="orderid"
            label="销售订单号"
            width="100">
        </el-table-column>
        <el-table-column
            prop="ordertyp"
            label="订单类型"
            width="90">
        </el-table-column>
        <el-table-column
            prop="ordersts"
            label="订单状态"
            width="100">
        </el-table-column>
        <el-table-column
            prop="pickway"
            label="提货方式"
            width="80">
        </el-table-column>
        <el-table-column
            prop="dlrid"
            label="联系人"
            width="90">
        </el-table-column>
        <el-table-column
            prop="phone"
            label="联系电话"
            width="110">
        </el-table-column>
        <el-table-column
            prop="procount"
            label="数量"
            width="50">
        </el-table-column>
        <el-table-column
            prop="OAmount"
            label="订单金额"
            width="90">
        </el-table-column>
        <el-table-column
            prop="areamngr"
            label="区域负责人"
            width="100">
        </el-table-column>
        <el-table-column
            prop="comment"
            label="备注"
            width="110">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="150">
          <template slot-scope="scope">
            <el-tooltip class="item" content="提交订单" placement="bottom-start">
              <img v-if="scope.row.ordersts !== '已提交' && scope.row.ordersts !== '已发货' " src="../assets/提交订单.png" @click="handleClick(scope.row)" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="编辑订单" placement="bottom-start">
              <img v-if="scope.row.ordersts !== '已提交' && scope.row.ordersts !== '已发货' " src="../assets/编辑订单.png" @click="handleClick(scope.row)" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="订单详情" placement="bottom-start">
              <img src="../assets/订单详情.png" @click="handleClick(scope.row)" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="取消订单" placement="bottom-start">
              <img v-if="scope.row.ordersts !== '已提交' && scope.row.ordersts !== '已发货' " src="../assets/取消订单.png" @click="handleClick(scope.row)" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="确认收货" placement="bottom-start">
              <img v-if="scope.row.ordersts === '已发货' " src="../assets/确认收货.png" @click="handleClick(scope.row)" style="width: 25px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
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
  name: "PendingOrder",
  data() {
    return {
      formInline: {
        name: '',
        region: '',
        value1: '',
        value2: ''
      },
      PendingOrderTable: [{
        id:'1',
        orderdate:'2020-10-10',
        orderid:'38104801',
        ordertyp:'批发采购',
        ordersts:'未提交',
        pickway:'自提',
        dlrid:'aaa',
        phone:'1414235346',
        procount:'2',
        OAmount:'20000',
        areamngr:'kkk',
        comment:'图表不清晰'
      },
        {
          id:'2',
          orderdate:'2020-3-12',
          orderid:'314151801',
          ordertyp:'备货需求',
          ordersts:'已提交',
          pickway:'配送',
          dlrid:'ccc',
          phone:'1414632552',
          procount:'6',
          OAmount:'4000',
          areamngr:'fwf',
          comment:''
        },
        {
          id:'',
          orderdate:'',
          orderid:'',
          ordertyp:'',
          ordersts:'待上传附件',
          pickway:'',
          dlrid:'',
          phone:'',
          procount:'',
          OAmount:'',
          areamngr:'',
          comment:''
        },
        {
          id:'',
          orderdate:'',
          orderid:'',
          ordertyp:'',
          ordersts:'驳回',
          pickway:'',
          dlrid:'',
          phone:'',
          procount:'',
          OAmount:'',
          areamngr:'',
          comment:''
        }
        ,
        {
          id:'',
          orderdate:'',
          orderid:'',
          ordertyp:'',
          ordersts:'已发货',
          pickway:'',
          dlrid:'',
          phone:'',
          procount:'',
          OAmount:'',
          areamngr:'',
          comment:''
        }
      ]
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