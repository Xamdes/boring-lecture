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
    var currentParagraph = $("#paragraph1");
    var currentClass = "show-border";
    if(currentParagraph.hasClass(currentClass))
    {
      currentParagraph.removeClass(currentClass);
    }
    else
    {
      currentParagraph.removeClass();
      currentParagraph.addClass(currentClass);
    }
  });


  $("p#paragraph2").click(function()
  {
    var currentParagraph = $("p#paragraph2");
    var currentClass = "show-border";
    if(currentParagraph.hasClass(currentClass))
    {
      currentParagraph.removeClass(currentClass);
    }
    else
    {
      currentParagraph.removeClass();
      currentParagraph.addClass(currentClass);
    }
  });
});
