function validateForm() {
    //Create variables to search notes input for dietary restriction: vegan
     var notesInput = document.forms["myForm"]["notes"].value;
     var find = notesInput.match(/vegan/gi);
     //If customer indicates they are a vegan, warn for dairy.
       if (find != null) {
         window.alert("All cheesecakes contain dairy.");
         event.preventDefault();
         return false;
       }

       //If statement that checks if customer has chosen a flavor.
       if(document.getElementById("plain").checked == false && document.getElementById("cherry").checked == false 
         && document.getElementById("choco").checked == false){
         window.alert("Please select a flavor.");
         event.preventDefault();
         return false;
       }

       else {
         /* Code here should find and print topping choice. Code for getting value of radio buttons referenced from StackOverflow.
            StackOverflow Link: https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button */
         window.topping_value;
         if (document.getElementById('plain').checked) {
           topping_value = document.getElementById('plain').value;
         }

         if (document.getElementById('cherry').checked) {
           topping_value = document.getElementById('cherry').value;
         }

         if (document.getElementById('choco').checked) {
           topping_value = document.getElementById('choco').value;
         }

         document.getElementById('flavorresults').innerHTML = topping_value;

         /* Code here should find and print cheesecake quan. Code for checking selected item referenced from StackOverflow
              StackOverflow Link: https://stackoverflow.com/questions/1085801/get-selected-value-in-dropdown-list-using-javascript */
         window.e = document.getElementById("quantity");
         window.qVal = e.options[e.selectedIndex].value;
         document.getElementById('quantityresults').innerHTML = qVal;

         /* Code here should find and print any notes */
         window.notesbox = document.getElementById("notes").value;
         document.getElementById('notesresults').innerHTML = notesbox;
         document.getElementById("form").remove();
         document.getElementById("second").style.display = 'block';
         event.preventDefault();
         return true;
     }

   }




   $(function changeText(){

    $(".dropdown a").click(function(){
    
      $(".dropbtn:first-child").text($(this).text());
      $(".dropbtn:first-child").val($(this).text());
    
    });
    
    });