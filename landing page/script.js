window.addEventListener('scroll', function() {
    var banner = document.getElementById('banner-image');
    var scrollPosition = window.pageYOffset;
    banner.style.filter = 'brightness(' + (1 - scrollPosition / 500) + ')';
  });
  function scrollToMain() {
    document.querySelector('main').scrollIntoView({ behavior: 'smooth' });
  }
  