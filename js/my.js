const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {

  indicators: false,
  height: 580,
  transition: 600,
  interval: 4000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);