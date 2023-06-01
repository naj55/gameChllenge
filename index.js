const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
const gravity = 0.5;
class player {
  constructor(position) {
    this.position = position;
    this.velocity = {
      x: 0,
      y: 1,
    };
    this.height = 100;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, 100, this.height);
  }
  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y + this.height + this.velocity.y < canvas.height) {
      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}
let myplayer = new player({
  x: 0,
  y: 0,
});
let myplayer2 = new player({
  x: 100,
  y: 100,
});
const keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
};

//move
function animate() {
  console.log("hh");
  window.requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  myplayer.update();
  myplayer2.update();

  myplayer.velocity.x = 0;
  if (keys.d.pressed) myplayer.velocity.x = 5;
  else if (keys.a.pressed) myplayer.velocity.x = -5;
}
animate();

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = true;
      breake;
    case "a":
      keys.a.pressed = true;
      breake;
    case "w":
      myplayer.velocity.y = -20;
      breake;
  }

  console.log(event);
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      keys.d.pressed = false;
      breake;
    case "a":
      keys.a.pressed = false;
      breake;
  }

  console.log(event);
});
