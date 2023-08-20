function priceNumber(id){
    const priceString = document.getElementById(id).innerText;
    const price = parseFloat(priceString);
    return price;
}

function pushPName(path){
    const pList = document.getElementById('p-list');
    const pTitleTag = document.querySelector(path);
    const pTitle = pTitleTag.innerText;
    const number = pList.childElementCount;
    const p = document.createElement('p');
    p.innerText = `${number + 1}. ${pTitle}
    `;
    pList.appendChild(p);
}
// product 1 event
document.getElementById('card1').addEventListener('click', function(){
    document.getElementById('purchase').removeAttribute('disabled');

    const productPrice = priceNumber('p1-amount');
    const totalPrice = priceNumber('total-price');
    
    const sum = productPrice + totalPrice;

    document.getElementById('total-price').innerText = sum.toFixed(2);
    document.getElementById('total').innerText = sum.toFixed(2);

    const addTitle = "#card1 .card-title";
    pushPName(addTitle);

    const couponEnable = priceNumber('total-price');
    if(couponEnable >= 200){
        document.getElementById('apply').removeAttribute('disabled');
    }
})
// product 2 event
document.getElementById('card2').addEventListener('click', function(){
    document.getElementById('purchase').removeAttribute('disabled');

    const productPrice = priceNumber('p2-amount');
    const totalPrice = priceNumber('total-price');
    
    const sum = productPrice + totalPrice;

    document.getElementById('total-price').innerText = sum.toFixed(2);
    document.getElementById('total').innerText = sum.toFixed(2);

    const addTitle = "#card2 .card-title";
    pushPName(addTitle);

    const couponEnable = priceNumber('total-price');
    if(couponEnable >= 200){
        document.getElementById('apply').removeAttribute('disabled');
    }
})
// product 3 event
document.getElementById('card3').addEventListener('click', function(){
    document.getElementById('purchase').removeAttribute('disabled');

    const productPrice = priceNumber('p3-amount');
    const totalPrice = priceNumber('total-price');
    
    const sum = productPrice + totalPrice;

    document.getElementById('total-price').innerText = sum.toFixed(2);
    document.getElementById('total').innerText = sum.toFixed(2);

    const addTitle = "#card3 .card-title";
    pushPName(addTitle);

    const couponEnable = priceNumber('total-price');
    if(couponEnable >= 200){
        document.getElementById('apply').removeAttribute('disabled');
    }
})
// product 4 event
document.getElementById('card4').addEventListener('click', function(){
    document.getElementById('purchase').removeAttribute('disabled');

    const productPrice = priceNumber('p4-amount');
    const totalPrice = priceNumber('total-price');
    
    const sum = productPrice + totalPrice;

    document.getElementById('total-price').innerText = sum.toFixed(2);
    document.getElementById('total').innerText = sum.toFixed(2);

    const addTitle = "#card4 .card-title";
    pushPName(addTitle);

    const couponEnable = priceNumber('total-price');
    if(couponEnable >= 200){
        document.getElementById('apply').removeAttribute('disabled');
    }
})
// product 5 event
document.getElementById('card5').addEventListener('click', function(){
    document.getElementById('purchase').removeAttribute('disabled');

    const productPrice = priceNumber('p5-amount');
    const totalPrice = priceNumber('total-price');
    
    const sum = productPrice + totalPrice;

    document.getElementById('total-price').innerText = sum.toFixed(2);
    document.getElementById('total').innerText = sum.toFixed(2);

    const addTitle = "#card5 .card-title";
    pushPName(addTitle);

    const couponEnable = priceNumber('total-price');
    if(couponEnable >= 200){
        document.getElementById('apply').removeAttribute('disabled');
    }
})
// product 6 event
document.getElementById('card6').addEventListener('click', function(){
    document.getElementById('purchase').removeAttribute('disabled');

    const productPrice = priceNumber('p6-amount');
    const totalPrice = priceNumber('total-price');
    
    const sum = productPrice + totalPrice;

    document.getElementById('total-price').innerText = sum.toFixed(2);
    document.getElementById('total').innerText = sum.toFixed(2);

    const addTitle = "#card6 .card-title";
    pushPName(addTitle);

    const couponEnable = priceNumber('total-price');
    if(couponEnable >= 200){
        document.getElementById('apply').removeAttribute('disabled');
    }
})
// coupon function
document.getElementById('apply').addEventListener('click',function(){
    const couponFeild = document.getElementById('coupon');
    const coupon = couponFeild.value;
    if(coupon == "SELL200"){
        const disTotalPrice = priceNumber('total-price');
        const subTotal = priceNumber('total');
        const discPrice = disTotalPrice * 0.2;
        const discSubTotal = subTotal - discPrice;

        document.getElementById('discount').innerText = discPrice.toFixed(2);
        document.getElementById('total').innerText = discSubTotal.toFixed(2);
        document.getElementById('coupon').value = "" ;
        
    }
    else{
        alert('That coupon doesnt exist.');
        document.getElementById('coupon').value = "" ;
    }
})
// go home reset button in modal
document.getElementById('go-home').addEventListener('click', function(){
    document.getElementById('total-price').innerText = "00.00" ;
    document.getElementById('total').innerText = "00.00" ;
    document.getElementById('discount').innerText = "00.00" ;
    document.getElementById('purchase').setAttribute('disabled', '');
    document.getElementById('apply').setAttribute('disabled', '');
    const pList = document.getElementById('p-list');
    pList.innerHTML = "";

})