/*----------------------------------------------------------------------------------------VARIABLES*/
var gc;               //context variable
var canvas;           //canvas variable
var runner      = []; //runner object in an array
var birds       = []; //bird objects in an array
var cloudLong   = []; //clouds objects in an array
var cloudShort  = []; //clouds objects in an array
var hills       = []; //hills objects in an array
var mountain    = []; //mountains objects in an array
var landLong    = []; //land objects in an array
var landShort   = []; //land objects in an array
var life        = []; //life objects in an array
var lives       = [];
var coin        = []; // coin object as array

var up          = false; //flag for up arrow

var minWidth    =0;    //width of the canvas
var maxWidth    =1280; //width of the canvas
var minHeight   =0;    //height of the canvas
var maxHeight   =720;  //height of the canvas

var Speed       = 15; //predefining a speed variable
var birdsS      = 0;  //zero by default
var cloudLongS  = 0;  //zero by default
var cloudShortS = 0;  //zero by default
var hillsS      = 0;  //zero by default
var mountainS   = 0;  //zero by default
var landS       = 0;  //zero by default
var runnerS     = 0;  //zero by default

var deciseconds=0;
var seconds=0;
var minutes=0;
var timer;
/*----------------------------------------------------------------------------------------VARIABLES*/





/*--------------------------------------------------------------------------------------CONSTRUCTOR*/
window.onload = function(){//starting onload function
    canvas = document.getElementById('canvas');//gets canvas tag from html file
    gc = canvas.getContext('2d');//sets the context to 2d
    //adding the event listeners
    document.addEventListener("keydown",onkeydown);//key down event linked to onkeydown Function
    document.addEventListener("keyup",onkeyup);//key up event linked to onkeyup Function
    
    
 /*1*/for(var i=0; i<1; i++){//starting the itteration
         runnerImg = document.getElementById("runner");//imports the image from html file
         runner[i] = new Runner(100,-230,runnerImg);//sets the runner onto the stage
      }
 /*2*/for(var i=0; i<2; i++){//itterates throgh lands array
        landLongImg = document.getElementById("landLong");//imports the image from html file
        landLong[i] = new LandLong(i*1230,maxHeight-120,landS,landLongImg);
     }
 /*3*/for(var i=0; i<3; i++){//beginning of itteration
        landShortImg = document.getElementById("landShort");//imports the image from html file
        landShort[i] = new LandShort(2860 + i*780,Math.floor(Math.random()*( (maxHeight-150)-(maxHeight-100) ) )+(maxHeight-150),landS,landShortImg);//800 px distance on X axis with a random distance between them
      }//having a speed predefined and passing the land's immage as a parameter to it's own class
 /*4*/for(var i=0; i<1; i++){//itterates through --- array
        cloudShortImg = document.getElementById("cloudShort");//imports the image from html file
        cloudShort[i] = new CloudShort( Math.floor( Math.random() * ( (maxWidth-130) - (minWidth+130) ) ) + (minWidth + 130),Math.floor(Math.random()*(maxHeight/2 - 202)-(minHeight+202))+minHeight+202,cloudShortS, cloudShortImg);//random X and Y position
      }
 /*5*/for(var i=0; i<1; i++){//itterates throgh --- array
        cloudLongImg = document.getElementById("cloudLong");//imports the image from html file
        cloudLong[i] = new CloudLong(Math.floor( Math.random() * ( (maxWidth-130) - (minWidth+130) ) ) + (minWidth + 130),Math.floor(Math.random()*(maxHeight/2 - 202)-(minHeight+202))+minHeight+202,cloudLongS, cloudLongImg );//setup clouds at random width(between 1150px and 130px) and height(202-158px)
      }
 /*6*/for(var i=0; i<1; i++){//itterates through --- array
        hillsImg = document.getElementById("hills");//imports the image from html file
        hills[i] = new Hills(minWidth,maxHeight-420, hillsS, hillsImg);//sets them at the 0px position
      }//and sets them 420 px from the top
 /*7*/for(var i=0; i<1; i++){//itterates through --- array
        mountainImg = document.getElementById("mountain");//imports the image from html file
        mountain[i] = new Mountain(minWidth, maxHeight-676, mountainS, mountainImg);
      }
 /*8*/for(var i=0; i<1; i++){//itterates through --- array
        birdsImg = document.getElementById("birds");//imports the image from html file
        birds[i] = new Birds(Math.floor( Math.random() * ( (maxWidth-130) - (minWidth+130) ) ) + (minWidth + 130),Math.floor(Math.random()*(maxHeight/2 - 202)-(minHeight+202))+minHeight+202,birdsS,birdsImg);
      }//displays them on a random X position between 130px and 1150px
      //displays them on a random Y position between 158 and 202px
      //Math.floor(Math.random()*(maxValue - minValue))+minValue -->formula taken from:
      //http://www.w3schools.com
      //getting a random value from two given ones
 /*9*/sunImg = document.getElementById("sun");//imports the image from html file
/*10*/for(var i=0; i<3; i++){//itterates through --- array
        lifeImg = document.getElementById("life");//imports the image from html file
        life[i] = new Life(20+i*70, 20,0, lifeImg);
      }
/*11*/for(var i=0; i<3; i++){//beginning of itteration
        coinImg = document.getElementById("coin");//imports the image from html file
        coin[i] = new Coin(3085 + i*810,Math.floor(Math.random()*( (maxHeight-150)-(maxHeight-100) ) )+(maxHeight-150) - 90,landS,coinImg);
      }
     sun = new Sun(1000,70,sunImg);//Xpos: 1000px from left
     //Ypos: 80px from top
     //passes sunImg variable as a parameter to it's own class

    
    
    
    lives.length = 3;
    window.setInterval(Update,33);//call uptate method at a rate of 33ms
    window.setInterval(Counter,1000/10);
}
/*--------------------------------------------------------------------------------------CONSTRUCTOR*/





