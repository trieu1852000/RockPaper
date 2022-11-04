let randomNumber = 0
let myPoints=document.getElementsByClassName("item4")[0]
let yourPoints=document.getElementsByClassName("item5")[0]



function rock() {
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
    if (randomNumber === 2 ){
        console.log("you win,rock beat scissor")
        myPoints = 0
        myPoints += 1 
        myPoints.innerHTML = myPoints
        
    } else if(randomNumber === 1){
        console.log("you lose, paper beat rock")
        
    } else {
        console.log("It's a tie")
    
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
        console.log("you lose,scissor beat paper")
    } else if(randomNumber === 0){
        console.log("you win,paper beat rock")
    } else{
        console.log("It's a tie")
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
        console.log("you lose")
        console.log("rock beat scissor")
    }else if (randomNumber===1){
        console.log("you win, scissor beat paper")
    }else {
        console.log("It's a tie")
    }
}





