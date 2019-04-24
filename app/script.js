window.addEventListener('resize',pageResized)


function pageResized(){
  console.log(window.innerHeight, window.innerWidth)

// //   uncomment this to see the font size resize based on how tall the window is

//   let windowPercentOfScreen = (1 - (window.innerHeight / window.screen.height)) * 100

//   let colorFromScreenHeight = 'hsl(0,0%,' + windowPercentOfScreen + '%)'
//   console.log(colorFromScreenHeight)
//   document.body.style.color = colorFromScreenHeight



}

pageResized()











var pic;
var w,h,ar;
var step=20;
var cStep;
var pw,ph,cw,ch,cx,cy,car;
var shades=[];

function preload() {
  pic=loadImage("cc.png");
}

function setup() {
  w=pic.width;
  h=pic.height;
  ch=windowHeight;
  cw=windowHeight*w/h;
  cStep=step*ch/h;
  createCanvas(cw,ch);
  pw=floor(w/step);
  ph=floor(h/step);
  var offset=0;
  shades=[];
  pic.loadPixels();
  for(var j=0; j<ph; j++){
    for(var i=0; i<pw; i++){
      var avg=0;
      for(var l=0; l<step; l++){
        for(var k=0; k<step; k++){
          offset=((j*step+l)*w+(i*step+k))*4;
          avg+=pic.pixels[offset+0];
        }
      }
      avg=floor(avg/(step*step));
      shades.push(new ShadeSplit((i+0.5)*cStep, (j+0.5)*cStep, cStep, avg));
    }
  }
  shades.forEach(function(shade){
    shade.show();
  });
}

function draw() {
  noStroke();
  var select;
  for(var i=0; i<100; i++){
    select=random(shades);
    select.show();
  }
}

function ShadeSplit(x,y,side,shade){
  var a1pre, a2pre, a3pre, a4pre, a1, a2, a3, a4, sh1Mult, sh2Mult, sh3Mult, sh4Mult;
  var sideRed=side;
  a1pre=sideRed*side/4;
  a2pre=sideRed*side/4;
  a3pre=sideRed*side/4;
  a4pre=sideRed*side/4;
  var r1,r2,r3,rBase;
  rbase=side/2;

  this.show=function(){
    r1=rbase*0.8+noise(x,y,frameCount/100)*rbase*0.3;
    r2=r1*0.6+noise(x,y,9.9+frameCount/100)*r1*0.4;
    r3=r2*0.5+noise(x,y,5.5+frameCount/100)*r2*0.5;
    a4=r3*r3*PI;
    a3=r2*r2*PI;
    a2=r1*r1*PI;
    a1=side*side-a2;
    a2-=a3;
    a3-=a4;
    sh1Mult=a1/a1pre;
    sh2Mult=a2/a2pre;
    sh3Mult=a3/a3pre;
    sh4Mult=a4/a4pre;
    var d1=0.8+noise(x,y,0+frameCount/45)*0.4;
    var d2=0.8+noise(x,y,1+frameCount/45)*0.4;
    var d3=0.8+noise(x,y,1.7+frameCount/45)*0.4;
    push();
    noStroke();
    translate(x,y);
    fill(shade*sh1Mult);
    rect(-side/2, -side/2, side, side);
    rotate(PI/4);
    fill(shade*sh2Mult);
    ellipse(0,0,r1*2*d1,r1*2/d1);
    fill(shade*sh3Mult);
    ellipse(0,0,r2*2*d2, r2*2/d2);
    fill(shade*sh4Mult);
    ellipse(0,0,r3*2*d3, r3*2/d3);
    pop();
  }
}
