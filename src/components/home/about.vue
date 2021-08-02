<template>
    <div id="login">
        <div class=logo>
          <img src="./../../../static/img/1.png">
        </div>
        <div class="body">
          <el-row :gutter="20">
            <div class="title">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <div class="title-left"  @click="clickOne()">
                      <span>基本资料</span>
                      <div v-if="active" class="bottom-line"></div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="grid-content bg-purple">
                    <div class="title-right" @click="clickTwo()">
                      <span>择偶条件</span>
                      <div v-if="!active" class="bottom-line"></div>
                    </div>
                  </div>
                </el-col>
              </el-row>        
                       
            </div>
          </el-row>
          <div  v-if="active">
            <el-row :gutter="20">
              <div class="title-one">
                <span>通信信息</span>
              </div>
            </el-row>
            <el-row :gutter="20">
              <p class="para">
                <span>微信 ：</span><span>{{weixin}}</span>
              </p>
              <p class="para">
                <span>手機 ：</span><span>{{m_phone}}</span>
              </p>
            </el-row>
            <el-row :gutter="20">
              <div class="title-one">
                <span>基本信息</span>
              </div>
            </el-row>
            <el-row :gutter="20">
              <p class="para">
                <span>性别 ：</span><span>{{gender}}</span>
              </p>
              <p class="para">
                <span>生日 ：</span><span>{{birthday}}</span>
              </p>
              <p class="para">
                <span>身高 ：</span><span>{{height}}cm</span>
              </p>
              <p class="para">
                <span>体重 ：</span><span>{{weight}}kg</span>
              </p>
              <p class="para">
                <span>学历 ：</span><span>{{education}}</span>
              </p>
              <p class="para">
                <span>学校 ：</span><span>{{school}}</span>
              </p>
              <p class="para">
                <span>车房情况 ：</span><span>{{house_car}}</span>
              </p>
              <p class="para">
                <span>公司性质 ：</span><span>{{co_type}}</span>
              </p>
              <p class="para">
                <span>工作 ：</span><span>{{work}}</span>
              </p>
              <p class="para">
                <span>收入 ：</span><span>{{income}}k</span>
              </p>
              <p class="para">
                <span>婚姻情况 ：</span><span>{{marriage}}</span>
              </p>
            </el-row>
            <el-row :gutter="20">
              <div class="title-one">
                <span>家庭情况</span>
              </div>
            </el-row>
            <el-row :gutter="20">
              <textarea class="textarea-one" rows="8"  v-model="family" name="family" disabled></textareat>
            </el-row>
            <el-row :gutter="20">
              <div class="title-one">
                <span>介绍自己</span>
              </div>
            </el-row>
            <el-row :gutter="20">
              <div class="title-two">
                  <span>个人习惯</span>
              </div>
              <textarea class="textarea-two" rows="8"  v-model="habit" name="habit" disabled></textareat>
            </el-row>
            <el-row :gutter="20">
              <div class="title-two">
                  <span>兴趣爱好</span>
              </div>
              <textarea class="textarea-two" rows="8"  v-model="interest" name="interest" disabled></textareat>
            </el-row>
            <el-row :gutter="20">
              <div class="title-two">
                  <span>描述自己性格</span>
              </div>
              <textarea class="textarea-two" rows="8"  v-model="character" name="character" disabled></textareat>
            </el-row>
            <el-row :gutter="20">
              <div class="title-two">
                  <span>描述自己性格</span>
              </div>
              <textarea class="textarea-two" rows="8"  v-model="future_plan" name="future_plan" disabled></textareat>
            </el-row>
            <el-row :gutter="20">
              <div class="title-one">
                <span>用户相册</span>
              </div>
            </el-row>
          </div>
          <div  v-if="!active">
            <el-row :gutter="20">
              <div class="title-two">
                  <span>期望的TA</span>
              </div>
              <textarea class="textarea-two" rows="8"  v-model="best_wish" name="best_wish" disabled></textareat>
            </el-row>
            <el-row :gutter="20">
              <p class="para">
                <span>身高要求 ：</span><span>{{best_height}}</span>
              </p>
              <p class="para">
                <span>是否接受离异 ：</span><span>{{is_divorce}}</span>
              </p>
            </el-row>
            
          </div>

        </div>
        
    </div>
</template>
<script>
import {loginReq} from '@/apis/home/login'
export default {
  data() {
    return {
      active: true,
      weixin:"hi_ma_xiao",
      m_phone:"13896888268",
      gender: true,
      birthday:"1990-05-15",
      height:"177",
      weight:"76",
      education:"本科",
      school:"清华大学",
      house_car:"有房无车",
      co_type:"私营企业",
      work:"研发",
      income:"20",
      marriage:"未婚",
      family:"城镇户口，独生子女",
      habit:"爱干净、爱运动",
      interest:"喜欢电影、运动",
      character:"有责任心、沉稳",
      future_plan:"建立一个温暖的家",
      best_wish:"90-95之间，160以上，有份自己喜欢的工作，性格好",
      best_height:"人对了，身高可以放宽限制",
      is_divorce:1,
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
  .body {
    width: 100%;
  }
  
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
    cursor: pointer;
    padding-left: 10px;
  }
  .title-right {
    cursor: pointer;
    padding-right: 10px;
  }
  .bottom-line {
    margin-top: 10px;
    width: 100%;
    height: 2px;
    background-color: black;
  }
  .title-one{
    margin-top: 20px;
    background-color: #aaa666;
    text-align: left;
    text-indent: 20px;
    padding: 10px 0px;
  }
  .title-two{
    margin-top: 20px;
    text-align: left;
    text-indent: 20px;
  }
  .para {
    text-align: left;
  }
  .para span {
    margin-left: 10px;
  }
  .textarea-one {
    resize: none;
    margin-top: 20px;
    width: 88%;
  }
  .textarea-two {
    resize: none;
    margin-top: 10px;
    width: 88%;
  }
</style>