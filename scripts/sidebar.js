var SideOpen=false;
var Options=document.getElementById("options");
docuument.body.innerHTML+='<img src="https://docs.google.com/drawings/d/e/2PACX-1vSGyAywLGZVf-tFE0EQH_WgLkxt9__Qndh8fiM0EmkxacUzF4Z5RupsrV_uz_PpjP4ftEJXC9Dq_T_9/pub?w=144&amp;h=100" width="1vw" id="options">';
Options.addEventListener("click",function(){if(!SideOpen){
SideOpen=true;
}else{SideOpen=false;}

});
