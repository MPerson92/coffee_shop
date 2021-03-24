var eatsDrinks = document.getElementById("eatsDrinks")
eatsDrinks.classList.add("eatsDrinks");
const add = document.getElementById("button");
add.addEventListener("click", event => {
    var coffee = document.getElementById("num1").value;
   
    var tea = document.getElementById("num2").value;
    
    var bagel = document.getElementById("num3").value;
    
    var result = document.getElementById("result")
    result.textContent = "Price: " + "$" + ((tea * 7) + (coffee * 11) + (bagel * 3));

})  

button.classList.add();



