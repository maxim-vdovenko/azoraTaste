const homeReviews = {
  bl: '.homeReviews',
  cont: '.homeReviews__cont',
  block: '.homeReviews__block',
  butt: '.homeReviews__button .button-more',
  time: 300
}

homeReviews.init = () => {
  homeReviews.more()
  homeReviews.title()
}

homeReviews.more = () => {
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
      }, homeReviews.time, () => {
        th.parents(homeReviews.bl).find(homeReviews.cont).height('auto')
      })
    }
  })
}

homeReviews.title = () => {
  const bl = $('.homeReviews')
  const title = $('.homeReviews__title')
  const col = $('.homeReviews__col:nth-child(1)')

  if (!title.length) return

  scroll() 
  resize()

  $(window).on('resize', () => {
    resize()
  })
  
  $(window).on('scroll', () => {
    scroll()
  })

  function resize() {
    if (screen.lg > $(window).width()) {
      title.removeClass('fixTop absBottom')
    }
  }

  function scroll() {
    if (screen.lg < $(window).width()) {
      const yScroll = $(window).scrollTop()
      const titleOffsetTop = col.offset().top
      const if_before = yScroll < titleOffsetTop
      const if_after = yScroll > (titleOffsetTop + bl.outerHeight()) - title.outerHeight()
  
      if (if_before) 
      title.removeClass('fixTop').removeClass('absBottom')
      
      if (!if_before && !if_after) 
      title.removeClass('absBottom').addClass('fixTop')
      
      if (if_after) 
      title.removeClass('fixTop').addClass('absBottom')
    } else {
      title.removeClass('fixTop absBottom')
    }
  }
}
