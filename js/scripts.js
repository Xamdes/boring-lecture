$(function()
{
  $("h1").click(function()
  {
    $("p").removeClass("show-border");
  });

  $("h2").click(function()
  {
    $("p").removeClass("show-border");
  });



  $("p#paragraph1").click(function()
  {
    var pOne = $("#paragraph1");
    var currentClass = "show-border";
    if(pOne.hasClass(currentClass))
    {
      pOne.removeClass(currentClass);
    }
    else
    {
      pOne.removeClass();
      pOne.addClass(currentClass);
    }
  });

});
