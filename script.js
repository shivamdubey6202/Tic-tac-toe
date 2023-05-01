const a1=document.getElementById("a1");
const a2=document.getElementById("a2");
const a3=document.getElementById("a3");
const a4=document.getElementById("a4");
const a5=document.getElementById("a5");
const a6=document.getElementById("a6");
const a7=document.getElementById("a7");
const a8=document.getElementById("a8");
const a9=document.getElementById("a9");
const result=document.getElementById("result");
const turn=document.getElementById("turn");

let flag=1;

function myFunc(){
    // Row 1 if player X wins
    if(a1.value==='X'&&a2.value==='X'&&a3.value==='X'){
        result.innerHTML=`Winner Player X`;
        a4.disabled=true;
        a5.disabled=true;
        a6.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    // Row 2 if player X wins
    else if(a4.value==='X'&&a5.value==='X'&&a6.value==='X'){
        result.innerHTML=`Winner Player X`;
        a1.disabled=true;
        a2.disabled=true;
        a3.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    // Row 3 if player X wins
    else if(a7.value==='X'&&a8.value==='X'&&a9.value==='X'){
        result.innerHTML=`Winner Player X`;
        a1.disabled=true;
        a2.disabled=true;
        a3.disabled=true;
        a4.disabled=true;
        a5.disabled=true;
        a6.disabled=true;
    }
    // Row 1 if player O wins
    else if(a1.value==='O'&&a2.value==='O'&&a3.value==='O'){
        result.innerHTML=`Winner Player O`;
        a4.disabled=true;
        a5.disabled=true;
        a6.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    // Row 2 if player O wins
    else if(a4.value==='O'&&a5.value==='O'&&a6.value==='O'){
        result.innerHTML=`Winner Player O`;
        a1.disabled=true;
        a2.disabled=true;
        a3.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    // Row 3 if player O wins
    else if(a7.value==='O'&&a8.value==='O'&&a9.value==='O'){
        result.innerHTML=`Winner Player O`;
        a1.disabled=true;
        a2.disabled=true;
        a3.disabled=true;
        a4.disabled=true;
        a5.disabled=true;
        a6.disabled=true;
    }
    // Column 1 if player X wins
    else if(a1.value==='X'&&a4.value==='X'&&a7.value==='X'){
        result.innerHTML=`Winner Player X`;
        a2.disabled=true;
        a3.disabled=true;
        a5.disabled=true;
        a6.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    // Column 2 if player X wins
    else if(a2.value==='X'&&a5.value==='X'&&a8.value==='X'){
        result.innerHTML=`Winner Player X`;
        a1.disabled=true;
        a3.disabled=true;
        a4.disabled=true;
        a6.disabled=true;
        a7.disabled=true;
        a9.disabled=true;
    }
    // Column 3 if player X wins
    else if(a3.value==='X'&&a6.value==='X'&&a9.value==='X'){
        result.innerHTML=`Winner Player X`;
        a1.disabled=true;
        a2.disabled=true;
        a4.disabled=true;
        a5.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
    }
    // Column 1 if player O wins
    else if(a1.value==='O'&&a4.value==='O'&&a7.value==='O'){
        result.innerHTML=`Winner Player O`;
        a2.disabled=true;
        a3.disabled=true;
        a5.disabled=true;
        a6.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    // Column 2 if player O wins
    else if(a2.value==='O'&&a5.value==='O'&&a8.value==='O'){
        result.innerHTML=`Winner Player O`;
        a1.disabled=true;
        a3.disabled=true;
        a4.disabled=true;
        a6.disabled=true;
        a7.disabled=true;
        a9.disabled=true;
    }
    // Column 3 if player O wins
    else if(a3.value==='O'&&a6.value==='O'&&a9.value==='O'){
        result.innerHTML=`Winner Player O`;
        a1.disabled=true;
        a2.disabled=true;
        a4.disabled=true;
        a5.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
    }
    // Diagonals if player X wins
    else if(a1.value==='X'&&a5.value==='X'&&a9.value==='X'){
        result.innerHTML=`Winner Player X`;
        a2.disabled=true;
        a3.disabled=true;
        a4.disabled=true;
        a6.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
    }
    else if(a3.value==='X'&&a5.value==='X'&&a7.value==='X'){
        result.innerHTML=`Winner Player X`;
        a1.disabled=true;
        a2.disabled=true;
        a4.disabled=true;
        a6.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    // Diagonals if player O wins
    else if(a1.value==='O'&&a5.value==='O'&&a9.value==='O'){
        result.innerHTML=`Winner Player O`;
        a2.disabled=true;
        a3.disabled=true;
        a4.disabled=true;
        a6.disabled=true;
        a7.disabled=true;
        a8.disabled=true;
    }
    else if(a3.value==='O'&&a5.value==='O'&&a7.value==='O'){
        result.innerHTML=`Winner Player O`;
        a1.disabled=true;
        a2.disabled=true;
        a4.disabled=true;
        a6.disabled=true;
        a8.disabled=true;
        a9.disabled=true;
    }
    else if((a1.value==='X' || a1.value==='O') &&
    (a2.value==='X' || a2.value==='O') &&
    (a3.value==='X' || a3.value==='O') &&
    (a4.value==='X' || a4.value==='O') &&
    (a5.value==='X' || a5.value==='O') &&
    (a6.value==='X' || a6.value==='O') &&
    (a7.value==='X' || a7.value==='O') &&
    (a8.value==='X' || a8.value==='O') &&
    (a9.value==='X' || a9.value==='O')){
        result.innerHTML="Match Tie";
    }
    else{
        if(flag==1){
            turn.innerHTML="X";
        }else{
            turn.innerHTML="O";
        }
    }
}
function reset(){
    location.reload();
}

function func1(){
    if(flag==1){
        a1.value="X";
        a1.disabled=true;
        flag=0;
    }else{
        a1.value="O";
        a1.disabled=true;
        flag=1;
    }
}
function func2(){
    if(flag==1){
        a2.value="X";
        a2.disabled=true;
        flag=0;
    }else{
        a2.value="O";
        a2.disabled=true;
        flag=1;
    }
}
function func3(){
    if(flag==1){
        a3.value="X";
        a3.disabled=true;
        flag=0;
    }else{
        a3.value="O";
        a3.disabled=true;
        flag=1;
    }
}
function func4(){
    if(flag==1){
        a4.value="X";
        a4.disabled=true;
        flag=0;
    }else{
        a4.value="O";
        a4.disabled=true;
        flag=1;
    }
}
function func5(){
    if(flag==1){
        a5.value="X";
        a5.disabled=true;
        flag=0;
    }else{
        a5.value="O";
        a5.disabled=true;
        flag=1;
    }
}
function func6(){
    if(flag==1){
        a6.value="X";
        a6.disabled=true;
        flag=0;
    }else{
        a6.value="O";
        a6.disabled=true;
        flag=1;
    }
}
function func7(){
    if(flag==1){
        a7.value="X";
        a7.disabled=true;
        flag=0;
    }else{
        a7.value="O";
        a7.disabled=true;
        flag=1;
    }
}
function func8(){
    if(flag==1){
        a8.value="X";
        a8.disabled=true;
        flag=0;
    }else{
        a8.value="O";
        a8.disabled=true;
        flag=1;
    }
}
function func9(){
    if(flag==1){
        a9.value="X";
        a9.disabled=true;
        flag=0;
    }else{
        a9.value="O";
        a9.disabled=true;
        flag=1;
    }
}