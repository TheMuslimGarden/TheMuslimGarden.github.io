var SideOpen=false;
docuument.body.innerHTML+='<img style="z-index:100000000000000;" src="https://docs.google.com/drawings/d/e/2PACX-1vSGyAywLGZVf-tFE0EQH_WgLkxt9__Qndh8fiM0EmkxacUzF4Z5RupsrV_uz_PpjP4ftEJXC9Dq_T_9/pub?w=144&amp;h=100" width="1vw" id="options">';
document.body.innerHTML+='<div id="LinkedOptons" style="z-index:99999999999999; width:200px; overflow-y:auto;"><ul style="list-style-type:none;"><li><a href="https://themuslimgarden.github.io/">Home</a></li><li><a href="https://themuslimgarden.github.io/Videos">Videos</a></li><li><a href="https://themuslimgarden.github.io/Islamic%20History">Islamic History</a></li><li><a href="https://themuslimgarden.github.io/Daily%20Reminder">Daily Reminder</a></li><li><a href="https://themuslimgarden.github.io/Daily%20Ayah">Daily Ayah</a></li><li><a href="https://themuslimgarden.github.io/Islamic%20Fun">Islamic Fun</a></li><li><a href="https://themuslimgarden.github.io/Help%20The%20Ummah">Help the Ummah</a></li><li><a href="https://themuslimgarden.github.io/About%20Us">About Us</a></li></ul></div>';                                                        
var Options=document.getElementById("options");
var Links=document.getElementById("LinkedOptons");
Options.addEventListener("click",function(){if(!SideOpen){
SideOpen=true;
}else{SideOpen=false;}
Links.style.opacity=SideOpen?1:0;
});
