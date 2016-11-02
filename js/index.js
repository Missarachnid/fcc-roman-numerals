$(document).ready(function() {
//algorithm I did on Free Code Camp
  function convertToRoman(num) {
    var numerals = [];
    var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//number entered is compared to other numbers until smaller
    for (var i = 0; i < numbers.length; i++) {
      while (num >= numbers[i]) {
        //if number is larger than the numeral it is pushed to the array
        numerals.push(romans[i]);
        //after each comparison, that number is subtracted
        num -= numbers[i];
      }
    }
//changed from an array to a string
    numerals = numerals.join("");
    return numerals;
  }

  
  //event handler for clicking submit
  $("#submit").click(function(e) {
    //prevents the default action that breaks the code!
    e.preventDefault();
    //clears out the last output
    $("#textOutput").empty();
    //puts the value from input field into a variable
    var inputNumber = document.getElementById("inputField").value;
    //prevents entry of non, negative and above max numbers. setting input field to numbers doesn't prevent all occurances
    if(inputNumber.match(/\D/) || inputNumber > 3999 || inputNumber < 1){
      alert("Please enter numbers only.");
      $("#inputField").val("");
      return false;
    }else if(inputNumber > 3999 || inputNumber < 1){
      alert("Please enter a number between 1 and 4999");
      $("#inputField").val("");
      return false;
    }
    
    //after improper inputs are filtered, algorithm is used on number
    var result = convertToRoman(inputNumber);
    $("#textOutput").append(result);
  });

});