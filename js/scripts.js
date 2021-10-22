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
    $("#resetter").removeClass("hider");
    $("#quiz").addClass("floater");
    $("#takeout").remove();
    let result = average(question1, question2, question3, question4, question5);
    if (result <= 1.5) {
      $("#language-result").text("Ruby!");
      $("#output").append("<div id='takeout'><img src='img/ruby.jpeg' alt='a picture of a ruby'><p>You're one sparkly programmer.</p></div>");
    } else if (result > 1.5 && result < 2.5) {
      $("#language-result").text("Javascript!");;
      $("#output").append("<div id='takeout'><img src='img/coffee.jpeg' alt='a picture of a coffee beans'><p>You can really grind out some code.</p></div>");
    } else {
      $("#language-result").text("C#!");;
      $("#output").append("<div id='takeout'><img src='img/csharp4.jpeg' alt='a picture of a music note'><p>You are a programming virtuoso.</p></div>");
    }
    event.preventDefault();
  });
  $("#resetter").click(function(event) {
    $("#output").addClass("hider");
    $("#quiz").removeClass("floater");
    $("#resetter").addClass("hider");
  });
});