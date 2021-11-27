class game2 extends game{
    constructor(){
        super(game.canvas,game.context,game.second,game.score,game.dem);
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
        this.time= document.getElementsByClassName('time');
        this.scoreDisplay=document.getElementById('p2');
        this.snake= new snake(this,40,38,37,39);
        this.food=new food(this);
    }
    loop(){
        if(this.snake.die())
        {
        this.update();
        this.draw();
        setTimeout(()=>this.loop(),50)
        }
        else{
            localStorage.setItem('statusP2',1);
            this.result();
        }
    }
    
    countDown(second){
        console.log(this.x);
        if(second>=0)
        { 
            this.time[1].innerHTML=second;
            second-=1;
            setTimeout(()=>{
                this.countDown(second);
                console.log(Number(second));
        },1000);}
        else{
            // this.loop();
            // this.time[1].hidden='true';
            if(this.dem==1)
            {
                this.dem++;
                // console.log("dem ",dem);
                this.loop();
                second=30;
                this.countDown(second);
            }
            this.result(second);
        }
    }
    saveScore(score){
        localStorage.setItem('scoreP2',score);
    }
    
}