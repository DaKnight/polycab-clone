document.addEventListener('DOMContentLoaded', () => {
  const tabItems = document.querySelectorAll('.tabitem');
  const cardOneTabs = document.querySelectorAll('.cardOneTab');
  const dateWise = document.querySelectorAll('.DateWise');
  const totSng = document.querySelectorAll('.totSng');
  const boxes = document.querySelectorAll('.boxes');





  tabItems.forEach((item, index) => {
      item.addEventListener('click', () => {
          boxes.forEach((it, indices) => {
              if (index === indices) {
                  it.style.display = 'block';
              } else {
                  it.style.display = 'none';
              }
          });

          tabItems.forEach((it, inx) => {
              if (index === inx) {
                  it.classList.remove('nonActive');
                  it.classList.add('activeClass');
              } else {
                  it.classList.remove('activeClass');
                  it.classList.add('nonActive');
              }
          });
      });
  });

  cardOneTabs.forEach((item, index) => {
      item.addEventListener('click', () => {
          cardOneTabs.forEach((it, inx) => {
              if (index === inx) {
                  it.classList.remove('nonActive');
                  it.classList.add('activeClass');
              } else {
                  it.classList.remove('activeClass');
                  it.classList.add('nonActive');
              }
          });

          totSng.forEach((tosingle, inde) => {
              if (index === inde) {
                  tosingle.style.display = 'block';
              } else {
                  tosingle.style.display = 'none';
              }
          });
      });
  });

  dateWise.forEach((item, index) => {
      item.addEventListener('click', () => {
          dateWise.forEach((it, inx) => {
              if (index === inx) {
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

function clockCreate() {
  let timer = document.querySelector('.currenTime');
  let date = document.querySelector('.currentDate');
  let currentDate = new Date();
  timer.innerHTML = `${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
  date.innerHTML = `${currentDate.getFullYear()}-0${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
  setInterval(clockCreate, 1000);
}

clockCreate();
