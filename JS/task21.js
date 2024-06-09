var btn = document.getElementById("btn21");
btn.addEventListener("click", function() {
	var test = document.getElementById("task21");

	var myarr = ["Winter", "Summer", "Meow"];
	var arr = Array();

	arr[0] = 12;
	arr[1] = myarr;

	for(let i = 0; i < arr.length; ++i)
    	{
        	test.innerHTML += " " + arr[i];
    	}
});


