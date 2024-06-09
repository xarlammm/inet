var btn = document.getElementById("btn24");
btn.addEventListener("click", function() {
	var test = document.getElementById("task24");

	var Human = 
	{
    		age: 20,
    		height: 190,
    		weight: 75,
    		wealth:0,
    		id: 234523
	};

	for(let prop in Human)
    	{
        	console.log(prop + " = " + Human[prop]);
    	}
});
