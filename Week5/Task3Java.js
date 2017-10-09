function AddNewInfo(){
	var n = document.getElementById("name").value;
	var s = document.getElementById("surname").value;
	var f = document.getElementById("faculty").value;

	if(n==""){
		document.getElementById("name").style.border="5px solid red";
		return;
	}
	else if(s==""){
		document.getElementById("surname").style.border="5px solid red";
		return;
	}

	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	var td2 = document.createElement("td");
	var td3 = document.createElement("td");

	td1.innerHTML = n;
	td2.innerHTML = s;
	td3.innerHTML = "<strong>" + f + "</strong>";

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);

	var table = document.getElementById("students");
	table.appendChild(tr);
}