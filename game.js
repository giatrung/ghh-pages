class game{
    constructor(){
        var canvas= null;
        var context=null;
        this.init();
        this.loop();
    }
    init(){
        let gameZone=document.getElementById("game");
        this.canvas=document.createElement("canvas"); // Tạo thẻ canvas
        //Tạo ra một đối tượng HTML hỗ trợ cho việc vẽ đồ họa
        this.context=this.canvas.getContext('2d');
        //Set độ rộng, cao của thẻ.
        this.canvas.width=400;
        this.canvas.height=400;
        //Thêm canvas vào body với những thuộc tính trên
        gameZone.appendChild(this.canvas);
        this.snake= new snake(this,83,87,65,68);
        this.food=new food(this);
    }
    loop(){
        if(this.snake.die())
        {
        this.update();
        this.draw();
        setTimeout(()=>this.loop(),60)
        }
        else{
            this.lose=alert("Player 2 Win");
            window.location.reload();
        }
    }
    //game thì luôn có hàm update và draw
    //Hàm update dùng để cập nhật vị trí và các hành động của nhân vật
    //hàm draw là để vẽ ra
    update(){
            this.snake.update();
            var eat=this.snake.eat(this.food.x,this.food.y)
            if(eat==true){
                this.food.update();
            }
            else{
                for(let i = 0;i<this.snake.getCell.length;$i++){
                    if(this.food.x ==this.snake.getCell[i].x && this.food.y ==this.snake.getCell[i].y)
                    {
                        this.food.update();
                    }
                
            }
        }
    }
    draw(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.snake.draw();
        this.food.draw();
    }
}
