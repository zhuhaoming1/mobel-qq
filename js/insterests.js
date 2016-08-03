define(["zepto"],function (zepto){
	/*var picPlay=function (opt){
			this.ele=opt.ele;
			this.lis=this.ele.querySelectorAll("li");
			this.addevent();
			this.totry()
	}
	picPlay.prototype={
		totry:function(){
			console.log(this.lis)
		},
		addevent:function (){
			for(var i=0;i<this.lis.length;i++){
				console.log(this.lis[i])
			}
			var that=this;
			this.ele.addEventListener("click",function (e){
				var target=e.target.parentNode.parentNode;
					target.style.left="-100%";	
					var last=Array.apply(null,that.lis).slice(that.lis.length-1);
					that.lis[0].parentNode.insertBefore(last[0],that.lis[0])	
			})
		}
	}*/
	/*var play=new picPlay({
		ele:document.querySelector(".banner")
	})*/
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
	//setTimeout(function(){
		setInterval(function(){
			idx--
			if(idx<0){idx=4}
			//setTimeout(function(){
				move($(ele[idx]),-1)
			//},1000)
			
		},2500)
	//},1000)
	
		
	function move(that,tag){
		that.animate({"left":tag*100+"%","opacity":0},1500,"",function(){
			that.prependTo($(".ban"))
			that.css({"left":0,"opacity":1})
		})
	}
})