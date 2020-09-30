$("button").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".second").offset().top,
    },
    999
  );
});

$(".show-snippet").click(function () {
  $(this).hide();
  $(this).siblings(".hidden").show();
  $(this).siblings(".snippet").css("display", "flex");
});

$(".hide-snippet").click(function () {
  $(this).siblings(".show").show();
  $(this).hide();
  $(this).siblings(".snippet").css("display", "none");
});
