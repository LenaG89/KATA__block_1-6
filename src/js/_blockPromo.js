let servicesContentBtnBlock1 = document.querySelector('.block-promo__btn-more');
let servicesContentBtnImgBlock1 = document.querySelector('.block-promo__btn-img');
let servicesContentWrapperHeightBlock1 = document.querySelector('.block-promo__txt-wrapper');

if (window.innerWidth >= 766) {
  

  servicesContentBtnBlock1.addEventListener('click', function() {
    

    if (servicesContentBtnBlock1.textContent !== 'Читать далее') {
        
            servicesContentWrapperHeightBlock1.style.height = '160px';
            servicesContentBtnBlock1.textContent = 'Читать далее';
            servicesContentBtnImgBlock1.style.transform = 'rotate(0deg)';
    }
    else { 
        servicesContentWrapperHeightBlock1.style.height = '100%';
        servicesContentBtnBlock1.textContent = 'Скрыть';
        servicesContentBtnImgBlock1.style.transform = 'rotate(180deg)';
       
    }  
})

}
else {
  servicesContentBtnBlock1.addEventListener('click', function() {
    

    if (servicesContentBtnBlock1.textContent !== 'Читать далее') {
        
            servicesContentWrapperHeightBlock1.style.height = '90px';
            servicesContentBtnBlock1.textContent = 'Читать далее';
            servicesContentBtnImgBlock1.style.transform = 'rotate(0deg)';
    }
    else { 
        servicesContentWrapperHeightBlock1.style.height = '100%';
        servicesContentBtnBlock1.textContent = 'Скрыть';
        servicesContentBtnImgBlock1.style.transform = 'rotate(180deg)';
    
    }  
})

}  





