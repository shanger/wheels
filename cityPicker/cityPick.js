var address = new Vue({
	el:'#address',
	data:{
		provincesShow:false,
		cityShow:false,
		provinces:'省份',
		city:'城市',
		provincesText:'选择省份',
		cityText:'选择城市',
		provincialLevel:[
			{id:'beijing',title:'北京',active:false},
			{id:'shenzhen',title:'深圳',active:false},
			{id:'shanghai',title:'上海',active:false},
			{id:'chongqing',title:'重庆',active:false},
			{id:'tianjin',title:'天津',active:false},
			{id:'guangdong',title:'广东',active:false},
			{id:'hehei',title:'河北',active:false},
			{id:'shanxi1',title:'山西',active:false},
			{id:'neimenggu',title:'内蒙古',active:false},
			{id:'liaoning',title:'辽宁',active:false},
			{id:'jiling',title:'吉林',active:false},
			{id:'heilongjiang',title:'黑龙江',active:false},
			{id:'jiangsu',title:'江苏',active:false},
			{id:'zhejiang',title:'浙江',active:false},
			{id:'anhui',title:'安徽',active:false},
			{id:'fujian',title:'福建',active:false},
			{id:'jiangxi',title:'江西',active:false},
			{id:'shandong',title:'山东',active:false},
			{id:'henan',title:'河南',active:false},
			{id:'hubei',title:'湖北',active:false},
			{id:'hunan',title:'湖南',active:false},
			{id:'guangxi',title:'广西',active:false},
			{id:'hainan',title:'海南',active:false},
			{id:'sichuan',title:'四川',active:false},
			{id:'guizhou',title:'贵州',active:false},
			{id:'yunnan',title:'云南',active:false},
			{id:'xizang',title:'西藏',active:false},
			{id:'shanxi2',title:'陕西',active:false},
			{id:'gansu',title:'甘肃',active:false},
			{id:'qinghai',title:'青海',active:false},
			{id:'ningxia',title:'宁夏',active:false},
			{id:'xinjiang',title:'新疆',active:false},
			{id:'xianggang',title:'香港',active:false},
			{id:'aomen',title:'澳门',active:false},
			{id:'taiwan',title:'台湾',active:false},
		],
		cityList:[],	//二级列表内容
		cityLevel:{
			beijing:['东城区','西城区','崇文区','宣武区','朝阳区','海淀区','丰台区','石景山'],
			shenzhen:['罗湖','福田','南山','盐田','宝安','龙岗'],
			shanghai:['宝山','金山','南市','长宁','静安','青浦','崇明','卢湾','松江','奉贤','浦东','杨浦','虹口','普陀','闸北','黄浦','闵行','徐汇','嘉定','南汇'],
			chongqing:['渝中','江北','沙坪坝','南岸','九龙坡','大渡口'],
			tianjin:['和平','河北','河西','河东','南开','红桥','塘沽','汉沽','大港','东丽','西青','津南','北辰','武清','滨海'],
			guangdong:['广州','珠海','中山','佛山','东莞','清远','肇庆','阳江','湛江','韶关','惠州','河源','汕尾','汕头','梅州'],
			hehei:['石家庄','唐山','秦皇岛','邯郸','邢台','张家口','承德','廊坊','沧州','保定','衡水'],
			shanxi1:['太原','大同','阳泉','朔州','长治','临汾','晋城'],
			neimenggu:['呼和浩特','包头','乌海','临河','东胜','集宁','锡林浩特','通辽','赤峰','海拉尔','乌兰浩特'],
			liaoning:['沈阳','大连','鞍山','锦州','丹东','盘锦','铁岭','抚顺','营口','辽阳','阜新','本溪','朝阳','葫芦岛'],
			jiling:['长春','吉林','四平','辽源','通化','白山','松原','白城','延边'],
			heilongjiang:['哈尔滨','齐齐哈尔','牡丹江','佳木斯','大庆','伊春','黑河','鸡西','鹤岗','双鸭山','七台河','绥化','大兴安岭'],
			jiangsu:['南京','苏州','无锡','常州','镇江','连云港 ','扬州','徐州 ','南通','盐城','淮阴','泰州','宿迁'],
			zhejiang:['杭州','湖州','丽水','温州','绍兴','舟山','嘉兴','金华','台州','衢州','宁波'],
			anhui:['合肥  ','芜湖 ','蚌埠 ','滁州 ','安庆','六安','黄山','宣城','淮南','宿州','马鞍山','铜陵','淮北','阜阳','池州','巢湖','亳州'],
			fujian:['福州','厦门','泉州','漳州','龙岩','南平','宁德','莆田','三明'],
			jiangxi:['南昌','景德镇','九江','萍乡','新余','鹰潭','赣州','宜春','吉安','上饶','抚州'],
			shandong:['济南','青岛','淄博','德州','烟台','潍坊','济宁','泰安','临沂','菏泽','威海','枣庄','日照','莱芜','聊城','滨州','东营'],
			henan:['郑州','开封','洛阳','平顶山','安阳','鹤壁','新乡','焦作','濮阳','许昌','漯河','三门峡','南阳','商丘','周口','驻马店','信阳','济源'],
			hubei:['武汉','黄石','十堰','荆州','宜昌','襄阳','鄂州','荆门','孝感','黄冈','咸宁','恩施','随州','仙桃','天门','潜江','神农架'],
			hunan:['长沙','株州','湘潭','衡阳','邵阳','岳阳','常德','郴州','益阳','永州','怀化','娄底','湘西'],
			guangxi:['南宁','柳州','桂林','梧州','北海','防城港','钦州','贵港','玉林','贺州','百色','河池'],
			hainan:['海口','三亚','通什','琼海','琼山','文昌','万宁','东方','儋州'],
			sichuan:['成都','自贡','攀枝花','泸州','德阳','绵阳','广元','遂宁','内江','乐山','南充','宜宾','广安','达川','巴中','雅安','眉山','阿坝','甘孜','凉山'],
			guizhou:['贵阳 ','六盘水','遵义','铜仁','毕节','安顺','黔西南 ','黔东南','黔南'],
			yunnan:['昆明','东川','曲靖','玉溪','昭通','思茅','临沧','保山','丽江','文山 ','红河 ','西双版纳 ','楚雄 ','大理 ','德宏 ','怒江','迪庆'],
			xizang:['拉萨','那曲','昌都','山南','日喀则','阿里','林芝'],
			shanxi2:['西安','铜川','宝鸡','咸阳','渭南','延安','汉中','榆林','商洛','安康'],
			gansu:['兰州','金昌','白银','天水','嘉峪关','定西','平凉','庆阳','陇南','武威','张掖','酒泉','甘南 ','临夏'],
			qinghai:['西宁','海东',' 海北 ','黄南','海南','果洛','玉树','海西'],
			ningxia:['银川','石嘴山','银南','固原'],
			xinjiang:['乌鲁木齐','克拉玛依','石河子','吐鲁番','哈密','和田','阿克苏','喀什','克孜勒苏','巴音郭楞','昌吉','博尔塔拉','伊犁'],
			xianggang:['香港'],
			aomen:['澳门'],
			taiwan:['台湾'],
		},
	},
	created:function(){
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
			console.log(this.provinces)
			var This = this;			
			This.cityList = [];	//先设置成了空字符串，作为有没有选择省份的判断
			this.cityLevel[this.provinces].forEach(function(ele,index){
				This.cityList.push({title:ele,active:false});
			});
			this.city = ''; //修改后要重新选择城市*/
		},
		//选择城市
		chooseCity:function($index){
			this.city = this.cityList[$index].title;
			this.cityList.forEach(function(ele,index){
					ele.active = false;
			});
			this.cityList[$index].active = true;
		},
		//关闭列表
		close:function(){	
			this.cityShow = false;
			this.provincesShow = false;
		}
	}
});