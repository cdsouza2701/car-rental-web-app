const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get("name");
const days = urlParams.get("days");
const id = urlParams.get("id");
const pricePerDay = urlParams.get("pricePerDay");
const totalPrice = days * pricePerDay;


document.getElementById("totalPrice").innerHTML = totalPrice;
document.getElementById("customerName").innerHTML = name;
document.getElementById("rentDays").innerHTML = days;
document.getElementById("id").innerHTML = id;