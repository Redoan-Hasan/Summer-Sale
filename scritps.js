let total = 0;

// reuseable codes 


// function for set the grand total and discounter price in if/else 
// function calculateTotalAndDiscountedPrice(){
//         document.getElementById('apply-btn').removeAttribute('disabled');
//         const discountedPrice = total * 0.20;
//         const currentDiscountPrice = document.getElementById('discount-price');
//         currentDiscountPrice.innerText = discountedPrice.toFixed(2);
//         const grandTotal = total - discountedPrice;
//         const currentGrandTotal = document.getElementById('grand-total');
//         currentGrandTotal.innerText = grandTotal.toFixed(2);
    
// }


// function for get the product name and push the name into list of coupon section 
function setItemNameToList(titleTextIdName){
    document.getElementById('purchase-btn').removeAttribute('disabled');
    const itemContainer = document.getElementById('selected-items');
    const liLength = itemContainer.getElementsByTagName('li');
    if(liLength.length >= 10){
        alert('Cant add more items. You have reached the limit of 10 items');
        return;
    }
    const titleText = document.getElementById(titleTextIdName).innerText;
    const li = document.createElement('li');
    li.innerText= titleText;
    itemContainer.appendChild(li);
}




// function for calculate the total , discounted and grand total price 
function totalDiscountAndGrandTotal(cardPriceId){
    const kitchenCardOnePrice = document.getElementById(cardPriceId).innerText;
    const currentTotalPrice = document.getElementById('total-price');
    currentTotalPrice.innerText = kitchenCardOnePrice;
    total = parseFloat(total)+ parseFloat(currentTotalPrice.innerText);
    currentTotalPrice.innerText = total.toFixed(2);
    if(currentTotalPrice.innerText >= 200){
        document.getElementById('apply-btn').removeAttribute('disabled');
        const discountedPrice = total * 0.20;
        const currentDiscountPrice = document.getElementById('discount-price');
        currentDiscountPrice.innerText = discountedPrice.toFixed(2);
        const grandTotal = total - discountedPrice;
        const currentGrandTotal = document.getElementById('grand-total');
        currentGrandTotal.innerText = grandTotal.toFixed(2);
        }
}

//kitchen card one 
document.getElementById('kitchen-card1').addEventListener('click', function(){
    document.getElementById('purchase-btn').removeAttribute('disabled');
    const itemContainer = document.getElementById('selected-items');
    const liLength = itemContainer.getElementsByTagName('li');
    if(liLength.length > 10){
        alert('Cant add more items. You have reached the limit of 10 items');
        return;
    }
    const titleText = document.getElementById('kitchen-card1Text').innerText;
    const li = document.createElement('li');
    li.innerText= titleText;
    itemContainer.appendChild(li);
    const kitchenCardOnePrice = document.getElementById('k-card1-price').innerText;
    const currentTotalPrice = document.getElementById('total-price');
    currentTotalPrice.innerText = kitchenCardOnePrice;
    total = parseFloat(total)+ parseFloat(currentTotalPrice.innerText);
    currentTotalPrice.innerText = total.toFixed(2);
    if(currentTotalPrice.innerText >= 200){
        document.getElementById('apply-btn').removeAttribute('disabled');
        const discountedPrice = total * 0.20;
        const currentDiscountPrice = document.getElementById('discount-price');
        currentDiscountPrice.innerText = discountedPrice.toFixed(2);
        const grandTotal = total - discountedPrice;
        const currentGrandTotal = document.getElementById('grand-total');
        currentGrandTotal.innerText = grandTotal.toFixed(2);
        }
})

// kitchen card two 
// document.getElementById('kitchen-card2').addEventListener('click', function(){
//     setItemList('kitchen-card2Text');
//     const kitchenCardTwoPrice = document.getElementById('k-card2-price').innerText;
//     const currentTotalPrice =document.getElementById('total-price');
//     currentTotalPrice.innerText = kitchenCardTwoPrice;
//     total = parseFloat(total)+ parseFloat(currentTotalPrice.innerText);
//     currentTotalPrice.innerText = total.toFixed(2);
//     if(currentTotalPrice.innerText >= 200){
//     calculateTotalAndDiscountedPrice();
//     } 
// })
// kitchen card 2 
document.getElementById('kitchen-card2').addEventListener('click', function(){
    setItemNameToList('kitchen-card2Text');
    totalDiscountAndGrandTotal('k-card2-price');
})

// kitchen card 3 
document.getElementById('kitchen-card3').addEventListener('click',function(){
    setItemNameToList('kitchen-card3Text');
    totalDiscountAndGrandTotal('k-card3-price');
})

// sportswear section 
// sports card 1 
document.getElementById('sports-card1').addEventListener('click', function(){
    setItemNameToList('sports-card1-text');
    totalDiscountAndGrandTotal('sports-card1-price');
})

// sports card 2 
document.getElementById('sports-card2').addEventListener('click',function(){
    setItemNameToList('sports-card2-text');
    totalDiscountAndGrandTotal('sports-card2-price');
})

// sports card 3 
document.getElementById('sports-card3').addEventListener('click', function(){
    setItemNameToList('sports-card3-text');
    totalDiscountAndGrandTotal('sports-card3-price');
})