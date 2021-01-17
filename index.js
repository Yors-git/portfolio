VANTA.WAVES({
  el: "#my-background",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x30307,
  shininess: 28.00,
  waveHeight: 30.50,
  waveSpeed: 0.50,
  zoom: 0.72
})

window.onscroll = function() {scrollFunction()};
let navItems = []
function scrollFunction() {
  navItems = document.getElementsByClassName("chngColor");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("mainNav").style.backgroundColor = "rgb(255,255,255)";
    document.getElementById("mainNav").style.boxShadow = "0 0 3px #80808085";
    for (var i = 0; i < navItems.length; i++) {
    navItems[i].style.color = "black";
    }

  } else {
    document.getElementById("mainNav").style.backgroundColor = "rgb(255,255,255,0)";
    document.getElementById("mainNav").style.boxShadow = "none";
    for (var i = 0; i < navItems.length; i++) {
    navItems[i].style.color = "white";
    }
  }
}
