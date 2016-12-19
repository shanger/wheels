var index =  new Vue({
	el:'#index',
	data:{
		provincial:'',
		citys:'',
		towns:'',
		arrayTitle:[],
		ageSelectShow:false,	//选择框显示
		//postdata
		AddProvince:'',//省
		AddCity:'',//市
		AddZone:'',//区(有的话)
		AddDetails:'',//详细地址

		provinceID:'',	//省市id

	},
	created:function(){
		var This = this;
		this.provincial = provincialLevel;		
		this.citys = cityLevel;
		this.towns = levl3;
		this.arrayTitle = this.provincial;
		window.addEventListener('load',function(){This.ULScroll();},false)
	},
	methods:{
		showSelect:function(){
			this.ageSelectShow = true;			
			this.AddProvince = '';
			this.AddCity = '';
			this.AddZone = '';
			this.arrayTitle = this.provincial;
		},
		cancle:function(){
			this.AddProvince = '';
			this.AddCity = '';
			this.AddZone = '';
			this.arrayTitle = [];
			this.ageSelectShow = false;
		},
		choose:function(){
			var This = this;
			var chaZhi = document.querySelector('.content li').offsetHeight;
			var Ul = document.querySelector('.content ul').scrollTop;
			
			if(this.AddProvince==''){
				var myIndex = Math.round(Ul/chaZhi);
				this.provinceID = myIndex;
				this.AddProvince = this.arrayTitle[myIndex].title;
				document.querySelector('.content ul').scrollTop = 0;
				This.arrayTitle = [];
				this.citys[this.provincial[myIndex].id].forEach(function(ele,index){
					This.arrayTitle.push({
						id:index,title:ele
					})
				});
			}else if(this.AddProvince!=''&&this.AddCity == ''){
				var myIndex = Math.round(Ul/chaZhi);
				this.AddCity = this.arrayTitle[myIndex].title;
				document.querySelector('.content ul').scrollTop = 0;
				This.arrayTitle = [];
				this.towns[this.provinceID +'_'+myIndex].forEach(function(ele,index){
					This.arrayTitle.push({
						id:index,title:ele
					})
				});

			}else if(this.AddProvince!=''&&this.AddCity != ''){
				var myIndex = Math.round(Ul/chaZhi);
				this.AddZone = this.arrayTitle[myIndex].title;
				this.ageSelectShow = false;
			}			
			/*this.arrayTitle = [];
			document.querySelector('.content ul').scrollTop = 0;
			this.citys[this.provincial[myIndex].id].forEach(function(ele,index){
				This.arrayTitle.push({
					id:index,title:ele
				})
			});*/
		},
		ULScroll:function(){
			//console.log(document.querySelector('.content li').innerHTML);
			(function(){ 
                var LSwiperMaker = function(o){              
                    var that = this;
                    this.config = o;
                    this.control = false;
                    this.sPos = {};
                    this.mPos = {};
                    this.dire;
                    this.moveLength = 0;
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

                    var This = this;
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
                            if(this.mPos.y > this.sPos.y && Math.abs(this.mPos.x - this.sPos.x) < 40){
                                this.dire = 'D';
                            }
                            if(this.mPos.y < this.sPos.y && Math.abs(this.mPos.x - this.sPos.x) < 40){
                                this.dire = 'U';
                            }
                            if(this.mPos.x > this.sPos.x && Math.abs(this.mPos.y - this.sPos.y) < 40){
                                this.dire = 'R';
                            }
                            if(this.mPos.x < this.sPos.x && Math.abs(this.mPos.y - this.sPos.y) < 40){
                                this.dire = 'L';
                            }
                        }
                    }
                    this.moveLength = this.mPos.y - this.sPos.y;
             
                    this.control = false;
                    this.config.backfn(this);
             
                } 
                window.LSwiperMaker = LSwiperMaker;
            }());
            var OList = new LSwiperMaker({
	                bind:document.querySelector('.content ul'),  // 绑定的DOM对象
	                bindLi:document.querySelector('.content li').offsetHeight,
	                dire_h:true,     //true 判断左右， false 判断上下
	                backfn:function(o){    //回调事件           
	                    if(o.dire == 'L'){                
	                         return false;
	                    }else if(o.dire == 'R'){                            
	                        return false;
	                    }else if(o.dire == 'U'){
	                    	//o.config.bind.scrollTop += o.moveLength; 
	                    	setTimeout(function(){
	                    		var LiH = document.querySelector('.content li').offsetHeight;
	                    		var ST = document.querySelector('.content ul');
	                    		ST.scrollTop =  Math.round(ST.scrollTop/LiH)*LiH; 
	                    	},500);
	                    	
	                    }else if(o.dire == 'D'){
	                        setTimeout(function(){
	                    		var LiH = document.querySelector('.content li').offsetHeight;
	                    		var ST = document.querySelector('.content ul');
	                    		ST.scrollTop =  Math.round(ST.scrollTop/LiH)*LiH; 
	                    	},500); 
	                    }           

	                }
	            });
		},
	}
});