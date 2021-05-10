let godImg = document.querySelector('.god-img')
let godName = document.querySelector('.god-name-h2')
let skillsImg = document.querySelectorAll('.skillImg')
let skills = document.querySelectorAll('.skills-content > span')
let smallGodContainer = document.querySelectorAll('.small-god-container')


const skillsName = {
   assassin: 'Assassin',
   celtic: 'Celtic',
   chinese: 'Chinese',
   control: 'Control',
   egyptian: 'Egyptian',
   greek: 'Greek',
   guardian: 'Guardian',
   hindu: 'Hindu',
   hunter: 'Hunter',
   mage: 'Mage',
   magical: 'Magical',
   melee: 'Melee',
   norse: 'Norse',
   physical: 'Physical',
   ranged: 'Ranged',
   warrior: 'Warrior'
}
const skillsIcon = {
   assassinIcon: 'images/icons/assassin.png',
   celticIcon: 'images/icons/celtic.png',
   chineseIcon: 'images/icons/chinese.png',
   controlIcon: 'images/icons/control.png',
   egyptianIcon: 'images/icons/egyptian.png',
   greekIcon: 'images/icons/greek.png',
   guardianIcon: 'images/icons/guardian.png',
   hinduIcon: 'images/icons/hindu.png',
   hunterIcon: 'images/icons/hunter.png',
   mageIcon: 'images/icons/mage.png',
   magicalIcon: 'images/icons/magical.png',
   meleeIcon: 'images/icons/melee.png',
   norseIcon: 'images/icons/norse.png',
   physicalIcon: 'images/icons/physical.png',
   rangedIcon: 'images/icons/ranged.png',
   warriorIcon: 'images/icons/warrior.png'
}
const {assassinIcon, celticIcon, chineseIcon, controlIcon, egyptianIcon, greekIcon, guardianIcon, hinduIcon, hunterIcon, mageIcon, magicalIcon, meleeIcon, norseIcon, physicalIcon, rangedIcon, warriorIcon} = skillsIcon

const {assassin, celtic, chinese, control, egyptian, greek, guardian, hindu, hunter, mage, magical, melee, norse, physical, ranged, warrior} = skillsName


// Gods show display
const ZEUS = {
   name: 'Zeus <span><br>God of the sky</span>',
   image: 'images/gods-preview/zeus.png',
   skills:[
      {skill: greek},
      {skill: mage},
      {skill: magical},
      {skill: ranged}
   ],
   skillsIcon: [
      {skillIcon: greekIcon},
      {skillIcon: mageIcon},
      {skillIcon: magicalIcon},
      {skillIcon: rangedIcon}
   ]
}
const MORRIGAN = {
   name: 'The Morrigan <span><br>Phantom Queen</span>',
   image: 'images/gods-preview/themorrigan.png',
   skills: [
      {skill: celtic},
      {skill: mage},
      {skill: magical},
      {skill: ranged}
   ],
   skillsIcon:[
      {skillIcon: celticIcon},
      {skillIcon: mageIcon},
      {skillIcon: magicalIcon},
      {skillIcon: rangedIcon}
   ]
}
const CERNUNNOS = {
   name: 'Cernunnos <span><br>The Horned God</span>',
   image: 'images/gods-preview/cernnunos.png',
   skills: [
      {skill: celtic},
      {skill: hunter},
      {skill: physical},
      {skill: ranged}
   ],
   skillsIcon:[
      {skillIcon: celticIcon},
      {skillIcon: hunterIcon},
      {skillIcon: physicalIcon},
      {skillIcon: rangedIcon}
   ]
}
const NEITH = {
   name: 'Neith <span><br>Weaver of Fate</span>',
   image: 'images/gods-preview/neith-2-1-1.png',
   skills: [
      {skill: egyptian},
      {skill: hunter},
      {skill: physical},
      {skill: ranged}
   ],
   skillsIcon: [
      {skillIcon: egyptianIcon},
      {skillIcon: hunterIcon},
      {skillIcon: physicalIcon},
      {skillIcon: rangedIcon}
   ]
}
const YMIR = {
   name: 'Ymir <span><br>Father of the Frost Giants</span>',
   image: 'images/gods-preview/ymir.png',
   skills: [
      {skill: norse},
      {skill: guardian},
      {skill: magical},
      {skill: melee}
   ],
   skillsIcon: [
      {skillIcon: norseIcon},
      {skillIcon: guardianIcon},
      {skillIcon: magicalIcon},
      {skillIcon: meleeIcon}
   ]
}
const GANESHA = {
   name: 'Ganesha <span><br>God of Success</span>',
   image: 'images/gods-preview/ganesha.webp',
   skills: [
      {skill: hindu},
      {skill: guardian},
      {skill: magical},
      {skill: melee}
   ],
   skillsIcon: [
      {skillIcon: hinduIcon},
      {skillIcon: guardianIcon},
      {skillIcon: magicalIcon},
      {skillIcon: meleeIcon}
   ]
}
const DAJI = {
   name: 'Da Ji <span><br>The Nine-Tailed Fox</span>',
   image: 'images/gods-preview/daji.png',
   skills: [
      {skill: chinese},
      {skill: assassin},
      {skill: physical},
      {skill: melee}
   ],
   skillsIcon: [
      {skillIcon: chineseIcon},
      {skillIcon: assassinIcon},
      {skillIcon: physicalIcon},
      {skillIcon: meleeIcon}
   ]
}
const GUANYU = {
   name: 'Guan Yu <span><br>Saint of War</span>',
   image: 'images/gods-preview/guan.png',
   skills: [
      {skill: chinese},
      {skill: warrior},
      {skill: physical},
      {skill: melee}
   ],
   skillsIcon: [
      {skillIcon: chineseIcon},
      {skillIcon: warriorIcon},
      {skillIcon: physicalIcon},
      {skillIcon: meleeIcon}
   ]
}
const CHULAINN = {
   name: 'Cu Chulainn <span><br>Hound of Ulster</span>',
   image: 'images/gods-preview/cuchulainn.png',
   skills: [
      {skill: celtic},
      {skill: warrior},
      {skill: physical},
      {skill: melee}
   ],
   skillsIcon: [
      {skillIcon: celticIcon},
      {skillIcon: warriorIcon},
      {skillIcon: physicalIcon},
      {skillIcon: meleeIcon}
   ]
}
const RA = {
   name: 'Ra <span><br>Sun God</span>',
   image: 'images/gods-preview/ra.png',
   skills: [
      {skill: egyptian},
      {skill: mage},
      {skill: magical},
      {skill: ranged}
   ],
   skillsIcon: [
      {skillIcon: egyptianIcon},
      {skillIcon: mageIcon},
      {skillIcon: magicalIcon},
      {skillIcon: rangedIcon}
   ]
}

