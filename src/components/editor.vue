<template>
    <el-row>
        <div class="plugins-tips">
            Vue-Quill-Editor：基于Quill、适用于Vue2的富文本编辑器。
            访问地址：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a>
        </div>
        
        <quill-editor ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </el-row>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor';
export default {
    data: function(){
            return {
                content: '<p>Vue-Quill-Editor</p>',
                editorOption: {
                    // something config
                }
            }
        },
        components: {
            quillEditor
        },
        methods: {
            onEditorChange({ editor, html, text }) {
                this.content = html;
            },
            submit(){
                console.log(this.content);
                this.$message.success('提交成功！');
            }
        },
        computed: {
            editor() {
                return this.$refs.myTextEditor.quillEditor
            }
        }
}
</script>
<style lang="scss" scoped>
.editor-btn{
    margin-top:20px;
}

</style>
