const product = {
  bl: '.product',
  slider: '.product__slider',
  sliderImg: '.product__slider-img'
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
          speed: 350
        }
      }
    ]
  })

  $(product.bl).on('click', product.sliderImg, () => {
    $(product.slider).slick('slickNext')
  })
}
