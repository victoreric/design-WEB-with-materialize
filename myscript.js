const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelector('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 600,
    transition: 6000,
    interval: 10000
});

const parallax = document.querySelector('.parallax');
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scrollspy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollspy, {
    scrollOffset: 50
});
