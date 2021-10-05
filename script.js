

// Login page+dificulty level choise
function login() {

    let usernameval = document.getElementById('UserNameInput').value;

    let passwordval = document.getElementById('PasswordInput').value;


     if (usernameval =='abcd' && passwordval =='1234' ) {
        window.location.href="SodukoDifIndex.html";
    }

    else if (usernameval != 'abcd' && passwordval != '1234' ) {
        document.getElementById('inputuser').innerHTML = 'Wrong ID';
        document.getElementById('inputpassword').innerHTML= 'Wrong Password';
        }

    else if (usernameval == 'abcd' && passwordval != '1234' ) {
        document.getElementById('inputpassword').innerHTML = 'Wrong Password';
    }

    else {
        document.getElementById('inputuser').innerHTML = 'Wrong ID';
    }
}


// this only allow input of numbers 
function numberOnly() {
    
    let cellNumber = 1;
     for(index = 0 ; index < 82 ;index++, cellNumber++){
        
        let newCellnumber = 'cell' + cellNumber;
        let input = document.getElementById(newCellnumber).value ;
    if (input >= 0 ) {
    //   do nothing
    }
    else{
        document.getElementById(newCellnumber).value= '';
        alert ('numbers only');
       
      }

    }
}


// load game functions
let boardNum=0;
let dificulty='';
function loadGame(dificultyLevel){
    dificulty=dificultyLevel;
    boardNum=Math.floor(Math.random()*(4-1))+1;
   randomDelete(boardNum,dificulty);
}
let board1=[[2,1,5,3,7,9,8,6,4],[9,8,6,1,2,4,3,5,7],[7,3,4,8,5,6,2,1,9],[4,5,2,7,8,1,6,9,3],[8,6,9,5,4,3,1,7,2],[3,7,1,6,9,2,4,8,5],[5,2,7,4,1,8,9,3,6],[6,4,8,9,3,7,5,2,1],[1,9,3,2,6,5,7,4,8]];
let board2=[[8,7,6,4,9,3,2,5,1],[3,4,5,7,1,2,9,6,8],[2,9,1,5,6,8,4,7,3],[9,8,2,1,3,5,7,4,6],[7,5,4,8,2,6,3,1,9],[1,6,3,9,4,7,8,2,5],[4,1,7,3,5,9,6,8,2],[6,3,8,2,7,1,5,9,4],[5,2,9,6,8,4,1,3,7]];
let board3=[[1,6,5,8,4,7,9,2,3],[7,8,9,3,1,2,5,4,6],[4,3,2,5,9,6,1,7,8],[2,9,7,4,6,3,8,5,1],[5,1,8,7,2,9,3,6,4],[3,4,6,1,5,8,2,9,7],[9,7,3,2,8,4,6,1,5],[8,2,1,6,7,5,4,3,9],[6,5,4,9,3,1,7,8,2]];

let newBoard1=[[2,1,5,3,7,9,8,6,4],[9,8,6,1,2,4,3,5,7],[7,3,4,8,5,6,2,1,9],[4,5,2,7,8,1,6,9,3],[8,6,9,5,4,3,1,7,2],[3,7,1,6,9,2,4,8,5],[5,2,7,4,1,8,9,3,6],[6,4,8,9,3,7,5,2,1],[1,9,3,2,6,5,7,4,8]];
let newBoard2=[[8,7,6,4,9,3,2,5,1],[3,4,5,7,1,2,9,6,8],[2,9,1,5,6,8,4,7,3],[9,8,2,1,3,5,7,4,6],[7,5,4,8,2,6,3,1,9],[1,6,3,9,4,7,8,2,5],[4,1,7,3,5,9,6,8,2],[6,3,8,2,7,1,5,9,4],[5,2,9,6,8,4,1,3,7]];
let newBoard3=[[1,6,5,8,4,7,9,2,3],[7,8,9,3,1,2,5,4,6],[4,3,2,5,9,6,1,7,8],[2,9,7,4,6,3,8,5,1],[5,1,8,7,2,9,3,6,4],[3,4,6,1,5,8,2,9,7],[9,7,3,2,8,4,6,1,5],[8,2,1,6,7,5,4,3,9],[6,5,4,9,3,1,7,8,2]];
// if newBoard1=board1, randomDelete function changes both vars


