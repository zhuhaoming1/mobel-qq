/* 
 * @Author: Marte
 * @Date:   2016-08-03 22:44:07
 * @Last Modified by:   Marte
 * @Last Modified time: 2016-08-13 10:01:59
 */

define(["jquery"], function($) {

    if (window.location.href.indexOf("photo.html") == -1) return;
    //调用摄像头
        var video = document.getElementById("video");
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");

        var errocb = function() {
            console.log('sth wrong!');
        }
        if (navigator.getUserMedia) { // 标准的API
            navigator.getUserMedia({
                "video": true
            }, function(stream) {
                video.src = stream;
                video.play();
            }, errocb);
        } else if (navigator.webkitGetUserMedia) { // WebKit 核心的API
            navigator.webkitGetUserMedia({
                "video": true
            }, function(stream) {
                video.src = window.webkitURL.createObjectURL(stream);
                video.play();
            }, errocb);
        }

        document.getElementById("picture").addEventListener("click", function() {
            context.drawImage(video, 0, 0, 100, 100);
            $(".pic").css("z-index",9);
        });
    
   
  
    

})