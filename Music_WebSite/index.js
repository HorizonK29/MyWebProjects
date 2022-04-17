let song=document.getElementById("song");
let icon=document.getElementById("icon");
icon.onclick=function(){
if(song.paused)
{
    song.play();
    icon.src="./pause.png";
}
else{
    song.pause();
    icon.src="./play.png";
}

}