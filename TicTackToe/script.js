console.log("Welcome To tic tack toe");
let music=new Audio("music.mp3")
let turnMusic=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";

//function to cham
const changeTurn=()=>{
    return turn==='X'?"0":"X"
}

//function to check for win
const checkWin=()=>{

}
 
///Game logic start
let boxes=document.getElementsByClassName("box")

Array.from(boxes).forEach(e=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText==" "){
            boxtext.innerText="X";
            changeTurn();
            audioTurn.play()
            checkWin()
            document.getElementsByClassName("turn")[0].innerText="turn for"+ turn;
        }
    })

})
 