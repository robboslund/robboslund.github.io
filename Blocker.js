var Blocker = function(x,y){
 	 		this.x = x;
 	 		this.y = y;
 	 		};
 	 		
 	 	Blocker.prototype.draw = function(){
 	 			c.fillStyle = "#000000";
 	 			c.fillRect(this.x,this.y,200,5);
 	 	};