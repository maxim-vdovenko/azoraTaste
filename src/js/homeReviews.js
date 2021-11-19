const homeReviews = {
  bl: '.homeReviews',
  cont: '.homeReviews__cont',
  block: '.homeReviews__block',
  butt: '.homeReviews__button .button-more',
  time: 300
}

homeReviews.init = () => {

  $(homeReviews.bl).on('click', homeReviews.butt, e => {
    const th = $(e.currentTarget)

    if (th.hasClass('open')) {
      th.removeClass('open')
      th.parents(homeReviews.bl).find(homeReviews.cont).removeClass('open').animate({
        height: 360
      }, homeReviews.time)
    } else {
      const h = $(homeReviews.block).innerHeight()
      th.addClass('open')
      th.parents(homeReviews.bl).find(homeReviews.cont).addClass('open').animate({
        height: h
      }, homeReviews.time)
    }
  })
}
