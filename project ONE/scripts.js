jQuery(function() {
console.log("loaded");

var body = $('body');
var score = 0;
var strikes = 0;
var scoreBoard = $('<div id="scoring"></div>');
body.append(scoreBoard);
var strikeCount = $('<div id="numberStrikes"></div>');
body.append(strikeCount);
var canvas = document.createElement("canvas"); //search canvas on stackoverflow
canvas.style.background = 'url(img/screenshot.png)'; //GOT FROM STACK OVERFLOW
canvas.style.height = '700px';
canvas.style.width = '95%';
canvas.style.border = '3px solid blue'
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d"); //stackoverflow

// make baseballs fall. when clicked get removed and score +100
function falling() {
   var ballFall = setInterval(function(){
    var baseball = $('<div class="ball"></div>');
    body.append(baseball);
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

//checks position of falling balls. removes if get to ceratin point
function check_v_position(){
  $('.ball').each(function(index,ball){
    // debugger help from john
    if ($(ball).css('top').replace('px','') > ($(canvas).height() - 10) ){
      strikes += 1;
      callStrike();
      $(this).remove();
      threeStrikes();
    }
  })
}

//will end game once 3 strikes
function gameOver(){
  $('.ball').remove();
}

//once you get 3 strikes alert game over
function threeStrikes(){
  if(strikes === 3 || strikes % 3 === 0){
    alert('GAME OVER.  Your score is ' + score + '. Click OK to restart!!!!');
    strikes = 0;
    score = 0;
    gameOver();
  }
}

//lists strikes.
function callStrike(){
  $('#numberStrikes').html('Strikes: ' + strikes);

}


//lists the score
function scoreboard(){
  $('#scoring').html('Score: ' + score);
}





});
