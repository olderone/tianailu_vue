<template>
    <div id="login">
        <div class=logo>
          <img src="./../../../static/img/1.png">
        </div>
        <div class="body">
          <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            <el-col :span="16"><div class="grid-content bg-purple">
              
            </div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
          
        </div>
        
    </div>
</template>
<script>
import {loginReq} from '@/apis/home/login'
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
<style scoped>
  .tianailu-tabs{
    margin-top: 20px;
    width: 80%;
    margin-left: 10%;
  }
  .tianailu-tabs /deep/ .el-tabs__nav {
    float: none;
  }
  .tianailu-tabs[data-v-a7635c26] /deep/ .el-tabs__nav {
    height: 60px;
    border-style:solid;
    border-width:1px;
    border-radius: 10px; 
  }
  .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2), .el-tabs--bottom .el-tabs__item.is-top:nth-child(2), .el-tabs--top .el-tabs__item.is-bottom:nth-child(2), .el-tabs--top .el-tabs__item.is-top:nth-child(2){
    margin-top: 10px;
  }
  
  .logo img {
    width: 50%;
  }

</style>