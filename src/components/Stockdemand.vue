<template>
  <el-container>
    <el-form :inline="false" :model="formInline" class="demo-form-inline" style="width: 100%">
      <div style="height: 250px">
        <h1 v-text="'万家乐'+this.$store.state.Info.areanme+this.$store.state.Info.bsinssdvsn+this.$store.state.Info.dlrnme" style="text-align: left"></h1>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="客户名称：">
              <p v-text="dlrInfo.dlrnme"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="客户编码：">
              <p v-text="dlrInfo.dlrid"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="店铺名称：">
              <p v-text="dlrInfo.storenme"></p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="区域：">
              <p v-text="dlrInfo.areanme"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="提货方式：">
              <p v-text="dlrInfo.way"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="出货仓库：">
              <el-select placeholder="请选择" v-model="formInline.wareid" style="width: 200px" @change="getproinfo()">
                <el-option
                    v-for="item in wares"
                    :label="item.warenme"
                    :key="item.wareid"
                    :value="item.wareid">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="备货需求时间段：">
              <el-date-picker style="width: 120px"
                              v-model="time1"
                              type="month"
                              placeholder="选择月">
              </el-date-picker>
              <el-select v-model="time2" style="width: 80px">
                <el-option label="上旬" value="上旬"></el-option>
                <el-option label="下旬" value="下旬"></el-option>
              </el-select>
              <p v-model="this.formInline.needtime"></p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="备注：">
              <el-input v-model="formInline.comment" placeholder="请输入" style="width: 160px" type="textarea"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </div>

      <!--数据来源-->
      <el-row  :gutter="10">
        <el-col :span="10">
          <h1>现有产品</h1>
          <el-table
              :data="wareData"
              border
              style="width: 100%">
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
                width="70">
            </el-table-column>
            <el-table-column
                prop="tcktpric"
                sortable
                label="开票价（元）"
                width="130">
            </el-table-column>
            <el-table-column
                prop="proprice"
                sortable
                label="价格"
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
                    @click.native.prevent="chosedpro(wareData[scope.$index].proid);"
                    type="text"
                    size="small">
                  添加
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="14">
          <h1>已选产品</h1>
          <el-table
              :data="proData"
              border
              style="width: 100%">
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
                prop="procount"
                sortable
                label="数量（件）"
                width="200">
              <template slot-scope="scope1">
                <el-input-number v-model="scope1.row.procount" :step="1" :min="1"style="transform: scale(0.8,1)"></el-input-number>
              </template>
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="80">
              <template slot-scope="scope1">
                <el-button
                    @click.native="deletepro(proData[scope1.$index].proid)"
                    type="text"
                    size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('已提交')">提交</el-button>
        <el-button type="" @click="onSubmit('未提交')">保存</el-button>
      </el-form-item>
    </el-form>
  </el-container>
</template>

<script>
import {
  chosedpro,
  clearchosedpro, deletepro,
  getchosedpro,
  getdlrinfo,
  getproinfo,
  getwareslist, SubmitStockUpOrder,
  submitwholesalepurchase
} from "@/api";

export default {
  name: "Stockdemand",
  data() {
    return {
      formInline: {
        usrid: this.$store.state.Info.usrid,
        wareid: '',
        comment:'',
        needtime:'',
        ordersts:''
      },
      proData:[],
      dlrInfo:{
        dlrnme:'',
        dlrid:'',
        storenme:'',
        areanme:'',
        address:'',
        way:'配送'
      },
      wares: [],
      wareData:[],
      time1:'',
      time2:''
    }
  },
  methods: {
    onSubmit(status) {
      this.formInline.ordersts = status;
      this.formInline.needtime = this.time1.toString() + this.time2;
      SubmitStockUpOrder(this.formInline, this.successsubmit);
    },
    successsubmit(res){
      alert(res.data.msg);
      this.proData=[];
      this.formInline.comment='';
    },
    success(res){
      this.dlrInfo.dlrnme = res.data['dlrnme'];
      this.dlrInfo.dlrid = res.data['dlrid'];
      this.dlrInfo.storenme = res.data['storenme'];
      this.dlrInfo.areanme = res.data['areanme'];
      this.dlrInfo.address = res.data['address'];
    },
    success1(res){
      res.data.forEach(item=>{
        this.wares.push(item);
      })
    },
    success2(res){
      clearchosedpro();
      res.data.forEach(item=>{
        this.wareData.push(item);
      })
      this.proData.length=0;
    },
    success3(res){
      this.proData=[];
      for (const item in res.data){
        console.log(res.data[item].key);
        res.data[item].key.procount = res.data[item].value;
        this.proData.push(res.data[item].key);
      }
      if(this.proData.length===0)this.proData=[];
    },
    getdlrinfo(){
      getdlrinfo({usrid: this.$store.state.Info.usrid}, this.success);
    },
    getwareslist(){
      this.wares=[];
      this.proData=[];
      getwareslist(this.success1);
    },
    getproinfo(){
      this.wareData=[];
      getproinfo({wareid:this.formInline.wareid}, this.success2);
    },
    chosedpro(proid){
      chosedpro({proid:proid}, this.success3);
    },
    getchosepro(){
      this.proData=[];
      getchosedpro({}, this.success3);
    },
    deletepro(proid){
      deletepro({proid: proid}, this.success3);
    },

  },
  mounted() {
    this.getdlrinfo();
    this.getwareslist();
  }
}
</script>

<style scoped>

</style>