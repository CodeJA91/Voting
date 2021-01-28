$(document).ready(function(){}


const age = parseInt(prompt("How old are you?"));

 if (age >= 18) {
    $('#can-vote').show();
  }else{
    $('#no-vote').show();
  }
});