<template>
    <div>
        <div class="body">
          <el-row :gutter="20">
            <div class="title-two">
                <span>{{name}}</span>
            </div>
            <p class="para para-img">
              <img src="./../../../static/img/1.png">
            </p>
            <p class="p-one">
              <span>{{age}}岁 | </span><span>{{height}}cm | </span><span>{{work}}</span>
            </p>
            <p class="p-one">
              <span>爱好：{{interest}}</span>
            </p>
            <p class="p-one">
              <span>爱情观：{{values}}</span>
            </p>
            <p class="p-one">
              <span>价值观：{{love_view}}</span>
            </p>
          </el-row>
          
          <div class="info">
            <el-row :gutter="20">
              <div class="title-two">
                  <span>TA的信息</span>
              </div>
              <p class="p-two">
                基本信息
              </p>
              <p class="p-two">
                <span>{{age}}岁</span><span>{{height}}cm</span><span>{{height}}kg</span>
              </p>
              <p class="p-two">
                <span>家乡 ：{{hometown}}</span><span>{{work}}</span>
              </p>
              <p class="p-two">
                <span>学校 ：{{school}}</span>
              </p>
              <p class="p-two">
                <span>学历 ：{{education}}</span>
              </p>
              <p class="p-two">
                <span>收入 ：{{income}}k</span>
              </p>
              <p class="p-two">
                <span>车房情况 ：{{house_car}}</span>
              </p>
              <p class="p-two">
                家庭情况
              </p>
              <p class="p-two">
                <span>{{family}}</span>
              </p>
              <p class="p-two">
                个人习惯
              </p>
              <p class="p-two">
                <span>{{habit}}</span>
              </p>
              <p class="p-two">
                婚姻情况
              </p>
              <p class="p-two">
                <span>{{marriage}}</span>
              </p>
              <p class="p-two">
                兴趣爱好 ：{{interest}}
              </p>
              <p class="p-two">
                性格介绍 ：{{character}}
              </p>
              <p class="p-two">
                未来规划 ：{{future_plan}}
              </p>
              <p class="p-two">
                价值观 ：{{values}}
              </p>
              <p class="p-two">
                爱情观 ：{{love_view}}
              </p>
              <div class="title-two">
                  <span>TA的择偶观</span>
              </div>
              <p class="p-two">
                期望的TA ：{{best_wish}}
              </p>
              <p class="p-two">
                身高要求 ：{{best_height}}
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
      name:"陈奕迅",
      age:"31",
      active: true,
      hometown:"四川省/宜宾市",
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
      values:"勤俭节约",
      love_view:"爱情是需要双向奔赴的"
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
  .title-two{
    font-weight: 700;
    margin-top: 20px;
    text-align: left;
    text-indent: 20px;
  }
  .para {
    text-align: left;
    text-indent: 10px;
  }
  .para img {
    width: 90%;
  }
  .para-img {
    text-indent: 20px;
  }
  .p-one {
    text-indent: 20px;
    text-align: left;
  }
  .p-one span {
    font-size: 14px;
  }
  .p-two {
    text-align: left;
    padding: 0px 20px;
  }
  .p-two span {
    border: solid 1px #000000;
    padding:5px 10px;
    border-radius: 5px;
    margin-right: 15px;
    font-size: 14px;
  }
  .info .el-row {
    background-color: #fff000
  }
</style>