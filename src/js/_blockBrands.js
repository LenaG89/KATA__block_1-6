let servicesContentBtnBlock2 = document.querySelector('.block-brands__btn-more');
let servicesContentBtnImgBlock2 = document.querySelector('.block-brands__btn-img');
let servicesContentWrapperHeightBlock2 = document.querySelector('.block-brands-slider__wrapper');

if (window.innerWidth >= 766) {
  

  servicesContentBtnBlock2.addEventListener('click', function() {
    

    if (servicesContentBtnBlock2.textContent !== 'Показать все') {
        
            servicesContentWrapperHeightBlock2.style.height = '160px';
            servicesContentBtnBlock2.textContent = 'Показать все';
            servicesContentBtnImgBlock2.style.transform = 'rotate(0deg)';
    }
    else { 
        servicesContentWrapperHeightBlock2.style.height = '100%';
        servicesContentBtnBlock2.textContent = 'Скрыть';
        servicesContentBtnImgBlock2.style.transform = 'rotate(180deg)';
    
    }  
})

}
else {
  servicesContentWrapperHeightBlock2.style.height = '100%';
}

