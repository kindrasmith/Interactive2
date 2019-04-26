// let image = document.querySelector('#cc1')
//
//
//
// window.addEventListener('mousemove',function(event){
//   let x = event.clientX / window.innerWidth
//   let y = event.clientY / window.innerHeight
//
//   let imageHeight = image.clientHeight
//   let imageWidth = image.clientWidth
//
//
//   image.style.top = -y * (imageHeight - window.innerHeight) + 'px'
//   image.style.left = -x * (imageWidth - window.innerWidth) + 'px'
//
//
//
//   console.log(x,y,x*imageWidth,y*imageHeight)
// })



window.addEventListener('resize',pageResized)


function pageResized(){
  console.log(window.innerHeight, window.innerWidth)

}
//
// //   uncomment this to see the font size resize based on how tall the window is
//
//   let windowPercentOfScreen = (1 - (window.innerHeight / window.screen.height)) * 100
//
//   let colorFromScreenHeight = 'hsl(0,0%,' + windowPercentOfScreen + '%)'
//   console.log(colorFromScreenHeight)
//   document.body.style.color = colorFromScreenHeight

function toggleImage() {
  $('#image').toggleClass('hidden');
}

$('#button').click(toggleImage);




let image = document.querySelector('#bigImage')



window.addEventListener('mousemove',zoomer)



function zoomer(event){

  if(bigMovinAroundMode){

    image.classList.add('enabled')

    let x = event.clientX / window.innerWidth
    let y = event.clientY / window.innerHeight

    if(x > 1){
      x = 1
    } else if(x < 0){
      x = 0
    }

    if(y > 1){
      y = 1
    } else if(y < 0){
      y = 0
    }

    let imageHeight = image.clientHeight
    let imageWidth = image.clientWidth


    image.style.top = -y * (imageHeight - window.innerHeight) + 'px'
    image.style.left = -x * (imageWidth - window.innerWidth) + 'px'



    console.log(x,y,x*imageWidth,y*imageHeight)
  } else {
    image.classList.remove('enabled')
  }
}


let bigMovinAroundMode = false

let displayBox = document.querySelector('.cc1')


displayBox.addEventListener('click',(e)=>{
  bigMovinAroundMode = true

  zoomer(e)


})

image.addEventListener('click',(e)=>{
  bigMovinAroundMode = false

  zoomer(e)


})
