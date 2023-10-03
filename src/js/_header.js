let btnBurgerOpen = document.querySelector('.upper-menu__btn-burger');
let mobilMenu = document.querySelector('.aside');
let blurPopUp = document.querySelector('.blur');
let btnBurgerClosed = document.querySelector('.main-menu-header__btn-burger-closed')



btnBurgerOpen.addEventListener('click', function(){
  mobilMenu.classList.add('aside--active');
  blurPopUp.classList.add('blur--active');
})
btnBurgerClosed.addEventListener('click', function(){
  mobilMenu.classList.remove('aside--active');
  blurPopUp.classList.remove('blur--active');
})
blurPopUp.addEventListener('click', function(){
  mobilMenu.classList.remove('aside--active');
  blurPopUp.classList.remove('blur--active');

})




let btnFeedbackOpen2 = document.querySelector('.upper-menu__btn-chat');
let popUpfeedback2 = document.querySelector('.pop-up-feedback');
let blurPopUpFeedback2 = document.querySelector('.blur');
let btnFeedbackClose2 = popUpfeedback2.querySelector('.pop-up__btn-close');

btnFeedbackOpen2.addEventListener('click', function(){
  popUpfeedback2.classList.add('pop-up-feedback--active');
  blurPopUpFeedback2.classList.add('blur--active');
 
})
btnFeedbackClose2.addEventListener('click', function(){
  popUpfeedback2.classList.remove('pop-up-feedback--active');
  blurPopUpFeedback2.classList.remove('blur--active');
})
blurPopUpFeedback2.addEventListener('click', function(){
  popUpfeedback2.classList.remove('pop-up-feedback--active');
  blurPopUpFeedback2.classList.remove('blur--active');

})

let btnCallOpen2 = document.querySelector('.upper-menu__btn-call');
let popUpCall2 = document.querySelector('.pop-up-call');
let blurPopUpCall2 = document.querySelector('.blur');
let btnCallClose2 = popUpCall2.querySelector('.pop-up__btn-close');

btnCallOpen2.addEventListener('click', function(){
  popUpCall2.classList.add('pop-up-call--active');
  blurPopUpCall2.classList.add('blur--active');
  
})
btnCallClose2.addEventListener('click', function(){
  popUpCall2.classList.remove('pop-up-call--active');
  blurPopUpCall2.classList.remove('blur--active');
})
blurPopUpCall2.addEventListener('click', function(){
  popUpCall2.classList.remove('pop-up-call--active');
  blurPopUpCall2.classList.remove('blur--active');

})








