<template>
  <el-container>
      <el-form :inline="false" :model="formInline" class="demo-form-inline" style="width: 100%">
        <h1 v-text="">万家乐燃气具有限责任公司</h1>

        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="客户名称：">
              <p v-text="">苏宁江苏店</p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="客户编码：">
            <p v-text="">GB23112123</p>
          </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="店铺名称：">
              <p v-text="">佳邦信息旗舰店</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="区域：">
              <p v-text="">热水事业部华南区</p>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="提货方式：">
              <p v-text="">自提</p>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="80">
          <el-col :span="8">
            <el-form-item label="出货仓库：">
              <el-select placeholder="" style="width: 100px">
                <el-option v-for="item in formInline.region"  :label="item"></el-option>
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
              <p v-text="">110</p>
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
              <p type="textarea" v-text="" >tttt</p>
            </el-form-item>
          </el-col>
        </el-row>

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
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="产品编码">
          </el-table-column>
          <el-table-column
              prop="amount1"
              sortable
              label="产品名称">
          </el-table-column>
          <el-table-column
              prop="amount2"
              sortable
              label="数值 2">
          </el-table-column>
          <el-table-column
              prop="amount3"
              sortable
              label="数值 3">
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
export default {
  name: "WholesalePurchase",
  data() {
    return {
      formInline: {
        user: '',
        region: '',

      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-row *{
  padding: 0px;
  margin: 0px;
}

</style>