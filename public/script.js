const buttons = document.querySelectorAll('.yey');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (evt) => {
        if (document.cookie.length > 0) {
            document.cookie += `,${evt.target.classList[0]}; SameSite=Lax; Secure; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
            return alert('Товар успешно добавлен в корзину');
        }
        document.cookie = `${evt.target.classList[0]}; SameSite=Lax; Secure; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT`;
        return alert('Товар успешно добавлен в корзину');
    });
}

const btn = document.querySelector('.sc');
const card__main__container = document.querySelector('.card__main__Container');
const basket = document.querySelector('.basket__container');
const Action = document.querySelector('.Action');
const amount = document.querySelector('.total-amount');
const itemm = document.querySelector('.itemm');
const Cart = document.querySelector('.Cart-Container');
const empty = document.querySelector('.empty');

Cart.addEventListener('click', (evt) => {
    evt.preventDefault()
})

function counterYes() {
    let count = document.querySelectorAll('.Cart-Itemm').length;
    if (count == 1) {
        itemm.innerHTML = `1 товар`;
    } else if (count >= 2 && count < 5) {
        itemm.innerHTML = `${count} товара`;
    } else if (count >= 5 && count < 21) {
        itemm.innerHTML = `${count} товаров`;
    } else {
        itemm.innerHTML = `0 товаров`;
    }
    let counter = 0;
    amount.innerHTML = counter;
    document.querySelectorAll('.amount__price').forEach(el => {
        counter += +el.innerHTML;
    });
    amount.innerHTML = `${counter} ₽`;
}

btn.addEventListener('click', (evt) => {
    basket.classList.add('basket__active');
    if (document.cookie) {
        while (card__main__container.firstChild) {
            card__main__container.firstChild.remove();
        }
    if (document.cookie.length === 0) {
        empty.style = `display: block;`;
        console.log(1)
    }
        let arr = document.cookie.split(',');
        arr.forEach(async (id) => {
            let res = await fetch('/getAllProducts/' + id);
            let commit = await res.json();
            let div = document.createElement('div');
            div.classList.add('Cart-Itemm');
            div.innerHTML = `
            <div class="first__container">
                <div class="image-box">
                    <img src="/images/${commit.img}" height="120px">
                </div>
                <div class="about">
                    <h1 class="title">${commit.title}</h1>
                    <h2 class="subtitle">${commit.autor}</h2>
                </div> 
            </div>
            <div class="second__container">
                <div class="counter">
                    <div class="btn">-</div>
                    <div class="count">1</div>
                    <div class="btn">+</div>
                </div>
                <div class="prices">
                    <div class="amount"> <span class="amount__price">${commit.price}</span> ₽</div>
                    <div class="remove">Удалить</div>
                </div>
            </div>
            `;
            card__main__container.appendChild(div);
            counterYes();
        });
    }
});

Action.onclick = (evt) => {
    basket.classList.remove('basket__active');
};

// basket.onclick = (evt) => {
//     basket.classList.remove('basket__active');

// }


const buttonClean = document.querySelector('.clean');
buttonClean.addEventListener('click', (evt) => {
    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    while (card__main__container.firstChild) {
        card__main__container.firstChild.remove();
    }
    counterYes();
});