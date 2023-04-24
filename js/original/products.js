document.getElementById("myLink").addEventListener("click", function(event) {
   event.preventDefault(); // Prevent the default link behavior
  
   if(localStorage.getItem("language")=='ar'){
      window.location.href="products-ar.html";
     }else{
      window.location.href="products.html";
     }
 });
 

 