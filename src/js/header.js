const header = {
  navMobile: '.header__navMobile',
  menuMobile: '.header__menuMobile',
  basket: '.header__basket',
  navBasketLink: '.header__basketNav-link'
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

  header.openMenu()
  header.openBasket()
}

header.openBasket = () => {
  const linkButt = document.querySelector(header.navBasketLink)
  const basket = document.querySelector(header.basket)
  let setTim = null;

  linkButt.addEventListener('mouseenter', () => {
    if (!basket.classList.contains('active')) {
      clearTimeout(setTim)
      basket.classList.add('active')

      setTimeout(() => {
        basket.classList.add('visible')
      }, 10)
    }
  })

  basket.addEventListener('mouseleave', () => {
    if (basket.classList.contains('active')) {
      basket.classList.remove('visible')

      setTim = setTimeout(() => {
        basket.classList.remove('active')
      }, 200)
    }
  })
}

header.openMenu = () => {
  const body = document.querySelector('body')
  const nav = document.querySelector(header.navMobile)
  const menuMobile = document.querySelector(header.menuMobile)
  let setTim = null;

  nav.addEventListener('click', () => {

    if (nav.classList.contains('active')) {
      nav.classList.remove('active')
      menuMobile.classList.remove('visible')

      setTim = setTimeout(() => {
        menuMobile.classList.remove('active')
        body.classList.remove('activeMobileMenu')
      }, 250)

    } else {
      clearTimeout(setTim)
      nav.classList.add('active')
      menuMobile.classList.add('active')

      setTimeout(() => {
        menuMobile.classList.add('visible')
        body.classList.add('activeMobileMenu')
        window.scrollTo(0, 0);
      }, 1)
    }
  })
}
