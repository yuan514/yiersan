window.onload=function(){
    let todo=document.querySelector('.todo');
    let done=document.querySelector('.done');
    let todoIcon=document.querySelector('.todoIcon');
    let doneIcon=document.querySelector('.doneIcon');
    let input=document.querySelector('input');

    load();


    //初始化
    function init(){
        /*title:'内容'，flag:'false'*/
        let things=[
            {title:"买房",flag:false},
            {title:"买车",flag:true},
            {title:"找工作",flag:false},
            {title:"找房子",flag:true}
            ];
        localStorage.todo=JSON.stringify(things);
    }




    //加载
    function load(){
        let data=localStorage.todo;
        let todoString='',doneString='',todoNum=0,doneNum=0;
        if(!data){
            init();
        }
        data=JSON.parse(localStorage.todo);
        data.forEach(function(value,index){
            if(value.flag){
                //done上的内容
                doneNum++;
                doneString+=`
                    <li contenteditable="true" id="${index}">
                    <input type="checkbox">
                    ${value.title}
                    <button>删除</button>
                    </li>
                `
            }else{
                //todo上的内容
                todoNum++;
                todoString+=`
                   <li contenteditable="true" id="${index}">
                    <input type="checkbox">
                    ${value.title}
                    <button>删除</button>
                    </li> 
                `
            }
        })
        todo.innerHTML=todoString;
        done.innerHTML=doneString;
        todoIcon.innerHTML=todoNum;
        doneIcon.innerHTML=doneNum;
    }




    //点击添加
    input.onkeydown=function(e){
        if(e.keyCode == 13){
            add({title:this.value.trim(),flag:false});
            this.value='';
        }
    }

    //获取
    function getData(){
        let data=localStorage.todo;
        return JSON.parse(data);
    }
    //添加
    function saveData(data){
        localStorage.todo=JSON.stringify(data);
    }

    //添加
    function add(obj){
        //获取
        let data=getData();
        //添加
        data.push(obj);
        saveData(data);
        load();
    }

    //删除
    todo.onclick=function(e){
        let obj=e.target;
        if(obj.nodeName == 'INPUT'){
            //添加
            let id=obj.parentNode.id;
            finish(id);
        }else if(obj.nodeName == 'BUTTON' ){
            let id=obj.parentNode.id;
            del(id);
        }
    }
    done.onclick=function(e){
        let obj=e.target;
        if(obj.nodeName == 'BUTTON' ){
            let id=obj.parentNode.id;
            del(id);
        }
    }


    function finish(id){
        //获取
        let data=getData();
        //flag:false——>true
        data[id].flag=true;
        //添加
        saveData(data);
        load();
    }

    function del(id){
        let data=getData();
        data.splice(id,1);
        saveData(data);
        load();
    }















}