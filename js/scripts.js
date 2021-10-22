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
    $("img").remove();
    let result = average(question1, question2, question3, question4, question5);
    if (result <= 5/3) {
      $("#language-result").text("Ruby!");
      $("#output").append("<img src='img/ruby.jpeg' alt='a picture of a ruby'>");
    } else if (result > 5/3 && result < 7/3) {
      $("#language-result").text("Javascript!");;
      $("#output").append("<img src='img/coffee.jpeg' alt='a picture of a coffee beans'>");
    } else {
      $("#language-result").text("C#!");;
      $("#output").append("<img src='img/csharp.png' alt='a picture of a music note'>");
    }
    event.preventDefault();

  });
});