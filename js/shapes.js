window.onload = function() {
    document.getElementById("hello-sample").onclick = sayHelloStaff;
    document.getElementById("rectangle-sample").onclick = drawRectangleStaff;
    document.getElementById("colored-rectangle-sample").onclick = drawColoredRectangleStaff;
    document.getElementById("triangle-sample").onclick = drawTriangleStaff;
    document.getElementById("smile-sample").onclick = drawFaceStaff;
    document.getElementById("pyramid-sample").onclick = drawPyramidStaff;

    // Eleemnt ID Below Here.

    document.getElementById("hello").onclick = sayHello;
    document.getElementById("rectangle").onclick = drawRectangle;
    document.getElementById("colored-rectangle").onclick = drawColoredRectangle;
    document.getElementById("triangle").onclick = drawTriangle;
    document.getElementById("smile").onclick = drawFace;
    document.getElementById("pyramid").onclick = drawPyramid;
}

/*
 * Exercise 1
 */

const sayHello = function() {
  const canvas = document.getElementById('student-canvas-1');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  do {
    var message = prompt("Message: ")
    if (message.length > 50) {
      alert("Your message is too long. Keep it under 50 characters")
    }
  } while(message.length > 50)

  ctx.font = "48px sans-serif";
  ctx.strokeText(message, 30, 70, 994);

};

/*
 * Exercise 2.
 */

const drawRectangle = function() {
  const canvas = document.getElementById('student-canvas-2');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var width = 0;
  var height = 0;
  var x = 0;
  var y = 0;
  do {
    var width = prompt("Width: ")
    var height = prompt("Height: ")
    var x = prompt("X: ")
    var y = prompt("Y: ")
    if (width == null || height == null || x == null || y == null) {
      break;
    }
    if (width > 1024 || width < 1) {
      alert("Your width must be between 1 and 1024.")
    }
    else if (height > 512 || height < 1) {
      alert("Your height must be between 1 and 512.")
    }
    else if (x < 1 || x > 1024) {
      alert("Your x-coordinate must be between 1 and 1024.")
    }
    else if (y < 1 || y > 512) {
      alert("Your y-coordinate must be between 1 and 512.")
    }
    else if (isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y)) {
      alert("One of your values is not a number.")
    }
    else if (Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512) {
      alert("Your rectangle won't fit on the canvas.")
    }
  } while (width > 1024 || width < 1 || height > 512 || height < 1 || x < 1 || x > 1024 || y < 1 || y > 512 || isNaN(width) || isNaN(height) || isNaN(x) || isNaN(y) || Number(width) + Number(x) > 1024 || Number(height) + Number(y) > 512)

  if (!(width == null) && !(height == null) && !(x == null) && !(y == null)) {
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.stroke();
  }
};

/*
 * Exercise 3.
 */

const drawColoredRectangle = function() {
  const canvas = document.getElementById('student-canvas-3');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var color = (prompt("Color: "))
    if (color == null) {
      break;
    }
    color = String(color)
    var color_setup = color.toUpperCase()
    if (color_setup != "GREEN" && color_setup != "BLACK" && color_setup != "BLUE" && color_setup != "ORANGE" && color_setup != "PURPLE" && color_setup != "RED" && color_setup != "YELLOW") {
      alert(color + " is not a supported color.")
    }
  } while (color_setup != "GREEN" && color_setup != "BLACK" && color_setup != "BLUE" && color_setup != "ORANGE" && color_setup != "PURPLE" && color_setup != "RED" && color_setup != "YELLOW")

  if (color != null) {
    ctx.fillStyle = color_setup;
    ctx.fillRect(10, 10, 100, 50);
  }
};

/*
 * Exercise 4.
 */

 const drawTriangle = function() {
   const canvas = document.getElementById('student-canvas-4');
   const ctx = canvas.getContext('2d');
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   do {
     var line1 = prompt("Side 1: ")
     var line2 = prompt("Side 2: ")
     var line3 = prompt("Side 3: ")
     var height = Math.min (line1, line2, line3)
     var hypo = Math.max(line1, line2, line3)
     var base = Math.sqrt(hypo*hypo - height*height)
     if (base == 0 && height == 0 && hypo == 0) {
       break;
     }
     line1 = Number(line1)
     line2 = Number(line2)
     line3 = Number(line3)
     if (base*base + height*height != hypo*hypo || base == 0 || height == 0 || hypo == 0  || line1+line2+line3-hypo-height != base) {
       alert("That's not a valid right triangle.")
     }
     if (isNaN(line1) || isNaN(line2) || isNaN(line3)) {
       alert("One of your sides is not a number.")
     }
     if (base > 1024 || height > 512 || hypo > 1310720) {
       alert("Your triangle won't fit on the canvas.")
     }
   }  while ((Math.floor(base)*Math.floor(base) + height*height != hypo*hypo) || isNaN(line1) || isNaN(line2) || isNaN(line3) || base > 1024 || height > 512 || hypo > 1310720 || base == 0 || height == 0 || hypo == 0)

   if ((base*base + height*height == hypo*hypo) && (base < 1024 && height < 512 && hypo < 1145) && (base != 0 && height != 0 && hypo != 0) && (base != null && height != null && hypo != null)) {
     height = height + 25
     base = base + 25
     ctx.beginPath();
     ctx.moveTo(25, 25);
     ctx.lineTo(25, height);
     ctx.lineTo(base, height)
     ctx.lineTo(25, 25)
     ctx.stroke();
   };
 }

/*
 * Exercise 5
 */

const drawFace = function() {
  const canvas = document.getElementById('student-canvas-5');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var radii = (prompt("Radius: "))
    if (radii == null) {
      break;
    }
    if (radii < 32) {
      alert("Your radius must be at least 32.")
    }
    if (isNaN(radii)) {
      alert("Your radius is not a number.")
    }
    if (radii > 256) {
      alert("Your smiley face won't fit on the canvas.")
    }
  } while (radii > 256 || isNaN(radii) || radii < 32)

  var radii_eyes = 0.15 * radii
  var radii_mouth = 0.7 * radii
  ctx.beginPath();
  ctx.arc(512, 256, radii, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512, 256, radii_mouth, 0, Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 - 0.4 * radii, 256 - 0.4 * radii, radii_eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
  ctx.beginPath();
  ctx.arc(512 + 0.4 * radii, 256 - 0.4* radii, radii_eyes, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.closePath();
};

/*
 * Exercise 6 (extra credit).
 */

const drawPyramid = function() {
  const canvas = document.getElementById('student-canvas-6');
  const ctx = canvas.getContext('2d');
  var distance = 0
  var height_1 = 0
  var distance_mod = 0
  var height_mod = 0
  var counter = 5
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  do {
    var side = (prompt("Side: "))
    if (side == null) {
      break;
    }
    if (side < 1) {
      alert("Your block size must be at least 1.")
    }
    if (side >= 101) {
      alert("Your pyramid won't fit on the canvas")
    }
    if (isNaN(side)) {
      alert("Your block size is not a number.")
    }
  } while (isNaN(side) || side >= 101 || side < 1)

  for (i = 5; i > 0; i--) {
    counter = i
    while(counter >= 1) {
      ctx.beginPath();
      ctx.rect(10 + Number(distance), (502 - side) - Number(height_1), Number(side), Number(side));
      ctx.stroke();
      ctx.closePath();
      distance = Number(distance) + Number(side)
      counter--
    }
    distance_mod++
    distance = distance_mod * (1/2 * side)
    height_mod++
    height_1 = height_mod * side
  }
};
