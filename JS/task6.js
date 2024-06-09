var btn = document.getElementById("btn6");
btn.addEventListener("click", function() {
	var test = document.getElementById("task6");

	var test = document.getElementById("task6");

	var mamaAge = prompt("Возраст мамы");
	var mamaName = prompt("Имя мамы");
	var papaAge = prompt("Возраст папы");
	var papaName = prompt("Имя папы");

	if(mamaAge > papaAge)
  	{
        	test.innerHTML = mamaName;
   	}
	else if(mamaAge < papaAge)
   	{
       		test.innerHTML = papaName;
    	}
	else
    	{
        	test.innerHTML = mamaName + " and " + papaName; 
    	}

});
