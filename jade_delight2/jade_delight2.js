function check_for_delivery() {
  if (!document.getElementById("delivery").checked) {
    document.getElementById("street").style.display = "none";
    document.getElementById("city").style.display = "none";
  } else {
    document.getElementById("street").style.display = "block";
    document.getElementById("city").style.display = "block";
  }
}
check_for_delivery();
var rad = document.getElementsByName("p_or_d");
rad.forEach((radio) => {
  radio.addEventListener("change", () => {
    check_for_delivery();
  });
});

var itemQuanTotals = [];
function itemQuanTotal(quan, costEach, costTotal) {
  this.quan = quan;
  this.costEach = costEach;
  this.costTotal = costTotal;
}
var subtotal = document.getElementById("subtotal");
var tax = document.getElementById("tax");
var total = document.getElementById("total");
total.value = 0;
var result = document.getElementById("result");

for (i = 0; i < menuItems.length; i++) {
  var quan = document.getElementsByName("quan" + i)[0];
  var costTotal = document.getElementsByName("cost")[i];
  costTotal.value = 0;
  var costEach = menuItems[i].cost;
  itemQuanTotals.push(new itemQuanTotal(quan, costEach, costTotal));
}

const getSubTotal = () => {
  var subTotalVal = 0;
  itemQuanTotals.forEach((itemQuanTotal) => {
    subTotalVal += Number(itemQuanTotal.costTotal.value);
  });
  subTotalVal = subTotalVal.toFixed(2);
  return subTotalVal;
};

itemQuanTotals.forEach((itemQuanTotal) => {
  var quan = itemQuanTotal.quan;
  var costEach = itemQuanTotal.costEach;
  var costTotal = itemQuanTotal.costTotal;
  quan.addEventListener("change", () => {
    costTotal.value = Number(
      costEach * quan.options[quan.selectedIndex].text
    ).toFixed(2);
    subtotal.value = getSubTotal();
    tax.value = (getSubTotal() * 0.0625).toFixed(2);
    total.value = (getSubTotal() * 1.0625).toFixed(2);
  });
});

var validate = () => {
  valid = true;
  var phonePattern = /^\d{10}$/;
  result.innerHTML = "";
  if (document.getElementsByName("fname")[0].value == "") {
    result.innerHTML = "Error:<br>Please enter your first name<br />";
    valid = false;
  }
  if (document.getElementsByName("lname")[0].value == "") {
    result.innerHTML += " Please enter your last name<br />";
    valid = false;
  }
  if (!document.getElementsByName("phone")[0].value.match(phonePattern)) {
    result.innerHTML += " Please enter a valid phone number<br />";
    valid = false;
  }
  if (
    document.getElementById("delivery").checked &&
    (document.getElementsByName("street")[0].value == "" ||
      document.getElementsByName("city")[0].value == "")
  ) {
    result.innerHTML += " Please enter your address for delivery<br />";
    valid = false;
  }

  if (valid == false) {
    return false;
  }

  if (document.getElementById("delivery").checked) {
    result.innerHTML = `Thanks for ordering! Your total is ${total.value}. Please wait for 30min`;
  } else {
    result.innerHTML = `Thanks for ordering! Your total is ${total.value}. Please wait for 15min`;
  }

  return true;
};
