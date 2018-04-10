<template>
    <div>
        <div class="handle-box">
            <el-select v-model="select_sex" placeholder="选择性别" class="handle-select mr10">
                <el-option key="1" label="不选择" value=""></el-option>
                <el-option key="2" label="男" value="男"></el-option>
                <el-option key="3" label="女" value="女"></el-option>
            </el-select>
            <el-input v-model="select_word" placeholder="搜索学生名字" class="handle-input mr10"></el-input>
            <el-button type="primary" icon="search" @click="search">搜索</el-button>
        </div>
        <el-table :data="data" border style="width: 100%" ref="multipleTable" >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="name" label="学生名字"  width="150">
            </el-table-column>
            <el-table-column prop="age" label="年龄" sortable width="120">
            </el-table-column>
            <el-table-column prop="sex" label="性别" >
            </el-table-column>
            <el-table-column prop="score" label="分数" >
            </el-table-column>
            <el-table-column label="操作" width="180">
                <template scope="scope">
                    <el-button size="small"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="small" type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="pagination">
            <el-pagination
                    @current-change =""
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            url: './static/getList.json',
            tableData: [],
            cur_page: 1,
            multipleSelection: [],
            select_sex: '',
            select_word: '',
            del_list: [],
            is_search: false
        }
    },
    created(){
        this.getData();
    },
    computed:{
       
        data(){
             var self = this;
            var getList = this.tableData.filter(function(list){
                var is_sex = false;
                var is_word = false;
                if(self.select_sex!="" && self.select_sex!=undefined){
                    is_sex = true;   
                }
                if(self.is_search && self.select_word!="" && self.select_word!=undefined){
                    console.log("123");
                    is_word = true;
                    
                }
                if(is_sex && is_word){
                    if(self.select_sex==list.sex && self.select_word==list.name){
                        return list;
                    }
                }else if(!is_sex && is_word){
                    if(self.select_word==list.name){
                        return list;
                    }
                }else if(is_sex && !is_word){
                    if(self.select_sex==list.sex){
                        return list;
                    }
                }else{
                    return list;
                }
                
            });
            self.is_search = false;
            return getList;
        }
    },
    methods:{
        getData(){
            let self = this;
            // if(process.env.NODE_ENV=="development"){
            //     self.url = '/em/example/getList';
            //     self.$axios.post(self.url, {page:self.cur_page}).then((res) => {
            //         console.log(res.data.data);
            //         self.tableData = res.data.data;
            //     })
            // }else{
                self.$axios.get(self.url, {page:self.cur_page}).then((res) => {
                    console.log(res);
                    self.tableData = res.data.data;
                })
            //}
            
            
        },
        handleEdit(index,row){
            this.$message('编辑第'+(index+1)+'行');
        },
        search(){
            this.is_search = true;
        },
        handleDelete(index,row){
            this.$message('删除第'+(index+1)+'行');
        },
        
      
    }
}
</script>
<style lang="scss" scoped>
.handle-box{
    margin-bottom: 20px;
}
.handle-select{
    width: 120px;
}
.handle-input{
    width: 300px;
    display: inline-block;
}
</style>