/*-------------------------------------------------------------------------------------------UPDATE*/
function Update(){//starting the Update method
    Start();//calls Start method
    console.log(lives.length);
}
/*-------------------------------------------------------------------------------------------UPDATE*/





/*--------------------------------------------------------------------------------------------START*/
function Start(){
    Draw();
}
/*--------------------------------------------------------------------------------------------START*/





/*----------------------------------------------------------------------------------------------END*/
function End(){
    
}
/*----------------------------------------------------------------------------------------------END*/





/*--------------------------------------------------------------------------------------------RESET*/
function Reset(){
    End();
    Start();
}
/*--------------------------------------------------------------------------------------------RESET*/





/*---------------------------------------------------------------------------------------------DRAW*/
function Draw(){
    Difficulty();
    background_draw();
    sun_draw();
    cloudLong_draw();
    mountain_draw();
    cloudShort_draw();
    hills_draw();
    birds_draw();
    landLong_draw();
    landShort_draw();
    runner_draw();
    coin_draw();
    life_draw();
    timer_draw();
}
/*---------------------------------------------------------------------------------------------DRAW*/





/*---------------------------------------------------------------------------------------DIFFICULTY*/
function Difficulty(){//starting the Update method 
    Speed += .006;
    birdsS = .5 * Speed;
    cloudLongS = .1 * Speed;
    cloudShortS = .15 * Speed;
    hillsS = .08 * Speed;
    mountainS = .01 * Speed;
    landS = 1 * Speed;
    
//__________DEBUG
//    console.log(Speed.toFixed(2));//output just 2 decimals
//    console.log("Your number is: " + birdsSp.toFixed(2));
}
/*---------------------------------------------------------------------------------------DIFFICULTY*/





/*---------------------------------------------------------------------------------------------LFIE*/
function life_draw(){
    for(i=0; i<life.length; i++){
        life[i].display(gc);
        
    }
}
/*---------------------------------------------------------------------------------------------LFIE*/



function Counter(){
    Compute();
}

function Compute(){
    deciseconds++;
    if(deciseconds >= 10){
        deciseconds = 0;
        seconds++;
        if(seconds>= 60){
            seconds=0;
            minutes++;  
        }
    }
    //console.log(minutes + " minutes " + seconds + " seconds " + deciseconds + " deciseconds.");
}



/*---------------------------------------------------------------------------------------------TIME*/
function timer_draw(){//starting the Update method
    gc.font = '30px Arial';
    gc.fillStyle= "black";
    if(seconds <= 9 && minutes <= 9){
        timer = "0"+minutes +  ":"  +  "0"+seconds + ":"  +  "0"+deciseconds;
    }else if(seconds > 9 && minutes <= 9){
        timer = "0"+minutes +  ":"  +  seconds + ":"  +  "0"+deciseconds;
    }else if(seconds > 9 && minutes > 9){
        timer = minutes +  ":"  +  seconds + ":"  +  "0"+deciseconds;
    }else if(seconds <= 9 && minutes > 9){
        timer = minutes +  ":"  +  "0"+seconds + ":"  +  "0"+deciseconds;
    }
/*    if(seconds <= 9 && minutes <= 9){
        timer = "0"+minutes +  ":"  +  "0"+seconds + ":"  +  "0"+deciseconds;
    }
    if(seconds > 9 && minutes <= 9){
        timer = "0"+minutes +  ":"  +  seconds + ":"  +  "0"+deciseconds;
    }
    if(minutes > 9 && seconds > 9){
        timer = minutes +  ":"  +  seconds + ":"  +  "0"+deciseconds;
    }*/
    gc.fillText(timer, maxWidth - 150, minHeight + 40);
    //gc.fillText(minutes + " : " + seconds + " : " + deciseconds, maxWidth - 140, minHeight + 40); 
}
/*---------------------------------------------------------------------------------------------TIME*/





