let servicesContentBtnBlock3 = document.querySelector('.block-technic__btn-more');
let servicesContentBtnImgBlock3 = document.querySelector('.block-technic__btn-img');
let servicesContentWrapperHeightBlock3 = document.querySelector('.block-technic-slider__wrapper');

if (window.innerWidth >= 766) {
  

  servicesContentBtnBlock3.addEventListener('click', function() {
    

    if (servicesContentBtnBlock3.textContent !== 'Показать все') {
        
            servicesContentWrapperHeightBlock3.style.height = '160px';
            servicesContentBtnBlock3.textContent = 'Показать все';
            servicesContentBtnImgBlock3.style.transform = 'rotate(0deg)';
    }
    else { 
        servicesContentWrapperHeightBlock3.style.height = '100%';
        servicesContentBtnBlock3.textContent = 'Скрыть';
        servicesContentBtnImgBlock3.style.transform = 'rotate(180deg)';
    
    }  
})

}
else {
  servicesContentWrapperHeightBlock3.style.height = '100%';
}  






          