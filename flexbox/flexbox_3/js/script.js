$(document).ready(function() {

    $("#magnify").click(function () {
      $(this).hide();
      $("#search").toggle("scale");
      $("search").css("dispalay", "block");
    });

});

