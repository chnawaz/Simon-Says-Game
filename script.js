console.log("heloo");

let gameSeq=[];
let userSeq=[];

let started= false;
let level= 0;
let h2=document.querySelector("h3");
let btns=["red","yellow","purple","green"];

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game has start");
        started=true;
        levelUp();
    }
});



 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
 }

 
 function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
 }






function levelUp(){
    userSeq=[];
    level++;
    // h2.innerText = `level ${level}`;
    h2.innerText = `level ${level}`

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);

    // random btn choose
    gameFlash(randBtn);

}


// button event listners
function btnPress(){
    let btn= this
    // console.log(btn);
    userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);

    userFlash(this);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


// check ans or check gameseq and userseq

function checkAns(idx){
    // console.log("curr level", level)

    if(userSeq[idx] === gameSeq[idx]){
        // console.log("same sequence");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over! your score was <b>${level}</b> <br> press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        resetGame();
    }
}



// game reset function
function resetGame(){
    started=false;
    gameSeq=[];
    userSeq=[];
    highestScore(level);
    level=0;
}


// hw print hightest score
function highestScore(score){
    let hs=document.querySelector("h2");
    hs.innerHTML=`Highest score= ${score}`;
    hs.classList.remove("high");
}
