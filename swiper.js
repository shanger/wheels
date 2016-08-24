/*上下滑动事件的监听*/
//new LSwiperMaker() 注册事件

(function(){ 
    var LSwiperMaker = function(o){ 
 
        var that = this;
        this.config = o;    //传入的参数
        this.control = false;
        this.sPos = {};     //开始移动的坐标
        this.mPos = {};     //移动时的坐标
        this.dire;          //移动的方向
        this.tolerance = 40;//容差大小 毕竟触屏很难画直线
                            //移动各个时间的事件监听
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
    //touchEnd 时通过移动的位置来判断方向
    LSwiperMaker.prototype.end = function(e){

        if(this.config.dire_h){
        	if(!this.control){
        		this.dire = null;
        	}else{
        		if(this.mPos.y > this.sPos.y && Math.abs(this.mPos.x - this.sPos.x) < this.tolerance){
        			this.dire = 'D';
        		}
        		if(this.mPos.y < this.sPos.y && Math.abs(this.mPos.x - this.sPos.x) < this.tolerance){
        			this.dire = 'U';
        		}
        		if(this.mPos.x > this.sPos.x && Math.abs(this.mPos.y - this.sPos.y) < this.tolerance){
        			this.dire = 'R';
        		}
        		if(this.mPos.x < this.sPos.x && Math.abs(this.mPos.y - this.sPos.y) < this.tolerance){
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
var OList = new LSwiperMaker({
        bind:document.querySelector('.loop'),  // 绑定的DOM对象
        dire_h:true,     //true 判断左右， false 判断上下
        backfn:function(o){    //回调事件  
            if(o.dire == 'L'){                
                // handle()                            
            }else if(o.dire == 'R'){
                // handle()
            }else if(o.dire == 'U'){
                // handle()                
            }else if(o.dire == 'D'){
                // handle()
            }               

        }
});

