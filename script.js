let randomNumber = 0
let myPoints = 0
let yourPoints = 0
const scoreInfo=document.getElementById("scoreInformation")
const myPointsPara=document.getElementById("myPoints")
const yourPointsPara=document.getElementById("yourPoints")
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const restarts = document.getElementById('restart')
function again(){
    randomNumber = 0
    myPoints = 0
    yourPoints = 0
    myPointsPara.innerHTML = 0
    yourPointsPara.innerHTML = 0
    scoreInfo.innerHTML = ""
}
function rock() {
    randomNumber = Math.floor(Math.random()*3)
    if (randomNumber === 0){
        let randomNumber = "rock"
        console.log(randomNumber)
    } else if(randomNumber === 1){
        let randomNumber = "paper"
        console.log(randomNumber)
    } else{
        let randomNumber = "scissor"
        console.log(randomNumber)
    }
    if (randomNumber === 2 ){
        scoreInfo.textContent="you win,rock beat scissor"
        yourPoints++
        yourPointsPara.innerHTML=yourPoints
        
    } else if(randomNumber === 1){
        scoreInfo.textContent="you lose, paper beat rock"
        myPoints++
        myPointsPara.innerHTML=myPoints
        
        
    } else {
        scoreInfo.textContent="It's a tie"
    
    }
    if (myPoints===3||yourPoints===3){
        console.log("game over")   
       
    }
}

function paper() {
    randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
    if (randomNumber === 0){
        let randomNumber = "rock"
        console.log(randomNumber)
    } else if(randomNumber === 1){
        let randomNumber = "paper"
        console.log(randomNumber)
    } else{
        let randomNumber = "scissor"
        console.log(randomNumber)
    }
    if (randomNumber === 2){
        scoreInfo.textContent="you lose,scissor beat paper"
        myPoints++
        if (myPoints===3||yourPoints===3){
            console.log("game over")
        }
        myPointsPara.innerHTML=myPoints
    } else if(randomNumber === 0){
        scoreInfo.textContent="you win,paper beat rock"
        yourPoints++
        if (myPoints===3||yourPoints===3){
            console.log("game over")
        }
        yourPointsPara.innerHTML=yourPoints
    } else{
        scoreInfo.textContent="It's a tie"
    }

}

function scissor() {
    randomNumber = Math.floor(Math.random()*3)
    console.log(randomNumber)
    if (randomNumber === 0){
        let randomNumber = "rock"
        console.log(randomNumber)
    } else if(randomNumber === 1){
        let randomNumber = "paper"
        console.log(randomNumber)
    } else{
        let randomNumber = "scissor"
        console.log(randomNumber)
    }
    if (randomNumber === 0){
        scoreInfo.textContent="you lose,rock beat scissor"
        myPoints++
        if (myPoints===3||yourPoints===3){
            console.log("game over")
        }
        myPointsPara.innerHTML=myPoints
     
    }else if (randomNumber===1){
        scoreInfo.textContent="you win, scissor beat paper"
        yourPoints++
        if (myPoints===3||yourPoints===3){
            console.log("game over")
        }
        yourPointsPara.innerHTML=yourPoints
    }else {
        scoreInfo.textContent="It's a tie"
    }
}

  




