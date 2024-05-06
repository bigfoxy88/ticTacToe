//GameBoard
function GameBoard(){
    let board=[
        ['','',''],
        ['','',''],
        ['','','']
    ]


    const getBoard=()=>{
        return board
    }
    return {board,getBoard}
};



//Function to CREATE PLAYERS

function getPlayer(){
let playerMarker='x'
let Pscore=0;
let getPScore=()=>{ return Pscore}
let updatePScore=()=>{Pscore+=1}
return {'marker':playerMarker,getPScore,updatePScore}
}



function getComputer(){
let compMarker='o';
let Cscore=0;
let getCScore=()=>{ return Cscore}
let updateCScore=()=>{Cscore+=1}
return {'marker':compMarker,getCScore,updateCScore}
}



//GAME CONTROLLER FUNCTION


function gameController(){
let board=GameBoard().board;
let player1=getPlayer();
let computer=getComputer();









//get random row and column
const randoRowAndColumn=()=>{
    let randoRow=Math.floor(Math.random()*3);
    let randoColumn=Math.floor(Math.random()*3)

    return {randoRow,randoColumn}

}










//get computer input
const getComputerInput=()=>{

    let boardFull=board.flat().every(x=>{return x!==''});
    let compChoice=randoRowAndColumn();

   
    while(board[compChoice.randoRow][compChoice.randoColumn]!=='' ){
       
       if(boardFull)break;
        compChoice=randoRowAndColumn()
    }
    if(!boardFull){board[compChoice.randoRow][compChoice.randoColumn]=computer.marker;}
    
    
    
}










//WHAT SHOULD HAPPEN AFTER SOMEONE WINS

function afterWin(winner){

    

    let dialog=document.querySelector('.popup');
    let h1=document.createElement('h1');
    let p=document.createElement('p');
    let button=document.createElement('button')
    
    h1.textContent=`${winner} won `
    p.textContent='wanna play again?'
    button.textContent='Play again'
    button.addEventListener('click',clear)
    dialog.appendChild(h1)
    dialog.appendChild(p)
    dialog.appendChild(button)
  
    dialog.showModal()
}


//handles event after draw

function afterDraw(){
    
    let dialog=document.querySelector('.popup');
    let title=document.createElement('h1');
    let button2=document.createElement('button');
    title.textContent='Its a DRAW'
    button2.textContent='Play again'
    button2.addEventListener('click',clear)
    dialog.appendChild(title)
   
    dialog.appendChild(button2)
    dialog.showModal()

}







//Determining state of the game 
const determineState=()=>{
    let pscore=document.querySelector('.playerScore');
    let cscore=document.querySelector('.compScore');
    let winner;
    let winnerMarker;
    if(board[0][0]!==''&&board[0][1]==board[0][0]&&board[0][0]==board[0][2]){
        winnerMarker=board[0][0];
        winner=winnerMarker=='x'?'Player':"Computer"
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true
    }else if(board[1][0]!==''&&board[1][1]==board[1][0]&&board[1][0]==board[1][2]){
        winnerMarker=board[1][0];
        winner=winnerMarker=='x'?'Player':"Computer"
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true

    }else if(board[2][0]!==''&&board[2][1]==board[2][0]&&board[2][0]==board[2][2]){
        winnerMarker=board[2][0];
        winner=winnerMarker=='x'?'Player':"Computer";
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true


    }else if(board[0][0]!==''&&board[1][0]==board[0][0]&&board[0][0]==board[2][0]){
        winnerMarker=board[0][0];
        winner=winnerMarker=='x'?'Player':"Computer";
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true
    }else if(board[0][1]!==''&&board[1][1]==board[0][1]&&board[0][1]==board[2][1]){
        winnerMarker=board[0][1];
        winner=winnerMarker=='x'?'Player':"Computer";
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true
    }else if(board[0][2]!==''&&board[1][2]==board[0][2]&&board[0][2]==board[2][2]){
        winnerMarker=board[0][2];
        winner=winnerMarker=='x'?'Player':"Computer";
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true
    }else if(board[1][1]!==''&&board[0][0]==board[1][1]&&board[1][1]==board[2][2]){
        winnerMarker=board[1][1];
        winner=winnerMarker=='x'?'Player':"Computer"
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true
    }else if(board[1][1]!==''&&board[0][2]==board[1][1]&&board[1][1]==board[2][0]){
        winnerMarker=board[1][1];
        winner=winnerMarker=='x'?'Player':"Computer"
        if(winner=='Player'){
            player1.updatePScore()
            pscore.textContent=player1.getPScore()
        }else{
            computer.updateCScore()
            cscore.textContent=computer.getCScore()
        }
        afterWin(winner)
        console.log(`the winner is ${winner}`)
        return true
    }else if(board.flat().every(x=>{ return  x!==''})){
        afterDraw()
        



    }
    return false;
}









//Play turn 





const playTurn=(row,column)=>{


if( board[row][column]==''){
    board[row][column]=player1.marker;
    console.log(board)
    if(determineState()===false){
       setInterval(getComputerInput(),20000);
        determineState()
    }
    return board
   
   
}else{
    console.log('that move is invalid')
    console.log(board[row][column])
}

}






//UPDATE VIEW ON SCREEN AFTER MOVE IS MADE 


function updateView(boardie=GameBoard().getBoard()){
    const container=document.querySelector('.container');
    container.innerHTML='';
    
    for(let i=0 ;i<boardie.length;i++){
        let row=document.createElement('div');
        row.classList.add('row');
        for(let j=0;j<boardie[i].length;j++){
            let celly=document.createElement('div')
            celly.classList.add('cell')
            celly.setAttribute('data-row',i)
            celly.setAttribute('data-column',j)
            celly.textContent=board[i][j];
            celly.addEventListener('click',clickHandler)
            row.appendChild(celly)
        }
        container.appendChild(row)


    }
    console.log(board)
}







//HANDLES PLACING AN X ON BOARD


function clickHandler(e){

    let rowy =Number(e.target.getAttribute('data-row'))
    let columny=Number(e.target.getAttribute('data-column'))
    
    let boardy=playTurn(rowy,columny)
    updateView(boardy)
}







//CLEARING BOARD AFTER A ROUND 

function clear(){
    let dialog=document.querySelector('.popup');
    dialog.innerHTML=''
    dialog.close();
    board=GameBoard().getBoard()
    updateView(board)

}






//CONROLS DISPLAY 


function screeController(){









updateView()



}
return {screeController}
}
gameController().screeController()
