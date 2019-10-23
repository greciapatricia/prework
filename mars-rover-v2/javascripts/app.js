// Rover Object Goes Here
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
var direction = "sur"
var rover = "1"
if (direction == "sur") {
  console.log ("S");
}
  else if (direction == "este") {
    console.log ("E");
 }
 else if (direction == "oeste") {
  console.log ("W");
}
 else {
  console.log ("N");
}
var direction = "norte"
var rover = "left"
if (direction == "norte" && rover == "left") {
  console.log ("West");
}
  else if (direction == "este" && rover == "left") {
    console.log ("South");
 }
 else if (direction == "norte" && rover == "right") {
  console.log ("East");
}
 else {
  console.log ("North");
}