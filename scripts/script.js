//Disabled Buttons
document.getElementById("apply-coupon-btn").setAttribute("disabled", true);
document.getElementById("next-btn").setAttribute("disabled", true);
//Disabled Buttons
// Buy Ticket Operation
document
  .getElementById("btn-buy-tickets")
  .addEventListener("click", function () {
    document.querySelector("header").classList.add("hidden");
    document.querySelector("footer").classList.add("hidden");
    document.getElementById("coupon").classList.add("hidden");
  });
// Buy Ticket Operation

const buttons = document.querySelectorAll(".all-seats button");
// console.log(buttons);
let totalPrice = 0;
let buttonCount = 0;
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttons[i].style.backgroundColor = "#1DD100";
    buttons[i].setAttribute("disabled", true);
    const ticketName = buttons[i].innerText;
    // console.log(ticketName)
    const td = document.createElement("td");
    td.innerText = ticketName;
    const td2 = document.createElement("td");
    td2.innerText = "Economy";
    const td3 = document.createElement("td");
    td3.innerText = parseInt(550);
    const tr = document.createElement("tr");

    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    // console.log(tr)
    document.getElementById("ticket-body").appendChild(tr);
    let currentPrice = parseFloat(
      document.getElementById("total-price").innerText
    );
    let ticketPrice = parseFloat(
      document.getElementById("ticket-price").innerText
    );
    totalPrice = currentPrice + ticketPrice;
    set_innertext("total-price", totalPrice);
    const current_seat = seat_count("seat-count");
    set_innertext("seat-count", current_seat);
    const addSeat = increment_seat_count("increment-seat-count");
    // console.log(addSeat)
    set_innertext("increment-seat-count", addSeat);

    // Grand total
    let grandTotal = grand_total("grand-total");
    set_innertext("grand-total", grandTotal);
    buttonCount += 1;
    console.log(buttonCount);
    if (buttonCount == 4) {
      for (j = 0; j < buttons.length; j++) {
        if (!buttons[j].disabled) {
          buttons[j].setAttribute("disabled", true);
        }
      }
    }

    if (buttonCount == 4) {
      document.getElementById("apply-coupon-btn").removeAttribute("disabled");
      document.getElementById("apply-coupon-btn").style.backgroundColor =
        "#1DD100";
      document
        .getElementById("apply-coupon-btn")
        .addEventListener("click", function () {
          const coupon_value = document.getElementById("coupon-input").value;
          // console.log(coupon_value)
          if (coupon_value == "NEW15") {
            let discount = totalPrice * 0.15;
            const li = document.createElement("li");
            const li2 = document.createElement("li");
            li.innerText = "Discount";
            li2.innerText = discount;
            li2.classList.add("mr-[10px]");
            document.getElementById("discount-price").appendChild(li);
            document.getElementById("discount-price").appendChild(li2);
            console.log(grandTotal);
            grandTotal = grandTotal - discount;
            set_innertext("grand-total", grandTotal);
            document
              .querySelector(".coupon-input-class")
              .classList.add("hidden");
          } else if (coupon_value == "Couple 20") {
            let discount = totalPrice * 0.2;
            const li = document.createElement("li");
            const li2 = document.createElement("li");
            li.innerText = "Discount";
            li2.innerText = discount;
            li2.classList.add("mr-[10px]");
            document.getElementById("discount-price").appendChild(li);
            document.getElementById("discount-price").appendChild(li2);
            grandTotal = grandTotal - discount;
            set_innertext("grand-total", grandTotal);
            document
              .querySelector(".coupon-input-class")
              .classList.add("hidden");
          }
        });
    }
  });
}
let phoneNumber = document.getElementById("phn-number");
phoneNumber.addEventListener("input", function () {
  let phoneNumberValue = phoneNumber.value;
  console.log(phoneNumberValue.length);
  if (buttonCount >= 1 && phoneNumberValue.length > 0) {
    document.getElementById("next-btn").removeAttribute("disabled");
    document.getElementById("next-btn").style.backgroundColor = "#1DD100";
  }
});

for (let button of buttons) {
  button.addEventListener("click", function () {
    let phoneNumber = document.getElementById("phn-number").value;
    console.log(phoneNumber)
    if(phoneNumber.length>0){
      document.getElementById('next-btn').removeAttribute('disabled')
      document.getElementById('next-btn').style.backgroundColor = "#1DD100"
    }
  });
}
console.log(buttonCount);
// Utility functions

function set_innertext(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function seat_count(elementId) {
  let element = parseInt(document.getElementById(elementId).innerText);
  // console.log(element)
  element -= 1;

  return element;
}

function increment_seat_count(elementId) {
  let element = parseInt(document.getElementById(elementId).innerText);

  // console.log(element)
  element += 1;

  return element;
}

function grand_total(elementId) {
  const element = parseInt(document.getElementById("total-price").innerText);

  return element;
}
function hide_element(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}
function show_element(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function phone_number_length() {
  let phoneNumber = document.getElementById("phn-number");
  phoneNumber.addEventListener("keyup", function () {
    let phoneNumberValue = phoneNumber.value;
    let phone_number_trim = phoneNumberValue.split("").join("");
    let c = phone_number_trim.length;
    return c;
  });
}

document.getElementById("continue-btn").addEventListener('click',function(){
  window.location.reload()
})