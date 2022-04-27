let drop = document.getElementsByClassName("dropdown--menu");
console.log(drop);

for(let x = 0 ; x < drop.length ; x++)
{
   drop[x].addEventListener("click", menu);

   function menu()
   {
     document.getElementById("menu").style.visibility = "visible";
     document.getElementById("menu").classList.toggle("active");
     // var x = document.getElementById("dropdown--menu");
     //
     // if (x.classList.contains("dropdown--absolute")) {
     //   x.classList.remove("dropdown--absolute");
     // } else {
     //   x.classList.add("dropdown--absolute");
     // }
     document.body.classList.toggle("scroll-lock");
     document.getElementById("dropdown--absolute").classList.toggle("invisible");
     document.getElementById("dropdown--absolute").classList.toggle("menu_active");
     // document.querySelector(".dropdown--icon__black").style.backgroundColor = "black";
   }

}
