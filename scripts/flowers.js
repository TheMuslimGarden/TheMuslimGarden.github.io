var flowers=[];
var flower=function(x,y,s,r,col){
this.flower=document.createElement("img");
this.y=y;
this.flower.style.position="fixed";
this.flower.style.top=this.y;
this.flower.style.left=x;
this.flower.style.width=s;
this.flower.style.transform="rotate("+r+"deg)";
this.flower.src="https://www.khanacademy.org/computer-programming/flower-blue/6189789225500672/latest.png";
this.flower.zIndex=-100000000000000;
};
flower.prototype.draw=function(){
document.body.prependChild(this.flower);
this.y--;
if(this.y>100+"%"){this.y="0%";}
};
var frameCount=0;
window.setInterval(function(){
frameCount++;
if(frameCount%100===0){
if(flowers.length<100){flowers.push(new flower(Math.random(0+"%",100+"%"),0+"%", "10vw",Math.random(0,360));}
}
for(var i=0; i<flowers.length; i++;){
flowers[i].draw;
};
},1000/60)
