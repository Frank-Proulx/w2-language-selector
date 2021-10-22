function average(num1, num2, num3, num4, num5) {
  return (num1 + num2 + num3 + num4 + num5) / 5;
}


$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    const question1 = parseInt($("#question1").val());
    const question2 = parseInt($("#question2").val());
    const question3 = parseInt($("#question3").val());
    const question4 = parseInt($("#question4").val());
    const question5 = parseInt($("#question5").val());
    $("#output").removeClass("hider");
    let result = average(question1, question2, question3, question4, question5);
    if (result <= 1.5) {
      $("#language-result").text("Ruby!");
    } else if (result > 1.5 && result < 2.5) {
      $("#language-result").text("Javascript!");;
    } else {
      $("#language-result").text("C#!");;
    }
    event.preventDefault();

  });
});