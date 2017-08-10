window.onload=function(){
let begin=document.querySelector(".begin");
    begin.onclick=function(){
        begin.style.display="none";
        let game=new Game();
        game.start();
    }
function Game(){
    this.charArr=
        ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'];
    this.charlength=5;
    this.current=[];
    this.currentpos=[];
    this.cw=window.innerWidth;
    this.speed=10;
    this.sm=10;
    this.score=0;
    this.gq=10;
    this.gql=1;
    this.gqlElement=document.querySelector(".gql");
    this.smElement=document.querySelector(".sm1");
    this.scoreElement=document.querySelector(".score");

}

Game.prototype={
    start:function(){
        this.createElement(this.charlength);
        this.drop();
        this.key();
    },
    checkRepeat:function(text){
        return this.current.some(function(value){
            return value.innerText==text;
        })
    },
    checkPosition:function(lefts){
        return this.currentpos.some(function(value){
            return value+80>lefts && lefts+80>value;
            })
    },
    createElement:function(length){
            for(let i=0;i<length;i++){
                this.getChar();
            }
        },
    getChar:function(){
        let num=Math.floor(Math.random()*this.charArr.length);
        while(this.checkRepeat(this.charArr[num][0])){
            num=Math.floor(Math.random()*this.charArr.length);
        }

        let lefts=Math.random()*(this.cw-400)+200;
        let tops=Math.random()*100;
       while(this.checkPosition(lefts)){
           lefts=Math.random()*(this.cw-400)+200;
       }
        let ele=document.createElement('div');
        ele.innerText=this.charArr[num];
        document.body.appendChild(ele);
        ele.style.cssText=`
		 width:80px; height:80px; background-image:url(images/1.0.jpg); background-size:cover;border-radius: 50%;font-weight:bold;
		 text-align: center; line-height: 80px; font-size: 40px;
		 position: absolute; top:${tops}px; left:${lefts}px;
		`
        this.current.push(ele);
    },
    drop:function(){
        let self=this;
        this.t=setInterval(function(){
            for(let i=0;i<self.current.length;i++){
                let tops=self.current[i].offsetTop;
                self.current[i].style.top=tops+self.speed+'px';
                    if(tops>500){
                    document.body.removeChild(self.current[i]);
                    self.current.splice(i,1);
                    self.currentpos.splice(i,1);
                    self.sm--;
                    self.smElement.innerText=self.sm;
                    self.smElement.style.width=self.sm/10*100+'%';
                    if(self.sm==0){
                        let flag=window.confirm("游戏结束，是否继续");
                        if(flag){
                            self.restart();
                        }else{
                            close();
                        }
                    }
                }
            }
            if(self.current.length<self.charlength){
                self.getChar();
            }
        },500)
    },
    key:function(){
        document.body.onkeydown=function(e){
            let code=String.fromCharCode(e.keyCode);
            for(let i=0;i<this.current.length;i++){
                if(code==this.current[i].innerText){
                    document.body.removeChild(this.current[i]);
                    this.current.splice(i,1);
                    this.getChar();
                    this.score++;
                    this.scoreElement.innerText=this.score;
                    if(this.score==this.gq){
                        this.gql++;
                        this.gqlElement.innerText=this.gql;
                        this.next();
                    }
                }
            }
        }.bind(this)
    },
    restart:function(){
        clearInterval(this.t);
        for(let i=0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current=[];
        this.currentpos=[];
        this.sm=10;
        this.smElement.innerText=this.sm;
        this.score=0;
        this.scoreElement.innerText=this.score;
        this.start();
    },
    next:function(){
        clearInterval(this.t);
        for (let i=0;i<this.current.length;i++){
            document.body.removeChild(this.current[i]);
        }
        this.current=[];
        this.currentpos=[];
        this.charlength++;
        this.gq+=10;
        this.start();
    }
}
}