/*---------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------HOW IT WORK------------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/

let ques = document.getElementsByClassName("grid--left--div");
console.log(ques);
let ans = document.getElementsByClassName("faq-details");
console.log(ans);

for (let x = 0 ; x < ques.length ; x++)
{
   ques[x].addEventListener('click', function() {
      for (let y = 0 ; y < ques.length ; y++)
      {
         if(y !== x)
         {
            ans[y].classList.add("hidden");
            document.getElementById("que" + y).classList.remove("ques--border");
            ques[y].classList.remove("ques--container");
            document.getElementById("container" + y).classList.add("container--border");
         }
      }
         ans[x].classList.remove("hidden");
         document.getElementById("que" + x).classList.add("ques--border");
         ques[x].classList.add("ques--container");
         document.getElementById("container" + x).classList.remove("container--border");
   });
}
