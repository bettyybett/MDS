var speed = 100;
function search()
{	
	var word  = document.getElementById("search").value;
	//word = word.toLowerCase();
	var body_words =  document.getElementById("wrapper").innerHTML;
	//var rez  = new RegExp('/'+word+'/i');
	//var cuv = extractContent(body_words,true);
	var inceput_cuv	= body_words.search(word);
	if(inceput_cuv!=-1)
	{//console.log(inceput_cuv);
	var lung_cuv = word.length;
	var sfarsit_cuv = inceput_cuv+lung_cuv;
	var lung_body = body_words.length;
	var cuv = new String() ;
	var prima_parte = body_words.slice(0,inceput_cuv);
	var adoua_parte = body_words.slice(sfarsit_cuv,lung_body)
	var new_body = prima_parte + "<a id = '"+word+"' onclick = '' '>"+ word+"</a>"+adoua_parte;
	document.getElementById("wrapper").innerHTML = "";
	document.getElementById("wrapper").innerHTML = new_body;
	var x = document.getElementById(word).style.backgroundColor = "rgba(255, 255, 255, 0.25)";
	var textWidth = document.getElementById(word);
	var dist = textWidth.getBoundingClientRect().top;
	window.scrollTo(0,dist-100);}
	//setTimeout(, speed);
	
}
/*function disp(word)
{
	var x = document.getElementById(word).style.backgroundColor = "rgba(255, 255, 255, 255)";
	word.style.backgroundColor = "rgba(0, 0, 0, 0)";
	console.log(word.style.backgroundColor);
}
window.onload=function(){}
window.addEventListener("click", function(event) {
	console.log(event.path[0].id);
	
});*/
document.getElementById("wrapper").addEventListener("click", function(){
var bla = event.path[0].id;
	if(bla!="main")
	{
		document.getElementById(bla).style.backgroundColor = "rgba(0, 0, 0, 0)";
	}
});