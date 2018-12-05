function Runner(x,y,img){
/*----------------------------------------------------------------------------------------VARIABLES*/
    this.x = x;
    this.y = y;
    this.width = 230;
    this.height = 230;
    this.cFrame = 0;
    this.tFrame = 12;
    this.dx = 0;//horizontal velocity
    this.dy = 1;//vertical velocity
    this.gravity = 3;//gravity level
    this.jump = -35;//makes it move up 35 px
    this.img = img;//imports img as a parameter
/*----------------------------------------------------------------------------------------VARIABLES*/
    

    
    
    
/*--------------------------------------------------------------------------------------CONSTRUCTOR*/
    this.display = function(gc){
        this.cFrame = (this.cFrame + 1) % this.tFrame;
        gc.drawImage(this.img, this.cFrame * this.width, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    }
/*--------------------------------------------------------------------------------------CONSTRUCTOR*/

    
    
    
    
/*-------------------------------------------------------------------------------------------UPDATE*/
    this.update = function(){
        this.move();
    }
/*-------------------------------------------------------------------------------------------UPDATE*/


    
    
    
/*---------------------------------------------------------------------------------------------MOVE*/
    this.move = function(){
        this.y += this.dy;
    }
/*---------------------------------------------------------------------------------------------MOVE*/

}
console.log("1) HELLO FROM RUNNER!");

























































