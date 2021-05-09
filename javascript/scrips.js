let more_icon = document.querySelector('.material-icons')
let more = document.querySelector('.more')
let dropdown = document.querySelector('.dropdown')
let smallGodContainerScale = document.querySelectorAll('.small-god-container-scale')
let smallButtonContainer = document.querySelector('.small-button-container')


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


//Small Gods - Adding scale to the image when moving and removing the scale when clicking
for(let i = 0; i < smallGodContainerScale.length; i++){
   smallGodContainerScale[0].classList.add('small-god-border')
   smallGodContainerScale[i].onclick = function(){

      let el = smallGodContainerScale[0];
      while(el){
         if(el.tagName === 'DIV'){
            el.classList.remove('small-god-border');
            el.classList.add('small-god-container-scale');
         }
         el = el.nextSibling;
      } 

      this.classList.add('small-god-border');
      this.classList.remove('small-god-container-scale');
      smallButtonContainer.classList.remove('small-god-container-scale')
   }
}