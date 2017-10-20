$(document).ready(function() {
  var name = prompt("What is your name? :");
  $("form#questions").submit(function(event) {
    var question1 = $("input:radio[name=ends]:checked").val();
    var question2 = $("input:radio[name=type]:checked").val();
    var question3= $("#mobile").val();
    var question4 = $("#android").val();
    var question5 = $("#windows").val();

    $(".suggestions").hide();
    $(".name").text(name);
    if (question1==="front") {
      alert("We are so sorry but now we don't run any front-end language classes. Wait for incoming schedule! ")
    } else if (question2==="small" && question3==="2" && question4==="2") {
        $("#ruby").show();
    } else if (question2==="enterprise" && question3==="1" && question4==="1") {
        $("#java").show();
    } else if (question2==="large" && question5==="1") {
        $("#c").show();
    } else {
        $("#ruby, #java, #c").show()
        alert("In your case each language is a good choice");
    }

    event.preventDefault();
  });
});
