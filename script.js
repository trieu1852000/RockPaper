   let randomNumber = 0
let myPoints = 0
let yourPoints = 0
const scoreInfo=document.getElementById("scoreInformation")
const myPointsPara=document.getElementById("myPoints")
const yourPointsPara=document.getElementById("yourPoints")
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const restarts = document.getElementById('restart')
const result = document.getElementById('finish')
function again(){
    randomNumber = 0
    myPoints = 0
    yourPoints = 0
    myPointsPara.innerHTML = 0
    yourPointsPara.innerHTML = 0
    scoreInfo.innerHTML = ""
    result.innerHTML = ""
    restarts.innerHTML = "Start"
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
        scoreInfo.textContent="You win!you chose rock and I chose scissor"
        yourPoints++
        yourPointsPara.innerHTML=yourPoints
        
    } else if(randomNumber === 1){
        scoreInfo.textContent="You lose!I chose paper and you chose rock"
        myPoints++
        myPointsPara.innerHTML=myPoints     
    } else {
        scoreInfo.textContent="It's a tie! You and I chose rock"
    }
  
        if (myPoints === 5){
            result.textContent="GAME OVER. You lose"
            restarts.textContent = "RESTART"
    
        } 
        if(yourPoints === 5){
            result.textContent="GAME OVER. Congratulation! You are the winner!"
            restarts.textContent = "RESTART"
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
        scoreInfo.textContent="You lose! I chose scissor and you chose paper"
        myPoints++
        myPointsPara.innerHTML=myPoints
    } else if(randomNumber === 0){
        scoreInfo.textContent="You win! You chose paper and I chose rock"
        yourPoints++
        yourPointsPara.innerHTML=yourPoints
    } else{
        scoreInfo.textContent="It's a tie! You and I chose paper"
    }
    if (myPoints === 5){
        result.textContent="GAME OVER. You lose"
        restarts.textContent = "RESTART"
    } 
    if(yourPoints === 5){
        result.textContent="GAME OVER. Congratulation! You are the winner!"
        restarts.textContent = "RESTART"
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
        scoreInfo.textContent="You lose! I chose rock and you chose scissor"
        myPoints++
        
        myPointsPara.innerHTML=myPoints
     
    }else if (randomNumber===1){
        scoreInfo.textContent="You win! You chose scissor and I chose paper"
        yourPoints++
    
        yourPointsPara.innerHTML=yourPoints
    }else {
        scoreInfo.textContent="It's a tie! You and I chose scissor"
    }
    if (myPoints === 5){
        result.textContent="GAME OVER. You lose"
        restarts.textContent = "RESTART"
    } 
    if(yourPoints === 5){
        result.textContent="GAME OVER. Congratulation! You are the winner!"
        restarts.textContent = "RESTART"
    }
}






