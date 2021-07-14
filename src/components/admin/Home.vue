<template>
  <div class="home">
    <div>
      客户管理系统
    </div>
    <div>
      这是界面
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
</style>
