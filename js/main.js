function css(element, styles) {
  for (let property in styles) {
    element.style[property] = styles[property];
  }
}
function showSideBar() {
  const sidebar = document.getElementById("sidebar");

  // Use the css() function to apply styles
  css(sidebar, {
    display: "block",
  });
}
function closeSidebar() {
  const sidebar = document.getElementById("sidebar");

  // Use the css() function to apply styles
  css(sidebar, {
    display: "none",
  });
}
var onresize = function (e) {
  //note i need to pass the event as an argument to the function
  width = e.target.outerWidth;
  if (width > 768) {
    const sidebar = document.getElementById("sidebar");

    // Use the css() function to apply styles
    css(sidebar, {
      display: "none",
    });
  }
};
window.addEventListener("resize", onresize);
