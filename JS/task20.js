var btn = document.getElementById("btn20");
btn.addEventListener("click", function() {
	var test = document.getElementById("task20");

	var arr = [1,2,3,4,5];

	for(let i = 0; i < arr.length; ++i)
    	{
        	test.innerHTML += arr[i];
    	}
});


