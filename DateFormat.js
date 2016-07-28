function format(type){
	var type = type||document.querySelector('select').value;
	var date = new Date();
	var string = '';
	switch(type){
		case 'xxxx-yy-zz':
			string = date.toLocaleDateString().replace(/\//g,'-')
			break;
		case 'xxxx年yy月zz日':
			string = date.toLocaleDateString().replace(/(\d*)(\/)(\d*)(\/)(\d*)(.*)/g,'$1年$3月$5日$6');
			break;
		case 'DDD MMM dd yyyy':
			string = date.toString().replace(/([a-zA-z]{3}\s[a-zA-Z]{3}\s\d{2}\s\d{4})(.*)/g,'$1');
			break;
	}
	console.log(string)
}
