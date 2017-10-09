function Determinant(){
	const one=document.querySelector("#one").value;
	const thre=document.querySelector("#thre").value;
	const five=document.querySelector("#five").value;
	const sev=document.querySelector("#sev").value;
	const nine=document.querySelector("#nine").value;
	const answer=(parseInt(thre))*(parseInt(five))*(parseInt(sev))-(parseInt(one))*(parseInt(five))*
                 (parseInt(nine));
    document.querySelector("#answer").innerHTML=answer;	
}