$(document).ready(function () {
  $(".main_div").addClass("text-focus-in");
  $(".fa-arrow-circle-down").addClass("pulsate-fwd");
  $(".event_link_div").hover(
    function () {
      $(this).removeClass("fade-out-left").addClass("fade-in-left");
      $(".arrow-right").fadeIn();
    },
    function () {
      $(this).removeClass("fade-in-left").addClass("fade-out-left");
      $(".arrow-right").fadeOut();
    }
  );

  $(".navbar-toggler-icon").click(function (e) {
    $(".nav-item").toggleClass("navbar_padding");
  });
});
