/*上下滑动事件的监听*/
//new LSwiperMaker() 注册事件

(function(){ 
    var autoComplet = function(o){ 
 
        var that = this;
        this.config = o;    //传入的参数  

 		this.config.parent.on('click','ul li',function(){
 			//存入
 			that.config.selectValue.push($(this).attr('data_id'));
 			//显示
 			that.config.spanList.append("<span data_id='"+$(this).attr('data_id')+"'>" +$(this).html() + "<input type='button'/></span>");
 			that.config.ul.css('display','none');
 			that.config.input.val('');
 			!that.config.closeUL&&inputFocus();
 		});
 		//输入内容后的事件
 		this.config.input.on('keyup',function(ev){ 
 			/*if(ev.keyCode == 13){
 				that.config.spanList.append("<span >" +$(this).val() + "<input type='button'/></span>");
 				that.config.input.val('');
 				!that.config.closeUL&&inputFocus();
 			}	*/
 			//getVlaue(that.config.input.val(''))	
 			changeUl();
 			that.config.ul.css({'display':'block','top':that.config.parent.height()});
 		});
 		//删除已选内容
 		this.config.spanList.on('click','span input',function(){
 			var index = that.config.selectValue.indexOf($(this).parent('span').attr('data_id'))
 			that.config.selectValue.splice(index,1);
 			$(this).parent('span').remove();
 			that.config.input.val('');
 			!that.config.closeUL&&inputFocus(); 			
 		});

 		//过滤数据
 		function changeUl(){
 			var str = "";
 			var reg = new RegExp(that.config.input.val(),'g');
 			that.config.compValue.forEach(function(ele){ 				
 				if(reg.test(ele.title)){
 					str += "<li data_id='"+ele.id+"'>"+ele.title+"</li>";
 				}
 				
 			});
 			that.config.ul.html(str);
 		}
 		//重新获取焦点
 		function inputFocus(){ 			
 			that.config.input.focus();
 			that.config.input.keyup();
 		}
 		//获取compValue
 		function getVlaue(val){
 			$.ajax({
 				type: "get",
 				url: that.config.url,
 				data:{
 					inputValue:val,
 					selected:that.config.selectValue.join(',')
 				},
 				success: function(data){
 					that.config.compValue = [];
 					var MyData = JSON.parse(data);
 					MyData.forEach(function(ele){
 						that.config.compValue.push({title:ele.Text,id:ele.Value})
 					});
 				},
 				error: function(){
 					console.log('error')
 				}
 			});
 		}
 	}    
 	window.autoComplet = autoComplet;
 }())
var myAC = new autoComplet({
        parent:$('.autoComp'),  // 绑定的DOM对象
        input:$('.inputBox'), 
        compValue:[{title:"book",id:"0"},{title:"blue",id:"1"},{title:"fool",id:"2"},{title:"bus",id:'3'}],
        selectValue:[],
        ul:$('.autoComp ul'),
        spanList:$('.spanList'),
        closeUL:false,     //是否在选择过后关闭填充列表
        url:'',
});

