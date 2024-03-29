document.addEventListener('DOMContentLoaded', () => {
    const tabitem = document.querySelectorAll('.tabitem');
    const cardOneTab=document.querySelectorAll('.cardOneTab')
    const DateWise=document.querySelectorAll('.DateWise')
    const totSng=document.querySelectorAll('.totSng')
    const boxes=document.querySelectorAll('.boxes')
    tabitem.forEach((item, index) => {
      item.addEventListener('click', () => {

 boxes.forEach((it,indices)=>{
    if(index==indices){
it.style.display='block'
    }
    else{
        it.style.display='none'
    }
 })



        tabitem.forEach((it, inx) => {
          if(index === inx) {
            it.classList.remove('nonActive');
            it.classList.add('activeClass');
          } else {
            it.classList.remove('activeClass');
            it.classList.add('nonActive');
          }
        });
      });
    });
  
    cardOneTab.forEach((item, index) => {
        item.addEventListener('click', () => {
            cardOneTab.forEach((it, inx) => {
                if(index === inx) {
                    it.classList.remove('nonActive');
                    it.classList.add('activeClass');
                } else {
                    it.classList.remove('activeClass');
                    it.classList.add('nonActive');
                }
            });

            totSng.forEach((tosingle, inde) => {
                if(index === inde) {
                    tosingle.style.display = 'block';
                } else {
                    tosingle.style.display = 'none';
                }
            });
        });
    });
    DateWise.forEach((item, index) => {
      item.addEventListener('click', () => {
        DateWise.forEach((it, inx) => {
          if(index === inx) {
            it.classList.remove('nonActive');
            it.classList.add('activeClass');
          } else {
            it.classList.remove('activeClass');
            it.classList.add('nonActive');
          }
        });
      });
    });
  
  
  
  });
   
  
  
  
  
  
  
  