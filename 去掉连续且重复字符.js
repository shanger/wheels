function removeXchart(str){
	var arr = str.split('');
	(function(arr){
		for(var i = 1;i<arr.length;i++ ){
			if(arr[i] == arr[i-1]){
				arr.splice(i-1,1);
				arguments.callee(arr);
			}
		}
	})(arr)
	return arr.join('');
}
var str = "11223332211";
removeXchart(str);