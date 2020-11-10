  let items = document.querySelectorAll('.main-block');
  let descriptText =document.querySelector('.main__description-title');
  let iconProduct = document.querySelector('.main__icon-product');

  var width = typeof innerWidth === 'undefined' ? document.body.clientWidth : innerWidth;

function changeSize() {
let wid=screen.width; // ширина
console.log(wid);

if (992 > wid ) {
  iconProduct.classList.add('mobile');
  iconProduct.classList.remove('tablet');
  iconProduct.classList.remove('small-pc');
  descriptText.classList.add('mobile');
  descriptText.classList.remove('tablet');
  descriptText.classList.remove('small-pc');
} else if (1100 > wid ) {
  iconProduct.classList.remove('mobile');
  iconProduct.classList.add('tablet');
  iconProduct.classList.remove('small-pc');
  descriptText.classList.remove('mobile');
  descriptText.classList.add('tablet');
  descriptText.classList.remove('small-pc');
} else if (wid > 1100) {
  iconProduct.classList.remove('mobile');
  iconProduct.classList.remove('tablet');
  iconProduct.classList.add('small-pc');
  descriptText.classList.remove('mobile');
  descriptText.classList.remove('tablet');
  descriptText.classList.add('small-pc');
 }


for (var item of items){
  if (992 > wid ) {
    item.classList.add('mobile');
    item.classList.remove('tablet');
    item.classList.remove('small-pc');
  } else if (1100 > wid ) {
    item.classList.add('tablet');
    item.classList.remove('mobile');
    item.classList.remove('small-pc');
  } else if (wid > 1100) {
    item.classList.add('small-pc');
    item.classList.remove('tablet');
    item.classList.remove('mobile');  }
}
}
$(document).ready(changeSize);
$(window).resize(changeSize);
