const header = {
  logo: '.header .logo',
  navMobile: '.header__navMobile',
  menuMobile: '.header__menuMobile',
  basket: '.header__basket',
  navBasket: '.header__basketNav',
  navBasketLink: '.header__basketNav-link',
  navBasketButt: '.header__basketNav-button',
  user: '.header__user',
  time: 200
}

header.init = () => {
  const options = {}
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
  $(header.basket).addClass('active').fadeIn(header.time)
  animations.headerBasketFn()
  
  if (window.innerWidth <= screen.lg) {
    $(header.navMobile).fadeOut(header.time)
  }
}

header.basketClose = () => {
  $(header.basket).removeClass('active').fadeOut(header.time)
  if (window.innerWidth <= screen.lg) {
    $(header.navMobile).fadeIn(header.time)
  }
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
  $(header.menuMobile).addClass('active')
  $(header.navMobile).addClass('active')
  $(header.logo).addClass('openMenu')
  $(header.user).addClass('openMenu')
  $(header.navBasket).addClass('openMenu')
  $('body').addClass('activeMobileMenu')
  window.scrollTo(0, 0)
}

header.menuClose = () => {
  $(header.menuMobile).removeClass('active')
  $(header.menuMobile).fadeOut(250, () => {
    $('body').removeClass('activeMobileMenu')
  })
  $(header.navMobile).removeClass('active')
  $(header.logo).removeClass('openMenu')
  $(header.user).removeClass('openMenu')
  $(header.navBasket).removeClass('openMenu')
}
