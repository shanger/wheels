/*上下滑动事件的监听*/
//new LSwiperMaker() 注册事件

(function(){ 
    var autoComplet = function(o){ 
 
        var that = this;
        this.config = o;    //传入的参数  

 		this.config.parent.on('click','ul li',function(){
 			that.config.spanList.append("<span>" +$(this).html() + "<input type='button'/></span>");
 			that.config.ul.css('display','none');
 			that.config.input.val('');
 			!that.config.closeUL&&inputFocus();
 		});
 		this.config.input.on('keyup',function(ev){ 
 			if(ev.keyCode == 13){
 				that.config.spanList.append("<span>" +$(this).val() + "<input type='button'/></span>");
 				that.config.input.val('');
 				!that.config.closeUL&&inputFocus();
 			}			
 			changeUl();
 			that.config.ul.css({'display':'block','top':that.config.parent.height()});
 		});
 		this.config.spanList.on('click','span input',function(){
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
 					str += "<li>"+ele.title+"</li>";
 				}
 				
 			});
 			that.config.ul.html(str);
 		}
 		//重新获取焦点
 		function inputFocus(){ 			
 			that.config.input.focus();
 			that.config.input.keyup();
 		}
    }    
    window.autoComplet = autoComplet;
}())
var myAC = new autoComplet({
        parent:$('.autoComp'),  // 绑定的DOM对象
        input:$('.inputBox'), 
        compValue:[{title:"book"},{title:"blue"},{title:"fool"},{title:"bus"}],
        ul:$('.autoComp ul'),
        spanList:$('.spanList'),
        closeUL:false,     //是否在选择过后关闭填充列表
});

