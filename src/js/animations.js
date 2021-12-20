const animations = {
  classAdd: 'animation',
  controller: null,
  title: {
    bl: '.title'
  },
  common: [
    ['.title', 90],
    ['.header', 100],
    ['.mainPreview__block-button', 100, 0],
    ['.mainPreview__fon-desk', 30, 0],
    ['.mainPreview__block-bottom .patterns__box', 100, 0],
    ['.mainPreview__block-text', 100, 0],
    ['.homeCatalog__box', 50, 0],
    ['.homeCatalog__button', 100, 0],
    ['.homeReviews__box', 80, 0],
    ['.donateSet__img', 50, 0],
    ['.donateSet__description', 90, 0],
    ['.donateSet__button', 90, 0],
    ['.footer__col', 60, 0],
    ['.catalog__text', 90, 0],
    ['.catalog__filters', 90, 0],
    ['.catalog__cont', 0, 0],
    ['.catalog__item', 30, 0],
    ['.product__slider .slick-list', 50],
    ['.product__infoImg', 30],
    ['.footer .patterns__box', 80, 0]
  ]
}

animations.init = () => {
  animations.titleFn()
  animations.commonFn()
}

animations.act = function(block, height, delay) {
  this.controller = new ScrollMagic.Controller()

  const h = $(block).outerHeight() / (100 / height)
  const scene = new ScrollMagic.Scene({
    triggerElement: block, 
    triggerHook: 'onEnter',
    offset: h})
    .setTween(block)
    .addTo(this.controller)

  scene.on('enter', () => {
    if (!delay) {
      $(block).addClass(this.classAdd)
    } else {
      setTimeout(() => {
        $(block).addClass(this.classAdd)
      }, delay)
    }
  })
}

animations.titleFn = function() {
  const title = $(this.title.bl)

  title.each(index => {
    const el = title.eq(index)
    const teg = el.find('h1, h2')
    const texts = teg.html()
    const htmlTexts = []
    const interval = 30
    let delay = 0
  
    el.attr('data-html', el.html())
    el.empty()

    for (let a = 0; a < texts.length; a++) {
      
      if (a === 0) {
        htmlTexts.push('<span>')
      } 

      if (texts[a] === ' ') {
        htmlTexts.push('</span><span>')
      } else {

        if (texts[a] === '<' && texts[a + 2] === '>') { 
          a = a + 2
          htmlTexts.push('<b>')
          continue
        }

        if (texts[a] === '<' && texts[a + 3] === '>') { 
          a = a + 3
          htmlTexts.push('</b>')
          continue
        }

        delay = delay + interval
        htmlTexts.push('<i style="transition-delay: ' + delay + 'ms">' + texts[a] + '</i>')
      }

      if (a === texts.length - 1) {
        htmlTexts.push('</span>')
      } 
    }

    el.append(htmlTexts.join(''))  
  })
}

animations.commonFn = function() {
  this.common.forEach(item => {
    if (!$(item[0]).length) return

    if ($(item[0]).length <= 1) {
      animations.act(item[0], item[1], item[2])
    } else {
      $(item[0]).map(index => {
        const classAdd =  item[0].substring(item[0].lastIndexOf('.') + 1) + '--' + index
        $(item[0]).eq(index).addClass(classAdd)
        animations.act(item[0] + '.' + classAdd, item[1], item[2])
      })
    }
  })
}
