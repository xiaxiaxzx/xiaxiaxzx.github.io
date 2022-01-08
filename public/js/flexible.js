//屏幕适应
(function (win, doc) {
  if (!win.addEventListener) return;
  var html = document.documentElement;
  function setFont() {
    var html = document.documentElement;
    var k = 375;
    html.style.fontSize = html.clientWidth / k + "px";
  }
  setFont();
  setTimeout(function () {
    setFont();
  }, 300);
  doc.addEventListener("DOMContentLoaded", setFont, false);
  win.addEventListener("resize", setFont, false);
  win.addEventListener("load", setFont, false);
})(window, document);

// 收缩地址
window.addEventListener(
  "load",
  function () {
    setTimeout(hideURLbar, 0);
  },
  false
);
function hideURLbar() {
  window.scrollTo(0, 1);
}
