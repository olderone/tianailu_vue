<template>
    <div id="login">
        <div class=logo>
          <img src="./../../../static/img/1.png">
        </div>
        
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
  .logo img {
    width: 50%;
  }

</style>