/*---------------------------------------------------------------------------------------BACKGROUND*/
function background_draw(){
    grd = gc.createLinearGradient(150.000, 300.000, 150.000, 0.000);
    //adds the colors inside the canvas
    grd.addColorStop(0.000, '#56CCF2');//from this color
    grd.addColorStop(1.000, "#2F80ED");//to this one
    gc.fillStyle = grd;//fill the canvas with the gradients combinations
    gc.fillRect(0, 0, canvas.width, canvas.height);//fill the whole rectangle
}
/*---------------------------------------------------------------------------------------BACKGROUND*/





/*-------------------------------------------------------------------------------------------RUNNER*/
function runner_draw(){
    //firstly, it starts itterating through runner's array (using i as counter)
    for(i=0; i<runner.length; i++){
        runner[i].display(gc);
        runner[i].y += runner[i].dy;
        runner[i].dy += runner[i].gravity;
        if(up == true){
            runner[i].y += runner[i].jump;
        }
        if(runner[i].y >= maxHeight){//if the runner dyes
            runner[i].x =100;
            runner[i].y = -230;
            runner[i].y += runner[i].dy;
            runner[i].dy += runner[i].gravity;
            window.setTimeout(Lives, 0);
        }
    }
    
}
/*-------------------------------------------------------------------------------------------RUNNER*/

function Lives(){
    lives.splice(0,1);//remove an element out of the array
    life.splice(life.length-1,1);//removes an object out of the array
    if(lives.length == 0){//if there are no lives left
        //console.log('Game Over');
        alert('Game Over!\nYour time is: ' + timer + '\nYour score is: ');
        location.reload();//refresh the page
    }
}



/*--------------------------------------------------------------------------------------------LANDS*/
function landLong_draw(){
    for(var i=0; i<landLong.length;i++){
        landLong[i].display(gc); 
        landLong[i].update();
        landLong[i].s = landS;
        /*if(landLong[i].x <= -1280){
            landLong[i].x =1280;
        }*/
    }
    for(var i=0; i<runner.length; i++){
        //secondly, it starts itterating through land's array (using j as counter)
        for(var j=0; j<landLong.length; j++){
            /*IF runner's Ypos + 215 (because the registration point is at the top
            of the image) is reaching the lands's Ypos AND (using AND because them
            both need to be activated in order to run the code from the inside)
            AND runner's Xpos is touching land's horizontal position*/
            //THEN run the code from the inside
            if(runner[i].y + 215 >= landLong[j].y && 
               runner[i].x >= landLong[j].x &&
               runner[i].x <= landLong[j].x + landLong[j].width -60){
                runner[i].dy = 0;//resets the dy velocity to none
                runner[i].y = landLong[j].y - 215;//puts the runner
            }
        }
    }
}
/*--------------------------------------------------------------------------------------------LANDS*/





/*--------------------------------------------------------------------------------------------LANDS*/
function landShort_draw(){
    for(var i=0; i<landShort.length; i++){//FOR
        landShort[i].display(gc);//calls display
        landShort[i].update();//calls update method
        landShort[i].s = landS;
        if(landShort[i].x <= minWidth - landShort[i].width){//if a cube of land is off the screen
            landShort[i].x = maxWidth +700;//then draw another one
            landShort[i].y = Math.floor(Math.random()*( (maxHeight-250)-(maxHeight-100) ) )+(maxHeight-150);;
        }//but only between certain heights so it is accessible by the character when jumps
    }
    for(var i=0; i<runner.length; i++){
        //secondly, it starts itterating through land's array (using j as counter)
        for(var j=0; j<landShort.length; j++){
            /*IF runner's Ypos + 215 (because the registration point is at the top
            of the image) is reaching the lands's Ypos AND (using AND because them
            both need to be activated in order to run the code from the inside)
            AND runner's Xpos is touching land's horizontal position*/
            //THEN run the code from the inside
            if(runner[i].y + 215 >= landShort[j].y && 
               runner[i].x >= landShort[j].x - runner[i].width +60 &&
               runner[i].x <= landShort[j].x + landShort[j].width - 60 &&
               runner[i].y <= landShort[j].y){
                runner[i].dy = 0;//resets the dy velocity to none
                runner[i].y = landShort[j].y - 215;//puts the runner
            }
        }
    }
}
/*--------------------------------------------------------------------------------------------LANDS*/






