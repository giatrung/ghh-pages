
let start = document.getElementById('start');
let g1;
let g2;
function startGame(){
    start.addEventListener('click',()=>{
         g1= new game;
         g2= new game2;
        start.style.visibility="hidden";
        
    })
}
startGame()
function gamePlace(){
    var g1= new game;
    var g2= new game2;
}