// Random choise of cells to empty
function randomDelete(boardNum,dificulty){
    
    let deleteAmount;
    if(dificulty=='easy'){
        deleteAmount=20;
    }
    else if(dificulty=='med'){
        deleteAmount=40;
    }
    else if(dificulty=='hard'){
        deleteAmount=60;
    }
    if(boardNum==1){
        newBoard1=[[2,1,5,3,7,9,8,6,4],[9,8,6,1,2,4,3,5,7],[7,3,4,8,5,6,2,1,9],[4,5,2,7,8,1,6,9,3],[8,6,9,5,4,3,1,7,2],[3,7,1,6,9,2,4,8,5],[5,2,7,4,1,8,9,3,6],[6,4,8,9,3,7,5,2,1],[1,9,3,2,6,5,7,4,8]];
        // to reset the newBoard so it wont take down another set of cells
        for(i=0; i<=deleteAmount; i++){
            let row=Math.floor(Math.random()*9);
            let cell=Math.floor(Math.random()*9);
            if(newBoard1[row][cell]!==''){
                newBoard1[row][cell]='';
            }
            else{
                i--;
            }
        }
        insertNewBoard(boardNum)
    }
    else if(boardNum==2){
        newBoard2=[[8,7,6,4,9,3,2,5,1],[3,4,5,7,1,2,9,6,8],[2,9,1,5,6,8,4,7,3],[9,8,2,1,3,5,7,4,6],[7,5,4,8,2,6,3,1,9],[1,6,3,9,4,7,8,2,5],[4,1,7,3,5,9,6,8,2],[6,3,8,2,7,1,5,9,4],[5,2,9,6,8,4,1,3,7]];
        for(i=0; i<=deleteAmount; i++){
            let row=Math.floor(Math.random()*9);
            let cell=Math.floor(Math.random()*9);
            if(newBoard2[row][cell]!==''){
                newBoard2[row][cell]='';
            }
            else{
                i--;
            }
        }
        insertNewBoard(boardNum)
    }
    else if(boardNum==3){
        newBoard3=[[1,6,5,8,4,7,9,2,3],[7,8,9,3,1,2,5,4,6],[4,3,2,5,9,6,1,7,8],[2,9,7,4,6,3,8,5,1],[5,1,8,7,2,9,3,6,4],[3,4,6,1,5,8,2,9,7],[9,7,3,2,8,4,6,1,5],[8,2,1,6,7,5,4,3,9],[6,5,4,9,3,1,7,8,2]];
        for(i=0; i<=deleteAmount; i++){
            let row=Math.floor(Math.random()*9);
            let cell=Math.floor(Math.random()*9);
            if(newBoard3[row][cell]!==''){
                newBoard3[row][cell]='';
            }
            else{
                i--;
            }
        }
        insertNewBoard(boardNum)
    }
}

// after newBoard was created - we copy it to the game
function insertNewBoard(boardNum){
    if(boardNum==1){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                document.getElementById(chosenCell).value=newBoard1[i][j];
            }
        }
    }
    else if(boardNum==2){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                document.getElementById(chosenCell).value=newBoard2[i][j];
            }
        }
    }
    else if(boardNum==3){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                document.getElementById(chosenCell).value=newBoard3[i][j];
            }
        }
    }
}

// "Finish" button - prints right or wrong
function printResult(){
    let flag=compareBoards(boardNum)
    if(flag==true){
        document.getElementById('levelResult').innerHTML="Congrats! You win!";
    }
    else if(flag==false){
        document.getElementById('levelResult').innerHTML="Oops... Try again!";
    }
}

// compares boards to determin flag (right/wrong)
function compareBoards(boardNum){
    let flag1=true;
    if(boardNum==1){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                let checkedNum=document.getElementById(chosenCell).value;
                if(checkedNum != board1[i][j] || checkedNum == ''){
                    flag1=false;
                    return flag1;
                }
            }
        }
        return flag1;
    }
    else if(boardNum==2){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                let checkedNum=document.getElementById(chosenCell).value;
                if(checkedNum != board2[i][j] || checkedNum == ''){
                    flag1=false;
                    return flag1;
                }
            }
        }
        return flag1;
    }
    else if(boardNum==3){
        let cellNum=1;
        for(let i=0; i<9; i++){
            for(let j=0; j<9; j++, cellNum++){
                let chosenCell="cell"+cellNum;
                let checkedNum=document.getElementById(chosenCell).value;
                if(checkedNum != board3[i][j] || checkedNum == ''){
                    flag1=false;
                    return flag1;
                }
            }
        }
        return flag1;
    }
}

// "Again" button
function again(){
    document.getElementById('levelResult').innerHTML="";
    insertNewBoard(boardNum);
}