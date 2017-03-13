var x= 0;
var speed = 10;

function setup(){
    createCanvas(600,400)
}

function draw(){
    background(50);
    
    //i wrote this so background changes to red when clicked
    if(mouseIsPressed){
    background(255,100,0);
    }

    //make outline white,6px thick, no color inside shapes
    stroke(255);
    strokeWeight(6);

    if(mouseY<150){
        fill(200,0,0)
}
else{
    noFill();
}
    
    
    // a circle
    ellipse(x,200,100,100)
    
    //this code is going to get the circle to move on its own
    if(x>width || x<0){
    console.log("circle is off the screen")
    speed = speed *-1;
    }
    
    x = x + speed;
    console.log(x);
}