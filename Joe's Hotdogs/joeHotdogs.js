document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  var orderSummary = document.getElementById("orderSummary");
  orderSummary.innerHTML = "Order Summary: ";
  var numHotDog = document.getElementById("numHotDog").value;
  var numFries = document.getElementById("numFries").value;
  var numDrinks = document.getElementById("numDrinks").value;
  var hotDogSub = document.createElement("div");
  var friesSub = document.createElement("div");
  var drinksSub = document.createElement("div");
  var subTotalElem = document.createElement("div");
  var discount = document.createElement("div");
  var tax = document.createElement("div");
  var total = document.createElement("div");
  var subTotalVal = 3.25 * numHotDog + 2.0 * numFries + 1.5 * numDrinks;
  subTotalVal >= 20
    ? (discount.innerHTML = "You are qualified for a 10% discount!")
    : (discount.innerHTML = "Not qualified for discount");
  subTotalVal = subTotalVal >= 20 ? 0.9 * subTotalVal : subTotalVal;
  subTotalElem.innerHTML = "Subtotal: " + subTotalVal.toFixed(2);
  hotDogSub.innerHTML =
    "#Hot Dog: " +
    numHotDog +
    " at $3.25 each is $" +
    (3.25 * numHotDog).toFixed(2);
  friesSub.innerHTML =
    "#French Fries: " +
    numFries +
    " at $2.00 each is $" +
    (2.0 * numFries).toFixed(2);
  drinksSub.innerHTML =
    "#Drink: " +
    numDrinks +
    " at $1.50 each is $" +
    (1.5 * numDrinks).toFixed(2);
  tax.innerHTML = "Tax: " + (subTotalVal * 0.0625).toFixed(2);
  total.innerHTML = "Total: " + (subTotalVal * 1.0625).toFixed(2);
  orderSummary.appendChild(hotDogSub);
  orderSummary.appendChild(friesSub);
  orderSummary.appendChild(drinksSub);
  orderSummary.appendChild(discount);
  orderSummary.appendChild(subTotalElem);
  orderSummary.appendChild(tax);
  orderSummary.appendChild(total);
});
