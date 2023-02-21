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

    const phoneTotal = getInputValue('iphone') * 1219;
    const caseTotal = getInputValue('case') * 59;
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
    const case1Total = getInputValue('case1') * 11;
    const case2Total = getInputValue('case2') * 11;
    const case3Total = getInputValue('case3') * 11;
    const case4Total = getInputValue('case4') * 11;
    const case5Total = getInputValue('case5') * 11;
    const case6Total = getInputValue('case6') * 11;
    const case7Total = getInputValue('case7') * 11;
    const case8Total = getInputValue('case8') * 11;
    const case9Total = getInputValue('case9') * 11;
    const case10Total = getInputValue('case10') * 11;
    const case11Total = getInputValue('case11') * 15;
    const case12Total = getInputValue('case12') * 15;
    const case13Total = getInputValue('case13') * 15;
    const case14Total = getInputValue('case14') * 15;
    const case15Total = getInputValue('case15') * 15;
    const case16Total = getInputValue('case16') * 15;

    const subTotal = phoneTotal + caseTotal + Bulb1Total + Bulb10Total + Bulb11Total + Bulb2Total + Bulb3Total + Bulb5Total + Bulb6Total  + Bulb7Total + Bulb8Total + Bulb9Total + lights1Total  + lights10Total + lights11Total + lights2Total + lights3Total + lights4Total + lights5Total + lights6Total + lights7Total +  lights8Total + lights9Total + compound1Total + compound2Total+ compound3Total + compound4Total + compound5Total + case1Total + case2Total + case3Total + case4Total + case5Total + case6Total + case7Total + case8Total + case9Total + case10Total + case11Total + case12Total + case13Total + case14Total + case15Total + case16Total;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;

}

// phone increase
document.getElementById('iphone-increase').addEventListener('click', function(){
    updateNumber('iphone', 1219, true);
})
// phone decrease
document.getElementById('iphone-decrease').addEventListener('click', function(){
    updateNumber('iphone', 1219, false);
})

// case increase
document.getElementById('case-increase').addEventListener('click', function(){
    updateNumber('case', 59, true);
})
// case decrease
document.getElementById('case-decrease').addEventListener('click', function(){
    updateNumber('case', 59, false);
})

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

// case1 increase
document.getElementById('case1-increase').addEventListener('click', function(){
    updateNumber('case1', 11, true);
})

// case1 decrease
document.getElementById('case1-decrease').addEventListener('click', function(){
    updateNumber('case1', 11, false);
}) 

// case2 increase
document.getElementById('case2-increase').addEventListener('click', function(){
    updateNumber('case2', 11, true);
})

// case2 decrease
document.getElementById('case2-decrease').addEventListener('click', function(){
    updateNumber('case2', 11, false);
}) 

// case3 increase
document.getElementById('case3-increase').addEventListener('click', function(){
    updateNumber('case3', 11, true);
})

// case3 decrease
document.getElementById('case3-decrease').addEventListener('click', function(){
    updateNumber('case3', 11, false);
}) 

// case4 increase
document.getElementById('case4-increase').addEventListener('click', function(){
    updateNumber('case4', 11, true);
})

// case4 decrease
document.getElementById('case4-decrease').addEventListener('click', function(){
    updateNumber('case4', 11, false);
}) 

// case5 increase
document.getElementById('case5-increase').addEventListener('click', function(){
    updateNumber('case5', 11, true);
})

// case5 decrease
document.getElementById('case5-decrease').addEventListener('click', function(){
    updateNumber('case5', 11, false);
}) 

// case6 increase
document.getElementById('case6-increase').addEventListener('click', function(){
    updateNumber('case6', 11, true);
})

// case6 decrease
document.getElementById('case6-decrease').addEventListener('click', function(){
    updateNumber('case6', 11, false);
}) 

// case7 increase
document.getElementById('case7-increase').addEventListener('click', function(){
    updateNumber('case7', 11, true);
})

// case7 decrease
document.getElementById('case7-decrease').addEventListener('click', function(){
    updateNumber('case7', 11, false);
})

// case8 increase
document.getElementById('case8-increase').addEventListener('click', function(){
    updateNumber('case8', 11, true);
})

// case8 decrease
document.getElementById('case8-decrease').addEventListener('click', function(){
    updateNumber('case8', 11, false);
})

// case9 increase
document.getElementById('case9-increase').addEventListener('click', function(){
    updateNumber('case9', 11, true);
})

// case9 decrease
document.getElementById('case9-decrease').addEventListener('click', function(){
    updateNumber('case9', 11, false);
})

// case10 increase
document.getElementById('case10-increase').addEventListener('click', function(){
    updateNumber('case10', 11, true);
})

// case10 decrease
document.getElementById('case10-decrease').addEventListener('click', function(){
    updateNumber('case10', 11, false);
})

// case11 increase
document.getElementById('case11-increase').addEventListener('click', function(){
    updateNumber('case11', 15, true);
})

// case11 decrease
document.getElementById('case11-decrease').addEventListener('click', function(){
    updateNumber('case11', 15, false);
}) 

// case12 increase
document.getElementById('case12-increase').addEventListener('click', function(){
    updateNumber('case12', 15, true);
})

// case12 decrease
document.getElementById('case12-decrease').addEventListener('click', function(){
    updateNumber('case12', 15, false);
}) 

// case13 increase
document.getElementById('case13-increase').addEventListener('click', function(){
    updateNumber('case13', 15, true);
})

// case13 decrease
document.getElementById('case13-decrease').addEventListener('click', function(){
    updateNumber('case13', 15, false);
})


// case14 increase
document.getElementById('case14-increase').addEventListener('click', function(){
    updateNumber('case14', 15, true);
})

// case14 decrease
document.getElementById('case14-decrease').addEventListener('click', function(){
    updateNumber('case14', 15, false);
})

// case15 increase
document.getElementById('case15-increase').addEventListener('click', function(){
    updateNumber('case15', 15, true);
})

// case15 decrease
document.getElementById('case15-decrease').addEventListener('click', function(){
    updateNumber('case15', 15, false);
})

// case16 increase
document.getElementById('case16-increase').addEventListener('click', function(){
    updateNumber('case16', 15, true);
})

// case16 decrease
document.getElementById('case16-decrease').addEventListener('click', function(){
    updateNumber('case16', 15, false);
})

// check out
document.getElementById('check-out').addEventListener('click', function(){
    window.location.href = 'thank.html';
})
