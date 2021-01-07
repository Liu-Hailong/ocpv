<template>
  <el-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
      <el-form-item label="销售订单号：" style="float: left;padding-right: 20px">
        <el-input v-model="formInline.orderid" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="订单日期：" style="float: left;padding-right: 20px">
        <el-date-picker style="width: 160px"
                        v-model="formInline.starttime"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
        至
        <el-date-picker style="width: 160px"
                        v-model="formInline.endtime"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="订单状态：" style="float: left">
        <el-select v-model="formInline.ordersts" placeholder="请选择" style="width: 160px">
          <el-option></el-option>
          <el-option label="未提交" value="未提交"></el-option>
          <el-option label="已提交" value="已提交"></el-option>
          <el-option label="待上传附件" value="待上传附件"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单类型：" style="float: left;padding-right: 20px">
        <el-select v-model="formInline.ordertyp" placeholder="请选择" style="width: 160px">
          <el-option></el-option>
          <el-option label="批发订单" value="批发订单"></el-option>
          <el-option label="备货需求" value="备货需求"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="订单金额：" style="float: left">
        <el-input v-model="formInline.lowmoney" placeholder="请输入" style="width: 160px"></el-input>
        至
        <el-input v-model="formInline.highmoney" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <el-table
          ref="multipleTable"
          :data="PendingOrderTable"
          border
          style="width: 100%;"
          height="600"
          @selection-change="handleSelectionChange">
        <el-table-column
            type="selection"
            width="40">
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
            prop="procount"
            label="数量"
            width="50">
        </el-table-column>
        <el-table-column
            prop="money"
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
              <img v-if="scope.row.ordersts !== '已提交' && scope.row.ordersts !== '已发货' " src="../assets/提交订单.png" @click="submit(scope.$index)" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="编辑订单" placement="bottom-start">
              <img v-if="scope.row.ordersts !== '已提交' && scope.row.ordersts !== '已发货' " src="../assets/编辑订单.png" @click="EditOrder" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="订单详情" placement="bottom-start">
              <img src="../assets/订单详情.png" @click="handleClick(scope.row)" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="取消订单" placement="bottom-start">
              <img v-if="scope.row.ordersts !== '已提交' && scope.row.ordersts !== '已发货' " src="../assets/取消订单.png" @click="handleClick(scope.row)" style="width: 20px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
            <el-tooltip class="item" content="确认收货" placement="bottom-start">
              <img v-if="scope.row.ordersts === '已发货' " src="../assets/确认收货.png" @click="IsOrNotComfirm(scope.row)" style="width: 25px;padding-left: 10px;cursor: pointer">
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>

      <!--弹窗-->
      <div id="dddd" style="position: absolute;width: 100%; height: 100%; top: 0; left: 0;right: 0;bottom: 0; display: none; z-index: 10; background-color: rgba(1, 1, 1, 0.5);">
      <div style="width: 40%; height: 680px; margin: 0 auto; background-color: white; margin-top: 120px; border: 10px; border-radius: 10px 10px 10px 10px;">
        <h1>{{chose}}订单详情</h1>
      <el-table
          :data="proData"
          border
          show-summary
          height="600"
          style="width: 100%;margin: 0 auto;">
        <el-table-column
            prop="proid"
            label="产品编码"
            width="80">
        </el-table-column>
        <el-table-column
            prop="pronme"
            label="产品名称"
            width="80">
        </el-table-column>
        <el-table-column
            prop="protyp"
            label="品类"
            width="80">
        </el-table-column>
        <el-table-column
            prop="procount"
            sortable
            label="数量（件）"
            width="120">
        </el-table-column>
        <el-table-column
            prop="tcktpric"
            sortable
            label="开票价（元）"
            width="140">
        </el-table-column>
        <el-table-column
            prop="proprice"
            sortable
            label="金额"
            width="80">
        </el-table-column>
        <el-table-column
            prop="probulk"
            sortable
            label="体积"
            width="80">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="80">
        </el-table-column>
      </el-table>
        <el-button type="primary" @click="dd()">退出</el-button>
      </div>
      </div>
      <!---->

    </el-form>
  </el-container>
</template>

<script>
import {getorderdetail, getPendorder, updateordersts} from "@/api";

export default {
  name: "PendingOrder",
  data() {
    return {
      formInline: {
        ordertyp:null,
        dlrid: null,
        ordersts: null,
        orderid: null,
        starttime:null,
        endtime:null,
        lowmoney: null,
        highmoney: null
      },
      PendingOrderTable: [{
        orderid:'',
      }],
      proData:[],
      chose:'',
    }
  },
  methods: {
    dd(){
      document.getElementById('dddd').style.display='none';
    },
    submit(row){
      updateordersts({orderid:this.PendingOrderTable[row].orderid},this.submitsuccess);
    },
    submitsuccess(res){
      console.log(res.data);
    },
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
      this.getPendingorder();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(row) {
      this.chose=row.orderid;
      console.log(row);
      this.proData=[];
      document.getElementById("dddd").style.display='block';
      getorderdetail({orderid:this.chose}, res=>{
        console.log(res);
        res.data.forEach(item=>{
          this.proData.push(item);
        })
      });
    },
    IsOrNotComfirm(row){
      this.$confirm('是否确认收货', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.$message({
          type: 'success',
          message: '确认!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    EditOrder(){
      this.$router.push("Stockdemand");
    },
    getpendordersuccess(res){
      this.PendingOrderTable=[];
      console.log(res.data);
      res.data.forEach(item=>{
        this.PendingOrderTable.push(item);
      })
    },
    getPendingorder(){
      this.formInline.dlrid = this.$store.state.Info.dlrid;
      getPendorder(this.formInline,this.getpendordersuccess);
    },

  },
  mounted() {
    this.getPendingorder();
  }
}
</script>

<style scoped>

</style>