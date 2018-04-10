 <!--顶部-->
<template>
  <el-row class="header">
      <el-col :span="12" class="left">
          管理后台系统
      </el-col>
      <el-col :span="12">
          <div class="person t-right">
              <img src="@/assets/user.jpg" alt="">
              <span class="userinfo">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link fontwhite">
                        欢迎您<i class="el-icon-caret-bottom el-icon--right fontwhite"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="loginout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                    </el-dropdown>
              </span>
          </div>
      </el-col>
  </el-row>
</template>
<script>
export default {
    methods:{
        loginout(){
            this.$router.push("/login");
        }
    }
}
</script>
<style lang="scss">

.header{
    position: relative;
    height:60px;
    line-height: 60px;
    background-color: rgba(67,142,185,1);
    color:$fontwhite;
    .left{
        padding-left:10px;
    }
    .person{
        padding-right:20px;
        img{
            margin: -4px 8px 0 0;
            border-radius: 100%;
            border: 2px solid #FFF;
            max-width: 40px;
        }
    }
}
</style>

