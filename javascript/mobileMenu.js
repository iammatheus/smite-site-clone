let burguerContainer = document.querySelector('.burguer-container')
let burguerTopLeft = document.querySelector('.burguer-top-left')
let burguerTopRight = document.querySelector('.burguer-top-right')
let burguerCenter = document.querySelector('.burguer-center')
let burguerBottomLeft = document.querySelector('.burguer-bottom-left')
let burguerBottomRight = document.querySelector('.burguer-bottom-right')
let menuMobile = document.querySelector('.menu-mobile')


function addTransform(){
   burguerCenter.style.display = 'none';
   burguerTopLeft.style.transform = 'rotate(40deg) translate(0px, -3px)'
   burguerTopRight.style.transform = 'rotate(-40deg) translate(1px, -2px)'
   burguerBottomLeft.style.transform = 'rotate(-40deg) translate(3px, 0px)'
   burguerBottomRight.style.transform = 'rotate(40deg) translate(-2px, -1px)'
   burguerContainer.classList.add('active-burguer')
   burguerContainer.classList.remove('desactive-burguer')
   menuMobile.style.left = '0%'
}

function removeTransform(){
   burguerCenter.style.display = 'block';
   burguerTopLeft.style.transform = 'none'
   burguerTopRight.style.transform = 'none'
   burguerBottomLeft.style.transform = 'none'
   burguerBottomRight.style.transform = 'none'
   burguerContainer.classList.add('desactive-burguer')
   burguerContainer.classList.remove('active-burguer')
   menuMobile.style.left = '-100%'
}

burguerContainer.addEventListener('click', () => {
   if(burguerContainer.classList.contains('desactive-burguer')){
      addTransform()
   }else if(burguerContainer.classList.contains('active-burguer')){
      removeTransform()
   }
})
