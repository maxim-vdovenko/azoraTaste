const header = {
  logo: '.header .logo',
  navMobile: '.header__navMobile',
  menuMobile: '.header__menuMobile',
  basket: '.header__basket',
  navBasket: '.header__basketNav',
  navBasketLink: '.header__basketNav-link',
  navBasketButt: '.header__basketNav-button',
  user: '.header__user'
}

header.init = () => {
  const options = {
    // damping: 0.2,
    // thumbMinSize: 20,
    // renderByPixels: true,
    // alwaysShowTracks: true,
    // continuousScrolling: true
  }
  Scrollbar.init(document.querySelector('.header__basket-cont'), options)

  header.menuEvents()
  header.basketEvents()
}

header.basketEvents = () => {
  $('body').on('mouseenter', header.navBasketLink, () => {
    if (!$(header.basket).hasClass('active')) {
      header.basketOpen()
    }
  })

  $('body').on('mouseleave', header.basket, () => {
    if ($(header.basket).hasClass('active')) {
      header.basketClose()
    }
  })

  $('body').on('click', header.navBasketButt, () => {
    if ($(header.basket).hasClass('active')) {
      header.basketClose()
    } else {
      header.basketOpen()

      if ($(header.navMobile).hasClass('active'))
      header.menuClose()
    }
  })
}

header.basketOpen = () => {
  $(header.basket).addClass('active').fadeIn(200)
  $(header.navMobile).fadeOut(200)
}

header.basketClose = () => {
  $(header.basket).removeClass('active').fadeOut(200)
  $(header.navMobile).fadeIn(200)
}

header.menuEvents = () => {
  $('body').on('click', header.navMobile, e => {
    const th = $(e.currentTarget)
    if (th.hasClass('active'))
    header.menuClose()
    else 
    header.menuOpen()
  })
}

header.menuOpen = () => {
  $(header.menuMobile).fadeIn(250)
  $(header.navMobile).addClass('active')
  $(header.logo).addClass('openMenu')
  $(header.user).addClass('openMenu')
  $(header.navBasket).addClass('openMenu')
  $('body').addClass('activeMobileMenu')
  window.scrollTo(0, 0)
}

header.menuClose = () => {
  $(header.menuMobile).fadeOut(250, () => {
    $('body').removeClass('activeMobileMenu')
  })
  $(header.navMobile).removeClass('active')
  $(header.logo).removeClass('openMenu')
  $(header.user).removeClass('openMenu')
  $(header.navBasket).removeClass('openMenu')
}
