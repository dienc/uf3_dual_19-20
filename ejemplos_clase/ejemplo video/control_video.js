function inicio(){
	alert("inicio");
       var boton_play = document.getElementById("play");
       var boton_restart = document.getElementById("restart");
       var boton_fwd = document.getElementById("fastFwd");
       var boton_rew = document.getElementById("rew");
       boton_play.addEventListener("click",play,false);
       boton_restart.addEventListener("click",restart,false);
       boton_fwd.addEventListener("click",forw,false);
       boton_rew.addEventListener("click",rever,false);	
	}    
function play() {
       var video = document.getElementById("medio");
       var button = document.getElementById("play");
//     alert(video.paused);
       if (video.paused) {
          video.play();
          button.textContent = "||";
       } else {
          video.pause();
          button.textContent = ">";
       }
    }

    function restart() {
        var video = document.getElementById("medio");
        video.currentTime = 0;
//      alert("restart "+video.currentTime);
    }
function forw(){
	skip(10);	
	}
function rever(){
	skip(-10);	
	}
	
    function skip(value) {
        var video = document.getElementById("medio");
        video.currentTime += value;
//      alert("skip "+video.currentTime);
    }      
window.addEventListener("load",inicio,false);    