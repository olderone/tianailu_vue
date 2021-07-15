<template>
    <div id="login">
        <div class=logo>
          <img src="./../../../static/img/1.png">
        </div>
        <div class="body">
          <el-row :gutter="20">
            <div class="title">
              <el-row :gutter="20">
                <el-col :span="12" @click="clickOne">
                  <div class="grid-content bg-purple">
                    <div class="title-left">
                      <span>基本资料</span>
                      <div v-if="active" class="bottom-line"></div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12" @click="clickTwo">
                  <div class="grid-content bg-purple">
                    <div class="title-right">
                      <span>择偶条件</span>
                      <div v-if="!active" class="bottom-line"></div>
                    </div>
                  </div>
                </el-col>
              </el-row>        
                       
            </div>
          </el-row>
        </div>
        
    </div>
</template>
<script>
import {loginReq} from '@/apis/home/login'
export default {
  data() {
    return {
      active: true
    }
  },
  methods: {
    clickOne(tab, event) {
      console.log(tab, event);
      this.active = true
    },
    clickTwo(){
      this.active = false
    }
  }
};
</script>
<style scoped>
  
  .el-tabs--bottom .el-tabs__item.is-bottom:nth-child(2), .el-tabs--bottom .el-tabs__item.is-top:nth-child(2), .el-tabs--top .el-tabs__item.is-bottom:nth-child(2), .el-tabs--top .el-tabs__item.is-top:nth-child(2){
    margin-top: 10px;
  }
  
  .logo img {
    width: 50%;
  }

  .title {
    width: 60%;
    margin-left: 20%;
    margin-top: 20px;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    padding-top: 10px;
  }
  .title-left {
    padding-left: 10px;
  }
  .title-right {
    padding-right: 10px;
  }
  .bottom-line {
    margin-top: 10px;
    width: 100px;
    height: 2px;
    background-color: black;
  }
</style>