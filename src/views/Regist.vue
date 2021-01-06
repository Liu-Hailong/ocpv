<template>
  <el-container>
    <el-header>
      <img class="logo" src="http://www.chinamacro.cn/images/logo_n.png" />
    </el-header>
    <el-main>
      <img class="back" src="../assets/u34.jpg" />
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="usrname">
          <el-input v-model="ruleForm.usrname" @keyup.enter.native="submitForm"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="psswrd">
          <el-input type="password" v-model="ruleForm.psswrd" @keyup.enter.native="submitForm"></el-input>
        </el-form-item>
        <el-form-item label="注册类型">
          <el-select placeholder="请选择注册类型" v-model="ruleForm.usrtyp">
            <el-option label="经销商" value="0"></el-option>
            <el-option label="运营商" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()">注册</el-button>
          <el-button @click="back()">去登录</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>

import {regist} from "@/api";

export default {
name: "Regist",
  data() {
    return {
      ruleForm: {
        usrname: '',
        psswrd: '',
        usrtyp:''
      },
      rules: {
        usrname: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ],
        psswrd: [
          { required: true, message: '请输入密码', trigger: 'change' }
        ],
        usrtyp:[
          {required: true}
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          if (this.ruleForm.usrtyp === "1" || this.ruleForm.usrtyp === "0") {
            let success = (res) => {
              if (res.data.code === "00" || res.data.code === "01") {
                alert("注册成功！");
                this.view.login.ruleForm.usrname=this.ruleForm.usrname;
                this.$router.push("Login");
              } else if (res.data.code === "02") {
                alert("注册失败");
                this.ruleForm.psswrd = '';
                this.ruleForm.usrname = '';
              }
            }
            regist(this.ruleForm, success);
          }
          else{
            alert("请选择账号类型");
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    },
    back() {
      this.$router.push("Login");
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: transparent;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: transparent;
  color: transparent;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: rgba(256, 256, 256, 0.8);
  text-align: center;
  margin-top: 50%;
  line-height: 160px;
  padding-right: 70px;
  border-radius: 10px 10px 10px 10px;
}

body >#app> .el-container {
  margin: auto;
  top: 100px;
  width: 400px;
  border: 10px;
  border-radius: 10px 10px 10px 10px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.logo {
  margin-top: 50%;
}

.demo-ruleForm {
  max-width: 320px;
  margin: 0 auto;
}

.back {
  position: absolute;
  z-index: -1;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
}
</style>