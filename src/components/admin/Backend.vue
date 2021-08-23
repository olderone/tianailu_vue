<template>
  <div class="login">
    <h1 class="tit">
      甜爱路-客户管理系统
    </h1>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  
};
</script>

<style scoped>

.tit{
  text-align: center;
  padding: 40px 0 20px 0;
  margin-bottom: 10px;
  box-shadow: 0px 3px 5px rgb(166 166 166 / 70%);
  box-sizing: border-box;
}
</style>

<style >
.home ul.el-menu-vertical-demo.el-menu{
  height: calc(100vh - 120px);
}
</style>