let start = document.getElementById('start');
let resetbtn= document.getElementById('reset');
let infoGame= document.getElementById('info');
let player=document.getElementsByClassName('game');
let mode= document.getElementById('mode');
let time= document.getElementsByClassName('time');
// let g1;
// let g2;
time[0].style.visibility='hidden';
time[1].style.visibility='hidden';
player[0].style.visibility='hidden';
player[1].style.visibility='hidden';
console.log(mode.value)
function startGame(){
    start.addEventListener('click',()=>{
        player[0].style.visibility='visible';
        player[1].style.visibility='visible';
        time[0].style.visibility='visible';
        time[1].style.visibility='visible';
        localStorage.setItem('mode',mode.value);
         let g1= new game();
         let g2= new game2();
        start.hidden="true";
        resetbtn.hidden="true";
    })
}
function showTyso(){
    let p1=localStorage.getItem('p1')?JSON.parse(localStorage.getItem('p1')):0;
    let p2=localStorage.getItem('p2')?JSON.parse(localStorage.getItem('p2')):0;
    document.getElementById("p1").innerHTML=p1;
    document.getElementById("p2").innerHTML=p2;
}
showTyso();
startGame();
