<template class="edit-c">
    <div id="edit">
        <el-form :model="editForm" ref="editForm" :rules="editRules">
          <div class="edit-one" v-if="page==0">
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>姓名：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="name">
                  <el-input v-model="editForm.name" class="input-login" name="name" placeholder="请输入姓名" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>         
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>性别：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <template>
                  <div class="single-choice">
                    <el-radio v-model="editForm.gender" label="禁用">女生</el-radio>
                    <el-radio v-model="editForm.gender" label="选中且禁用">男生</el-radio>
                  </div>
                </template>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>生日：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                 <template>
                    <div class="block birthday">
                      <el-date-picker
                        v-model="editForm.birthday"
                        type="date"
                        placeholder="选择日期">
                      </el-date-picker>
                    </div>
                 </template>
              </div></el-col>
            </el-row>   
            <el-row class="margin-top">
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>身高：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="height">
                  <el-input v-model="editForm.height" class="input-login" name="height" placeholder="请输入身高(cm)" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>   
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>体重：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="weight">
                  <el-input v-model="editForm.weight" class="input-login" name="weight" placeholder="请输入体重(kg)" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>家乡：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="hometown">
                  <el-input v-model="editForm.hometown" class="input-login" name="hometown" placeholder="请输入家乡" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
          </div>
          <!-- 第二页-------------------- -->
          <div class="edit-one" v-if="page==1">
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>学历：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="name">
                  <el-input v-model="editForm.name" class="input-login" name="name" placeholder="请输入姓名" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>         
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>毕业学校：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <template>
                  <div class="single-choice">
                    <el-radio v-model="editForm.gender" label="禁用">女生</el-radio>
                    <el-radio v-model="editForm.gender" label="选中且禁用">男生</el-radio>
                  </div>
                </template>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>工作：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                 <el-form-item prop="work">
                  <el-input v-model="editForm.work" class="input-login" name="work" placeholder="请输入工作名称" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>   
            <el-row class="margin-top">
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>公司性质：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="co_type">
                  <el-input v-model="editForm.co_type" class="input-login" name="co_type" placeholder="请输入身高(cm)" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>   
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>年收入：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="income">
                  <el-input v-model="editForm.income" class="input-login" name="income" placeholder="请输入体重(kg)" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>车房情况：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="house_car">
                  <el-input v-model="editForm.house_car" class="input-login" name="house_car" placeholder="请输入家乡" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>手机号：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="m_phone">
                  <el-input v-model="editForm.m_phone" class="input-login" name="m_phone" placeholder="请输入手机号" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="5"><div class="grid-content bg-purple edit-type"><span>微信号：</span></div></el-col>
              <el-col :span="19"><div class="grid-content bg-purple-light">
                <el-form-item prop="weixin">
                  <el-input v-model="editForm.weixin" class="input-login" name="weixin" placeholder="请输入微信号" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
          </div>
          <el-form-item>
                <el-button v-if="page != 0" class="login-button"  @click="lastStep">上一步</el-button>
                <el-button v-if="page != 4" class="login-button" type="success" @click="nextStep">下一步</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import {loginReq} from '@/apis/home/login'
export default {
  data() {
    return {
      page:0,
      editForm: {
        name: '',
        gender: '',
        birthday:'',
        height:"",
        weight:"",
        hometown:""
      },
      editRules: {
          name: [
              {
                  required: true,
                  message: "请输入姓名",
                  trigger: "blur"
              }
          ],
          gender: [
             {
                 required: true,
                 message: '请输入性别',
                 trigger: 'blur'
             }
          ],
          birthday: [
             {
                 required: true,
                 message: '请输选择出生日期',
                 trigger: 'blur'
             }
          ],
          height: [
             {
                 required: true,
                 message: '请输入身高',
                 trigger: 'blur'
             }
          ],
          weight: [
             {
                 required: true,
                 message: '请输入体重',
                 trigger: 'blur'
             }
          ],
          hometown: [
             {
                 required: true,
                 message: '请选择出生地',
                 trigger: 'blur'
             }
          ]
      }
    }
  },
  methods: {
    nextStep (){
      let go = 0
      this.$refs.editForm.validate((valid) => {
        if(valid){
          go = 1
        }else{
          go = 0
          this.$message.error("用户名或密码错误");
        }
      })
      if (go == 0){
        return
      }
     this.page++
    },
    lastStep() {
      this.page--
    }
  }
};
</script>
<style scoped>
  .edit-type span {
    font-size: 18px;

  }

  .el-input /deep/ .el-input__inner {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
    /*outline: medium;*/
  }
  .login-button {
    width: 40%;
    padding:12px;
    margin-top:20px
  }

  .grid-content label{
    height: 45px;
    margin-top: 15px;
  } 

  .single-choice {
    text-align: left;
    margin-left: 10px;
  }
  .birthday {
    text-align: left;
    width: 100%;
  }
  .margin-top {
    margin-top: 20px;
  }

</style>