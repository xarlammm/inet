var btn = document.getElementById("btn10");
btn.addEventListener("click", function() {
	var test = document.getElementById("task10");

	var num = modfunc(prompt("Enter number"));

	if(num == 0)
    	{
        	test.innerHTML = "Выражение истинно";
    	}
	else
    	{
        	test.innerHTML = "Выражение ложно";
    	}

	function modfunc(num)
	{
    		return num%4;
	}
});



