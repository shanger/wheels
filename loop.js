function Loop(Node,dot,time){//Node 轮播的节点 dot 轮播的标记元素小点 time 时间间隔
	var Local = 0;//滚动位置
	var dir = 1;//滚动方向
	var timer;//定时器
	var imgList = Node.querySelectorAll('li');
	var dotList = dot.querySelectorAll('li');
	var W = imgList[0].offsetWidth;
	function Timer(){
		if(Local<1){dir = 1}else if(Local>3){dir =-1};
		Local += dir;
		for(var j = 0,len = dotList.length;j<len;j++){
			if(Local == j){dotList[j].className = 'Dactive'}else{dotList[j].className = ''}
		}
		var X = (Local-dir)*W;
		var innerT = setInterval(function(){
			X+=100*dir;Node.style.left =  -X +'px';
			if(dir==1){
				if(X>=Local*W){clearInterval(innerT);}
			}else{
				if(X<=Local*W){clearInterval(innerT);}
			}		
		},50);
	}
	timer = setInterval(Timer,time);//启动定时器
	//移入、移出小图标区域
	dot.addEventListener('mouseover',function(ev){
		clearInterval(timer);
		if(ev.target.nodeName.toUpperCase() == 'LI'){
			ev.target.className = 'Dactive';
			Local = parseInt(ev.target.innerText)-1;
			Node.style.left =  -Local*W +'px';
			for(var j = 0,len = dotList.length;j<len;j++){
				if(Local == j){dotList[j].className = 'Dactive'}else{dotList[j].className = ''}
			}
		}
	},false);
	dot.addEventListener('mouseleave',function(){
		timer = setInterval(Timer,time);//启动定时器
	},false);
	//移入、移出图片区域
	Node.addEventListener('mouseover',function(ev){
	clearInterval(timer);
	},false);
	Node.addEventListener('mouseleave',function(){
		timer = setInterval(Timer,time);//启动定时器
	},false);
}
