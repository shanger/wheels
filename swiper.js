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
    document.querySelector('.loop').addEventListener('touchmove', function (e) { e.preventDefault(); }, false);// 禁止微信touchmove冲突 
}())