$(function()
{
  $("p#paragraph1").click(function()
  {
    $("p").removeClass();
    $("p").addClass("show-border");
  });

  $("h1").click(function()
  {
    $("p").removeClass("show-border");
  });

});
