define(["zepto","../js/api"],function (zepto){

	var tag=0,startx=0,movex=0;
	
	$(".ban").on("touchstart","li",function(e){
		var e=e || window.event;
			startx=e.touches[0].pageX;
		
	})
		.on("touchmove","li",function(e){
			var e=e || window.event;
			movex=e.touches[0].pageX;

		})
		.on("touchend","li",function(e){
			if(movex-startx>0){
				tag=1;
				console.log(movex-startx)
			}
			if(movex-startx<0){
				tag=-1;
				console.log(movex-startx)
			}
			move($(this),tag)
		})
	var idx=5;
	var ele=$(".ban").find("li");
		setInterval(function(){
			idx--
			if(idx<0){idx=4}
				move($(ele[idx]),-1)
		},2500)
	
		
	function move(that,tag){
		that.animate({"left":tag*100+"%","opacity":0},1500,"",function(){
			that.prependTo($(".ban"))
			that.css({"left":0,"opacity":1})
		})
	}
})