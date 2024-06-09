var btn = document.getElementById("btn7");
btn.addEventListener("click", function() {
	var test = document.getElementById("task7");

	var age = prompt("Возраст ребенка");
	var ans = prompt("Согласен пойти на концерт? (да/нет)");

	if(age >= 12 && ans == "да")
    	{
        	test.innerHTML = "Вперед за билетами";
    	}
	else
    	{
        	test.innerHTML = "Сиди дома";
    	}
});


