
(function(){document.querySelectorAll('.oba .oba-menu').forEach(function(menu){
if(menu.dataset.ready)return;menu.dataset.ready='true';
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.open=false;});});
document.addEventListener('click',function(e){if(menu.open&&!menu.contains(e.target))menu.open=false;});
menu.addEventListener('keydown',function(e){if(e.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
});})();

(function(){if(window.bnImageGuard)return;window.bnImageGuard=true;document.addEventListener('contextmenu',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});document.addEventListener('dragstart',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});})();