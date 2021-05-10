let title = document.querySelector('.title-desc > h3')
let desc = document.querySelector('.title-desc > p')
let infosMap = document.querySelectorAll('.info-mode span')
let gameModes = document.querySelector('.game-modes')
let mapContent = document.querySelectorAll('.map-content')

const ARENA = {
   background: "url('images/game-modes/gamemodes-bg-arena.jpg')",
   title: 'Arena',
   description: 'Minions take center stage in the closed-off Colosseum of old. Defend your portal from minions and reign victorious!',
   infos: [
      { info: '5' },
      { info: '<b>15 Minutes</b>' },
      { info: 'Novice' }
   ]
}

const CONQUEST = {
   background: "url('images/game-modes/gamemodes-bg-conquest.jpg')",
   title: 'Conquest',
   description: 'The classic SMITE game mode. The ultimate test of skill, god mastery, and teamwork. Play 5v5 with a mission to destroy your opponents’ Titan, carefully navigating the map’s 3 lanes, enemy towers and phoenixes.',
   infos: [
      { info: '5' },
      { info: '<b>30 Minutes</b>' },
      { info: 'Experienced' }
   ]
}

const ASSAULT = {
   background: "url('images/game-modes/gamemodes-bg-assault.jpg')",
   title: 'Assault',
   description: 'Test your luck with Assault! A one lane, 5v5 mode with no jungle and a random God selection.',
   infos: [
      { info: '5' },
      { info: '<b>15-20 Minutes</b>' },
      { info: 'Moderate' }
   ]
}

const JOUST = {
   background: "url('images/game-modes/gamemodes-bg-joust.jpg')",
   title: 'Joust',
   description: 'Hone your MOBA skills in this one-lane, one-jungle map. Defend your base, and try to destroy your enemies’ Titan.',
   infos: [
      { info: '3' },
      { info: '<b>15 Minutes</b>' },
      { info: 'Novice' }
   ]
}

const SIEGE = {
   background: "url('images/game-modes/gamemodes-bg-siege.jpg')",
   title: 'Siege',
   description: 'Siege introduces a unique set of rules— kill minions and jungle camps to spawn Siege Juggernauts, large creatures who destroy your enemies’ towers, giving you the ultimate advantage!',
   infos: [
      { info: '4' },
      { info: '<b>15 Minutes</b>' },
      { info: 'Novice' }
   ]
}

const CLASH = {
   background: "url('images/game-modes/gamemodes-bg-clash.jpg')",
   title: 'Clash',
   description: 'As a small-scale skirmish of the gods, Clash features a dual-lane map with a small jungle and a camp in the center. Watch out for Apophis!',
   infos: [
      { info: '5' },
      { info: '<b>15 Minutes</b>' },
      { info: 'Novice' }
   ]
}

for(let i = 0; i < mapContent.length; i++){
   mapContent[i].addEventListener('click', e => {
      if(e.target.id == 'arena'){
         gameModes.style.backgroundImage = ARENA.background
         title.innerHTML = ARENA.title
         desc.innerHTML = ARENA.description
         infosMap.forEach((element, position) => {
            element.innerHTML = ARENA.infos[position].info
         })
      }else if(e.target.id == 'conquest'){
         gameModes.style.backgroundImage = CONQUEST.background
         title.innerHTML = CONQUEST.title
         desc.innerHTML = CONQUEST.description
         infosMap.forEach((element, position) => {
            element.innerHTML = CONQUEST.infos[position].info
         })
      }else if(e.target.id == 'assault'){
         gameModes.style.backgroundImage = ASSAULT.background
         title.innerHTML = ASSAULT.title
         desc.innerHTML = ASSAULT.description
         infosMap.forEach((element, position) => {
            element.innerHTML = ASSAULT.infos[position].info
         })
      }else if(e.target.id == 'joust'){
         gameModes.style.backgroundImage = JOUST.background
         title.innerHTML = JOUST.title
         desc.innerHTML = JOUST.description
         infosMap.forEach((element, position) => {
            element.innerHTML = JOUST.infos[position].info
         })
      }else if(e.target.id == 'siege'){
         gameModes.style.backgroundImage = SIEGE.background
         title.innerHTML = SIEGE.title
         desc.innerHTML = SIEGE.description
         infosMap.forEach((element, position) => {
            element.innerHTML = SIEGE.infos[position].info
         })
      }else if(e.target.id == 'clash'){
         gameModes.style.backgroundImage = CLASH.background
         title.innerHTML = CLASH.title
         desc.innerHTML = CLASH.description
         infosMap.forEach((element, position) => {
            element.innerHTML = CLASH.infos[position].info
         })
      }
   })
}



