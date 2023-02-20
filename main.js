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
    const lights1Total = getInputValue('lights1') * 10;
    const lights10Total = getInputValue('lights10') * 10;
    const lights11Total = getInputValue('lights11') * 10;
    const lights2Total = getInputValue('lights2') * 10;
    const lights3Total = getInputValue('lights3') * 10;
    const lights4Total = getInputValue('lights4') * 10;
    const lights5Total = getInputValue('lights5') * 10;
    const lights6Total = getInputValue('lights6') * 10;
    const lights7Total = getInputValue('lights7') * 10;
    const lights8Total = getInputValue('lights8') * 10;
    const lights9Total = getInputValue('lights9') * 10;
    const compound1Total = getInputValue('compound1') * 10;
    const compound2Total = getInputValue('compound2') * 10;
    const compound3Total = getInputValue('compound3') * 10;
    const compound4Total = getInputValue('compound4') * 10;
    const compound5Total = getInputValue('compound5') * 10;
    const  cable1Total = getInputValue(' cable1') * 10;
    const  cable10Total = getInputValue(' cable10') * 10;
    const  cable2Total = getInputValue(' cable2') * 10;
    const  cable3Total = getInputValue(' cable3') * 10;
    const  cable4Total = getInputValue(' cable4') * 10;
    const  cable5Total = getInputValue(' cable5') * 10;
    const  cable6Total = getInputValue(' cable6') * 10;
    const  cable7Total = getInputValue(' cable7') * 10;
    const  cable8Total = getInputValue(' cable8') * 10;
    const  cable9Total = getInputValue(' cable9') * 10;
    const  garden1Total = getInputValue(' garden1') * 10;
    const  garden2Total = getInputValue(' garden2') * 10;
    const  garden3Total = getInputValue(' garden3') * 10;
    const  garden4Total = getInputValue(' garden4') * 10;
    const  garden5Total = getInputValue(' garden5') * 10;
    const  garden7Total = getInputValue(' garden7') * 10;

    

    const subTotal = Bulb1Total + Bulb10Total + Bulb11Total + Bulb2Total + Bulb3Total + Bulb5Total + Bulb6Total  + Bulb7Total + Bulb8Total + Bulb9Total + lights1Total 
     + lights10Total + lights11Total + lights2Total + lights3Total + lights4Total + lights5Total + lights6Total + lights7Total +  lights8Total + lights9Total + compound1Total + compound2Total
      + compound3Total + compound4Total + compound5Total + cable1Total + cable10Total + cable2Total + cable3Total + cable4Total + cable5Total + cable6Total + cable7Total + cable8Total + cable9Total 
      + garden1Total + garden2Total + garden3Total +  garden4Total + garden5Total + garden7Total;
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

// lights1 increase
document.getElementById('lights1-increase').addEventListener('click', function(){
    updateNumber('lights1', 10, true);
})


// lights1 decrease
document.getElementById('lights1-decrease').addEventListener('click', function(){
    updateNumber('lights1', 10, false);
}) 

// lights10 increase
document.getElementById('lights10-increase').addEventListener('click', function(){
    updateNumber('lights10', 10, true);
})


// lights10 decrease
document.getElementById('lights10-decrease').addEventListener('click', function(){
    updateNumber('lights10', 10, false);
}) 

// lights11 increase
document.getElementById('lights11-increase').addEventListener('click', function(){
    updateNumber('lights11', 10, true);
})


// lights11 decrease
document.getElementById('lights11-decrease').addEventListener('click', function(){
    updateNumber('lights11', 10, false);
}) 
// lights2 increase
document.getElementById('lights2-increase').addEventListener('click', function(){
    updateNumber('lights2', 10, true);
})


// lights2 decrease
document.getElementById('lights2-decrease').addEventListener('click', function(){
    updateNumber('lights2', 10, false);
}) 

// lights3 increase
document.getElementById('lights3-increase').addEventListener('click', function(){
    updateNumber('lights3', 10, true);
})


