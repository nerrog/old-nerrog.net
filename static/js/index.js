$(document).ready(function () {
  function toggleSidebar() {
    $(".button").toggleClass("active");
    $("main").toggleClass("move-to-left");
    $(".sidebar-item").toggleClass("active");
  }

  $(".button").on("click tap", function () {
    toggleSidebar();
  });

  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      toggleSidebar();
    }
  });
});

$(window).on("load", function () {
  $("#splash")
    .delay(200) //フェードアウト時間
    .fadeOut("slow", function () {
      $("body").addClass("appear");
    });
  $(".splashbg").on("animationend", function () {
    //アニメーション後の処理
  });
});
