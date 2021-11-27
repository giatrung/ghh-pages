class food{
    constructor(game){
        this.game=game;
        this.x=100;
        this.y=200;
        this.grid=20;
        this.radius=5;
    }
    update(){
        //Random() 0 to 1
        //Min (0*19)*20 = 0
        //Max (1*19)*20= 380
        this.x=(Math.floor(Math.random()*19))*this.grid;
        this.y=(Math.floor(Math.random()*19))*this.grid;
    }
    draw(){
        this.game.context.fillStyle="green";
        this.game.context.fillRect(this.x,this.y,this.grid,this.grid);
    }
}