<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col>
            <el-menu :default-active="activeIndex" class="el-menu-vertical-demo"  @select="handleSelect">
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span >首页</span>
              </el-menu-item>
               <el-submenu index="2">
                 
                <template slot="title">
                  <i class="el-icon-menu"></i>
                <span >客户管理</span>
                </template>
                <el-menu-item index="2-1">客户信息管理</el-menu-item>
                <el-menu-item index="2-2">意向客户</el-menu-item>
                <el-menu-item index="2-3">会员管理</el-menu-item>
              </el-submenu>
            </el-menu>
          </el-col>
          
        </el-row>
      </el-aside>
      <el-main>
        <div v-if="currentTab == 1" class="client-wrap">
          <div class="client-item">客户：</div>
          <div class="client-item">意向客户：</div>
          <div class="client-item">会员：</div>
        </div>
        <div v-if="currentTab == '2-1'">
          客户信息管理
        </div>
        <div v-if="currentTab == '2-2'">
          意向客户
        </div>
        <div v-if="currentTab == '2-3'">
          会员管理
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      currentTab: '1'
    };
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       handleSelect(key, keyPath) {
         this.currentTab = key;
        console.log(this.activeIndex, keyPath);
      }
  },
};
</script>

<style scoped>
.home {
}
.client-wrap{
  display: flex;
}
.client-item{
  /* width: 200px; */
  flex: 1;
  height: 280px;
  background: red;
  margin-left: 5px;
} 
</style>
