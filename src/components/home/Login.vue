<template>
    <div id="login">
        <el-form :model="loginForm" ref="loginForm" :rules="loginRules">         
            <h4>开启你的甜蜜爱情之路</h4>
            <el-form-item prop="username">
                <el-input class="input-login" name="username" placeholder="请输入手机号" auto-complete="on"></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <el-input class="verfy input-login" name="password" placeholder="请输入验证码" auto-complete="on"></el-input>
                <el-button class="verfy-button" type="primary">获取验证码</el-button>
            </el-form-item>

            <el-form-item>
                <el-button class="login-button" type="info" @click="handleLogin">登 录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {loginReq} from '@/apis/home/login'
export default {
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
          username: [
              {
                  required: true,
                  message: "请输入用户名",
                  trigger: "blur"
              }
          ],
          password: [
             {
                 required: true,
                 message: '请输入密码',
                 trigger: 'blur'
             }
          ]
      }
    }
  },
  methods: {
    handleLogin (){
           this.$refs.loginForm.validate((valid) => {
              if(valid){
                loginReq(this.loginForm.username,this.loginForm.password).then((res) => {
                    this.$router.push({
                        name: "Home",
                        params: {
                          username: this.loginForm.username
                       }
                    });
                })
              }else{
                this.$message.error("用户名或密码错误");
              }
           })
      }
  }
};
</script>
<style scoped>
  .el-form {
    margin-top:60px;
  }
  .el-input {
          width:100%;
          height:60px;
  }
  .login-button {
    width: 100%;
    padding:20px;
    margin-top:20px
  }
  .verfy {
    width:55%;
    text-align:left;
  }
  .input-login /deep/  input {
    height:60px;
  }
  .verfy-button {
    height:60px;
    width:40%;
    margin-left:2%;
  }

</style>