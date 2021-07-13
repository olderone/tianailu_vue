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
          <!-- 第2页-------------------- -->
          <div class="edit-two" v-if="page==1">
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>选择学历：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-select v-model="editForm.education" placeholder="请选择" @change="eduChange">
                  <el-option v-for="item in editForm.educations" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
              </div></el-col>
            </el-row>         
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>毕业学校：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="school">
                  <el-input v-model="editForm.school" name="school" placeholder="请输入学校全称" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>工作名称：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                 <el-form-item prop="work">
                  <el-input v-model="editForm.work" name="work" placeholder="请输入工作名称" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>   
            <el-row class="margin-top">
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>公司性质：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-select v-model="editForm.co" placeholder="请选择">
                  <el-option v-for="item in editForm.cos" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
              </div></el-col>
            </el-row>   
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>年 收 入：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="income">
                  <el-input v-model="editForm.income" class="input-login" name="income" placeholder="请输入年收入(k)" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>车房情况：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-select v-model="editForm.house_car" placeholder="请选择">
                  <el-option v-for="item in editForm.house_cars" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>手 机 号：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="m_phone">
                  <el-input v-model="editForm.m_phone" class="input-login" name="m_phone" placeholder="请输入手机号" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>微 信 号：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="weixin">
                  <el-input v-model="editForm.weixin" class="input-login" name="weixin" placeholder="请输入微信号" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
          </div>
          <!-- 第3页-------------------- -->
          <div class="edit-three" v-if="page==2">
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>婚姻状况：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-select v-model="editForm.marriage" placeholder="请选择">
                  <el-option v-for="item in editForm.marriages" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
              </div></el-col>
            </el-row> 
            <div class="bar"></div>       
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>个人习惯：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="habit">
                  <el-input type="textarea" :rows="3"  v-model="editForm.habit" name="habit" placeholder="请输入个人习惯"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>家庭情况：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                 <el-form-item prop="family">
                  <el-input type="textarea" :rows="3" v-model="editForm.family" name="family" placeholder="请输入家庭情况"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>   
            <el-row class="margin-top">
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>兴趣爱好：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="interest">
                  <el-input type="textarea" :rows="3" v-model="editForm.interest" name="interest" placeholder="请输入兴趣爱好"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>   
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>性格介绍：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="character">
                  <el-input type="textarea" :rows="3" v-model="editForm.character" name="character" placeholder="介绍一下自己"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>未来规划：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="future_plan">
                  <el-input type="textarea" :rows="3" v-model="editForm.future_plan" name="future_plan" placeholder="说说自己接下来的计划"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>价 值 观：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="values">
                  <el-input type="textarea" :rows="3" v-model="editForm.values" name="values" placeholder="请输入你的价值观念"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type"><span>爱 情 观：</span></div></el-col>
              <el-col :span="14"><div class="grid-content bg-purple-light">
                <el-form-item prop="love_view">
                  <el-input type="textarea" :rows="3" v-model="editForm.love_view" name="love_view" placeholder="请输入你的爱情观念"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-upload class="avatar-uploader"
              ref="otherLicense"
              action
              :auto-upload="false"
              :on-preview="handlePicPreview"
              :on-remove="handleRemove"
              :file-list="fileList"
              :on-change="otherSectionFile"
              list-type="picture-card"
              multiple>
              <i class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" class="avatar">
            </el-dialog>
            <el-row>
              <el-col :span="24"><div class="grid-content bg-purple edit-type title-botton-center title-1"><span>至少上传3张图片</span></div></el-col>
            </el-row>
          </div>
           <!-- 第4页-------------------- -->
          <div class="edit-four" v-if="page==3"> 
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple edit-type title-left title-1"><span>择偶条件</span></div></el-col>
            </el-row>
            <el-row>
              <el-col :span="12"><div class="grid-content bg-purple edit-type title-left title-2"><span>期望的TA</span></div></el-col>
            </el-row>
            <el-row>
              <el-col :span="24"><div class="grid-content bg-purple-light">
                 <el-form-item prop="best_wish">
                  <el-input type="textarea" :rows="5" v-model="editForm.best_wish" name="best_wish" placeholder="可以从年龄、身高、体重、学历，爱好，工作等方面描述"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>   
            <el-row>
              <el-col :span="8"><div class="grid-content bg-purple edit-type title-left"><span>身高要求：</span></div></el-col>
              <el-col :span="16"><div class="grid-content bg-purple-light">
                <el-form-item prop="best_height">
                  <el-input v-model="editForm.best_height" class="input-login" name="best_height" placeholder="请输入你觉得合适的身高" auto-complete="on"></el-input>
                </el-form-item>
              </div></el-col>
            </el-row>
            <el-row>
              <el-col :span="7"><div class="grid-content bg-purple edit-type title-left"><span>是否接受离异：</span></div></el-col>
              <el-col :span="15"><div class="grid-content bg-purple-light">
                <el-select v-model="editForm.is_divorce" placeholder="请选择">
                  <el-option v-for="item in editForm.divorce" :key="item.value" :label="item.label" :value="item.value"/>
                </el-select>
              </div></el-col>
            </el-row>
          </div>
          <el-form-item>
                <el-button v-if="page != 0" class="login-button"  @click="lastStep">上一步</el-button>
                <el-button v-if="page != 3" class="login-button" type="success" @click="nextStep">下一步</el-button>
                <el-button v-if="page == 3" class="login-button" type="success" @click="save">保存</el-button>
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
      fileList: {},
      dialogVisible: false,
      dialogImageUrl: '',
      editForm: {
        name: '',
        gender: '',
        birthday:'',
        height:"",
        weight:"",
        hometown:"",
        education:"",
        educations: [
          {
            value: '0',
            label: '硕士及以上'
          },
          {
            value: '1',
            label: '本科'
          },
          {
            value: '2',
            label: '专科'
          },
          {
            value: '3',
            label: '高中'
          },
          {
            value: '4',
            label: '初中及以下'
          }
        ],
        school:"",
        work:"",
        co:"",
        cos: [
          {
            value: '0',
            label: '国有企业'
          },
          {
            value: '1',
            label: '民营企业'
          },
          {
            value: '2',
            label: '政府'
          },
          {
            value: '3',
            label: '事业单位'
          }
        ],
        income:"",
        house_car:"",
        house_cars: [
          {
            value: '0',
            label: '无房无车'
          },
          {
            value: '1',
            label: '有房无车'
          },
          {
            value: '2',
            label: '无房有车'
          },
          {
            value: '3',
            label: '有房有车'
          }
        ],
        m_phone:"",
        weixin:"",
        marriage:"",
        marriages: [
          {
            value: '0',
            label: '未婚'
          },
          {
            value: '1',
            label: '离异无孩'
          },
          {
            value: '2',
            label: '离异有孩'
          }
        ],
        habit:"",
        family:"",
        interest:"",
        character:"",
        future_plan:"",
        values:"",
        love_view:"",
        best_wish:"",
        best_height:"",
        is_divorce:"",
        divorce: [
          {
            value: '0',
            label: '接受有孩'
          },
          {
            value: '1',
            label: '接受无孩'
          },
          {
            value: '2',
            label: '不接受'
          }
        ],
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
    eduChange(val) {
     
    }, 
    nextStep (){
      let go = 0
      this.$refs.editForm.validate((valid) => {
        if(valid){
          go = 1
        }else{
          go = 0
        }
      })
      if (go == 0){
        return
      }
     this.page++
    },
    lastStep() {
      this.page--
    },
    save(){

    },
    handlePicPreview(file){
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      this.fileList.map((item,index)=>{
        if(item.uid==file.uid){
          this.fileList.splice(index,1)
        }
      })
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },

    otherSectionFile(file){
      const typeArr = ['image/png', 'image/gif', 'image/jpeg', 'image/jpg'];
        const isJPG = typeArr.indexOf(file.raw.type) !== -1;
        const isLt3M = file.size / 1024 / 1024 < 3;
        if (!isJPG) {
          this.$message.error('只能是图片!');
          this.$refs.upload.clearFiles();
          this.otherFiles = null;
          return;
        }
        if (!isLt3M) {
          this.$message.error('上传图片大小不能超过 3MB!');
          this.$refs.upload.clearFiles();
          this.otherFiles = null;
          return;
        }
        this.otherFiles = file.raw;
        // FormData 对象
        var formData = new FormData();
        // 文件对象
        formData.append('file', this.otherFiles);
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        methods: 'post'
      }
      this.axios.post("/api/upload/getObjectId",formData,config).then(res=>{
        this.fileList.push(file)
        if(res.data.flag == 'S'){
            this.otherPhotoObj = res.data.data.objectId
            this.otherPhoto = res.data.data.url
            this.otherLicense.push({
              certificationName: this.form.certificationName,
              certificationObj: this.otherPhotoObj,
              certificationUrl: this.otherPhoto
            })
        }else{
          this.$message.error(res.data.message)
        }
      })
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
 .edit-one .margin-top {
    margin-top: 20px;
  }
 .edit-one /deep/  .el-form-item {
    margin-bottom: 22px;
 }
 .edit-two /deep/  .el-form-item {
    margin-bottom: 5px;
 }
 .edit-three /deep/  .el-form-item {
    margin-bottom: 22px;
 }
 .el-select .el-input /deep/ .el-input__inner {
    border-top-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 1px;
  /*outline: medium;*/
  }
  .bar {
    height: 20px;
    width: 100%;
  }
  .title-left {
    text-align: left;
  }
  .title-botton-center {
    text-align: center;
  }
  .title-1 span{
    font-weight: 700;
  }
  .title-2 {
    margin-top: 12px;
  }
  /*body /deep/ #app {
    margin-top: 0px;
  }*/

  .avatar-uploader /deep/ .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 180px;
    height: 180px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar-uploader /deep/ .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 180px;
    height: 180px;
    margin: 0 8px 8px 0;
    display: inline-block;
  }

</style>