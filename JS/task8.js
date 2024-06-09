var btn = document.getElementById("btn8");
btn.addEventListener("click", function() {
	var test = document.getElementById("task8");

	var num = prompt("Enter number");

	confirm(square(num));

	function square(num)
	{
    		return num*num;
	}
});


