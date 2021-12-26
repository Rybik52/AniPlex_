let sum = 0;
const totalprice = document.querySelector('.total');
const prices = document.querySelectorAll('.price h3');
const buttons = document.querySelectorAll('.buy');
for (let i = 0; i < buttons.length; i++) {
    let num = +prices[i].innerText;
    buttons[i].addEventListener('click', (evt) => {
        sum += num;
        totalprice.innerHTML = `${sum} ₽`;
    });
}