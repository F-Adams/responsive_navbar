const navButton = document.getElementsByClassName('navToggleButton')[0]
const linkMenu = document.getElementsByClassName('navLinks')[0]

navButton.addEventListener('click', () => {
    linkMenu.classList.toggle('active')
})