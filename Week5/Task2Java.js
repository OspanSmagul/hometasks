document.addEventListener('click', function Click(e){
	 var text = e.target.src;
	 if(text!= undefined)
	document.querySelector("#Big").src = text;
}); 