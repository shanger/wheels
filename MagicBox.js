// html
/*<div class="loop">
    <div>
        <div class="show">
            <img src="img/phone1.png">
            <div class="window"></div>
        </div>
    </div>
</div>*/

(function(){ 
    var LSwiperMaker = function(o){ 
 
        var that = this;
        this.config = o;    //传入的参数
        this.left = this.config.Parent_Left;  //父元素left值
        this.node = this.config.moveNode;
        this.window = this.config.window;
        this.config.bind.addEventListener('mousemove', function(e){ return that.move(e); } ,false);
 
    }
    
    LSwiperMaker.prototype.move = function(e){  
 
        var point = e.touches ? e.touches[0] : e;
        var width = this.config.bind.offsetWidth;
        var height = this.config.bind.offsetHeight;
        var left = point.pageX - this.left;
        if(point.pageX > this.left && point.pageX < (this.left+width-this.node.offsetWidth) ){
            this.node.style.left = left + 'px';
            this.window.style.backgroundPosition = -this.node.offsetLeft+'px '+ '0px';
        }       
 
    }
    window.LSwiperMaker = LSwiperMaker;
}())
var OList = new LSwiperMaker({
        bind:document.querySelector('.loop > div'),  // 绑定的DOM对象
        Parent_Left:document.querySelector('.loop > div').offsetLeft,
        moveNode:document.querySelector('.loop > div > .show'),     //魔法框
        window:document.querySelector('.loop > div > .show >.window'),  //魔法内容容器
        backfn:function(o){    //回调事件  
        }
});
