/*---------------------------------------------------------------------------------------------------------*/
/*---------------------------------------------------BOOKING-----------------------------------------------*/
/*---------------------------------------------------------------------------------------------------------*/

let service = document.getElementsByClassName("service--column");
console.log(service);

let button = document.getElementsByClassName("select--button");
console.log(button);

let finalprice = document.getElementsByClassName("total__48");
console.log(finalprice);

let price = document.getElementsByClassName("total__36");
console.log(price);

let radioActive = document.getElementsByClassName("container");
console.log(radioActive);

var fp;

for (let x = 0 ; x < service.length ; x++ )
{
   service[x].addEventListener('click', function()
   {
      for(let y = 0 ; y < service.length ; y++)
      {
         if(y !== x)
         {
            service[y].classList.remove("service-selected");

            button[y].classList.remove("button-selected");

            button[y].innerHTML = "Select";
         }
      }
      service[x].classList.toggle("service-selected");

      button[x].classList.toggle("button-selected");

      if(button[x].innerHTML === "Select")
         {
            button[x].innerHTML = "Selected" ;
         }
      else
         {
            button[x].innerHTML = "Select" ;
         }

      if(finalprice[0].innerHTML === price[x].innerHTML)
         {
            finalprice[0].innerHTML = "$0" ;
         }
      else
         {
            finalprice[0].innerHTML = price[x].innerHTML;
            fp = finalprice[0].innerHTML.substring(1);
            console.log(typeof(fp));
         }


   });
}

// var hours = document.getElementById("hours").value;
// console.log(hours);
//
// let finalhours = document.getElementById("final--hours");
// console.log(finalhours);

// document.addEventListener('keypress', hourpress);
document.getElementById("hours").addEventListener('input', hourpress);

function hourpress()
{
   var hours = document.getElementById("hours").value;
   let finalhours = document.getElementById("final--hours");
   console.log(finalhours);
   console.log(hours);
   // document.getElementById("final--hours").innerHTML = document.getElementById("hours").value;
   finalhours.innerHTML = hours + " Hours";
   finalprice[0].innerHTML = "$" + fp * hours;
   console.log(finalprice[0].innerHTML);
   console.log(typeof(hours))
}

let radio = document.getElementsByClassName("container");
console.log(radio);
let type = document.getElementsByClassName("clean-type");
console.log(type);

for(let x = 0 ; x < radio.length ; x++)
{
   radio[x].addEventListener('click', function() {
      for(let y = 0 ; y < radio.length ; y++)
      {
         document.getElementById("clean--type").innerHTML = type[x].innerHTML;
      }
   });
}


document.getElementById("text-box").addEventListener('input', preferred);

function preferred()
{
   var textarea = document.getElementById("text-box").value;
   let day = document.getElementById("preferred-day");
   // document.getElementById("final--hours").innerHTML = document.getElementById("hours").value;
   day.innerHTML = textarea.charAt(0).toUpperCase() + textarea.slice(1);
}


document.getElementById("address").addEventListener('input', where);
document.getElementById("state").addEventListener('input', where);
document.getElementById("post-code").addEventListener('input', where);


function where()
{
   var address = document.getElementById("address").value;
   var state = document.getElementById("state").value;
   var post = document.getElementById("post-code").value;

   let where = document.getElementById("where");
   // document.getElementById("final--hours").innerHTML = document.getElementById("hours").value;
   where.innerHTML = address.charAt(0).toUpperCase() +  address.slice(1) + " " + state.charAt(0).toUpperCase() + state.slice(1) + " " + post ;
}

let check = document.getElementsByClassName("checkmark");

for(let x = 0 ; x < radioActive.length ; x++)
{
   radioActive[x].addEventListener('click', function() {
      for(let y = 0 ; y < radioActive.length ; y++)
      {
         if( y !== x)
         {
            check[y].classList.remove("activeRadio");
         }
      }

      check[x].classList.add("activeRadio");
   });
}
