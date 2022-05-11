window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.header__nav'),
    menuItem = document.querySelectorAll('.menu-element'),
    hamburger = document.querySelector('.hamburger')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active')
    menu.classList.toggle('active')
  })

  menuItem.forEach((item) => {
    item.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active')
      menu.classList.toggle('active')
    })
  })
})