// lights3 decrease
document.getElementById('lights3-decrease').addEventListener('click', function(){
    updateNumber('lights3', 10, false);
}) 

// lights4 increase
document.getElementById('lights4-increase').addEventListener('click', function(){
    updateNumber('lights4', 10, true);
})


// lights4 decrease
document.getElementById('lights4-decrease').addEventListener('click', function(){
    updateNumber('lights4', 10, false);
}) 

// lights5 increase
document.getElementById('lights5-increase').addEventListener('click', function(){
    updateNumber('lights5', 10, true);
})


// lights5 decrease
document.getElementById('lights5-decrease').addEventListener('click', function(){
    updateNumber('lights5', 10, false);
}) 

// lights6 increase
document.getElementById('lights6-increase').addEventListener('click', function(){
    updateNumber('lights6', 10, true);
})


// lights6 decrease
document.getElementById('lights6-decrease').addEventListener('click', function(){
    updateNumber('lights6', 10, false);
}) 

// lights7 increase
document.getElementById('lights7-increase').addEventListener('click', function(){
    updateNumber('lights7', 10, true);
})


// lights7 decrease
document.getElementById('lights7-decrease').addEventListener('click', function(){
    updateNumber('lights7', 10, false);
}) 

// lights8 increase
document.getElementById('lights8-increase').addEventListener('click', function(){
    updateNumber('lights8', 10, true);
})


// lights8 decrease
document.getElementById('lights8-decrease').addEventListener('click', function(){
    updateNumber('lights8', 10, false);
}) 

// lights9 increase
document.getElementById('lights9-increase').addEventListener('click', function(){
    updateNumber('lights9', 10, true);
})


// lights9 decrease
document.getElementById('lights9-decrease').addEventListener('click', function(){
    updateNumber('lights9', 10, false);
}) 

// compound1 increase
document.getElementById('compound1-increase').addEventListener('click', function(){
    updateNumber('compound1', 5, true);
})

// compound1 decrease
document.getElementById('compound1-decrease').addEventListener('click', function(){
    updateNumber('compound1', 5, false);
}) 

// compound2 increase
document.getElementById('compound2-increase').addEventListener('click', function(){
    updateNumber('compound2', 5, true);
})

// compound2 decrease
document.getElementById('compound2-decrease').addEventListener('click', function(){
    updateNumber('compound2', 5, false);
}) 

// compound3 increase
document.getElementById('compound3-increase').addEventListener('click', function(){
    updateNumber('compound3', 5, true);
})

// compound3 decrease
document.getElementById('compound3-decrease').addEventListener('click', function(){
    updateNumber('compound3', 5, false);
}) 

// compound4 increase
document.getElementById('compound4-increase').addEventListener('click', function(){
    updateNumber('compound4', 5, true);
})

// compound4 decrease
document.getElementById('compound4-decrease').addEventListener('click', function(){
    updateNumber('compound4', 5, false);
}) 

// compound5 increase
document.getElementById('compound5-increase').addEventListener('click', function(){
    updateNumber('compound5', 5, true);
})

// compound5 decrease
document.getElementById('compound5-decrease').addEventListener('click', function(){
    updateNumber('compound5', 5, false);
}) 

// cable1 increase
document.getElementById('cable1-increase').addEventListener('click', function(){
    updateNumber('cable1', 11, true);
})

// cable1 decrease
document.getElementById('cable1-decrease').addEventListener('click', function(){
    updateNumber('cable1', 11, false);
}) 

// cable10 increase
document.getElementById('cable10-increase').addEventListener('click', function(){
    updateNumber('cable10', 11, true);
})

// cable10 decrease
document.getElementById('cable10-decrease').addEventListener('click', function(){
    updateNumber('cable10', 11, false);
}) 

// cable2 increase
document.getElementById('cable2-increase').addEventListener('click', function(){
    updateNumber('cable2', 11, true);
})

// cable2 decrease
document.getElementById('cable2-decrease').addEventListener('click', function(){
    updateNumber('cable2', 11, false);
}) 

