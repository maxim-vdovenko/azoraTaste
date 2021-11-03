const addition = {
  bl: '.addition',
  value: '.addition__value',
  minus: '.addition__minus',
  plus: '.addition__plus'
}

addition.init = () => {
  document.querySelectorAll(addition.bl).forEach(element => {
    const val = element.querySelector(addition.value)
    const minus = element.querySelector(addition.minus)
    const plus = element.querySelector(addition.plus)

    minus.addEventListener('click', () => {
      if (element.classList.contains('active')) {
        const num = Number(val.innerText)
        if (num > 1) {
          val.innerText = Number(val.innerText) - 1
        } else {
          element.classList.remove('active')
        }
      }
    })

    plus.addEventListener('click', () => {
      if (!element.classList.contains('active')) {
        element.classList.add('active')
        val.innerText = 1
      } else {
        val.innerText = Number(val.innerText) + 1
      }
    })
  })
}


const counter = {
  bl: '.counter',
  value: '.counter__input',
  minus: '.counter__minus',
  plus: '.counter__plus'
}

counter.init = () => {
  document.querySelectorAll(counter.bl).forEach(element => {
    const val = element.querySelector(counter.value)
    const minus = element.querySelector(counter.minus)
    const plus = element.querySelector(counter.plus)

    val.addEventListener('keyup', e => {
      const textVal = e.target.value 
      e.target.value = textVal.replace (/\D/, '')
    })

    minus.addEventListener('click', () => {
      const num = Number(val.value)
      if (num && num > 1) val.value = num - 1
    })

    plus.addEventListener('click', () => {
      const num = Number(val.value)
      if (num) val.value = num + 1
    })
  })
}
