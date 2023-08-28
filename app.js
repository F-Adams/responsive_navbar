const navButton = document.getElementsByClassName('navToggleButton')
const linkMenu = document.getElementsByClassName('navLinks')

navButton.addEventListener('click', () => {
    linkMenu.classList.toggle('active')
})