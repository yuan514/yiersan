window.onload=function(){
    let audio=document.querySelector("audio");
    let song=document.querySelector(".song");
    let author=document.querySelector(".author");
    let lyrics=document.querySelector(".lyrics");
    let playbtn=document.querySelector(".icon-bofang");
    let img = document.querySelector('img');
    let info = document.querySelector('.info');
    let ctime = document.querySelector('.ctime');
    let dtime = document.querySelector('.dtime');
    let pror=document.querySelector(".pror");
    let prorl=document.querySelector(".prorl");
    let prorw=pror.offsetWidth;
    let prorlw=prorl.offsetWidth;
    let nextplay=document.querySelector(".icon-qianjin");
    let lastplay=document.querySelector(".icon-houtui1");
    let volume=document.querySelector(".icon-yinliang");
    let volumew=document.querySelector(".volumew");
    let volumebtn=document.querySelector(".volumebtn");
    let index = 0;
    render(database[0]);
    volume.onclick=function(){

    }


    // 播放事件
    playbtn.onclick=function(){
        if(audio.paused){
            audio.play();
            playbtn.classList.toggle('icon-bofang');
        }else{
            audio.pause();
            playbtn.classList.toggle('icon-bofang');
        }

    };


    // 下一首事件
    nextplay.onclick=function(){
        next();
        audio.autoplay=true;
        playbtn.classList.toggle('icon-bofang');
    }
    // 上一首事件
    lastplay.onclick=function(){
        last();
        audio.autoplay=true;
        playbtn.classList.toggle('icon-bofang');
    }




//       歌词
    i=x=0;
    audio.ontimeupdate=function(){
        let current = format(audio.currentTime);
        let duration = database[index].alltime;
        let string="";
        ctime.innerText = current;
        dtime.innerText = duration;
        let bili=audio.currentTime/audio.duration;
        prorl.style.left=prorw*bili-prorlw/2+"px";


        lyrics.innerHTML='';
        database[index]['lyrics'].forEach(function(value,index){
            if( value.time == current ){
                x = i = index;
            }
        })
        if(x<2){
            i=0
        }else{
            i = x - 2;
        }
        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
                string+=`
             <li class="hot">
                ${database[index]['lyrics'][j]['lyric']}
             </li>`;
            }else{
                string+=`
             <li >
                ${database[index]['lyrics'][j]['lyric']}
             </li>`;
            }
        }
        lyrics.innerHTML = string;
        function  format(time){
            let m =  Math.floor(time /60) >=10 ? Math.floor(time /60) :  '0'+Math.floor(time /60);
            let s =  Math.floor(time % 60) >=10 ? Math.floor(time % 60) :  '0'+Math.floor(time % 60);
            return `${m}:${s}`;
        }
    }



    // 初始化数据
    function render(obj){
        let string="";
        song.innerHTML=obj.songs;
        author.innerHTML=obj.name;
        audio.src=obj.src;
        info.innerText=`${obj.songs}-${obj.name}`;
        img.src=obj.photo;
        ctime.innerText = '00:00';
        dtime.innerText = obj.alltime;

        obj.lyrics.forEach(function(value,index){
            string+=`<li>${value.lyrics}</li>`
        })
        lyrics.innerHTML= '';
        lyrics.innerHTML=string;

    }


    // 下一首的函数
    function next(obj){
        index++;
        if(index>database[index].length){
            index=0;
        }
        render(database[index])
    }


    // 上一首的函数
    function last(obj){
        index--;
        if(index<database[index].length){
            index=0;
        }
        render(database[index]);
    }
}