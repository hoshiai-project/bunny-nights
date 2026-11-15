(function(){function start(){

(function () {
  document.querySelectorAll('.ob2').forEach(function (root) {
    if (root.dataset.ob2Ready) return;
    root.dataset.ob2Ready = 'true';
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    var observer;
    var targets = root.querySelectorAll('.ob2-row, .ob2-schedule');
    function stopMotion() {
      root.classList.remove('ob2-motion');
      if (observer) observer.disconnect();
    }
    if (!reduced.matches && 'IntersectionObserver' in window) {
      try {
        observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('ob2-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.08 });
        targets.forEach(function (target) {
          target.classList.add('ob2-reveal');
          observer.observe(target);
        });
        root.classList.add('ob2-motion');
      } catch (error) { stopMotion(); }
    }
    if (reduced.addEventListener) reduced.addEventListener('change', function () {
      if (reduced.matches) stopMotion();
    });
    var menu = root.querySelector('.ob2-menu');
    root.querySelectorAll('a[href^="#ob2-"]').forEach(function (link) {
      link.addEventListener('click', function (event) {
        var target = root.querySelector(link.getAttribute('href'));
        if (!target) return;
        event.preventDefault();
        if (menu) menu.open = false;
        target.scrollIntoView({ behavior: reduced.matches ? 'auto' : 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
      });
    });
    if (menu) {
      var summary=menu.querySelector('summary');
      summary.setAttribute('aria-expanded',String(menu.open));
      menu.addEventListener('toggle',function(){summary.setAttribute('aria-expanded',String(menu.open));});
      menu.querySelectorAll('nav a').forEach(function(link){link.addEventListener('click',function(){menu.open=false;});});
      document.addEventListener('click', function (event) {
        if (menu.open && !menu.contains(event.target)) menu.open = false;
      });
      menu.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          menu.open = false;
          menu.querySelector('summary').focus();
        }
      });
    }
  });
})();

}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",start,{once:true});}else{start();}})();
(function(){if(window.bnImageGuard)return;window.bnImageGuard=true;document.addEventListener('contextmenu',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});document.addEventListener('dragstart',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});})();