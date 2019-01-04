var randomOrigin = Math.random();

var random6 = Math.floor(randomOrigin * 6) +1;
var random10 = Math.floor(randomOrigin * 10) +1;
var mode = 6;
var result = 0;

function reroll() {
  randomOrigin = Math.random();
  if(mode == 0){
    alert("Please select dice first");
  }
  else if(mode == 4){
    document.querySelector("#result").innerHTML = Math.floor(randomOrigin * 4) +1;
  }
  else if(mode == 6){
    document.querySelector("#result").innerHTML = Math.floor(randomOrigin * 6) +1;
  }
  else if(mode == 10){
    document.querySelector("#result").innerHTML = Math.floor(randomOrigin * 10) +1;
  }
}
function handle4() {
  mode = 4;
  document.querySelector("#button4").classList.add("active");
  document.querySelector("#button6").classList.remove("active");
  document.querySelector("#button10").classList.remove("active");
}
function handle6() {
  mode = 6;
  document.querySelector("#button4").classList.remove("active");
  document.querySelector("#button6").classList.add("active");
  document.querySelector("#button10").classList.remove("active");
}
function handle10() {
  mode = 10;
  document.querySelector("#button4").classList.remove("active");
  document.querySelector("#button6").classList.remove("active");
  document.querySelector("#button10").classList.add("active");
}

document.querySelector('#greenButton').addEventListener("click",reroll);
document.querySelector('#button4').addEventListener("click",handle4);
document.querySelector('#button6').addEventListener("click",handle6);
document.querySelector('#button10').addEventListener("click",handle10);