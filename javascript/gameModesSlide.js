let sliderImg = document.querySelector('.map-content-img-mobile');
let images = ['gamemode-tile-arena.jpg', 'gamemode-tile-conquest.jpg', 'gamemode-tile-assault.jpg', 'gamemode-tile-joust.jpg','gamemode-tile-siege.jpg', 'gamemode-tile-clash.jpg'];
let text = document.querySelector('.text') 

let i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();
}
function next(){
	if(i >= images.length-1)i = -1;
	i++;
	return setImg();
}

function setImg(){
	if(images[i] == 'gamemode-tile-arena.jpg'){
		text.innerHTML = 'Arena'
	}else if(images[i] == 'gamemode-tile-conquest.jpg'){
		text.innerHTML = 'Conquest'
	}else if(images[i] == 'gamemode-tile-assault.jpg'){
		text.innerHTML = 'Assault'
	}else if(images[i] == 'gamemode-tile-joust.jpg'){
		text.innerHTML = 'Joust'
	}else if(images[i] == 'gamemode-tile-siege.jpg'){
		text.innerHTML = 'Siege'
	}else if(images[i] == 'gamemode-tile-clash.jpg'){
		text.innerHTML = 'Clash'
	}
	return sliderImg.src = "images/game-modes/"+images[i];
}