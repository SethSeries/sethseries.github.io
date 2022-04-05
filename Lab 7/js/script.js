function init(){
	
	function yysEventFunction(){
		var text =document.getElementById("entryinput");
		var text2 =document.getElementById("textoutput);
		alert("Seth Hall:" + text1.value);
	}
	var entryn=document.getElementById("entrybutton");
	entryn.addEventListener("click" , yysEventFunction);
}

window.addEventListener('load', init);