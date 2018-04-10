 <!--左边菜单-->
 <template>

    
    <div class="slider padding-no">
        <el-col :span="24" class="sliderclid">
            <el-menu
            :default-active="currentRouter"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose" unique-opened router>
           <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu> -->
            
            <template v-for="vo in list">
                <template v-if="vo.children">
                    <el-submenu  :index="vo.index" >
                        <template slot="title">
                        <i :class="vo.icon"></i>
                        <span>{{vo.name}}</span>
                        </template>
                        <el-menu-item v-for="(voo,item) in vo.children" :index="voo.url">{{voo.name}}</el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                        <el-menu-item :index="vo.index">
                            <i :class="vo.icon"></i>{{vo.name}}
                        </el-menu-item>
                </template>
            </template>
            </el-menu>
        </el-col>
    </div>
 </template>
<script>
var list = [
    {
        'index':'1',
        'name':'表单',
        'children':[
            {'name':'基本','url':'form'},
            {'name':'编辑器','url':'editor'},
            {'name':'文件上传','url':'upload'},
        ],
        'icon':'el-icon-location',
    },
    {
        'index':'2',
        'name':'表格',
        'children':[
             {'name':'基本','url':'table'},
        ],
        'icon':'el-icon-error',
    },
    {
        'index':'charts',
        'name':'图表',
        'icon':'el-icon-location',
    },
    
];
export default {
    data(){
        return {
            list:list
        }
    },
    computed:{
        currentRouter(){
            return this.$route.path.replace('/','');
        }
    },
    methods:{
         handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

 <style lang="scss" scoped>
 .slider{
     position:absolute;
     top:60px;
     left:0;
     
     width:200px;
     bottom:0;
 }
 .sliderclid{
     height:100%;
 }
 .el-menu{
     background-color: rgba(242, 242, 242,1);
     height:100%;
     li{
         
          background-color: rgba(248, 248, 248, 1);
         
     }
     .el-submenu__title{
         background-color: rgba(248, 248, 248, 1);
         border-bottom:1px solid #E5E5E5;
         &:hover,&:active{
             background-color:white;
         }
     }
     
 }
 .el-menu--inline{
    
        li{
            background-color: white;
            border-bottom:1px dotted #e4e4e4;
             border-right: 1px solid #e6e6e6 !important;
        }
         
     }
 </style>
 
 