
function preload(){
  face1 = loadImage("face1.png");
  face3 = loadImage("face3.png");
  face4 = loadImage("face4.png");
  face5 = loadImage("face5.png");

  body1 = loadImage("body1.png");
  body2 = loadImage("body2.png");
  body3 = loadImage("body3.png");
  body4 = loadImage("body4.png");

  arms1 = loadImage("arms1.png");
  arms2 = loadImage("arms2.png");
  arms3 = loadImage("arms3.png");
  
  legs1 = loadImage("legs1.png");
  legs2 = loadImage("legs2.png");
  legs3 = loadImage("legs3.png");

}

function setup(){
  createCanvas(800, 600);
  background(100);

  push();
  fill(150, 150, 180);
  rect(0, 500, 800, 150);
  pop();
}

function draw(){
  if (show == 1){
    creature(100, 50, legChoice, armChoice, bodyChoice, faceChoice);
  }
}

var leg = 1;
var arm = 1;
var body = 1;
var face = 1;
var show = 0;
var legChoice
var faceChoice;
var bodyChoice;
var armChoice;

function mouseReleased(){
  legChoice = int(random(3));
  armChoice = int(random(3));
  bodyChoice = int(random(4));
  faceChoice = int(random(4));
  show = 1;
}

function creature(size, non, leg, arm, body, face){
  print(leg);
  print(arm);

  // LEGS
  if(leg == 0){
    background(100);

    //DOT ARRAY
    for(var a = 0; a <= height - 20; a +=10){
      for(var b = 0; b <= width - 20; b +=10){
          fill(62, 23, 64);
          ellipse(b, a, 4, 4);
          //draw line to center
          stroke(111, 124, 179);
          strokeWeight(0.4);
      }
    }

    push();
    fill(150, 150, 180);
    rect(0, 500, 800, 150);
    pop();

    image(legs1, (width / 2) -145, (height / 2) -20);
  }
  if(leg == 1){
    background(100);

    //DOT ARRAY
    for(var a = 0; a <= height - 20; a +=10){
      for(var b = 0; b <= width - 20; b +=10){
          fill(62, 23, 64);
          ellipse(b, a, 4, 4);
          //draw line to center
          stroke(111, 124, 179);
          strokeWeight(0.4);
      }
    }

    push();
    fill(150, 150, 180);
    rect(0, 500, 800, 150);
    pop();
          
    image(legs2, (width / 2) -145, (height / 2) -20);
  }
  if(leg == 2){
    background(100);

    //DOT ARRAY
    for(var a = 0; a <= height - 20; a +=10){
      for(var b = 0; b <= width - 20; b +=10){
          fill(62, 23, 64);
          ellipse(b, a, 4, 4);
          //draw line to center
          stroke(111, 124, 179);
          strokeWeight(0.4);
      }
    }

    push();
    fill(150, 150, 180);
    rect(0, 500, 800, 150);
    pop();
          
    image(legs3, (width / 2) -145, (height / 2) -20);
  }
  
  // ARMS
  if(arm == 0){
    image(arms1, (width / 2) -350, (height / 2) -160, 700, 300);
  }
  if(arm == 1){
    image(arms2,  (width / 2) -350, (height / 2) -160, 700, 300);
  }
  if(arm == 2){
    image(arms3,  (width / 2) -350, (height / 2) -160, 700, 300);
  }

  // BODY
  if(body == 0){
    image(body1, (width / 2) -110, (height / 2) -170, 220, 220);
  }
  if(body == 1){
    image(body2, (width / 2) -110, (height / 2) -170, 220, 220);
  }
  if(body == 2){
    image(body3, (width / 2) -110, (height / 2) -170, 220, 220);
  }
  if(body == 3){
    image(body4, (width / 2) -110, (height / 2) -170, 220, 220);
  }
  
  // FACE
  if(face == 0){
    image(face1, (width / 2) -80, (height / 2) -150);
  }
  if(face == 1){
    image(face3, (width / 2) -80, (height / 2) -150);
  }
  if(face == 2){
    image(face4, (width / 2) -80, (height / 2) -150);
  }
  if(face == 3){
    image(face5, (width / 2) -80, (height / 2) -150);
  }
}
