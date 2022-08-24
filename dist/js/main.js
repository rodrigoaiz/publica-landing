
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('header').classList.add('header-down');
      } else {
        document.getElementById('header').classList.remove('header-down');
      }
  });
});
