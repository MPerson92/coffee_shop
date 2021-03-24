
var eatsDrinks = document.getElementById("eatsDrinks")
eatsDrinks.classList.add("eatsDrinks");

const add = document.getElementById("button")
add.onclick = function (){
    var coffee 
    document.getElementById("num1").value
    var tea
    document.getElementById("num2").value
    var bagel
    document.getElementById("num3").value

    var result = document.getElementById("result")
    result.textContent = ((tea * 5) + (coffee * 7) + (bagel * 4)) 
}

button.classList.add()






















// var removeCartItem = document.getElementsByClassName('remove')
// console.log(removeCartItem)
// for(var i = 0; i < removeCartItem.length; i++) {
//     var button = removeCartItem[i]
//     button.addEventListener('click', function(event) {
//         var buttonClicked = event.target
//         buttonClicked.parentElement.parentElement.remove()
//         upddateCartTotal()
//     })

// }

// function upddateCartTotal(){

//     var cartItemContainer = document.getElementsByClassName('cart-items')[0]
//     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
//     var total= 0
//     for(var i = 0; i < cartRows.length; i++) {
//         var cartRow = cartRows[i]
//         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
//         var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
//         var price = parseFloat(priceElement.innerText.replace('$', ''))
//         var quantitiy = quantityElement.value
//         total = total + (price * quantity)
// }
// document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total









// const form = document.form;
// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     alert
//     (`
//     Beverage: ${form.bevy.value}
//     Eats: ${form.eats.value}
//     Tax: ${form.tax.value}
//     Total: ${form.bevy.value} + ${form.eats.value} + ${form.tax.value}`);

//     location.reload();
//     })


    // menu items:
    // coffee-7.00, tea-4.00, espresso drink-10.00, tea latte-8.00
    // bagel-3.00, spread-1.00, pastry-5.00, crepe-7.00
