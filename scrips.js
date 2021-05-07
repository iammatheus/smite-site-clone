let more_icon = document.querySelector('.material-icons')
let more = document.querySelector('.more')
let dropdown = document.querySelector('.dropdown')


more.addEventListener('mouseover', () => {
   dropdown.style.display = 'flex'
   dropdown.style.opacity = 1
   more_icon.style.transform = 'rotate(0deg)'
})
more.addEventListener('mouseout', () => {
   dropdown.style.display = 'none'
   dropdown.style.opacity = 0
   more_icon.style.transform = 'rotate(180deg)'
})
dropdown.addEventListener('mouseover', () => {
   dropdown.style.display = 'flex'
   dropdown.style.opacity = 1
   more_icon.style.transform = 'rotate(0deg)'
})
dropdown.addEventListener('mouseout', () => {
   dropdown.style.display = 'none'
   dropdown.style.opacity = 0
   more_icon.style.transform = 'rotate(180deg)'
})