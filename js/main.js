const swiper = new Swiper('.product-content_sliders', {
  // pagination: {
  //   el: '.swiper-pagination',
  //   clickable: true,
  // },
  navigation: {
    nextEl: '.product-content_head-pagination_right',
    prevEl: '.product-content_head-pagination_left',
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

