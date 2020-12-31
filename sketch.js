var flock = [];
function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 10; i++) {
    flock[i] = new Boid(); 
  }
}

function draw() {
  background(30);

  flock.forEach(element => {
    element.update();
    element.show();
  });

}