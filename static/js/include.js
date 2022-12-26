/* 共通パーツと共通スクリプトを読み込む */

$(function () {
  // 共通パーツを読み込む
  $("#nav_visible").load("templates/sidebar_nav_visible.html");
  $("#nav_hidden").load("templates/sidebar_nav_hidden.html");
  $("#sidebar").load("templates/sidebar.html");

  // 共通スクリプトを読み込む
  var el = document.createElement("script");
  el.src = "static/js/index.js";
  document.body.appendChild(el);
});
