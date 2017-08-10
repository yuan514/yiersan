function $(selector,ranger=document){
	var type=typeof selector;
	if(type=='string'){
		var select=selector.trim();
		if(select.charAt(0)=='.'){
			return ranger.getElementsByClassName(select.substr(1));

		}
		else if(select.charAt(0)=='#'){
			return ranger.getElementById(select.substr(1));
		}
		else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(select)){
			return ranger.getElementsByTagName(select);
		}

	}
	else if(type=='function'){
		window.onload=function(){
			selector();
		}
	}
}


function html(obj,content){
	if(content){
		obj.innerHTML=content;
	}else{
		return obj.innerHTML;
	}
}