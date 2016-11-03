var address = new Vue({
	el:'#address',
	data:{
		provincesShow:false,
		cityShow:false,
		provinces:'省份',
		city:'城市',
		provincesText:'选择省份',
		cityText:'选择城市',
		provincialLevel:'',//一级列表
		cityList:[],	//二级列表内容
		levl3:'',		//三级列表
		cityLevel:'',//三级列表
		Lthree:[],
	},
	created:function(){
		this.provincialLevel = provincialLevel;
		this.cityLevel = cityLevel;
		this.levl3 = levl3;
	},
	methods:{
		//打开列表
		openProvinces:function(){
			this.provincesShow = true;
		},
		openCity:function(){
			this.cityShow = true;
		},
		//选择省份
		chooseProvinces:function(){			
			this.cityList = [];	//先设置成了空字符串，作为有没有选择省份的判断
			this.cityList = this.cityLevel[this.$els.provinces.value];
			this.city = ''; //修改后要重新选择城市*/
		},
		//选择城市
		chooseCity:function($index){
			this.Lthree = [];	//先设置成了空字符串，作为有没有选择省份的判断
			this.Lthree = this.levl3[this.$els.provinces.value+'_'+this.$els.city.value];
		},
		//关闭列表
		close:function(){	
			this.cityShow = false;
			this.provincesShow = false;
		}
	}
});
