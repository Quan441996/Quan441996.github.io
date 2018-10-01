
function changeColor(){
	 document.getElementById("p1").style.color = "blue";
	 document.getElementById("p2").style.color = "yellow";
	 document.getElementById("p3").style.color = "red";
}


function changeFontSize(x){
	
	var all = document.querySelectorAll('p');
	for(var i = 0; i < all.length; i++){
		
		all[i].style.fontSize = x;
	}	
}   




function DK(pa){	
	var a1 = window.getComputedStyle(pa, null).getPropertyValue('font-size');
	var b1 = parseInt(a1);
	
	if(b1 < 30){
		var d = (b1 + 1) + "px"
		pa.style.fontSize = d
	}

	else{
		return;
	}
}	


		function increaseFontSize(z){
	
	 		var z1 = document.getElementById("p1");
            var z2 = document.getElementById("p2");
            var z3 = document.getElementById("p3");
	      if (z == 1) {
                DK(z1);

            }
            else if (z == 2) {
                DK(z2);

            }
            else {
                DK(z3);

            }
		}



function DK2(pa2){	
	var a2 = window.getComputedStyle(pa2, null).getPropertyValue('font-size');
	var b2 = parseInt(a2);
	
	if(b2 > 10 ){
		var d2 = (b2 - 1) + "px"
		pa2.style.fontSize = d2
	}

	else{
		return;
	}
}	

		function decreaseFontSize(z){
			var z1 = document.getElementById("p1");
            var z2 = document.getElementById("p2");
            var z3 = document.getElementById("p3");
        if (z == 1) {
                DK2(z1);

            }
        else if (z == 2) {
                DK2(z2);

            }
        else {
                DK2(z3);
		}

}












function changeBgColor(color){
	typeof color == "string";
	var a = document.querySelector("div");
	a.style.backgroundColor = color;
	
}



function copyContent(p1, p2) {
	document.getElementById('p1').innerText = document.getElementById('p2').innerText;
	
	 
}


