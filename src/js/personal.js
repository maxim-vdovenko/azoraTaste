const personal = {
  bl: '.personal',
  order: {
    box: '.personal__order-body-box',
    container: '.personal__order-container',
    image: '.personal__order-image',
    deployCont: '.deployBox__cont',
    deployVal: '.deployBox__value',
    time: 250
  },
  orderMobile: {
    col: '.personal__orderMobile-col',
    container: '.personal__orderMobile-container',
    cont: '.personal__orderMobile-cont',
    button: '.button-more',
    buttonNumber: '.button-more__show > b',
    time: 250
  }
}

personal.init = () => {
  personal.orderContainer()
  personal.orderContainerMobile()
}

personal.orderContainer = () => {
  const box = personal.order.box
  const container = personal.order.container
  const image = personal.order.image
  const deployCont = personal.order.deployCont
  const deployVal = personal.order.deployVal
  const time = personal.order.time
  
  $(container).each(index => {
    const number = Number($(container).eq(index).find(image).length)
    if (number)
    $(container).eq(index).parents(box).find(deployVal).text('+' + number)
  })

  $(personal.bl).on('click', box + ' ' + deployCont, e => {
    const th = $(e.currentTarget)
    if (th.parent().hasClass('active')) {
      th.parent().removeClass('active')
      th.parents(box).find(container).slideUp(time)
    } else {
      th.parent().addClass('active')
      th.parents(box).find(container).slideDown(time)
    }
  })
}

personal.orderContainerMobile = () => {
  const col = personal.orderMobile.col
  const container = personal.orderMobile.container
  const cont = personal.orderMobile.cont
  const buttonNumber = personal.orderMobile.buttonNumber
  const button = personal.orderMobile.button
  const time = personal.orderMobile.time

  $(container).each(index => {
    const number = Number($(container).eq(index).find(cont).length)
    if (number)
    $(container).eq(index).parents(col).find(buttonNumber).text(number)
  })

  $(personal.bl).on('click', col + ' ' + button, e => {
    const th = $(e.currentTarget)
    if (th.hasClass('open')) {
      th.removeClass('open')
      th.parents(col).find(container).slideUp(time)
    } else {
      th.addClass('open')
      th.parents(col).find(container).slideDown(time)
    }
  })
}
