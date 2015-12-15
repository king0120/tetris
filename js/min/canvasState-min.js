function clear(){ctx.clearRect(0,0,canvas.width,canvas.height),fallen[0].drawFallen(ctx),fallen[1].drawFallen(ctx),fallen[2].drawFallen(ctx);for(var t=0;t<fallen.length;t++)fallen[t].color="purple",fallen[t].drawFallen(ctx)}function randomTetrino(){var t=Math.floor(7*Math.random()),e;switch(!0){case 0===t:return e=tBlock;case 1===t:return e=jBlock;case 2===t:return e=sBlock;case 3===t:return e=iBlock;case 4===t:return e=oBlock;case 5===t:return e=zBlock;case 6===t:return e=lBlock}}function newRect(){for(var t=Math.floor(3*Math.random()),e=randomTetrino(),n=0;n<e.shape.length;n++)addShape([e.shape[t][n],e.name])}function devRect(t){for(var e=0;e<t.length;e++)addShape(t[e])}function drawing(){draw(canvas)}var tWidth=(window.innerWidth-1)/10,tHeight=(window.innerHeight-1)/20,Rectangle=function(t,e,n,i,o){this.name=0,this.x=t,this.y=e,this.w=i,this.h=o,this.ctx=document.getElementById("canvas").getContext("2d"),this.hit=!1,(void 0===i||void 0===o)&&(this.w=tWidth-2,this.h=tHeight),this.color=n,this.drawFallen=function(){this.ctx.fillStyle=this.color,this.ctx.lineWidth="3",this.ctx.strokeStyle="black",this.ctx.strokeRect(this.x,this.y,this.w,this.h),this.ctx.fillRect(this.x,this.y,this.w,this.h)},this.draw=function(){var t=this.y;t+=tHeight/18,this.ctx.fillStyle=this.color,this.ctx.lineWidth="3",this.ctx.strokeStyle="black",this.ctx.strokeRect(this.x,t,this.w,this.h),this.ctx.fillRect(this.x,t,this.w,this.h)},this.drop=function(){var t=this.y;t+=tHeight/18,this.y=t}};Rectangle.prototype.contains=function(t,e){return t>=this.x&&t<=this.x+this.w&&e>=this.y&&e<=this.y+this.h?!0:!1},Rectangle.prototype.intersects=function(t){return this.contains(t.x,t.y)||this.contains(t.x+t.w,t.y)||this.contains(t.x,t.y+t.h)||this.contains(t.x+t.w,t.y+t.h)?!0:t.contains(this.x,this.y)||t.contains(this.x+this.w,this.y)||t.contains(this.x,this.y+this.h)||t.contains(this.x+this.w,this.y+this.h)?!0:!1};var positionX=window.innerWidth,tBlock={name:"tBlock",color:"#9013FE",shape:[[new Rectangle(.4*positionX,tHeight,"#9013FE"),new Rectangle(.3*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.5*positionX,2*tHeight,"#9013FE")],[new Rectangle(.4*positionX,tHeight,"#9013FE"),new Rectangle(.4*positionX,3*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.5*positionX,2*tHeight,"#9013FE")],[new Rectangle(.4*positionX,3*tHeight,"#9013FE"),new Rectangle(.3*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.5*positionX,2*tHeight,"#9013FE")],[new Rectangle(.4*positionX,tHeight,"#9013FE"),new Rectangle(.3*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,3*tHeight,"#9013FE")]]},jBlock={name:"jBlock",color:"#4A6EE2",shape:[[new Rectangle(.3*positionX,tHeight,"#4A6EE2"),new Rectangle(.3*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.5*positionX,2*tHeight,"#4A6EE2")],[new Rectangle(.5*positionX,tHeight,"#4A6EE2"),new Rectangle(.4*positionX,1*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,3*tHeight,"#4A6EE2")],[new Rectangle(.5*positionX,3*tHeight,"#4A6EE2"),new Rectangle(.3*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.5*positionX,2*tHeight,"#4A6EE2")],[new Rectangle(.4*positionX,tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,3*tHeight,"#4A6EE2"),new Rectangle(.3*positionX,3*tHeight,"#4A6EE2")]]},sBlock={name:"sBlock",color:"#7ED321",shape:[[new Rectangle(.3*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.5*positionX,1*tHeight,"#7ED321")],[new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,3*tHeight,"#7ED321")],[new Rectangle(.3*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.5*positionX,1*tHeight,"#7ED321")],[new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,3*tHeight,"#7ED321")]]},iBlock={name:"iBlock",color:"#50E3C2",shape:[[new Rectangle(.4*positionX,tHeight,"#50E3C2"),new Rectangle(.6*positionX,tHeight,"#50E3C2"),new Rectangle(.3*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,tHeight,"#50E3C2")],[new Rectangle(.5*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,0*tHeight,"#50E3C2"),new Rectangle(.5*positionX,2*tHeight,"#50E3C2"),new Rectangle(.5*positionX,3*tHeight,"#50E3C2")],[new Rectangle(.4*positionX,tHeight,"#50E3C2"),new Rectangle(.6*positionX,tHeight,"#50E3C2"),new Rectangle(.3*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,tHeight,"#50E3C2")],[new Rectangle(.5*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,0*tHeight,"#50E3C2"),new Rectangle(.5*positionX,2*tHeight,"#50E3C2"),new Rectangle(.5*positionX,3*tHeight,"#50E3C2")]]},oBlock={name:"oBlock",color:"#F8E71C",shape:[[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")],[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")],[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")],[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")]]},zBlock={name:"zBlock",color:"#D0021B",shape:[[new Rectangle(.3*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.5*positionX,2*tHeight,"#D0021B")],[new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,3*tHeight,"#D0021B")],[new Rectangle(.3*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.5*positionX,2*tHeight,"#D0021B")],[new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,3*tHeight,"#D0021B")]]},lBlock={name:"lBlock",color:"#E59512",shape:[[new Rectangle(.5*positionX,tHeight,"#E59512"),new Rectangle(.3*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.5*positionX,2*tHeight,"#E59512")],[new Rectangle(.5*positionX,3*tHeight,"#E59512"),new Rectangle(.4*positionX,tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,3*tHeight,"#E59512")],[new Rectangle(.3*positionX,3*tHeight,"#E59512"),new Rectangle(.3*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.5*positionX,2*tHeight,"#E59512")],[new Rectangle(.4*positionX,tHeight,"#E59512"),new Rectangle(.3*positionX,tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,3*tHeight,"#E59512")]]},canvas=document.getElementById("canvas");canvas.height=window.innerHeight,canvas.width=window.innerWidth,canvas.style.width="45%",canvas.style.height="90%";var ctx=canvas.getContext("2d"),shapes=[],fallen=[new Rectangle(0,canvas.height,"black",canvas.width,tHeight),new Rectangle(canvas.width,tHeight,"black",100,canvas.height),new Rectangle(-10,tHeight,"black",10,canvas.height)],moveLeft=function(t){for(var e=0;e<t.length;e++)t[e].x-=tWidth},moveRight=function(t){for(var e=0;e<t.length;e++)t[e].x+=tWidth},moveDown=function(t){for(var e=0;e<t.length;e++)t[e].y+=tHeight},keyControls=function(t){document.onkeydown=function(e){switch(e=e||window.event,e.which||e.keyCode){case 65:window.console.log("left"),moveLeft(t);break;case 37:window.console.log("left"),moveLeft(t);break;case 87:window.console.log("Up");break;case 38:window.console.log("Up");break;case 68:window.console.log("Right"),moveRight(t);break;case 39:window.console.log("Right"),window.console.log("tWidth "+tWidth),moveRight(t);break;case 82:window.console.log("Down"),moveDown(t);break;case 40:window.console.log("Down"),moveDown(t);break;default:window.console.log(e.which),window.console.log(e.keyCode)}}},addShape=function(t){shapes.push(t[0]),window.console.log(t[1])},draw=function(t){if(clear(),shapes.length>0)for(var e=0;e<shapes.length;e++){for(var n=0;n<fallen.length;n++)if(shapes[e].intersects(fallen[n]))return shapes[e].y=fallen[n].y-fallen[n].h,shapes[e].hit=!0,fallen.push(shapes[0]),fallen.push(shapes[1]),fallen.push(shapes[2]),fallen.push(shapes[3]),shapes.splice(0,4),tBlock.shape=[[new Rectangle(.4*positionX,tHeight,"#9013FE"),new Rectangle(.3*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.5*positionX,2*tHeight,"#9013FE")],[new Rectangle(.4*positionX,tHeight,"#9013FE"),new Rectangle(.4*positionX,3*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.5*positionX,2*tHeight,"#9013FE")],[new Rectangle(.4*positionX,3*tHeight,"#9013FE"),new Rectangle(.3*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.5*positionX,2*tHeight,"#9013FE")],[new Rectangle(.4*positionX,tHeight,"#9013FE"),new Rectangle(.3*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,2*tHeight,"#9013FE"),new Rectangle(.4*positionX,3*tHeight,"#9013FE")]],jBlock.shape=[[new Rectangle(.3*positionX,tHeight,"#4A6EE2"),new Rectangle(.3*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.5*positionX,2*tHeight,"#4A6EE2")],[new Rectangle(.5*positionX,tHeight,"#4A6EE2"),new Rectangle(.4*positionX,1*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,3*tHeight,"#4A6EE2")],[new Rectangle(.5*positionX,3*tHeight,"#4A6EE2"),new Rectangle(.3*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.5*positionX,2*tHeight,"#4A6EE2")],[new Rectangle(.4*positionX,tHeight,"#4A6EE2"),new Rectangle(.4*positionX,2*tHeight,"#4A6EE2"),new Rectangle(.4*positionX,3*tHeight,"#4A6EE2"),new Rectangle(.3*positionX,3*tHeight,"#4A6EE2")]],sBlock.shape=[[new Rectangle(.3*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.5*positionX,1*tHeight,"#7ED321")],[new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,3*tHeight,"#7ED321")],[new Rectangle(.3*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.5*positionX,1*tHeight,"#7ED321")],[new Rectangle(.4*positionX,tHeight,"#7ED321"),new Rectangle(.4*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,2*tHeight,"#7ED321"),new Rectangle(.5*positionX,3*tHeight,"#7ED321")]],iBlock.shape=[[new Rectangle(.4*positionX,tHeight,"#50E3C2"),new Rectangle(.6*positionX,tHeight,"#50E3C2"),new Rectangle(.3*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,tHeight,"#50E3C2")],[new Rectangle(.5*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,0*tHeight,"#50E3C2"),new Rectangle(.5*positionX,2*tHeight,"#50E3C2"),new Rectangle(.5*positionX,3*tHeight,"#50E3C2")],[new Rectangle(.4*positionX,tHeight,"#50E3C2"),new Rectangle(.6*positionX,tHeight,"#50E3C2"),new Rectangle(.3*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,tHeight,"#50E3C2")],[new Rectangle(.5*positionX,tHeight,"#50E3C2"),new Rectangle(.5*positionX,0*tHeight,"#50E3C2"),new Rectangle(.5*positionX,2*tHeight,"#50E3C2"),new Rectangle(.5*positionX,3*tHeight,"#50E3C2")]],oBlock.shape=[[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")],[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")],[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")],[new Rectangle(.4*positionX,tHeight,"#F8E71C"),new Rectangle(.5*positionX,tHeight,"#F8E71C"),new Rectangle(.4*positionX,2*tHeight,"#F8E71C"),new Rectangle(.5*positionX,2*tHeight,"#F8E71C")]],zBlock.shape=[[new Rectangle(.3*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.5*positionX,2*tHeight,"#D0021B")],[new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,3*tHeight,"#D0021B")],[new Rectangle(.3*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.5*positionX,2*tHeight,"#D0021B")],[new Rectangle(.4*positionX,tHeight,"#D0021B"),new Rectangle(.4*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,2*tHeight,"#D0021B"),new Rectangle(.3*positionX,3*tHeight,"#D0021B")]],lBlock.shape=[[new Rectangle(.5*positionX,tHeight,"#E59512"),new Rectangle(.3*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.5*positionX,2*tHeight,"#E59512")],[new Rectangle(.5*positionX,3*tHeight,"#E59512"),new Rectangle(.4*positionX,tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,3*tHeight,"#E59512")],[new Rectangle(.3*positionX,3*tHeight,"#E59512"),new Rectangle(.3*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.5*positionX,2*tHeight,"#E59512")],[new Rectangle(.4*positionX,tHeight,"#E59512"),new Rectangle(.3*positionX,tHeight,"#E59512"),new Rectangle(.4*positionX,2*tHeight,"#E59512"),new Rectangle(.4*positionX,3*tHeight,"#E59512")]],void newRect();this.hit||(keyControls(shapes),shapes[e].draw(),shapes[e].drop())}},myState=canvas;myState.interval=16.5,setInterval(drawing,myState.interval);