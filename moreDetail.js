const moreDetail = document.getElementById('moreDetail');
  const hideBoxInDetail = document.getElementById('hideBoxIndetail');
  const hidePara = document.getElementById('hidePara');
  const arrow = document.querySelectorAll('.arrow');


  moreDetail.addEventListener('click', () => {
    if (hideBoxInDetail.classList.contains('hide')) {
        hideBoxInDetail.classList.remove('hide');
        hideBoxInDetail.classList.add('showme');
        if (hidePara.innerHTML === 'More') {
            console.log("Changing to 'Pack up'");
            hidePara.innerHTML = 'Pack up';
            arrow[1].classList.remove('hide');
            arrow[1].classList.add('showme');
            arrow[0].classList.add('hide');
            arrow[0].classList.remove('showme');
        }
    } else {
        hideBoxInDetail.classList.add('hide');
        hideBoxInDetail.classList.remove('showme');
        if (hidePara.innerHTML === 'Pack up') {
            console.log("Changing to 'More'");
            hidePara.innerHTML = 'More';
            arrow[0].classList.remove('hide');
            arrow[0].classList.add('showme');
            arrow[1].classList.add('hide');
            arrow[1].classList.remove('showme');
        }
    }
});



const back = document.getElementById('back').addEventListener('click', () => {
    window.location.href = 'index.html';
});