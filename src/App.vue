<template>	 
  <div id="app"> 	 	
   	<keep-alive>
 	<div class="app_main">
  	<!-- 首页头部 -->
    <CommonHeader />
   <!--  中间滑动部分 -->

   	<article>
   	<!-- 分页 -->
   	
 	<swiper :options="swiperOption" class="swiper-wrap"  ref="mySwiper">
    <swiper-slide> <a href=""><img src="////cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9129d21aed81442ca895893ada045f6b.jpg" style="width:3.75rem"></a></swiper-slide>
    <swiper-slide> <a href=""><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eb593edf5a947a8684e7a7653833ec62.jpg?thumb=1&w=375&h=188" style="width:3.75rem"></a></swiper-slide>
    <swiper-slide> <a href=""><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ab453ec1f74c1706ac3a20796699c20e.jpg?thumb=1&w=375&h=188" style="width:3.75rem"></a></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
	    <!-- 导航 -->
    <div class="nav">
    	<a href=""><img src="//i8.mifile.cn/v1/a1/6d64ef02-bb5c-da49-45cb-7d6861885b29!144x152.webp"></a>
    	<a href=""><img src="//i8.mifile.cn/v1/a1/d29e748c-0177-5b4c-d2ab-401070713bac!144x152.webp"></a>
    	<a href=""><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/9173298cc0297ce1803c43485e525358.jpg?thumb=1&w=144&h=152"></a>
    	<a href=""><img src="//i8.mifile.cn/v1/a1/e560f98a-48bb-25a1-daa2-72bff8cc7c69!144x152.webp"></a>
    	<a href=""><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/938f75d98244629b0d29bfc9c4323f8d.png?thumb=1&w=144&h=152"></a>
    </div>
    <!-- 分割线 -->
    <div class="line"></div>
    <!-- 模块 -->
  	<div class="module_1">
  		<div class="module_1_l">
  			<a href=""><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/d9470e257a855aa12474440641fd51bd.jpg?thumb=1&w=358&h=508"></a>
  		</div>
  		<div class="module_1_r">
  			<a href=""><img src="//i8.mifile.cn/v1/a1/df7aedc3-dd41-a423-a982-a2a7c547894e!358x252.webp"></a>
  			<a href=""><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fbee33a0c4133673168025bb8342e3f4.jpg?thumb=1&w=358&h=252"></a>
  		</div>
  	</div>
	
	<div class="module_2">
		<a href=""><img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8b3975d7a2b253dd69cbdba342c3fd68.jpg?thumb=1&w=720&h=280"></a>
	</div>

	 <!-- 分割线 -->
    <div class="line"></div>
	<!-- 闪购 -->
	<div class="seckill_box">
		<div class="seckill_header">
			<img src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/646a4297e4bdddc33462ad2de3cbcd20.jpg?w=1080&h=120&bg=FFFFFF">
		</div>
		<!-- 轮播 -->
		<div class="seckill_body">
			<a v-for="(item,index)  in list" class="seckill_item">
				<div class="img_box">
					<img v-bind:src="item.pic">
				</div>
				<div class="info_box">
					<span class="span_1">￥{{item.price}}</span>
					<span class="span_2">￥{{item.orprice}}</span>
				</div>
			</a>
		</div>
	</div>

 <!-- 分割线 -->
    <div class="line"></div>

<!-- 更多小米产品 -->
	<div class="box_flex">
		<a href="">
			<span>更多小米产品 ></span>
		</a>
	</div>

 <!-- 分割线 -->
    <div class="line"></div>

	<div class="else_product_1">
		<a href=""><img src="//i8.mifile.cn/v1/a1/46c44f3e-479d-a999-dd2d-98fb39b51e17!358x480.webp"></a>
		<a href=""><img src="//i8.mifile.cn/v1/a1/f938ae9f-e54a-1fa1-a52d-62dfe534b579!358x480.webp"></a>
	</div>

	<div class="else_product_2">
		<a href=""><img src="//i8.mifile.cn/v1/a1/1a8f5c31-f50c-5be0-3df0-f2c5c839e345!358x480.webp"></a>
		<a href=""><img src="////i8.mifile.cn/v1/a1/8cfcd654-4af5-9ae6-c6cc-1ba9d28be8e8!358x480.webp"></a>
	</div>
   	</article>

 	<!-- 底部 -->
	 <CommonFooter />
    </div>

	<!-- 路由 	 -->   
	<router-view/>
    </keep-alive>
  </div>

</template>

<script src="./ap.js">

</script>

<style src="../css/app.css" >

</style>

