// ___________ for(for(for(you))) _________________
//
// This is a 3D Javascript, WEBGL, P5.js thing, that
// I made for you to enjoy. I hope using it is as
// much fun as making it. :-)

var grid; // Create a variable to hold the grid

function setup() {
	createCanvas( windowWidth, windowHeight, WEBGL ); // full screen
  grid = new Grid( 3, 100, 1.6 ); // create the grid, enter vaulues
}

function draw() {
  camera( 0, 0, sin( frameCount * 0.01 ) * 600 ); // animate view
  ambientLight( 0 ); // all spheres black
  rotateX(  mouseX  * 0.001 ); // custom orbit like effect
  rotateY(  mouseY  * 0.001 );
  grid.render(); // render the grid
}

function Grid( _cnt, _spacing, _size ) { // a small constructor
  this.cnt = _cnt; // from -cnt to +cnt+1 to get all centered
  this.spa = _spacing;
  this.size = _size;
  this.render = function() {
    this.off = dist( mouseX, mouseY, 0, 0) * 0.2; // scale effect
    for ( var x = -this.cnt; x < this.cnt+1; x++ ) { // magic grid
      for ( var y = -this.cnt; y < this.cnt+1; y++ ) {
        for ( var z = -this.cnt; z < this.cnt+1; z++ ) {
          push();
          translate( x * this.off, y * this.off, z * this.off );
          sphere( this.size ); // create the sphere
          pop();
        }
      }
    }
  }
}


// _______________________ Have a nice day and _____________
// _______________________ write AT matthis-jaeger.net
