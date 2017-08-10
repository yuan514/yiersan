window.onload=function(){

	//侧边栏
	var aside_one=$('.aside_one')[0];
	var left_shift=$('.left_shift')[0];
	var left_tri=$('.left_tri')[0];
	var cart=$('.cart')[0];
	aside_one.onmouseover=function(){
		aside_one.style.background='#C40000';
		left_shift.style.visibility= 'visible';
		left_shift.style.opacity= '1';
		left_shift.style.transform= 'translate(-90px,-35px)';
		
	}
	aside_one.onmouseout=function(){
		aside_one.style.background='';
		left_shift.style.visibility= 'hidden';
		left_shift.style.opacity= '0';
		left_shift.style.transform= 'translate(-130px,-35px)';
	}
	cart.onmouseover=function(){	
		cart.style.background='#C40000';	
	}
	cart.onmouseout=function(){
		cart.style.background='';	
	}
	var icon=$('.icon');
	var left_shift1=$('.left_shift1')[0];
	var left_tri1=$('.left_tri1')[0];
	var left_shift2=$('.left_shift2')[0];
	var left_tri2=$('.left_tri2')[0];
	var left_shift3=$('.left_shift3')[0];
	var left_tri3=$('.left_tri3')[0];
	var left_shift4=$('.left_shift4')[0];
	var left_tri4=$('.left_tri4')[0];
	var left_shift5=$('.left_shift5')[0];
	var left_tri5=$('.left_tri5')[0];
	icon[0].onmouseover=function(){
		icon[0].style.background='#C40000';
		left_shift1.style.visibility= 'visible';
		left_shift1.style.opacity= '1';
		left_shift1.style.transform= 'translate(-90px,-35px)';
		
	}
	icon[0].onmouseout=function(){
		icon[0].style.background='';
		left_shift1.style.visibility= 'hidden';
		left_shift1.style.opacity= '0';
		left_shift1.style.transform= 'translate(-130px,-35px)';
		
	}
	icon[1].onmouseover=function(){
		icon[1].style.background='#C40000';
		left_shift2.style.visibility= 'visible';
		left_shift2.style.opacity= '1';
		left_shift2.style.transform= 'translate(-90px,-35px)';
		
	}
	icon[1].onmouseout=function(){
		icon[1].style.background='';
		left_shift2.style.visibility= 'hidden';
		left_shift2.style.opacity= '0';
		left_shift2.style.transform= 'translate(-130px,-35px)';
		
	}
	icon[2].onmouseover=function(){
		icon[2].style.background='#C40000';
		left_shift3.style.visibility= 'visible';
		left_shift3.style.opacity= '1';
		left_shift3.style.transform= 'translate(-90px,-35px)';
		
	}
	icon[2].onmouseout=function(){
		icon[2].style.background='';
		left_shift3.style.visibility= 'hidden';
		left_shift3.style.opacit
		= '0';
		left_shift3.style.transform= 'translate(-130px,-35px)';
		
	}
	icon[3].onmouseover=function(){
		icon[3].style.background='#C40000';
		left_shift4.style.visibility= 'visible';
		left_shift4.style.opacity= '1';
		left_shift4.style.transform= 'translate(-90px,-35px)';
		
	}
	icon[3].onmouseout=function(){
		icon[3].style.background='';
		left_shift4.style.visibility= 'hidden';
		left_shift4.style.opacity= '0';
		left_shift4.style.transform= 'translate(-130px,-35px)';
		
	}
	icon[4].onmouseover=function(){
		icon[4].style.background='#C40000';
		left_shift5.style.visibility= 'visible';
		left_shift5.style.opacity= '1';
		left_shift5.style.transform= 'translate(-90px,-35px)';
		
	}
	icon[4].onmouseout=function(){
		icon[4].style.background='';
		left_shift5.style.visibility= 'hidden';
		left_shift5.style.opacity= '0';
		left_shift5.style.transform= 'translate(-130px,-35px)';
		
	}


	//banner
	
	var li=$('.daohang');
	var mao1=$('.mao1');
	var mao2=$('.mao2');
	var mao3=$('.mao3');
	var mao4=$('.mao4');
	li[1].onmouseover=function(){
		mao1[0].style.opacity= '1';
	}
	li[1].onmouseout=function(){
		mao1[0].style.opacity= '0';
	}
	li[2].onmouseover=function(){
		mao4[0].style.opacity= '1';
	}
	li[2].onmouseout=function(){
		mao4[0].style.opacity= '0';
	}
	li[3].onmouseover=function(){
		mao2[0].style.opacity= '1';
	}
	li[3].onmouseout=function(){
		mao2[0].style.opacity= '0';
	}
	li[4].onmouseover=function(){
		mao3[0].style.opacity= '1';
	}
	li[4].onmouseout=function(){
		mao3[0].style.opacity= '0';
	}
	li[5].onmouseover=function(){
		mao3[1].style.opacity= '1';
	}
	li[5].onmouseout=function(){
		mao3[1].style.opacity= '0';
	}
	li[6].onmouseover=function(){
		mao3[2].style.opacity= '1';
	}
	li[6].onmouseout=function(){
		mao3[2].style.opacity= '0';
	}
	li[7].onmouseover=function(){
		mao3[3].style.opacity= '1';
	}
	li[7].onmouseout=function(){
		mao3[3].style.opacity= '0';
	}
	li[8].onmouseover=function(){
		mao3[4].style.opacity= '1';
	}
	li[8].onmouseout=function(){
		mao3[4].style.opacity= '0';
	}
	li[9].onmouseover=function(){
		mao3[5].style.opacity= '1';
	}
	li[9].onmouseout=function(){
		mao3[5].style.opacity= '0';
	}
	li[10].onmouseover=function(){
		mao2[1].style.opacity= '1';
	}
	li[10].onmouseout=function(){
		mao2[1].style.opacity= '0';
	}
	li[11].onmouseover=function(){
		mao2[2].style.opacity= '1';
	}
	li[11].onmouseout=function(){
		mao2[2].style.opacity= '0';
	}


	//轮播图
	let imgBox=$('.imgBox')[0];
	let lis=$('li',imgBox);
	// lis[0].style.zIndex=10;
	let btn=$('.btn')[0];
	let btns=$('li',btn);
	let index=0;
	let t=setInterval(move, 2000);
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		for(let i=0;i<lis.length;i++){
			lis[i].style.display='none';
			btns[i].className='';
		}
		lis[index].style.display='block';
		btns[index].className='hot';
	}


	//商标
	
	var shang=$('.shang');
	var zhez=$('.zhez');
	for(let i=0;i<shang.length;i++){
		shang[i].onmouseover=function(){
			zhez[i].style.opacity='1' ;
		}
		shang[i].onmouseout=function(){
			zhez[i].style.opacity='0' ;
		}
	}

	
	//潮流前沿
	
	var yifu=$('.yifu');
	for(let i=0;i<yifu.length;i++){
		yifu[i].onmouseover=function(){
			this.style.transform='scale(1.1,1.1)';
		}
		yifu[i].onmouseout=function(){
			this.style.transform='scale(1,1)';
		}
	}


	//字幕
	let kuhu=$('.kuhu');	
	console.log(kuhu)
	for(let r=0;r<kuhu.length;r++){
		let li_a=$('li',kuhu[r]);
		let a_a=$('a',kuhu[r]);
		let index1=0;
		let t1=setInterval(move_a, 1500);
		function move_a(){
			index1++;
			if(index1==li_a.length){
				index1=0;
			}
			for(let i=0;i<li_a.length;i++){
				li_a[i].style.display='none';
			}
			li_a[index1].style.display='block';

		}
		for(let j=0;j<a_a.length;j++){
			a_a[j].onmouseover=function(){
				for(let q=0;q<6;q++){
					// var 
				}
				a_a[j].className='color_0';	
			}
			a_a[j].onmouseout=function(){
				a_a[j].className='';
			}
		}
	}


   
	let ch=window.innerHeight;
	let beautys=document.querySelectorAll('.beauty');
    let ccc=document.querySelector('.ccc');
    // let tops=document.
	let arr=[];
    let n=0;
    let flag=true;
	beautys.forEach(function(value,index){
		arr.push(value.offsetTop);
	})

    let sli=document.querySelectorAll('.slide>li');

    for (let i = 0; i < sli.length; i++){
        sli[i].onclick=function(){
            /*sli[n].className='';
            this.className='hot';*/
            flag=false;
            sli[n].classList.remove('hot');
            this.classList.add('hot');
            animate(document.body,{scrollTop:arr[i]},function(){flag=true;}
            )
            n=i;
        }
    }
    let flag1=true;
    window.onscroll=function(){
        if (!flag) {
            return;
        }
    	let tops=document.body.scrollTop;
    	arr.forEach(function(value,index){
           if (tops + ch>value+100){
            //按钮
            sli[n].classList.remove('hot');
            sli[index].classList.add('hot');
            n=index;

            //图片
           	let floor=document.getElementsByClassName('beauty');
           	let imgs=floor.getElementsByTagName('img');
           	for (let i = 0; i < imgs.length; i++){
           		imgs[i].src=imgs[i].title;
           	}
           }
    	})
        if (tops>=500) {
            if (flag1) {
                flag1=false;
                ccc.style.transform=`translateY(100px)`;
            }
        }
        else if (tops<500) {
            if (!flag1) {
                flag1=true; 
               ccc.style.transform=`translateY(-100px)`; 
            }
            
        }
    }
    
  
	 
	
	

	

		



}