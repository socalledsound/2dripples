let numPlanets = 6;
let space = 50;
let size = 20;
let originalAngle = 0;
function setup(){

    createCanvas(400,400);


}



function draw(){
    background(250);

    translate(width/2, height/2);    

    originalAngle+=0.02;    
    let angle = originalAngle;


    for(let i = 0; i < (numPlanets*2); i+=2){

        let x = sin(abs(angle)) * (size*i);
        let y = cos(abs(angle)) * (size*i); 



       fill(50,50);
        ellipse(x, y, size);

        angle+=0.001
    }

//angle+=0.01
}