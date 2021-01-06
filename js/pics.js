var pics=document.getElementById("pics");
var n=1;
setInterval(function(){
	if(n==5)
	n=1;
	pics.innerHTML="<img src='./img/a%20("+n+").jpg' />";
	n++;
	
},2000);