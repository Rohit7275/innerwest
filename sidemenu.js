let included = document.getElementsByClassName("side-included");
let hours = document.getElementsByClassName("side-hours");
let includedshow = document.getElementsByClassName("whats-included");
let hoursshow = document.getElementsByClassName("hours");
let close = document.getElementsByClassName("close");

for(let x = 0 ; x < included.length ; x++)
{
   included[x].addEventListener('click', function(){
      for(let y = 0 ; y < included.length ; y++)
      {
         if( y == x)
         {
            includedshow[y].classList.remove("invisible");
            includedshow[y].classList.add("active");
         }
      }
   });

   hours[x].addEventListener('click', function(){
      for(let y = 0 ; y < hours.length ; y++)
      {
         if( y == x)
         {
            hoursshow[y].classList.remove("invisible");
            hoursshow[y].classList.add("active");
         }
      }
   });
}

for(let x = 0 ; x < close.length ; x++)
{
   close[x].addEventListener('click', function() {
      for(let y = 0 ; y < included.length ; y++)
      {
         hoursshow[y].classList.add("invisible");
         includedshow[y].classList.add("invisible");
         includedshow[y].classList.remove("active");
         hoursshow[y].classList.remove("active");
      }
   });
}
