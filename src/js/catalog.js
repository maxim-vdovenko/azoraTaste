const catalog = {
  bl: '.catalog',
  dropdown: {
    bl: '.catalog__dropdown',
    blType: '.catalog__dropdown--type',
    blRegion: '.catalog__dropdown--region',
    blSorting: '.catalog__dropdown--sorting',
    blMobile: '.catalog__dropdown--mobile',
    title: '.catalog__dropdown-title',
    sliderTitle: '.catalog__filterSlider-title',
    cont: '.catalog__dropdown-cont',
    sliderCont: '.catalog__filterSlider-cont',
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

  const titleButt = catalog.dropdown.blType + ' .checkbox label' 
                  + ', ' 
                  + catalog.dropdown.blRegion + ' .checkbox label'

  $(catalog.bl).on('click', titleButt, e => {
    const th = $(e.currentTarget)

    setTimeout(() => {
      const number = th.parents(catalog.dropdown.contBlock).find('.checkbox input:checked').length 
      const title = th.parents(catalog.dropdown.bl).find(catalog.dropdown.title)

      if (!number) {
        title.find('b').remove()
        return
      }

      if (!title.find('b').length) title.append('<b>(' + number + ')</b>')
      else title.find('b').text('(' + number + ')')
    }, 10)
  })

  $(catalog.bl).on('click', catalog.dropdown.blSorting + ' .radio-checkbox label', e => {
    const th = $(e.currentTarget)
    const name = th.attr('data-sorting-name');
    th.parents(catalog.dropdown.bl).find(catalog.dropdown.title).text(name)
  })

  $(catalog.bl).on('click', catalog.dropdown.blMobile + ' .checkbox label', e => {
    const th = $(e.currentTarget)

    setTimeout(() => {
      const number = th.parents(catalog.dropdown.sliderCont).eq(0).find('.checkbox input:checked').length 
      const numberCont = th.parents(catalog.dropdown.sliderCont).eq(1).find('.checkbox input:checked').length
      const numberTotal = th.parents(catalog.dropdown.cont).eq(0).find('.checkbox input:checked').length

      const title = th.parents(catalog.dropdown.sliderCont).eq(0).prev(catalog.dropdown.sliderTitle).find('span')
      const titleCont = th.parents(catalog.dropdown.sliderCont).eq(1).prev(catalog.dropdown.sliderTitle).find('span')
      const titleTotal = th.parents(catalog.dropdown.cont).eq(0).prev(catalog.dropdown.title)

      if (!number) {
        title.find('b').remove()
      } else {
        if (!title.find('b').length) title.append('<b>(' + number + ')</b>')
        else title.find('b').text('(' + number + ')')
      }

      if (!numberCont) {
        titleCont.find('b').remove()
      } else {
        if (!titleCont.find('b').length) titleCont.append('<b>(' + numberCont + ')</b>')
        else titleCont.find('b').text('(' + numberCont + ')')
      }

      if (!numberTotal) {
        titleTotal.find('b').remove()
      } else {
        if (!titleTotal.find('b').length) titleTotal.append('<b>(' + numberTotal + ')</b>')
        else titleTotal.find('b').text('(' + numberTotal + ')')
      }
    }, 10)
  })
}
