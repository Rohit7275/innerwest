/*---------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------FAQ DROPDOWN------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/

// onclick = function() {myFunction()};
let elem = document.getElementsByClassName("faq--dropdown");
// console.log(elem);
let rotate = document.getElementsByClassName("rotate")
// console.log(rotate);

for( let i = 0; i < elem.length; i++ ) {
   elem[i].addEventListener('click', function() {
      for(let a = 0; a < elem.length; a++ ) {
         if(a !== i) {
            document.getElementById("faq" + a).classList.remove("faqDrop");
            rotate[a].classList.remove("rotate180");
         }
      }
      // console.log(i);
      document.getElementById("faq" + i).classList.toggle("faqDrop");
      rotate[i].classList.toggle("rotate180");

      // let item = document.getElementById("faq" + i);
      //
      // console.log(item.classList.contains('hidden'));
      //
      // if(item.classList.contains('hidden')) {
      //    item.classList.remove('hidden');
      // } else {
      //    item.classList.add('hidden');
      // }
   });
}
