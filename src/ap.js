import CommonHeader from './components/CommonHeader'
import CommonFooter from './components/CommonFooter'   
import './assets/iconfont/iconfont.css'   
// import '../static/js/swiper-4.1.6.min.js'
// import '../css/swiper-4.1.6.min.css'   //在main.js里面引用了

export default {
  	name: 'App',
  	  components: {
    	CommonHeader,
   		CommonFooter
 	 	},
 	 	data() {
 	 	      return {
 	 	  		  swiperOption: {
			        pagination: 
			        {el :'.swiper-pagination'}
			        // slidesPerView: 'auto',
			        // centeredSlides: true,
			        // paginationClickable: true,
			        // spaceBetween: 30

			      },
			      list :[
			      	{pic:"//i8.mifile.cn/v1/a1/283c99f6-6900-4a4b-0867-4a864289298b.webp",price :2999 ,orprice :3299 },
	           		{pic:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/44ad6280be473ad4a0e6c002f2e65829.jpg",price :1499 ,orprice :1699 },
	           		{pic:"//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/ffdb26a6a698341bc29ab9e3019c0068.jpg",price :1499 ,orprice :1699 },
	           		{pic:"//i8.mifile.cn/v1/a1/ac6d441d-8ee1-c289-e149-edc1122328ee.webp",price :739 ,orprice :799 },
	           		{pic:"////i8.mifile.cn/v1/a1/48af122b-362c-dae5-8305-899805faf635.webp",price :799 ,orprice :899 },
	           		{pic:"////cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/243edb63108001a950b83548149b1d20.jpg",price :129 ,orprice :199 },
	           		{pic:"//i8.mifile.cn/v1/a1/283c99f6-6900-4a4b-0867-4a864289298b.webp",price :2999 ,orprice :2999 },
	           		{pic:"//i8.mifile.cn/v1/a1/283c99f6-6900-4a4b-0867-4a864289298b.webp",price :2999 ,orprice :2999 },
	           		{pic:"//i8.mifile.cn/v1/a1/283c99f6-6900-4a4b-0867-4a864289298b.webp",price :2999 ,orprice :2999 },
	           		{pic:"//i8.mifile.cn/v1/a1/283c99f6-6900-4a4b-0867-4a864289298b.webp",price :2999 ,orprice :2999 }
			      ]
 	 	      }
 	 	    },

};



