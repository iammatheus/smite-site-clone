let more_icon = document.querySelector('.material-icons')
let more = document.querySelector('.more')
let dropdown = document.querySelector('.dropdown')
let smallGodContainerScale = document.querySelectorAll('.small-god-container-scale')
let smallButtonContainer = document.querySelector('.small-button-container')
let smallGodImg = document.querySelectorAll('.small-god-img')
let backTop = document.querySelector('.top')

//Rotate arrow icon in menu more
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
// Scroll top 
function scrollTop(event){
   event.preventDefault()
   const element = event.target
   const id = element.getAttribute('href')
   const to = document.querySelector(id).offsetTop

   window.scroll({
      top: to,
      behavior: "smooth"
   })
}
backTop.addEventListener('click', scrollTop)

//Small Gods - Adding scale to the image when moving and removing the scale when clicking
for(let i = 0; i < smallGodContainerScale.length; i++){
   smallGodContainerScale[0].classList.add('active')
   smallGodContainerScale[0].classList.remove('small-god-container-scale')
   smallGodContainerScale[i].onclick = function(){

      let el = smallGodContainerScale[0];
      while(el){
         if(el.tagName === 'DIV'){
            el.classList.remove('active');
            el.classList.add('small-god-container-scale');
         }
         el = el.nextSibling;
      } 

      this.classList.remove('small-god-container-scale');
      this.classList.add('active')
      smallButtonContainer.classList.remove('small-god-container-scale')
   }
}