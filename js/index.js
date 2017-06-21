

//设置宽度和高度
$(function(){
	$('.screen').width(window.innerWidth)
	$('.screen').height(window.innerHeight)
	$('.screen1').height(window.innerHeight - 65)
	$('.screen1').css('margin-top',65)


	//导航效果
	$('.nav li').hover(function(){
		$(this).addClass('current').siblings().removeClass('current')
		$(this).find('.downMenu').fadeIn()
	},function(){
		$(this).removeClass('current')
		$(this).find('.downMenu').fadeOut()
	})
})



//第一屏特效
$(function(){
	//设置轮播图的高度
	var h = $('#slide li img').height();
	$('#slide,#slide ul,#slide li').height(h);

	//大轮播图
	var current = 0;
	var timer = null;
	var wid = window.innerWidth;
	
	//设置图片的初始位置
	$('#slide ul li').css({
		'left': - wid,
		'z-index':1
	})
	$('#slide ul li').eq(0).css({
		'left': 0,
		'z-index':10
	})

	//设置图片文字的位置
	$('#slide ul li .slider_text').css({
		'left': 0,
		'opacity': 0
	})
	$('#slide ul li').eq(0).find('.slider_text').stop().animate({'left':700,'opacity': 1},500)

	timer = setInterval(function(){
		move(current>= $('#slide ul li').length-1? 0 : current+1 )
	}, 2000)


	//获取文字的初始位置
	var H3Left = 700;
	function move(index){
		if(index == current) return;
		//找到正在运动的图片下的文字 设置文字运动开始的初始位置
		$('#slide ul li').eq(index).find('.slider_text').css({'left':-H3Left,'opacity': 0})
		//当前图片运动走
		$('#slide ul li').eq(current).stop().animate({'left': -wid,'z-index': 1},1000)
		//index图 先移动到左边 再运动过来
		$('#slide ul li').eq(index).css({'left': wid,'z-index': 1}).stop().animate({'left': 0,},500);
		//让文字也开始运动
		setTimeout(function(){
			$('#slide ul li').eq(index).find('.slider_text').stop().animate({'left': H3Left,'opacity':1},700)
		},300)
		//修改小圆点的className
		$('.circle span').eq(index).addClass('current').siblings().removeClass('current')
		//把正在运动的索引值赋值给cur
		current = index;
	}


	//新闻轮播
	var i = 0;
	var newsTimer = null;
	var newsLiH = $('.smallSlider ul li').height();
	newsTimer = setInterval(function(){
		i++;
		newsMove();
	},2000)
	 $('.smallSlider').hover(function(){
	 	clearInterval(newsTimer)
	 },function(){
	 	newsTimer = setInterval(function(){
			i++;
			newsMove();
		},2000)
	 })
	function newsMove(){
		if(i >= $('.smallSlider ul li').length){
			i = 1;
			$('.smallSlider ul').css('top',0)
		}
		$('.smallSlider ul').stop().animate({'top':-i*newsLiH},500)
	}
})


//第二屏特效
$(function(){
	
	var liNum = 0
	//tab效果
	$('.screen2 .newsList a').click(function(){
		liNum = 0;
		$(this).addClass('cur').siblings().removeClass('cur');
		$('.screen2 .newslist1').eq($(this).index()).show().siblings().hide()
	})
	//点击切换
	$('.screen2 .newslist1').attr('linum',liNum)
	$('.screen2 .newslist1 .rightArrow').click(function(){
		liNum++;
		console.log(liNum)
		screen2Move(this);
	})
	$('.screen2 .newslist1 .leftArrow').click(function(){
		liNum;
		screen2Move(this);
	})

	function screen2Move(obj){
		var liSLen = $(obj).siblings('.list_news').find('ul li').length
		if(liNum > liSLen-4){
			liNum = 1;
			$(obj).siblings('.list_news').find('ul').css('left',0)
		}
		if( liNum < 0){
			liNum = liSLen- 5;
			$(obj).siblings('.list_news').find('ul').css('left',-(liSLen-4)*$('.screen2 .newslist1 li').outerWidth(true))		
		}
		$(obj).siblings('.list_news').find('ul').stop().animate({'left':-liNum*$('.screen2 .newslist1 li').outerWidth(true)},500)
	}
})


