var img = [
  {
    "image":"./images/Age of Drakkon.png"
  },
  {
    "image":"./images/CHERNOBYL wallpaper.png"
  },
  {
    "image":"./images/constantine2.png"
  },
  {
    "image":"./images/Doomsday Doom Poster.png"
  },
  {
    "image":"./images/doomsday still.png"
  },
  {
    "image":"./images/ittefaq2.png"
  },
  {
    "image":"./images/keeper of time.png"
  },
  {
    "image":"./images/Knight rider Black Squad.png"
  },
  {
    "image":"./images/matrix5 iteration of maya.png"
  },
  {
    "image":"./images/POPWW rebuild.png"
  },
  {
    "image":"./images/Prisoner of war Tony.png"
  },
  {
    "image":"./images/Shattered-grid-wall.png"
  },
  {
    "image":"./images/Spider-Man Brand New Day.png"
  },
  {
    "image":"./images/WOT-Apocolypse Timeline.png"
  },
  {
    "image":"./images/POPWW rebuild.png"
  },
  {
    "image":"./images/Prisoner of war Tony.png"
  },
  {
    "image":"./images/Shattered-grid-wall.png"
  },
  {
    "image":"./images/Spider-Man Brand New Day.png"
  },
  {
    "image":"./images/WOT-Apocolypse Timeline.png"
  },
]

let sum = ''

var main = document.querySelector('main')

img.forEach(function (dets) {
    sum += `<div class="card">
            <img src="${dets.image}" alt="">
        </div>`
})

main.innerHTML= sum