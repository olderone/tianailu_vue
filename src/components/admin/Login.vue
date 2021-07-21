<template>
  <div class="login">
    <h1 class="tit">
      甜爱路-客户管理系统
    </h1>
    <div class="login-wrap">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.name" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="remember-psd">
        <span>记住密码</span>
        <el-checkbox v-model="form.checked"></el-checkbox>
      </div>
      <el-button class="login-btn">登陆</el-button>
      <span class="forget-psd">忘记密码?</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        checked: false,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.login-wrap {
  width: 40vw;
  border: solid 1px #ccc;
  margin: 60px auto;
  padding: 36px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 4px 3px 2px rgb(166 166 166 / 30%);
}
.remember-psd {
  text-align: left;
  padding: 22px;
  display: block;
  font-size: 14px;
}
.login-btn {
  display: block;
  margin: 0 auto;
}
.forget-psd {
  text-align: right;
  display: block;
  color: #8590a6;
  font-size: 14px;
  cursor: pointer;
}
.tit{
  text-align: center;
  padding: 40px 0 20px 0;
}
</style>
