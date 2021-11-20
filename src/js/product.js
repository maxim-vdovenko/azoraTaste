const product = {
  slider: '.product__slider'
}

product.init = () => {
 
  $(product.slider).slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    cssEase: 'ease-in-out',
    draggable: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          arrows: true,
          adaptiveHeight: true,
          speed: 350
        }
      }
    ]
  })
}
