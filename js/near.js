/* 
* @Author: Marte
* @Date:   2016-08-15 10:36:13
* @Last Modified by:   Marte
* @Last Modified time: 2016-08-16 22:43:13
*/

define(["../js/iscroll-probe"],function(is){
    if(location.href.indexOf("near")==-1) return;
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    var refreshDom=$("<div class='refresh'><span></span></div>");
    var myScroll=new is("#nman",{
            "click":true,
            probeType: 2,
            momentum: false,//关闭惯性滑动
            mouseWheel: true //鼠标滑轮开启
        });
        
    myScroll.on("scroll",function(){
        if(this.y>60){
            $(".nman").prepend(refreshDom);
            setTimeout(function(){
                $(".nman>.refresh").remove()
            },2000)
            
        }else if(this.y < (this.maxScrollY - 40)){
            $(".nman #scroller").find(".refresh").html("<span></span>");
            setTimeout(function(){
               // $(".nman .refresh").remove()
            },2000)
        }
        
    })
    myScroll.on("scrollEnd",function(){
        
    });
    
    
})