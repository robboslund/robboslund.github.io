// CODING FOR ANIMATIONS STARTS HERE
 	   	var Square = function(x,y)
 	   	 {
 	   	 	this.x = x;
 	   	 	this.y = y;
 	   	 	this.image = document.createElement("img");
 	   	 	this.image.className = "animation1Square";
 	   	 	this.image.src = "square.jpg";	
 	   	 	
 	   	 };
 	   	 
 	   	 Square.prototype.draw = function(){
 	   	 	c.drawImage(this.image,this.x,this.y, 30, 30);
 	   	 };
 	   	 
 	   	 Square.prototype.up = function(){
 	   	 	this.y -= 5;
 	   	 	};
 	   	 	
 	   	 Square.prototype.left = function(){
 	   	 	this.x -= 5;
 	   	 	};
 	   	 	
 	   	 Square.prototype.right = function(){
 	   	 	this.x += 5;
 	   	 	};
 	   	 
 	   	 Square.prototype.down = function(){
 	   	 	this.y += 5;
 	   	 	};

 	   	 Square.prototype.fall = function(){
 	   	 	this.y += 0.25;
 	   	 	};
 	   	 	
 	   	 Square.prototype.checkValues = function(){
 	   	 	if (this.x > 370){
 	 			this.x = 370
 	 			}
 	 		if (this.x < 0){
 	 			this.x = 0;
 	 			}
 	 		if (this.y > 320){
 	 			this.y = 320;
 	 			}
 	 		if (this.y < 0){
 	 			this.y = 0;
 	 			}
 	 		};
 	 	Square.prototype.collisionCheck = function(blockers){
 	 		if (blockers.x >= (this.x - 200) && blockers.x <= (this.x + 30)&&
   			blockers.y <= (this.y + 30) && blockers.y >= this.y)
        	{
        		clearInterval(newTimer);
        		c.font = "50pt seriff";
			c.fillStyle = "#000000";
        		c.fillText("GAME OVER",125,200,150);
			drawRestartButton();
			restart = true;
        	
   			 }
   			 	 };