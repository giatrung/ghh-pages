class snake{
    constructor(game,up,down,right,left){
        this.game=game;
        //Toa độ x,y
        this. x= 0;
        this. y=0;
        //Kích cỡ ô là 20px
        this.grid=20;
        //
        this.dx=this.grid;
        this.dy=0;

        this.cell=[];
        this.maxCell=3;

        //di chuyển
        this.up=up;
        this.down=down;
        this.left=right;
        this.right=left;
        this.level=0;
        this.mode=localStorage.getItem('mode')?parseInt(localStorage.getItem('mode')):0;
    }
    //Lấy chiều dài mảng
    getCell(){
        return this.cell;
    }
    /**
     * Cập nhật tọa độ, và
     */
    update(){
        //cộng tọa độ x và dx để tạo thành khoảng cách con rắn di chuyển
        this.x+=this.dx; 
        this.y+=this.dy;
        if(this.mode===0)
        {
            if(this.level==0)
            {
                if(this.x>=this.game.canvas.width){
                    this.x=0;
                }
                else if(this.x<0){
                    this.x=this.game.canvas.width
                }
                else if(this.y>=this.game.canvas.height){
                    this.y=0;
                }
                else if(this.y<0){
                    this.y=this.game.canvas.height
                }
            }
        }
        //Cập nhật các tọa độ mới vào mảng
        this.cell.unshift({x:this.x,y:this.y});
            if(this.cell.length>this.maxCell){
                this.cell.pop();
            }
        console.log(this.cell,this.level); 
        // console.log(this.dx);
        this.catchHandle();
    }
    draw(){
        for(let i =1;i<this.cell.length;i++)
        {
            this.game.context.fillStyle ='gray';
            this.game.context.fillRect(this.cell[0].x,this.cell[0].y,this.grid,this.grid);
            this.game.context.fillStyle ='white';
            this.game.context.fillRect(this.cell[i].x,this.cell[i].y,this.grid,this.grid);
        }
    }
    catchHandle(){
        document.addEventListener('keydown',(e)=>{
            if(e.which==this.left &&this.dx==0){
                this.dx= -this.grid;
                this.dy=0;
            }
            else if(e.which==this.down &&this.dy==0){
                this.dx=0;
                this.dy=-this.grid;
            }
            else if(e.which==this.right  &&this.dx==0){
                this.dx=+this.grid;
                this.dy=0;
            }
            else if (e.which==this.up  &&this.dy==0){
                this.dx=0;
                this.dy=+this.grid;
            }
        })
    }
    eat(x,y){
        if(this.x==x && this.y==y){
            this.maxCell++;
            return true;
        }
        return false;
    }
    die(){
        for(let i=1; i<this.cell.length;i++){
            if(this.mode===0)
            {
                if(this.x==this.cell[i].x && this.y==this.cell[i].y )
                {
                        return false;
                }
            }
            else{
                if((this.x==this.cell[i].x && this.y==this.cell[i].y) ||
                    this.x>=this.game.canvas.width || this.x<0 ||
                    this.y>=this.game.canvas.height || this.y<0)
                {
                        return false;
                }
            }
                
        }
        return true;
    }
}