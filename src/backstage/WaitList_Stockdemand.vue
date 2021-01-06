<template>
  <el-container>
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
      <el-form-item label="经销商编码：" style="float: left;padding-right: 20px">
        <el-input v-model="formInline.jxsid" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="订单编号：" style="float: left;padding-right: 20px">
        <el-input v-model="formInline.ordrid" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="订单日期：" style="float: left">
        <el-date-picker style="width: 160px"
                        v-model="formInline.time1"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
        至
        <el-date-picker style="width: 160px"
                        v-model="formInline.time2"
                        type="date"
                        placeholder="请输入">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="经销商名称：" style="float: left;padding-right: 20px">
        <el-input v-model="formInline.jxsname" placeholder="请输入" style="width: 160px"></el-input>
      </el-form-item>
      <el-form-item label="区域：" style="float: left">
        <el-select v-model="formInline.region" placeholder="请选择" style="width: 160px">
          <el-option label="请选择" value="1"></el-option>
          <el-option label="电商" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item style="float: right">
        <el-button type="primary" @click="onSubmit" >查询</el-button>
      </el-form-item>
      <el-table
          ref="multipleTable"
          :data="StockdemandTable"
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
            prop="orderid"
            label="备货计划订单编号"
            width="100">
        </el-table-column>
        <el-table-column
            prop="dlrid"
            label="经销商编码"
            width="100">
        </el-table-column>
        <el-table-column
            prop="usrid"
            label="经销商名称"
            width="100">
        </el-table-column>
        <el-table-column
            prop="areaid"
            label="区域"
            width="80">
        </el-table-column>
        <el-table-column
            prop="proid"
            label="产品编码"
            width="90">
        </el-table-column>
        <el-table-column
            prop="prompdel"
            label="产品型号"
            width="90">
        </el-table-column>
        <el-table-column
            prop="protyp"
            label="品类"
            width="50">
        </el-table-column>
        <el-table-column
            prop="procount"
            label="总数量"
            width="70">
        </el-table-column>
        <el-table-column
            prop="tcktpric"
            label="开票价格"
            width="90">
        </el-table-column>
        <el-table-column
            prop="OAmount"
            label="总金额"
            width="80">
        </el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="180">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" size="small" style="background-color: red;color: white" >查看详情</el-button>
            <el-button @click="outerVisible = true" size="small" style="background-color: red;color: white" >审核</el-button>
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
      <el-dialog title="是否确认通过" :visible.sync="outerVisible">
        <el-dialog
            width="30%"
            title="审核不通过"
            :visible.sync="innerVisible"
            append-to-body>
          <el-input
              type="textarea"
              placeholder="请输入审核不通过原因"
              v-model="textarea1"
              maxlength="200"
              show-word-limit>
          </el-input>
          <el-button type="primary" @click="innerVisible = false">确定</el-button>
          <el-button @click="innerVisible = false">取消</el-button>
        </el-dialog>
        <el-button type="primary" @click="outerVisible = false">审核通过</el-button>
        <el-button @click="innerVisible = true">不通过</el-button>
      </el-dialog>
    </el-form>
  </el-container>
</template>

<script>
export default {
name: "WaitList_Stockdemand",
  data() {
    return {
      formInline: {
        jxsname: '',
        area: '',
        time1: '',
        time2: '',
        jxsid: '',
        ordrid: ''
      },
      StockdemandTable: [{

      }
      ],
      outerVisible: false,
      innerVisible: false,
      textarea1:''
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