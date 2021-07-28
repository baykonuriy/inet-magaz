'use strict'
let cardP = document.querySelectorAll('.card-product');
let basketCard = document.querySelector('.nav-bacet');

cardP.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        if(e.target == e.currentTarget.querySelector('.newbtn_ghost_dark')){
            let txtProd = e.currentTarget.querySelector('.card-product__description__h4').textContent;
            let txtPrice = e.currentTarget.querySelector('.card-product__price').textContent;
            let img = e.currentTarget.querySelector('.card-product__image').getAttribute('src');
            checkContainer(txtProd, txtPrice, img);
        }
    })
})

function checkContainer(name, price, img) {
    if (basketCard.childElementCount == 0) {
        cardMaker(name, price, img);
    }
    else if (basketCard.childElementCount > 0) {
        let card = document.querySelectorAll('.nav-bacet__card');
        for(let i = 0; i < card.length; i++){
            let checkName = card[i].querySelector('.nav-bacet__card__item_img-wrp p').textContent;
            let checkAmount = card[i].querySelector('.nav-bacet__card__item_amount p').textContent;
            let checkTotal = card[i].querySelector('.nav-bacet__card__item_total p').textContent;
            let total = card[i].querySelector('.nav-bacet__card__item_total p');
            let amount = card[i].querySelector('.nav-bacet__card__item_amount p');
            if (checkName == name) {
                checkAmount = Number(checkAmount);
                ++checkAmount;
                amount.innerHTML = String(checkAmount);
                checkTotal = Number(checkTotal) + Number(price);
                return total.innerHTML = String(checkTotal);
            }
            if(checkName !== name && i == card.length -1){
                cardMaker(name, price, img);
                document.querySelector('.icon-button__counter').innerHTML = String(card.length);
            }
        }
    }
}



function cardMaker(name, price, img) {
    basketCard.insertAdjacentHTML("afterbegin", `
                <div class="nav-bacet__card">
                    <div class="nav-bacet__card__item nav-bacet__card__item_img-wrp">
                        <img src="${img}" alt="">
                        <p>${name}</p>
                    </div>
                    <div class="nav-bacet__card__item nav-bacet__card__item_amount">
                        <p>1</p>
                    </div>
                    <div class="nav-bacet__card__item nav-bacet__card__item_price">
                        <p>${price}</p>
                    </div>
                    <div class="nav-bacet__card__item nav-bacet__card__item_total">
                        <p>${price}</p>
                    </div>
                </div>
            `)
}