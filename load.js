//upLoad:Slide up to load more
//obj Listening to the object

function upLoad(obj){
	var start,end;
	obj.addEventListener('touchstart',function Start(e){
		var point = e.touches ? e.touches[0] : e;			
		start = point.screenY;
	},false);
	obj.addEventListener('touchmove',function Move(e){
		var point = e.touches ? e.touches[0] : e;			
		end = point.screenY;
	},false);
	obj.addEventListener('touchend',function(){			
		if(start > end){
			if($(document).scrollTop()>=$(document).height()-$(window).height()){
				console('loading');
			}
			
		}
	},false);
};