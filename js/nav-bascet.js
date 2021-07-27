let cardP = document.querySelectorAll('.card-product');
let basketCard = document.querySelector('.nav-bacet');

cardP.forEach(function (elem) {
    elem.addEventListener('click', function (e) {
        let txtProd = e.currentTarget.querySelector('.card-product__description__h4').textContent;
        let txtPrice = e.currentTarget.querySelector('.card-product__price').textContent;
        let img = e.currentTarget.querySelector('.card-product__image').getAttribute('src');
        cardMaker(txtProd, txtPrice, img);
        // checkContainer(txtProd, txtPrice, img);
    })
})


function checkContainer(name, price, img) {
    let card = document.querySelectorAll('.nav-bacet__card');
    if (basketCard.childElementCount == 0) {
        cardMaker(name, price, img);
    }
    else if (basketCard.childElementCount > 0) {
        card.forEach(function (elem) {
            let checkName = elem.querySelector('.nav-bacet__card__item_img-wrp p').textContent;
            let checkAmount = elem.querySelector('.nav-bacet__card__item_amount p').textContent;
            let checkTotal = elem.querySelector('.nav-bacet__card__item_total p').textContent;
            let total = elem.querySelector('.nav-bacet__card__item_total p');
            let amount = elem.querySelector('.nav-bacet__card__item_amount p');
            if (checkName == name) {
                checkAmount = Number(checkAmount);
                ++checkAmount;
                amount.innerHTML = String(checkAmount);
                checkTotal = Number(checkTotal) + Number(price);
                total.innerHTML = String(checkTotal);
            }
            else {
                cardMaker(name, price, img);
            }

        })
    }

    // else if (basketCard.childElementCount > 0 && checkName !== name) {
    //     cardMaker(name, price, img);
    // }
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
                        <p>100$</p>
                    </div>
                </div>
            `)
}