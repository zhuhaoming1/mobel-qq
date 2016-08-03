define(["jquery"],function($){
	$(function(){
		init()
		function init(){
			addEvent()
		}
		function addEvent(){
			$('footer').on("click","a",function(e){
						
				var e=event || window.event;
				
				e.preventDefault();
				var id=$(this).attr('href');
				changePage($(this))
				
			})
		}
		

		function changePage(that){
			var id=that.attr('href');
			$(id)
				.css({
					'left':'0'
				})
				.siblings('section').css('left','100%');
			
			that.parent().addClass('nowa').siblings().removeClass('nowa')
			changeHeader(id,that)
		}
		function changeHeader(id,that){
			if(id=="#main"){
				$(".box").html($('<div class="header-tab"><span class="msg on">消息</span><span class="tel">电话</span></div>'));
				$(".add-friend").html("＋").removeClass('boxa');
			}
			if(id=="#friend-list"){
				$(".box").html($('<h1>'+that.data("title")+'</h1>'));
				$(".add-friend").html("添加").addClass('boxa');
			}
			if(id=="#news"){
				$(".box").html($('<h1>'+that.data("title")+'</h1>'));
				$(".add-friend").html("更多").addClass('boxa');
			}
		}
		
	})
})
