/*---------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------------REVIEW SLIDER-----------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/


const slidesItem = document.querySelectorAll('.slides .customer-review--grid');
const prev = document.querySelector('.slide-prev');
const next = document.querySelector('.slide-next');
const slideWrapper = document.querySelector('.slides-wrapper');

let slideNum = document.getElementById("slide-number");
slideNum.innerHTML = '1' + '&nbsp &nbsp' + 'of' + '&nbsp &nbsp' + slidesItem.length;

slideWrapper.style.width = slidesItem.length + '00%';

for (let i = 0; i < slidesItem.length; i++) {
   slidesItem[i].style.width = 100 / slidesItem.length + '%';
}

let index = 0;

function slide(i) {
   index = i;
   slideWrapper.style.left = '-' + index + '00%';
   console.log(index);
   slideNum.innerHTML = (index + 1)  + '&nbsp &nbsp' + 'of' + '&nbsp &nbsp' + slidesItem.length;

}

next.addEventListener('click', function() {
   if ((index + 1) < slidesItem.length) {
      slide(index + 1);
   }
});

prev.addEventListener('click', function() {
   if (index > 0) {
      slide(index - 1);
   }
});
