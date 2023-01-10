var y = Math.floor(Math.random() * 10 + 1);
      let qwe = document.querySelector('.qwe');
var result = document.querySelector(".answer");

    var guess = 1;
      
    document.getElementById("submitguess").onclick = function(){
      
   
   var x = document.getElementById("guessField").value;
  
   if(x == y)
   {    
    result.textContent ="CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
   + guess + " GUESS ";
   }


   else if(x > y) 
   {    
       guess++;
       result.textContent = "OOPS SORRY!! TRY A SMALLER NUMBER";
   }
   else
   {
       guess++;
       result.textContent = "OOPS SORRY!! TRY A HIGHER NUMBER"
   }

   let li = document.createElement ('li');
   li.innerText = Number (x);
   qwe.appendChild(li);
}