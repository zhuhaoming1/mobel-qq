require.config({
    paths: {
        "jquery": "../js/jquery.min",
        "zepto": "../js/zepto.min"
    }
});

require(["../js/change-page", "../js/render-page", "../js/insterests", "../js/api","../js/dynamic","../js/near"], function() {

    function hengshuping(){
        window.location.reload();
    }
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
    
    /*window.addEventListener('orientationchange', function(event) {
        //console.log(window.screen.width)
        if (window.screen.width>450) {
            document.querySelector("body").style.height=window.screen.height;
        }else{
            
        }
    });*/
    
})