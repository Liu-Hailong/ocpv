<template>
  <el-container>
    <el-form :inline="false" :model="formInline" class="demo-form-inline" style="width: 100%">
      <div style="height: 250px">
        <h1 v-text="" style="text-align: left">万家乐燃气具有限责任公司采购申请</h1>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="客户名称：">
              <p v-model="dlrInfo.dlrnme"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="客户编码：">
              <p v-model="dlrInfo.dlrid"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="店铺名称：">
              <p v-model="dlrInfo.storenme"></p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="区域：">
              <p v-model="dlrInfo.areanme"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="提货方式：">
              <p v-model="dlrInfo.way"></p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="出货仓库：">
              <el-select placeholder="请选择" v-model="formInline.ware" style="width: 100px">
                <el-option
                    v-for="item in formInline.wares"
                    :label="item.name"
                    :key="item.id"
                    :value="item.name">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="收货人：">
              <p v-text="">宝宝</p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="联系电话：">
              <p v-model="this.$store.state.Info.phone"></p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="自提地址：">
              <p v-text="">中国</p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="备注：">
              <el-input type="textarea" v-text="">tttt</el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <!--数据来源-->
      <h1>已选产品</h1>
      <el-table
          :data="tableData"
          border
          show-summary
          style="width: 100%">
        <el-table-column
            prop="id"
            label="序号"
            width="60">
        </el-table-column>
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
            prop="money"
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
          <template slot-scope="scope">
            <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页控制-->
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
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import {getdlrinfo} from "@/api";

export default {
  name: "WholesalePurchase",
  data() {
    return {
      formInline: {
        user: '',
        wares: [{
          id: '1',
          name: 'ddd'
        }, {
          id: '2',
          name: 'ppp'
        }
        ],
        ware: ''
      },
      dlrInfo:{
        dlrnme:'',
        dlrid:'',
        storenme:'',
        areanme:'',
        way:'自提'
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    success(res){
      console.log(res.data);
      this.dlrInfo.dlrnme = res.data['dlrnme'];
      this.dlrInfo.dlrid = res.data.list['dlrid'];
      this.dlrInfo.storenme = res.data.list['storenme'];
      this.dlrInfo.areanme = res.data.list['areanme'];
      console.log(this.dlrInfo.storenme);
      alert(this.dlrInfo.storenme);
    },
    getdlrinfo(){
      getdlrinfo({usrid: this.$store.state.Info.usrid}, this.success);
    }
  },
  mounted() {
    this.getdlrinfo();
  }
}

</script>

<style scoped>

.el-row * {
  padding: 0px;
  margin: 0px;
}

</style>