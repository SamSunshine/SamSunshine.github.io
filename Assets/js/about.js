//element in html. 
// ".hover" is part of html and afterwards is the action. 
$(".hover").mouseleave( 
  function () {
    $(this).removeClass("hover");
  }
);
