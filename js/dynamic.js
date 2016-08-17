define(["../js/api"],function(api){
   if(location.href.indexOf("dynamic")==-1) return;
    $(".Dcontainer").scroll(function(e){
       
       console.log($(this).scrollTop())
        $(".Dheader").css("background","rgba(18,183,245,"+0.006695*$(this).scrollTop()+")")
    })
    
  
                
            $(window).on("click",function(e){
                var target=e.target || e.srcElement;
                if(target.className=="pushSay" ){

                    show($(".dialog"),function(){
                        $(".send").on("click",function(){
                            hide($(".dialog"))
                        })
                        $(".dialog").find(".three").on("click",function(){
                            location.href="photo.html";
                        })
                        
                     

                    });
                }else{
                        if(target.className=="sayTo" || target.className=="local-pic"){
                            return;
                        }else{
                            hide($(".dialog"));
                        }
                }
            })
       
    
    function show(ele,callback){
        ele.addClass('show-dialog')
        ele.find("input").focus();
        callback()
    }
    function hide(ele){
        ele.removeClass("show-dialog")
    }

})