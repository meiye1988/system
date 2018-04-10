<template>
    <el-row>
        <div class="plugins-tips">
           自带emelent上传功能
        </div>
        <el-upload
            class="upload-demo"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :on-error="error">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <div class="plugins-tips" style="margin-top:20px;">
           Vue-Core-Image-Upload 支持裁剪图片上传，地址是<a href="https://github.com/Vanthink-UED/vue-core-image-upload" target="_blank">Vue-Core-Image-Upload</a>

        </div>
        <vue-core-image-upload
            :class="['pure-button','pure-button-primary','js-btn-crop']"
            :crop="true"
            text="上传图片"
            @imageuploaded="imageuploaded"
            :max-file-size="5242880"
            extensions="png,gif,jpeg,jpg"
            url="/api/post" >
        </vue-core-image-upload>
    </el-row>
</template>

<script>
import VueCoreImageUpload  from 'vue-core-image-upload';
export default {
   data(){
        return {
            
        }
    },
        components: {
            'vue-core-image-upload': VueCoreImageUpload
        },
        methods: {
            imageuploaded(res) {
                console.log("上传后获取服务器返回的数据");
                if (res.errcode == 0) {
                    
                    
                }
            },
            error:function(){
                console.log("error");
            }
        },
        computed: {
            
        }
}
</script>
<style lang="scss" scoped>

.g-core-image-upload-btn {
    position: relative;
    overflow: hidden;
}
.pure-button {
    background: #20a0ff;
}

.pure-button {
    width: 150px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 3px;
}
</style>
