var flowers=[];
var flower=function(x,y,s,r,col){
this.flowerImg=document.createElement("img");
this.y=y;
this.x=x;
this.s=s;
this.r=r;
this.col=Math.floor(col);
};
flower.prototype.draw=function(){
 this.y+=5;
this.flowerImg.style.position="fixed";
this.flowerImg.style.top=this.y+"px";
this.flowerImg.style.left=this.x;
this.flowerImg.style.width=this.s;
this.flowerImg.style.transform="rotate("+this.r+"deg)";
if(this.col===0){
this.flowerImg.src="https://www.khanacademy.org/computer-programming/red-flower/5985129101344768/5161084730556416.png";
}else if(this.col===1){
 this.flowerImg.src="https://www.khanacademy.org/computer-programming/flower-blue/6189789225500672/latest.png";
}else {
this.flowerImg.src="https://www.khanacademy.org/computer-programming/white-flower/4512571428519936/4582073327501312.png";
}
this.flowerImg.style.zIndex=-2;
this.r+=1;
document.body.appendChild(this.flowerImg);

if(this.y>1000){this.y=Math.random()*-500; this.x=Math.random()*100+"%";}
};
var frameCount=0;
window.setInterval(function(){
frameCount++;
if(frameCount>=100){	
if(flowers.length<30){flowers.push(new flower(Math.random()*100+"%",Math.random()*1000, 10+"%",Math.random()*360,Math.random()*3))}	
                                    frameCount=0;}	
for(var i=0; i<flowers.length; i++){
flowers[i].draw();
  flowers[i].r+=1;	
  if(flowers[i].y>1000){flowers[i].y=0;}
}	
                      },1000/60);	
