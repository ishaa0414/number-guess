let btn=document.getElementById('btn');
let message=document.getElementById('sc');
var randomshow=document.getElementById('show');
let random= parseInt(Math.random()*100 + 1);
let score=document.getElementById('score');
let background=document.getElementById('background');
let chances=100;
let highscore=document.getElementById('high');
function maincheck(){
    score.innerText=chances;
    
    let input=parseInt(document.getElementById("guessid").value);
   
    if(input == random){
        message.innerHTML="🤩🤩Hurray You Won🤩";
background.style.backgroundColor='#37A02A ';
randomshow.innerHTML=random;
btn.style.visibility="visible";
highscore.innerText=chances;

    }
    else {
        if(input < random){
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
let inputbox=document.getElementById("guessid");
inputbox.value=" ";
chances=100;
score.innerText=chances;
highscore.innerText=0;
randomshow.innerText='?';
}
