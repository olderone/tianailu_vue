<template>
  <div class="home">
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col>
            <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
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
               
              </el-submenu>
               
            </el-menu>
          </el-col>
          
        </el-row>
      </el-aside>
      <el-main>
        222
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  },
};
</script>

<style scoped>
.home {
}
</style>
