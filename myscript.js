
function menu(a) {
	
	var m = document.getElementsByClassName("submenu");
	var l = m.length;
	for(var i = 0; i < l; i++){
		m[i].style.display="none";
	}
	
	var sm=document.getElementById("sm"+a);
	sm.style.display="block";
}
