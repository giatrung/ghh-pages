class game2 extends game{
    constructor(){
        super(game.canvas,game.context);
    }
    init(){
        let gameZone=document.getElementById("game2");
        this.canvas=document.createElement("canvas"); // Tạo thẻ canvas
        //Tạo ra một đối tượng HTML hỗ trợ cho việc vẽ đồ họa
        this.context=this.canvas.getContext('2d');
        //Set độ rộng, cao của thẻ.
        this.canvas.width=400;
        this.canvas.height=400;
        //Thêm canvas vào body với những thuộc tính trên
        gameZone.appendChild(this.canvas);
        this.snake= new snake(this,40,38,37,39);
        this.food=new food(this);
    }
    loop(){
        if(this.snake.die() ||game.lose==true)
        {
        this.update();
        this.draw();
        setTimeout(()=>this.loop(),60)
        }
        else{
            this.lose=alert("Player 1 Win");
            window.location.reload();
        }
    }
}