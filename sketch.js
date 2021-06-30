

let x = 0;
let y = 50;
let a = 0; 
let t; 

function setup() {
  
  createCanvas(wW = windowWidth, wH = windowHeight);
   
  micro = new p5.AudioIn();
  
  //background(195, 247, 58);
  
  background(255, 166, 158);
  
  rect1();

  
}

function draw() {
  
  pincel();
  
  print(frameCount);
}



function pincel() {
  
 //print(micro.getLevel());
  
  noStroke();
  
  let fala = micro.getLevel() * 200;
  let r = random (10, 60);
  a = a+0.1; //qto menor, mais espaçada/suave fica a curva
  x = x+random(0,9); 
  
  print (fala);
  
  
  fill((10*frameCount) % 180, 100, 100, 240);
  
  if(mouseIsPressed){ beginShape();
    vertex (mouseX+fala*8, mouseY+fala*10);
    vertex(mouseX, mouseY);
    vertex (mouseX+100*sin(fala), mouseY + 90*cos(fala));
    vertex (mouseX+fala*12, mouseY+10*sin(fala));
    endShape();
  } 
  
  //fill(fala*50, fala*2, fala*60);
  //ellipse(x, y+r*sin(a), fala*4.2, fala*4.2);
  //fill(255, 150);
  //ellipse(x+r*cos(a), y+r*sin(a), fala*3, fala*3);
  //fill(0, 180);
  //ellipse(x+r*cos(a), y+r*cos(a), fala*2, fala*2);
  
  fill(181, 245, 20);
  ellipse(x, y+r*sin(a), fala*4.2, fala*4.2);
  fill(255, 150);
  ellipse(x+r*cos(a), y+r*sin(a), fala*3, fala*3);
  fill(0, 180);
  ellipse(x+r*cos(a), y+r*cos(a), fala*2, fala*2);
 
  if (x > wW) { x = 0; y = y + 150} ;
  
  if (y > wH) { x = 0; y = 0; 
  fill(255, 166, 158); rect(0,0, width, height);};
  
}







function rect1() {
  
  fill(0, 50);
  //rect(wW/4, wH/4, 35 + wW/2, wH/2, 20);
  
  stroke(0);
  
  textSize(32);
  text('e̵̠͝x̶̄͜h̵͓̅a̵̠̒l̶͔͂e̴̻͗ ̵̬̉i̵̞̋n̵̰̄ ̶̝͐ǵ̸̣a̷̺̿r̷̘̾d̶͔̈́e̷̺̊n̴̮͒', 105 + wW/4, 35 + wH/4);
  
  textSize(12);
  text('1. Authorize access to the microphone on your device.', 20 + wW/4, 75 + wH/4);
  
  text('2. Generate graphic shapes by breathing in, out or speaking.', 20 + wW/4, 100 + wH/4);
  
  text('3. Click screen to generate more sound-responsive graphics.', 20 + wW/4, 125 + wH/4);
  
  text('4. Tap screen to generate further sound-responding graphics.', 20 + wW/4, 140 + wH/4);
  
  textSize(32);
  textStyle(BOLD);
  text('DOUBLE CLICK', 85 + wW/4, 195 + wH/4);
  
  textSize(32);
  textStyle(BOLD);
  text('TO START', 105 + wW/4, 225 + wH/4);
  
  textSize(18);
  textStyle(NORMAL);
  text('by tiago i. rubini', 20 + wW/4, 300 + wH/4);
  
   textSize(18);
  textStyle(NORMAL);
  text('ig: @rubiniit', 20 + wW/4, 325 + wH/4);
  
}
  

   


function startMIC () {
  
  getAudioContext();
  userStartAudio();
  micro.start();
  
}


  
  function doubleClicked() {
   startMIC();
   clear();
   //background(195, 247, 58);
    background(255, 166, 158);
    
}
