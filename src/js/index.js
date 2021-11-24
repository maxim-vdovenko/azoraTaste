document.addEventListener('DOMContentLoaded', () => {
  let Scrollbar = window.Scrollbar;
  os.init()
  homeReviews.init()
  counter.init()
  addition.init()
  header.init()
  catalog.init()
  product.init()
  personal.init()
  ordering.init()
})

const screen = {
  xl: 1180,
  lg: 890,
  md: 768,
  sm: 640,
  xs: 500
}

const os = {
  class: 'ios'
}

os.init = () => {
  if (os.detect() === 'MacOS' || os.detect() === 'iOS') {
    $('body').addClass(os.class)
  }
}

os.detect = () => { 
  const platform = navigator.platform.toLowerCase(),
      iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch']

  if (platform.includes('mac')) return 'MacOS'
  if (iosPlatforms.includes(platform)) return 'iOS'
  if (platform.includes('win')) return 'Windows'
  if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android'
  if (/linux/.test(platform)) return 'Linux'

  return 'unknown'
}
