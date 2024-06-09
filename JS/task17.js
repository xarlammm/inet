var btn = document.getElementById("btn17");
btn.addEventListener("click", function() {
	var test = document.getElementById("task17");

	var chosenOne = prompt("Перед вами меню, в котором можно выбрать: яблоко, апельсин, сок, пиво. Что вы выберете?");


	switch (chosenOne) {
    		case "яблоко":
        		console.log(vibor("яблоко"));
        	break;
    		case "апельсин":
        		console.log(vibor("апельсин"));
        	break;
    		case "сок":
        		console.log(vibor("сок"));
        	break;    
    		case "пиво":
        		console.log(vibor("пиво"));
        	break;   

   		default:
        		console.log("Пошель прочь");
        	break;
}

	function vibor(str)
	{
    		return "Ваш выбор " + str + " просто идеален";
	}
});


