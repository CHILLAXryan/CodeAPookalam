function setup() {
  
  createCanvas(600, 600);

  background(255,255,255);

  angleMode(DEGREES);
}

function draw() {

  translate(width/2,height/2)

  fill(255,237,12);

  circle(0,0,500);

  stroke(255,165,0);

  strokeWeight(18);

  circle(0,0,500);

  for(let i=0;i<12;i++){

rotate(30);

    fill(255,0,0);

    ellipse(0,-150,70,150);
  

    fill(153,255,12);

    ellipse(0,-170,80,10);
    
    
  }

fill(255,237,12);


  circle(0,0,150);

  for(let i=0;i<1243;i++){

rotate(30);

noStroke();

    fill(217,1,180);
    
ellipse(0,-35,10,40);


  
}

  fill(55,115,45);

  rotate(45);

}

 
