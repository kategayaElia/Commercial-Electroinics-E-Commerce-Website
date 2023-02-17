function updateNumber(product, price, isIncreasing){
    const quantity = document.getElementById(product + '-quantity');
    let quantityNumber = quantity.value;

    if(isIncreasing == true){
        quantityNumber = parseInt(quantityNumber) + 1;
    }
    else if(quantityNumber > 0){
        quantityNumber = parseInt(quantityNumber) - 1;
    }
    quantity.value = quantityNumber;

    // price update
    const priceTotal = document.getElementById(product + '-price');
    priceTotal.innerText = quantityNumber * price;
    // calling calculate function
    calculateTotal();
}
// input value
function getInputValue(product){
    const input = document.getElementById(product + '-quantity');
    const inputValue = parseInt(input.value);
    return inputValue;
}
// calculate total
function calculateTotal(){

    const Bulb1Total = getInputValue('Bulb1') * 2;
    const Bulb10Total = getInputValue('Bulb10') * 2;
    const Bulb11Total = getInputValue('Bulb11') * 2;
    const Bulb2Total = getInputValue('Bulb11') * 2;
    const Bulb3Total = getInputValue('Bulb3') * 2;
    const Bulb5Total = getInputValue('Bulb5') * 2;
    const Bulb6Total = getInputValue('Bulb6') * 2;
    const Bulb7Total = getInputValue('Bulb7') * 2;
    const Bulb8Total = getInputValue('Bulb8') * 2;
    const Bulb9Total = getInputValue('Bulb9') * 2;
    

    const subTotal = Bulb1Total + Bulb10Total + Bulb11Total + Bulb2Total + Bulb3Total + Bulb5Total + Bulb6Total  + Bulb7Total + Bulb8Total + Bulb9Total;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;


}


// Bulb1 increase
document.getElementById('Bulb1-increase').addEventListener('click', function(){
    updateNumber('Bulb1', 2, true);
})
// Bulb1 decrease
document.getElementById('Bulb1-decrease').addEventListener('click', function(){
    updateNumber('Bulb1', 2, false);
})

// Bulb10 increase
document.getElementById('Bulb10-increase').addEventListener('click', function(){
    updateNumber('Bulb10', 2, true);
})
// Bulb10 decrease
document.getElementById('Bulb10-decrease').addEventListener('click', function(){
    updateNumber('Bulb10', 2, false);
})

// Bulb11 increase
document.getElementById('Bulb11-increase').addEventListener('click', function(){
    updateNumber('Bulb11', 2, true);
})
// Bulb11 decrease
document.getElementById('Bulb11-decrease').addEventListener('click', function(){
    updateNumber('Bulb11', 2, false);
})

// Bulb2 increase
document.getElementById('Bulb2-increase').addEventListener('click', function(){
    updateNumber('Bulb2', 2, true);
})
// Bulb2 decrease
document.getElementById('Bulb2-decrease').addEventListener('click', function(){
    updateNumber('Bulb2', 2, false);
})

// Bulb3 increase
document.getElementById('Bulb3-increase').addEventListener('click', function(){
    updateNumber('Bulb3', 2, true);
})


// Bulb3 decrease
document.getElementById('Bulb3-decrease').addEventListener('click', function(){
    updateNumber('Bulb3', 2, false);
})

// Bulb5 increase
document.getElementById('Bulb5-increase').addEventListener('click', function(){
    updateNumber('Bulb5', 2, true);
})


// Bulb5 decrease
document.getElementById('Bulb5-decrease').addEventListener('click', function(){
    updateNumber('Bulb5', 2, false);
})

// Bulb6 increase
document.getElementById('Bulb6-increase').addEventListener('click', function(){
    updateNumber('Bulb6', 2, true);
})


// Bulb6 decrease
document.getElementById('Bulb6-decrease').addEventListener('click', function(){
    updateNumber('Bulb6', 2, false);
})

// Bulb7 increase
document.getElementById('Bulb7-increase').addEventListener('click', function(){
    updateNumber('Bulb7', 2, true);
})


// Bulb7 decrease
document.getElementById('Bulb7-decrease').addEventListener('click', function(){
    updateNumber('Bulb7', 2, false);
}) 

// Bulb8 increase
document.getElementById('Bulb8-increase').addEventListener('click', function(){
    updateNumber('Bulb8', 2, true);
})


// Bulb8 decrease
document.getElementById('Bulb8-decrease').addEventListener('click', function(){
    updateNumber('Bulb8', 2, false);
}) 

// Bulb9 increase
document.getElementById('Bulb9-increase').addEventListener('click', function(){
    updateNumber('Bulb9', 2, true);
})


// Bulb9 decrease
document.getElementById('Bulb9-decrease').addEventListener('click', function(){
    updateNumber('Bulb9', 2, false);
}) 

// check out
document.getElementById('check-out').addEventListener('click', function(){
    window.location.href = 'thank.html';
})