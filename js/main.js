const swiper = new Swiper('.product-content_sliders', {
  navigation: {
    nextEl: '.product-content_head-pagination_right',
    prevEl: '.product-content_head-pagination_left',
  },
});

const swiperTwo = new Swiper('.customer-content_sliders', {
  // slidesPerView: 2,
  pagination: {
    el: '.customer-content_sliders-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.customer-content_sliders-navigation_right',
    prevEl: '.customer-content_sliders-navigation_left',
  },
});


document.querySelectorAll('.price-content_top-item_plus').forEach(e=>{
  e.addEventListener('mouseover',function(){
    this.getElement('price-content_top-item_names').classList.add('price-content_top-item_names-active')
  })
  e.addEventListener('mouseout',function(){
    this.getElement('price-content_top-item_names').classList.remove('price-content_top-item_names-active')
  })
})

