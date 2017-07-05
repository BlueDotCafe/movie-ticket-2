$(document).ready(function() {
  $(".suggestion").hide();
  $("form#vaca-form").submit(function() {
    event.preventDefault();
/*
var tally is an object whose properties are named for the destinations and the values of the properties will be the numbers of answers related to that city.
var answers is an array of strings whose members are the raw selected values from the form: example ["i", "p"]
*/
    var tally = {
      "a":0,"b":0, "c":0
    };
    var questions = [
      $("#movie").find(":selected").val(),
      $("#ticket").find(":selected").val(),
      $("#time").find(":selected").val(),
    ];

    for (i in questions) {
      var currentAnswer = answers[i];
      console.log(currentAnswer);
      tally[currentAnswer]++;
    }
    console.log(tally);
    /*hide all*/
    $(".suggestion").hide();
    if (tally["a"] > tally["b"]) {
      /*show italy*/
      $(".italy,.italy-ul").show();
    } else if (tally["p"] > tally["i"] && tally["p"] > tally["c"]) {
      /*show paris*/
      $(".paris,.paris-ul").show();
    } else {
      /*show cancun*/
      $(".cancun,.cancun-ul").show();
    }
  });
});
/*
when i submit the form
i want to tabulate the number of answers correlated with each destination
example: {italy:3,paris:1,cancun:1}
for the destination with the most answers, it will reveal the associated div.
and hide all the other possible answers.
*/
