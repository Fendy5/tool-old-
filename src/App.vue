<template>
  <div id="app">
    <el-header>
      <el-row type="flex" justify="space-between" :gutter="20">
        <el-col :span="8">
          <div class="logo">
            <router-link to="/">
              <img src="@/assets/images/logo-1.png" alt="logo">
            </router-link>
          </div>
        </el-col>
        <el-col :span="16">
          <el-menu router mode="horizontal" >
            <el-menu-item index="/string">随机字符串</el-menu-item>
            <el-submenu index="1">
                <template slot="title">JSON工具</template>
                <el-menu-item index="/question">格式化json</el-menu-item>
                <el-menu-item index="/form">压缩json</el-menu-item>
                <el-menu-item index="/vote">转义json</el-menu-item>
            </el-submenu>
            <el-submenu  index="3">
              <template slot="title">
                <span class="nickname">二维码</span>
              </template>
              <el-menu-item index="/my_profile">生成二维码</el-menu-item>
              <el-menu-item index="/upgrade">二维码解析</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </div>
</template>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  .el-header {
    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(32,33,36,.28);
    height: 72px;
  }
  .el-row{
    height: 100%;
  }
  .logo {
    height: 100%;
    img {
      width: 300px;
      line-height: 60px;
      height: 60px;
    }
  }


</style>
