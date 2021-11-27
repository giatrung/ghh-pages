class game{
    constructor(){
        var canvas= null;
        var context=null;
        var second= 3;
        var scoreDisplay=null;
        var x=150;
        this.score=0;
        this.dem=1;
        // var time;
        this.init();
        this.countDown(second);
    }
    /**
     * Hàm khai báo các biến cần thiết
     */
    init(){
        let gameZone=document.getElementById("game");
        this.canvas=document.createElement("canvas"); // Tạo thẻ canvas
        //Tạo ra một đối tượng HTML hỗ trợ cho việc vẽ đồ họa
        this.context=this.canvas.getContext('2d');
        //Set độ rộng, cao của khung canvas.
        this.canvas.width=400;
        this.canvas.height=400;
        //Thêm canvas vào body với những thuộc tính trên
        gameZone.appendChild(this.canvas);
        this.time= document.getElementsByClassName('time');
        this.scoreDisplay=document.getElementById('p1');
        this.snake= new snake(this,83,87,65,68);
        this.food=new food(this);
    }
    /**
     * Hàm lặp lại hành động của các đối tượng
     */
    loop(){
        //Nếu con rắn chết thì không lặp lại nữa
        //false: đã chết
        //true: còn sống
        if(this.snake.die())
        {
        this.update();
        this.draw();
        setTimeout(()=>this.loop(),50);
        }
        else{
            localStorage.setItem('statusP1',1)
            this.result();
        }
    }
    //game thì luôn có hàm update và draw
    //Hàm update dùng để cập nhật vị trí và các hành động của nhân vật
    //hàm draw là để vẽ ra
    /**
     * Hàm cập nhật các hành động của đối tượng food, snake
     */
    update(){
            console.log("test",this.score)
            this.snake.update();
            var eat=this.snake.eat(this.food.x,this.food.y)
            if(eat==true){
                this.food.update();
                this.score++;
                this.saveScore(this.score);
                this.scoreDisplay.innerHTML=this.score;
            }
            for(let i = 0;i<this.snake.getCell.length;$i++){
                if(this.food.x ==this.snake.getCell[i].x && this.food.y ==this.snake.getCell[i].y)
                {
                    this.food.update();
                }
        }
    }
    /**
     * Hàm vẽ các đối tượng
     */
    draw(){
        //Xóa hình vuông
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
        this.snake.draw();
        this.food.draw();
    }
    countDown(second){
        console.log(this.x);
        if(second>=0)
        { 
            this.time[0].innerHTML=second;
            second-=1;
            setTimeout(()=>{
                this.countDown(second);
                console.log(Number(second));
        },1000);}
        else{
            if(this.dem==1)
            {
                this.dem++;
                // console.log("dem ",dem);
                this.loop();
                second=30;
                this.countDown(second);
            }
            this.result(second);
            
            // this.time[0].hidden='true';
        }
    }
    result(second) {
            let status1=localStorage.getItem('statusP1')?parseInt(localStorage.getItem('statusP1')):0;
            let status2=localStorage.getItem('statusP2')?parseInt(localStorage.getItem('statusP1')):0;
            let score1=localStorage.getItem('scoreP1')?parseInt(localStorage.getItem('scoreP1')):0;
            let score2=localStorage.getItem('scoreP2')?parseInt(localStorage.getItem('scoreP2')):0;
        if((second <=0) ||(status1 ==1 && status2==1))
        {
                window.location.reload();
                if(score1>score2)
                {
                    alert("Player 1 Win");
                    this.delete();
                }
                else if(score1<score2)
                {
                    alert("Player 2 Win");
                    this.delete();
                }
                else{
                    alert("Draw");
                    this.delete();
                }
        }
    }
    saveScore(score){
        localStorage.setItem('scoreP1',score);
    }
    delete(){
        localStorage.removeItem('scoreP1');
        localStorage.removeItem('scoreP2');
        localStorage.removeItem('statusP1');
        localStorage.removeItem('statusP2');
    }
}
