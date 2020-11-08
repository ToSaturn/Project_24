  let item = document.querySelector('main');



  var width = typeof innerWidth === 'undefined' ? document.body.clientWidth : innerWidth;
  if (992 > width > 768) {
    item.classList.add('mobile');
  } else if (1100 > width > 992) {
    item.classList.add('tablet');
  } else if (width > 1100) {
    item.classList.add('small-pc');
  }
