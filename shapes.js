var click = 0;

// this class describes the properties of a elliptical particle.
function Particle {
  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,8);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);
  }

// creation of a particle.
  function createParticle() {
    noStroke();
    fill('rgba(169,200,200,0.5)');
    circle(this.x,this.y,this.r);
  }

// setting the particle in motion.
 function moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
   function joinParticles(particles) {
    particles.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(240,250,245,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

function Rectangle { //This class is similar to the properties of particles but just using the rectangular shape. 
    constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1,9);
    this.xSpeed = random(-2,1);
    this.ySpeed = random(-1,1);
  }

// creation of a particle.
  function createRectangle() {
    noStroke();
    fill('rgba(200,169,169,0.5)');
    rect(this.x,this.y,this.r);
  }

// setting the particle in motion.
  function moveRectangle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

// this function creates the connections(lines)
// between particles which are less than a certain distance apart
  function joinRectangle(rectangle) {
    rectangle.forEach(element =>{
      let dis = dist(this.x,this.y,element.x,element.y);
      if(dis<85) {
        stroke('rgba(255,255,255,0.04)');
        line(this.x,this.y,element.x,element.y);
      }
    });
  }
}

// an array to add multiple particles
function Particle{
this.particles = []; //the array for the elliptical particles
}

function Rectangle{
  this.rectangle = []; //the array for the rectangle particles
}

function setup() {
  var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);

  for(let i = 0;i<width/10;i++){
    particles.push(new Particle());
  }
  for(let i = 0;i<width/10;i++){
    rectangle.push(new Rectangle());
  }
}

function draw() {
  background('#0f0f0f');
  for(let i = 0;i<particles.length;i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }

  for(let i = 0;i<rectangle.length;i++) {
    rectangle[i].createParticle();
    rectangle[i].moveParticle();
    rectangle[i].joinParticles(particles.slice(i));
  }

}


