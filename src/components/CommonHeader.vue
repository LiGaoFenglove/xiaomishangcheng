<template>

	<header>
		
		<div class="header_top">
			<div class="header_l">
				<div class="header_l_img">
				<img src="../../static/images/header/1.png">
				</div>
			</div>
			<div class="header_c">
				<div class="header_c_input">
					<i class="header_c_i iconfont icon-sousuo"></i>搜索商品名称
				</div>
			</div>
			<div class="header_r">
				
					<i class=" iconfont icon-ren"></i>
				
			</div>
		</div>
		<div class="header_nav">
			<!-- <li><span class="span_1" v-bind:class="{'span_1':isA,'class':!isA}" @click="toggle">推荐</span></li>
			<li><span>女神节</span></li>
			<li><span>智能</span></li>
			<li><span>电视</span></li>
			<li><span>电脑</span></li>
			<li><span>手机</span></li>
			<li><span>全面屏</span></li>
			<li><span>生活周边</span></li>
			<li><span>盒子</span></li>
			<li><span>艺术</span></li> -->
			<li v-for="(item,index)  in name">
				<span @click="movebg(item,index)">{{item.name}}</span>
			</li>
			
		</div>

	</header>
	
</template>

<script>
	export default {
		name: "CommonHeader",
    data:function(){  
        return {  
        	
           	name : [
           		{name:"推荐",id : 1},
           		{name:"女神节",id : 2},
           		{name:"智能",id : 3},
           		{name:"电视",id : 4},
           		{name:"电脑",id : 5},
           		{name:"手机",id : 6},
           		{name:"全面屏",id : 7},
           		{name:"生活周边",id : 8},
           		{name:"盒子",id : 9},
           		{name:"艺术",id : 10}

           ]
        }
    },  
    methods:{
    	movebg(item, index) {
           
                let selfLeft = docum78ent.querySelectorAll(".header_nav li")[index]
                selfLeft.setAttribute('class','span_2');
                this.id = item.id
            }
    }
}
</script>

<style scoped="scoped" src="../../css/header.css">

</style>