const catalog = {
  bl: '.catalog',
  dropdown: {
    bl: '.catalog__dropdown',
    title: '.catalog__dropdown-title',
    cont: '.catalog__dropdown-cont',
    contBlock: '.catalog__dropdown-contBlock',
    time: 200
  },
  filterSlider: {
    title: '.catalog__filterSlider-title > span',
    cont: '.catalog__filterSlider-cont',
    time: 200
  }
}

catalog.init = () => {
  catalog.filterEvents()
}

catalog.initScrollbar = (block) => {
  const options = {
    renderByPixels: true,
    alwaysShowTracks: false,
    continuousScrolling: true
  }
  Scrollbar.init(block[0], options)
}

catalog.filterEvents = () => {
  const bl = catalog.dropdown.bl
  const title = catalog.dropdown.title
  const cont = catalog.dropdown.cont
  const contBlock = catalog.dropdown.contBlock
  const time = catalog.dropdown.time

  $('body').on('click', e => {
    if (!$(bl).is(e.target) && $(bl).has(e.target).length === 0) {
      $(bl).removeClass('active').find(cont).slideUp(time)
    }
  })

  $(catalog.bl).on('click', title, e => {
    const th = $(e.currentTarget)
    if (th.parents(bl).hasClass('active')) {
      th.parents(bl).removeClass('active').find(cont).slideUp(time)
    } else {
      $(bl).removeClass('active').find(cont).slideUp(time)
      th.parents(bl).addClass('active').find(cont).slideDown(time, () => {
        if (!th.parents(bl).find(contBlock).attr('data-scrollbar')) {
          setTimeout(() => {
            catalog.initScrollbar(th.parents(bl).find(contBlock))
          }, 1)
        } 
      })
    }
  })

  $(catalog.bl).on('click', catalog.filterSlider.title, e => {
    const th = $(e.currentTarget).parent()
    if (th.hasClass('active')) {
      th.removeClass('active')
      th.next().slideUp(catalog.filterSlider.time)
    } else {
      th.addClass('active')
      th.next().slideDown(catalog.filterSlider.time)
    }
  })
}
