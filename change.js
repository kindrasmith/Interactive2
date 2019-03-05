let element3 = document.querySelector('#element-dave')
let element4 = document.querySelector('#element-4')
let element5 = document.querySelector('#element-5')
let element6 = document.querySelector('#element-6')
let element7 = document.querySelector('#element-7')
let element8 = document.querySelector('#element-8')
let element9 = document.querySelector('#element-9')
let element10 = document.querySelector('#element-10')
let element11 = document.querySelector('#element-11')



element3.addEventListener('click',function() {

  element3.animate([{
			opacity: getComputedStyle(this).opacity,
			marginLeft: getComputedStyle(this).marginLeft,
			fontSize:  getComputedStyle(this).fontSize,
			borderWidth:  getComputedStyle(this).borderWidth
		},
    {
			opacity: 0.4,
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });

})

element6.addEventListener('pointermove',function(e){
  var xPos = e.pageX-125;
  var yPos = e.pageY-125;

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})


element5.addEventListener('click', function(){
  this.nextElementSibling.classList.toggle('circle');
})
element7.addEventListener('click', function(){
  this.nextElementSibling.classList.toggle('circles');
})


let doAThing = document.querySelector('#doAThing')
let scroller = document.querySelector('#scroller')


let doAThing = document.querySelector('#doAThing')
let scroller = document.querySelector('#scroller3')

doAThing.addEventListener('scroll',function(){
  scroller.style.fontFamily = 'sans-serif'
})



element9.addEventListener('hover', function(){
  this.nextElementSibling.classList.toggle('circles');
})
