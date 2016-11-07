jQuery(function() {
console.log("loaded");
  // var game_start = new Audio('/audio/Charge.mp3');
  // game_start.play();

var body = $('body');
var score = 0;
var strikes = 0;
var scoreBoard = $('<div id="scoring"></div>');
body.append(scoreBoard);
var canvas = document.createElement("canvas"); //search canvas on stackoverflow
canvas.style.background = 'url(img/screenshot.png)'; //GOT FROM STACK OVERFLOW
canvas.style.height = '700px';
canvas.style.width = '95%';
canvas.style.border = '3px solid blue'
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d"); //stackoverflow

// make baseballs fall. when clicked get removed and score +100
function falling() {
   setInterval(function(){
    var baseball = $('<div class="ball"></div>');
    body.append(baseball);
    // baseball.css("top", Math.random() * window.innerHeight);
    baseball.css("left", Math.random() * window.innerWidth);
    baseball.css("right", Math.random() * window.innerWidth);

    baseball.click(function(){
      baseball.remove();
      score += 100
      console.log(score)
      scoreboard();
    });
   check_v_position()
  }, 1000);
}
falling();


function check_v_position(){
  $('.ball').each(function(index,ball){
    // debugger help from john
    if ($(ball).css('top').replace('px','') > ($(canvas).height() - 10) ){
      strikes += 1;
      console.log(strikes);
      $(this).remove();
    }
  })
}

function endGame(){


}

function callStrike(){

}



function scoreboard(){
  $('#scoring').html('Score: ' + score);
}

// function timerSet(){ //stack overflow http://stackoverflow.com/questions/4435776/simple-clock-that-counts-down-from-30-seconds-and-executes-a-function-afterward
//   if(time === 0){
//     setInterval(function(){
//       time++
//       $('#timer').innerHTML = 'Time Passed: ' + time;
//     }, 1000)
//   }
// }
// timerSet();






});
