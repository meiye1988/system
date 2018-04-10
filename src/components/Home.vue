<template>
  <div id="app">
    <div class="maincontent">
		<PageHeader></PageHeader>
		<PageSlider></PageSlider>
		<router-view  class="content"></router-view>
		</div>
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader'
import PageSlider from '@/components/PageSlider'
export default {
  name: 'App',
  components:{
    'PageHeader':PageHeader,
    'PageSlider':PageSlider,

  }
}
</script>

<style scoped>
*{
	  padding:0;
  margin:0;
}
body,#app,html,.maincontent{

        width: 100%;
    height: 100%;
    overflow: hidden;
}
.content{
	position:absolute !important;
	top:60px;
	left:200px;
	bottom:0;
	right:0;
    width: auto;
    padding: 40px;
    box-sizing: border-box;
    overflow-y: scroll;

}

.el-header{
	padding:0;
}
</style>