// cable3 increase
document.getElementById('cable3-increase').addEventListener('click', function(){
    updateNumber('cable3', 11, true);
})

// cable3 decrease
document.getElementById('cable3-decrease').addEventListener('click', function(){
    updateNumber('cable3', 11, false);
}) 

// cable4 increase
document.getElementById('cable4-increase').addEventListener('click', function(){
    updateNumber('cable4', 11, true);
})

// cable4 decrease
document.getElementById('cable4-decrease').addEventListener('click', function(){
    updateNumber('cable4', 11, false);
}) 

// cable5 increase
document.getElementById('cable5-increase').addEventListener('click', function(){
    updateNumber('cable5', 11, true);
})

// cable5 decrease
document.getElementById('cable5-decrease').addEventListener('click', function(){
    updateNumber('cable5', 11, false);
}) 

// cable5 increase
document.getElementById('cable5-increase').addEventListener('click', function(){
    updateNumber('cable5', 11, true);
})

// cable5 decrease
document.getElementById('cable3-decrease').addEventListener('click', function(){
    updateNumber('cable3', 11, false);
}) 

// cable6 increase
document.getElementById('cable6-increase').addEventListener('click', function(){
    updateNumber('cable6', 11, true);
})

// cable6 decrease
document.getElementById('cable6-decrease').addEventListener('click', function(){
    updateNumber('cable6', 11, false);
}) 

// cable7 increase
document.getElementById('cable7-increase').addEventListener('click', function(){
    updateNumber('cable7', 11, true);
})

// cable7 decrease
document.getElementById('cable7-decrease').addEventListener('click', function(){
    updateNumber('cable7', 11, false);
})

// cable8 increase
document.getElementById('cable8-increase').addEventListener('click', function(){
    updateNumber('cable8', 11, true);
})

// cable8 decrease
document.getElementById('cable8-decrease').addEventListener('click', function(){
    updateNumber('cable8', 11, false);
}) 

// cable9 increase
document.getElementById('cable9-increase').addEventListener('click', function(){
    updateNumber('cable9', 11, true);
})

// cable9 decrease
document.getElementById('cable9-decrease').addEventListener('click', function(){
    updateNumber('cable9', 11, false);
}) 

// garden1 increase
document.getElementById('garden1-increase').addEventListener('click', function(){
    updateNumber('garden1', 20, true);
})

// garden1 decrease
document.getElementById('garden1-decrease').addEventListener('click', function(){
    updateNumber('garden1', 20, false);
}) 

// garden2 increase
document.getElementById('garden2-increase').addEventListener('click', function(){
    updateNumber('garden2', 20, true);
})

// garden2 decrease
document.getElementById('garden2-decrease').addEventListener('click', function(){
    updateNumber('garden2', 20, false);
}) 

// garden3 increase
document.getElementById('garden3-increase').addEventListener('click', function(){
    updateNumber('garden3', 20, true);
})

// garden3 decrease
document.getElementById('garden3-decrease').addEventListener('click', function(){
    updateNumber('garden3', 20, false);
}) 

// garden4 increase
document.getElementById('garden4-increase').addEventListener('click', function(){
    updateNumber('garden4', 20, true);
})

// garden4 decrease
document.getElementById('garden4-decrease').addEventListener('click', function(){
    updateNumber('garden4', 20, false);
}) 

// garden5 increase
document.getElementById('garden5-increase').addEventListener('click', function(){
    updateNumber('garden5', 20, true);
})

// garden5 decrease
document.getElementById('garden5-decrease').addEventListener('click', function(){
    updateNumber('garden5', 20, false);
}) 

// garden7 increase
document.getElementById('garden7-increase').addEventListener('click', function(){
    updateNumber('garden7', 20, true);
})

// garden7 decrease
document.getElementById('garden7-decrease').addEventListener('click', function(){
    updateNumber('garden7', 20, false);
}) 


// check out
document.getElementById('check-out').addEventListener('click', function(){
    window.location.href = 'thank.html';
})