//第三屏特效
$(function(){
	//tab效果
	var lisNum = 0;
	$('.screen3 .productList a').click(function(){
		lisNum = 0;
		$(this).addClass('curr').siblings().removeClass('curr');
		$('.screen3 .proList1').eq($(this).index()).show().siblings().hide()
	})

	//点击切换
	
	$('.screen3 .proList1 .rightArrow').click(function(){
		lisNum++;
		screen3Move(this);
	})
	$('.screen3 .proList1 .leftArrow').click(function(){
		lisNum--;
		screen3Move(this);
	})

	function screen3Move(obj){
		var liSLen = $(obj).siblings('.pro_info').find('ul li').length
		console.log(liSLen)
		if(lisNum > liSLen-4){
			lisNum = 1;
			$(obj).siblings('.pro_info').find('ul').css('left',0)
		}
		if( lisNum < 0){
			lisNum = liSLen- 5;
			$(obj).siblings('.pro_info').find('ul').css('left',-(liSLen-4)*$('.screen3 .pro_info li').outerWidth(true))		
		}
		$(obj).siblings('.pro_info').find('ul').stop().animate({'left':-lisNum*$('.screen3 .pro_info li').outerWidth(true)},500)
	}
})

//第四屏特效
$(function(){
	//点击切换
	var num = 0;
	$('.screen4 .serList1 .rightArrow').click(function(){
		num++;
		screen3Move(this);
	})
	$('.screen4 .serList1 .leftArrow').click(function(){
		num--;
		screen3Move(this);
	})

	function screen3Move(obj){
		var liSLen = $(obj).siblings('.ser_info').find('ul li').length
		console.log(liSLen)
		if(num > liSLen-4){
			num = 1;
			$(obj).siblings('.ser_info').find('ul').css('left',0)
		}
		if( num < 0){
			num = liSLen- 5;
			$(obj).siblings('.ser_info').find('ul').css('left',-(liSLen-4)*$('.screen4 .ser_info li').outerWidth(true))		
		}
		$(obj).siblings('.ser_info').find('ul').stop().animate({'left':-num*$('.screen4 .ser_info li').outerWidth(true)},500)
	}

})
//全屏滚动
$(function(){


	window.onbeforeunload = function(){
		document.documentElement.scrollTop = 0;
		document.body.scrollTop = 0;
	}

	//当前显示的screen 的索引值
	var current = 0;
	// var nowScrollTop = $('html,body').scrollTop();
	// console.log(nowScrollTop);
	var nowScrollTop = document.body.scrollTop;
	

	var beginTime = 0;
	var endTime = 0;
	var H = window.innerHeight;
	// console.log(H)
	// var ping = height/H;
	// console.log(ping);
	// //设置每一屏动画 的初始位置
	// //第二屏
	// $('.screen2 .newsList').animate({'opacity':0},1500);
	// $('.screen2 .leftArrow').animate({'left':-300},1000);
	// $('.screen2 .rightArrow').animate({'right':-300},1000);
	// //第三屏
	// $('.screen3 .productmain').animate({'left':-1400,'opacity':0},1000)
	// //第四屏
	// $('.screen4 .leftArrow').animate({'left':-300},1000);
	// $('.screen4 .rightArrow').animate({'right':-300},1000);
	// $('.screen4 .ser_info li').eq(0).animate({'left':-288},1000);
	// $('.screen4 .ser_info li').eq(1).animate({'left':-576},1000);
	// $('.screen4 .ser_info li').eq(2).animate({'right':-576},1000);
	// $('.screen4 .ser_info li').eq(3).animate({'right':-288},1000);
	flagScrollTop()

	function flagScrollTop(){
		console.log(nowScrollTop)
		if(nowScrollTop == 0){
			// $('html,body').scrollTop()=0;
			//第二屏
			$('.screen2 .newsList').stop().animate({'opacity':0},1500);
			$('.screen2 .leftArrow').stop().animate({'left':-300},1000);
			$('.screen2 .rightArrow').stop().animate({'right':-300},1000);
			//第三屏
			$('.screen3 .productmain').stop().animate({'left':-1400,'opacity':0},1000)
			//第四屏
			$('.screen4 .leftArrow').stop().animate({'left':-300},1000);
			$('.screen4 .rightArrow').stop().animate({'right':-300},1000);
			$('.screen4 .ser_info li').eq(0).stop().animate({'left':-288},1000);
			$('.screen4 .ser_info li').eq(1).stop().animate({'left':-576},1000);
			$('.screen4 .ser_info li').eq(2).stop().animate({'right':-576},1000);
			$('.screen4 .ser_info li').eq(3).stop().animate({'right':-288},1000);
		}else if(nowScrollTop == H){
			
			//第二屏
			$('.screen2 .newsList').stop().animate({'opacity':1},1500);
			$('.screen2 .leftArrow').stop().animate({'left':0},1000);
			$('.screen2 .rightArrow').stop().animate({'right':0},1000);
			//第三屏
			$('.screen3 .productmain').stop().animate({'left':-1400,'opacity':0},1000)
			//第四屏
			$('.screen4 .leftArrow').stop().animate({'left':-300},1000);
			$('.screen4 .rightArrow').stop().animate({'right':-300},1000);
			$('.screen4 .ser_info li').eq(0).stop().animate({'left':-288},1000);
			$('.screen4 .ser_info li').eq(1).stop().animate({'left':-576},1000);
			$('.screen4 .ser_info li').eq(2).stop().animate({'right':-576},1000);
			$('.screen4 .ser_info li').eq(3).stop().animate({'right':-288},1000);
		}else if(nowScrollTop == 2*H){
			
			//第二屏
			$('.screen2 .newsList').stop().animate({'opacity':0},1500);
			$('.screen2 .leftArrow').stop().animate({'left':-300},1000);
			$('.screen2 .rightArrow').stop().animate({'right':-300},1000);
			//第三屏
			$('.screen3 .productmain').stop().animate({'left':0,'opacity':1},1000)
			//第四屏
			$('.screen4 .leftArrow').stop().animate({'left':-300},1000);
			$('.screen4 .rightArrow').stop().animate({'right':-300},1000);
			$('.screen4 .ser_info li').eq(0).stop().animate({'left':-288},1000);
			$('.screen4 .ser_info li').eq(1).stop().animate({'left':-576},1000);
			$('.screen4 .ser_info li').eq(2).stop().animate({'right':-576},1000);
			$('.screen4 .ser_info li').eq(3).stop().animate({'right':-288},1000);
			
		}else if(nowScrollTop == 3*H){
			current++;
			
			//第二屏
			$('.screen2 .newsList').stop().animate({'opacity':0},1500);
			$('.screen2 .leftArrow').stop().animate({'left':-300},1000);
			$('.screen2 .rightArrow').stop().animate({'right':-300},1000);
			//第三屏
			$('.screen3 .productmain').stop().animate({'left':-1400,'opacity':0},1000)
			//第四屏
			$('.screen4 .leftArrow').stop().animate({'left':0},1000);
			$('.screen4 .rightArrow').stop().animate({'right':0},1000);
			$('.screen4 .ser_info li').eq(0).stop().animate({'left':0},1000);
			$('.screen4 .ser_info li').eq(1).stop().animate({'left':0},1000);
			$('.screen4 .ser_info li').eq(2).stop().animate({'right':0},1000);
			$('.screen4 .ser_info li').eq(3).stop().animate({'right':0},1000);
		}else if(nowScrollTop == 4*H){
			current++;
			console.log(5);
			//第二屏
			$('.screen2 .newsList').stop().animate({'opacity':0},1500);
			$('.screen2 .leftArrow').stop().animate({'left':-300},1000);
			$('.screen2 .rightArrow').stop().animate({'right':-300},1000);
			//第三屏
			$('.screen3 .productmain').stop().animate({'left':-1400,'opacity':0},1000)
			//第四屏
			$('.screen4 .leftArrow').stop().animate({'left':0},1000);
			$('.screen4 .rightArrow').stop().animate({'right':0},1000);
			$('.screen4 .ser_info li').eq(0).stop().animate({'left':-288},1000);
			$('.screen4 .ser_info li').eq(1).stop().animate({'left':-576},1000);
			$('.screen4 .ser_info li').eq(2).stop().animate({'right':-576},1000);
			$('.screen4 .ser_info li').eq(3).stop().animate({'right':-288},1000);
		}
	}

	//下一页
	/*function goToPage(){
		if(current < 0){
			current = 0;
			$('html,body').animate({scrollTop:0},500);
			$('.fix-nav').css({'position':'static'})
		}
		current++;
		nowScrollTop = current*(H-1)
		$('html,body').animate({scrollTop:nowScrollTop},500)
		$('.fix-nav').css({
			'position':'fixed',
			'left':'0',
			'top':'0'
		})
	}*/

	// //滚轮事件
	$(document).on('mousewheel',function(e){
		beginTime = new Date().getTime();
		//console.log(e.originalEvent.wheelDelta)  -120  往下
		
		if(endTime - beginTime <-1000){
			/*console.log(endTime - beginTime)
			console.log(endTime)
			console.log(beginTime)*/
			if(e.originalEvent.wheelDelta < 0){
				nowScrollTop += H;

				if(nowScrollTop >= 4*H){
					nowScrollTop = 4*H
				}
				$('html,body').stop().animate({scrollTop:nowScrollTop},500)
			
			}else if(e.originalEvent.wheelDelta > 0){
			
				nowScrollTop -= H;

				if(nowScrollTop < 0){
				nowScrollTop = 0
				}
				$('html,body').stop().animate({scrollTop:nowScrollTop},500)
				
			}			
			endTime = new Date().getTime()
			flagScrollTop();
		}
		
	})
})



