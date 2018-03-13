<template>
	<div id="top">

	<header id="header">
		<div class="header_left">
			<a href="">
				<i class="iconfont icon-fanhui"></i>
			</a>
		</div>
		<div class="header_middle">
			<a>分类</a>
		</div>
		<div class="header_right">
			<a href="#">
				<i class="iconfont icon-sousuo"></i>
			</a>
		</div>
		
	</header>

	
	<!-- 楼梯左侧 -->
	<article >
	<div id="LoutiNav">
		<ul >
			<li>1F <span>服饰</span> </li>
			<li>2F <span>美妆</span> </li>
			<li>3F <span>手机</span> </li>
			<li>4F <span>家电</span> </li>
			<li>5F <span>数码</span> </li>
			<li>6F <span>运动</span> </li>
			<li>7F <span>居家</span> </li>
			<li>8F <span>母婴</span> </li>
			<li>9F <span>食品</span> </li>
			<li>10F <span>图书</span> </li>
			<li>11F <span>服务</span> </li>
			<li class="last">Top</li>
		</ul>
	</div>

	<div id="main">
			<div class="Louti" style="background: #cc0033;">
				服饰
			</div>
			<div class="Louti" style="background: #999933;">
				美妆
			</div>
			<div class="Louti" style="background: #ccff33;">
				手机
			</div>
			<div class="Louti" style="background: #006633;">
				家电
			</div>
			<div class="Louti" style="background: #6666cc;">
				数码
			</div>
			<div class="Louti" style="background: #ff6600;">
				运动
			</div>
			<div class="Louti" style="background: #ffff00;">
				居家
			</div>
			<div class="Louti" style="background: #3333ff;">
				母婴
			</div>
			<div class="Louti" style="background: #ff00cc;">
				食品
			</div>
			<div class="Louti" style="background: #669900;">
				图书
			</div>
			<div class="Louti" style="background: #ff66cc;">
				服务
			</div>

		</div>
	</article>


	<!-- 底部 -->
	<CommonFooter />
	
	</div>
	
</template>

<script>
	import $ from 'jquery'
	import CommonFooter from './CommonFooter'  
	// import  louti from '../../static/js/louti.js'  
	export default {
			name: 'Classify',
			data: function() {
			return {
				
				}
			},
		  	components: {
    			CommonFooter
   			
 	 		},
 	 		methods : {

 	 		}
	} ;
		
</script>

<style  src="../../css/classify.css" >
	/*scoped="scoped"*/
</style>