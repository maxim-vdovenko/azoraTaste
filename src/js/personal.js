const personal = {
  bl: '.personal',
  order: {
    box: '.personal__order-body-box',
    container: '.personal__order-container',
    image: '.personal__order-image',
    deployCont: '.deployBox__cont',
    deployVal: '.deployBox__value',
    time: 250
  }
}

personal.init = () => {
  personal.orderContainer()
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
