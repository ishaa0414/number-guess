let btn=document.getElementById('btn');
let message=document.getElementById('sc');
var raNum=document.getElementsByClassName('number');
raNum= parseInt(Math.random()*100 + 1);
let score=document.getElementById('score');
let background=document.getElementById('background');
let chances=100;
let highscore=document.getElementById('highscore');
highscore=0;
function maincheck(){
    score.innerHTML=chances;
    let input=parseInt(document.getElementById("guessid").value);
   
    if(input == raNum){
        message.innerHTML="🤩🤩Hurray You Won🤩";
background.style.backgroundColor='#37A02A ';
if(chances>highscore){
    highscore.innerText=`$(chances)`;
    btn.style.visibility="visible";
}
    }
    else {
        if(input < raNum){
      message.innerHTML="Your Guess is Low";
      background.style.backgroundColor='#4B0D1D ';
    }
    else{
        message.innerHTML="Your Guess is High";
        background.style.backgroundColor='#4B0D1D ';
    }
}

chances--;
    
}

function reloadgame(){
background.style.backgroundColor='#28393A';
let inputbox=document.getElementById("guessid").value;
inputbox.innerText=null;
chances=100;
}
