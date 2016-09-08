/*
		判断数组中同样元素的个数
*/


var arr = ['a','a','v','v','b','c','c','b','s','s','s','a','a'];
var newArr = [];
arr.forEach(function(ele,index){
    var open = true;
    newArr.forEach(function(newArrele,newArrindex){

      if(ele == newArrele.name){
         open = false;
         newArrele.count += 1;      
      }
    });
    if(open){newArr.push({name:ele,count:1});}
});
console.log(newArr);
