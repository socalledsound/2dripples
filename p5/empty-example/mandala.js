let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  translate(0, 0);
  
  beginShape()

  for(let i = 0; i < 36; i++){


    let radius = 100;
    let x= sin(angle) * radius;
    let y = cos(angle)* radius;
    vertex(x, y, radius*2);
    angle+=(10);
  }

  endShape();


}

function draw() {
 // background(220);
}