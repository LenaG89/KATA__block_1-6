let btnCallOpen = document.querySelector('.main-menu-contacts__btn-call');
let popUpCall = document.querySelector('.pop-up-call');
let blurPopUpCall = document.querySelector('.blur');
let btnCallClose = popUpCall.querySelector('.pop-up__btn-close');

btnCallOpen.addEventListener('click', function(){
  popUpCall.classList.add('pop-up-call--active');
  blurPopUpCall.classList.add('blur--active');
  mobilMenu.classList.remove('aside--active');
})
btnCallClose.addEventListener('click', function(){
  popUpCall.classList.remove('pop-up-call--active');
  blurPopUpCall.classList.remove('blur--active');
})
blurPopUpCall.addEventListener('click', function(){
  popUpCall.classList.remove('pop-up-call--active');
  blurPopUpCall.classList.remove('blur--active');

})

let btnFeedbackOpen = document.querySelector('.main-menu-contacts__btn-chat');
let popUpfeedback = document.querySelector('.pop-up-feedback');
let blurPopUpFeedback = document.querySelector('.blur');
let btnFeedbackClose = popUpfeedback.querySelector('.pop-up__btn-close');

btnFeedbackOpen.addEventListener('click', function(){
  popUpfeedback.classList.add('pop-up-feedback--active');
  blurPopUpFeedback.classList.add('blur--active');
  mobilMenu.classList.remove('aside--active');
})
btnFeedbackClose.addEventListener('click', function(){
  popUpfeedback.classList.remove('pop-up-feedback--active');
  blurPopUpFeedback.classList.remove('blur--active');
})
blurPopUpFeedback.addEventListener('click', function(){
  popUpfeedback.classList.remove('pop-up-feedback--active');
  blurPopUpFeedback.classList.remove('blur--active');

})


