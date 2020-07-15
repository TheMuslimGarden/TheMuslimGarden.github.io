var flowers=[];
var flower=function(x,y,s,r){
this.flowerImg=document.createElement("img");
this.y=y;
this.x=x;
this.s=s;
this.r=r;
};
flower.prototype.draw=function(){
 this.y+=5;
this.flowerImg.style.position="fixed";
this.flowerImg.style.top=this.y+"px";
this.flowerImg.style.left=this.x;
this.flowerImg.style.width=this.s;
this.flowerImg.style.transform="rotate("+this.r+"deg)";
this.flowerImg.src="https://www.khanacademy.org/computer-programming/flower-blue/6189789225500672/latest.png";
this.flowerImg.style.zIndex=-2;
this.r+=1;
document.body.appendChild(this.flowerImg);

if(this.y>1000){this.y=0;}
};
var frameCount=0;
window.setInterval(function(){
frameCount++;
if(frameCount>=100){	
if(flowers.length<100){flowers.push(new flower(Math.random()*100+"%",Math.random()*1000, 10+"%",Math.random()*360))}	
                                    frameCount=0;}	
for(var i=0; i<flowers.length; i++){
flowers[i].draw();
  flowers[i].r+=1;	
  if(flowers[i].y>1000){flowers[i].y=0;}
}	
                      },1000/60);	
