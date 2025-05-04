//Gets elements from HTML Doc
let formSubmission = document.getElementById("submission");
let firstName = document.getElementById("fname");
let lastName = document.getElementById("lname");
let pizzaSize = document.getElementById("pizza size");
let toppingPep = document.getElementById("pepperoni");
let toppingMush = document.getElementById("mushrooms");
let toppingCheese = document.getElementById("cheese");
let deliveryInstruct = document.getElementById("inputBox");
let orderTable = document.getElementById("orderForm");

//Creates a new row with input data
let newRow = document.createElement("tr");
let newName = document.createElement("td");
let newSize = document.createElement("td");
let newToppings = document.createElement("td");
let newDeliveryInstruct = document.createElement("td");

//Pushes the changes and updates the page
formSubmission.addEventListener('click', function(){
    newName.innerHTML = firstName.value + " " + lastName.value;
    newSize.innerHTML = pizzaSize.value;
    if (toppingPep.checked == true){
        newToppings.innerHTML = "Pepperoni"
    };
    if (toppingMush.checked == true){
        newToppings.innerHTML += " Mushrooms"
    };
    if (toppingCheese.checked == true){
        newToppings.innerHTML += " Extra Cheese"
    };
    newDeliveryInstruct.innerHTML = deliveryInstruct.value;

    newRow.appendChild(newName);
    newRow.appendChild(newSize);
    newRow.appendChild(newToppings);
    newRow.appendChild(newDeliveryInstruct);
    orderTable.appendChild(newRow);
});