// Buy Ticket Operation
document
  .getElementById("btn-buy-tickets")
  .addEventListener("click", function () {
    document.querySelector("header").classList.add("hidden");
    document.querySelector("footer").classList.add("hidden");
    document.getElementById("coupon").classList.add("hidden");
  });
// Buy Ticket Operation

const buttons = document.getElementById("ticket-sale").querySelectorAll("button");
// console.log(buttons);
let totalPrice=0
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',function(){
        buttons[i].style.backgroundColor="#1DD100";
        const ticketName=buttons[i].innerText
        // console.log(ticketName)
        const td=document.createElement('td')
        td.innerText=ticketName
        const td2 = document.createElement("td");
        td2.innerText="Economy"
        const td3 = document.createElement("td");
        td3.innerText=parseInt(550)
        const tr=document.createElement('tr')

        tr.appendChild(td)
        tr.appendChild(td2)
        tr.appendChild(td3)
        console.log(tr)
        document.getElementById("ticket-body").appendChild(tr)
        let currentPrice = parseFloat(document.getElementById("total-price").innerText);
        let ticketPrice = parseFloat(
          document.getElementById("ticket-price").innerText
        );
        totalPrice=currentPrice+ticketPrice
        set_innertext("total-price",totalPrice)
        const current_seat = seat_count("seat-count");
        set_innertext("seat-count",current_seat)
        const addSeat = increment_seat_count("increment-seat-count");
        console.log(addSeat)
        set_innertext("increment-seat-count",addSeat);

        // Grand total
        const grandTotal = grand_total("grand-total");
        set_innertext("grand-total",grandTotal)
        
    })
}

// Utility functions

function set_innertext(elementId,value){
    const element=document.getElementById(elementId)
    element.innerText=value
    

}
function seat_count(elementId){
    let element = parseInt(document.getElementById(elementId).innerText);
    // console.log(element)
    element-=1
    
    return element
    
}

function increment_seat_count(elementId){
    let element = parseInt(document.getElementById(elementId).innerText);

    console.log(element)
    element+=1
    
    return element
}

function grand_total(elementId){
    const element = parseInt(document.getElementById("total-price").innerText);


    return element
}