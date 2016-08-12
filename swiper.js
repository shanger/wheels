/*上下滑动事件的监听*/
(function(){ 
    var LSwiperMaker = function(o){ 
 
        var that = this;
        this.config = o;
        this.control = false;
        this.sPos = {};
        this.mPos = {};
        this.dire;
        this.config.bind.addEventListener('touchstart', function(e){ return that.start(e); } ,false);
        this.config.bind.addEventListener('touchmove', function(e){ return that.move(e); } ,false);
        this.config.bind.addEventListener('touchend', function(e){ return that.end(e); } ,false);
 
    }
 
    LSwiperMaker.prototype.start = function(e){
         
         var point = e.touches ? e.touches[0] : e;
         this.sPos.x = point.screenX;
         this.sPos.y = point.screenY;
 
    }
    LSwiperMaker.prototype.move = function(e){  
 
        var point = e.touches ? e.touches[0] : e;
        this.control = true;
        this.mPos.x = point.screenX;
        this.mPos.y = point.screenY;
 
    }
 
    LSwiperMaker.prototype.end = function(e){

        if(this.config.dire_h){
        	if(!this.control){
        		this.dire = null;
        	}else{
        		if(this.mPos.y > this.sPos.y && Math.abs(this.mPos.x - this.sPos.x) < 20){
        			this.dire = 'D';
        		}
        		if(this.mPos.y < this.sPos.y && Math.abs(this.mPos.x - this.sPos.x) < 20){
        			this.dire = 'U';
        		}
        		if(this.mPos.x > this.sPos.x && Math.abs(this.mPos.y - this.sPos.y) < 20){
        			this.dire = 'R';
        		}
        		if(this.mPos.x < this.sPos.x && Math.abs(this.mPos.y - this.sPos.y) < 20){
        			this.dire = 'L';
        		}
        	}
        }
 
        this.control = false;
        this.config.backfn(this);
 
    } 
    window.LSwiperMaker = LSwiperMaker;
    document.querySelector('.loop').addEventListener('touchmove', function (e) { 
        //看需求是否要阻止默认事件
        // e.preventDefault();
    }, false);// 禁止微信touchmove冲突 
}())
var li = document.querySelector('.loop > ul:nth-of-type(1)').querySelectorAll('li');
var dot = document.querySelectorAll('.loop > ul:nth-of-type(2) li');
var OList = new LSwiperMaker({
        bind:document.querySelector('.loop'),  // 绑定的DOM对象
        dire_h:true,     //true 判断左右， false 判断上下
        backfn:function(o){    //回调事件  
            if(o.dire == 'L' && i < li.length-1){
                i++;
                document.querySelector('.loop > ul:nth-of-type(1)').style.left = '-'+i*100+'%'; 
                active(i);
                            
            }else if(o.dire == 'R' && i > 0){
                i--;
                document.querySelector('.loop > ul:nth-of-type(1)').style.left = '-'+i*100+'%';
                active(i);
            }else if(o.dire == 'U'){
                return false;
                
            }else if(o.dire == 'D'){
                return false;
            }               

        }
});
var STimer = setInterval(Sloop,5000);
var x = 1;
function Sloop(){  
    if(i == li.length-1){
        x = -1;
    }else
    if(i == 0){x = 1;}
    i += x;
    document.querySelector('.loop > ul:nth-of-type(1)').style.left = '-'+i*100+'%'; 
    active(i);   
}

document.querySelector('.loop > ul:nth-of-type(1)').addEventListener('touchstart',function(){
    clearInterval(STimer);
});
document.querySelector('.loop > ul:nth-of-type(1)').addEventListener('touchend',function(){
    STimer = setInterval(Sloop,5000);
})

function active(i){
    for(var x = 0, len = dot.length;x < len; x++){
        if(x == i){
            dot[x].setAttribute('class','active');
        }else{
            dot[x].setAttribute('class','');
        }
    }
}
