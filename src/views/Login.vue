<template>
  <el-container>
    <el-header>
      <img class="logo" src="http://www.chinamacro.cn/images/logo_n.png" />
    </el-header>
    <el-main>
      <img class="back" src="../assets/u34.jpg" />
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="registpage()">注册</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        ruleForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$router.push("RetailOrderList");
            const _this = this;
            this.$axios.post("http://localhost:8080/Login", this.ruleForm).then(res => {
              const jwt = res.headers['authorization'];
              const userInfo = res.data.data;
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      registpage() {
        this.$router.push("Regist");
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

  body > .el-container {
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