// Adds information about the selected God, such as name, skills, etc.
for(let i = 0; i < smallGodContainer.length; i++){
   smallGodContainer[i].addEventListener('click', (e) => {
      if(e.target.id == 'zeus'){
         godName.innerHTML = ZEUS.name
         godImg.src = ZEUS.image
         skillsImg.forEach((element, position) => {
            element.src = ZEUS.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = ZEUS.skills[position].skill
         })

      }else if(e.target.id == 'morrigan'){
         godImg.src = MORRIGAN.image
         godName.innerHTML = MORRIGAN.name

         skillsImg.forEach((element, position) => {
            element.src = MORRIGAN.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = MORRIGAN.skills[position].skill
         })

      }else if(e.target.id == 'cernnunos'){
         godName.innerHTML = CERNUNNOS.name
         godImg.src = CERNUNNOS.image
         
         skillsImg.forEach((element, position) => {
            element.src = CERNUNNOS.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = CERNUNNOS.skills[position].skill
         })

      }else if(e.target.id == 'neith'){
         godImg.src = NEITH.image
         godName.innerHTML = NEITH.name
         
         skillsImg.forEach((element, position) => {
            element.src = NEITH.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = NEITH.skills[position].skill
         })

      }else if(e.target.id == 'ymir'){
         godName.innerHTML = YMIR.name
         godImg.src = YMIR.image
         
         skillsImg.forEach((element, position) => {
            element.src = YMIR.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = YMIR.skills[position].skill
         })

      }else if(e.target.id == 'ganesha'){
         godImg.src = GANESHA.image
         godName.innerHTML = GANESHA.name
         
         skillsImg.forEach((element, position) => {
            element.src = GANESHA.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = GANESHA.skills[position].skill
         })

      }else if(e.target.id == 'daji'){
         godName.innerHTML = DAJI.name
         godImg.src = DAJI.image
         
         skillsImg.forEach((element, position) => {
            element.src = DAJI.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = DAJI.skills[position].skill
         })

      }else if(e.target.id == 'guanyu'){
         godImg.src = GUANYU.image
         godName.innerHTML = GUANYU.name
         
         skillsImg.forEach((element, position) => {
            element.src = GUANYU.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = GUANYU.skills[position].skill
         })

      }else if(e.target.id == 'chulainn'){
         godName.innerHTML = CHULAINN.name
         godImg.src = CHULAINN.image
         
         skillsImg.forEach((element, position) => {
            element.src = CHULAINN.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = CHULAINN.skills[position].skill
         })

      }else if(e.target.id == 'ra'){
         godImg.src = RA.image
         godName.innerHTML = RA.name
         
         skillsImg.forEach((element, position) => {
            element.src = RA.skillsIcon[position].skillIcon
         })
         skills.forEach((element, position) =>  {
            element.innerHTML = RA.skills[position].skill
         })
      }
   })
}