/*--------------------------------------------------------------------------------------------HILLS*/
function hills_draw(){
    for(var i=0;i<hills.length;i++){
        hills[i].display(gc);
        hills[i].update();
        hills[i].s = hillsS;
        if(hills[i].x < minWidth - 1280){
            hills[i].x = maxWidth;
            hills[i].y = maxHeight-420;
        }
    }
}
/*--------------------------------------------------------------------------------------------HILLS*/






/*-------------------------------------------------------------------------------------------CLOUDS*/
function cloudShort_draw(){
    for(var i=0; i<cloudShort.length; i++){//itterates throgh --- array
        cloudShort[i].display(gc);
        cloudShort[i].move();
        cloudShort[i].s = cloudShortS;
        if(cloudShort[i].x <= minWidth - 130){
            cloudShort[i].x = maxWidth;
            cloudShort[i].y = Math.floor(Math.random()*(maxHeight/2 - 202)-(minHeight+202))+minHeight+202;
        }
     }
}
/*-------------------------------------------------------------------------------------------CLOUDS*/






/*-------------------------------------------------------------------------------------------CLOUDS*/
function cloudLong_draw(){
    for(var i=0; i<cloudLong.length;i++){
        cloudLong[i].display(gc);//cloud display method call
        cloudLong[i].update();//update-->which also calls move method
        cloudLong[i].s = cloudLongS;
        if(cloudLong[i].x < minWidth - 300){//it it is out of the screen
            cloudLong[i].x = maxWidth;//draw it again at 1280px on x axis
            cloudLong[i].y = Math.floor(Math.random()*(maxHeight/2 - 300)-(minHeight+300))+minHeight+300;
        }//on a random height between 2 given values
    }
}
/*-------------------------------------------------------------------------------------------CLOUDS*/





/*--------------------------------------------------------------------------------------------BIRDS*/
function birds_draw(){
    for(var i=0; i<birds.length;i++){//targets the birds array's legth(elements)
        birds[i].display(gc);//calls display method out of birds class
        birds[i].update();//calls update method out of birds class
        birds[i].s = birdsS;
        if(birds[i].x < minWidth - 130){//if the entity is out of the screen completely
            birds[i].x = maxWidth;//draws it at the far right again
            birds[i].y = Math.floor(Math.random()*(maxHeight/2 - 130)-(minHeight+130))+minHeight+130;
        }//on a random height between two values
    }//formula: Math.floor(Math.random()*(max-min))+min -->https://www.w3schools.com/
}
/*--------------------------------------------------------------------------------------------BIRDS*/





/*-----------------------------------------------------------------------------------------MOUNTAIN*/
function mountain_draw(){
    for(var i=0;i<mountain.length;i++){
        mountain[i].display(gc);
        mountain[i].update();
        mountain[i].s = mountainS;
        if(mountain[i].x < minWidth - 1100){
            mountain[i].x = maxWidth;
            mountain[i].y = maxHeight-676;
        }
    }
}
/*-----------------------------------------------------------------------------------------MOUNTAIN*/





/*--------------------------------------------------------------------------------------------COINS*/
function coin_draw(){
    for(var i=0; i<coin.length; i++){//FOR
        coin[i].display(gc);//calls display
        coin[i].update();//calls update method
        coin[i].s = landS;
        
        for(var k=0; k<landShort.length; k++){
            if(coin[i].x <= minWidth){
                coin[i].x = landShort[k].x;//then draw another one
                coin[i].y = landShort[k].y - 120;
            }
        }
        for(var j=0; j<runner.lenght; j++){//collision with coins
            if(runner[j].y >= coin[i].y && 
               runner[j].x >= coin[i].x &&
               runner[j].x <= coin[i].x + coin[i].width){
                console.log('COIN COLLECTED!');
            }
        }
    }
}
/*--------------------------------------------------------------------------------------------COINS*/





/*----------------------------------------------------------------------------------------------SUN*/
function sun_draw(){
    sun.display(gc);
    
}
/*----------------------------------------------------------------------------------------------SUN*/




/*----------------------------------------------------------------------------------------KEYEVENTS*/

function onkeydown(event){
    switch(event.which){
            case 38:
            up = true;
            //console.log('UP was pressed');
            break;
            case 37:
            left = true;
            //console.log('LEFT was pressed');
            break;
            case 39:
            right = true;
            //console.log('RIGHT was pressed');
            break;
            case 40:
            down = true;
            //console.log('DOWN was pressed');
            break;
    }
}
function onkeyup(event){
    switch(event.which){
            case 38:
            up = false;
            //console.log('UP was released');
            break;
            case 37:
            left = false;
            //console.log('LEFT was released');
            break;
            case 39:
            right = false;
            //console.log('RIGHT was released');
            break;
            case 40:
            down = false;
            //console.log('DOWN was released');
            break;
    }
}

/*----------------------------------------------------------------------------------------KEYEVENTS*/































































