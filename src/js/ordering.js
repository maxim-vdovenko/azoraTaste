const ordering = {
  bl: '.ordering',
  delivery: {
    box: '.ordering__delivery-box',
    radio: '.ordering__delivery-box .radio label'
  }
}

ordering.init = () => {
  ordering.orderingBox()
}

ordering.orderingBox = () => {
  $(ordering.bl).on('click', ordering.delivery.radio, e => {
    const th = $(e.currentTarget)
    $(ordering.delivery.box).removeClass('active')
    th.parents(ordering.delivery.box).addClass('active')
  })
}
