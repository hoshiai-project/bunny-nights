(function(){document.querySelectorAll('.obh').forEach(function(root){
var menu=root.querySelector('.obh-menu');if(!menu||menu.dataset.ready)return;menu.dataset.ready='true';
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.open=false;});});
document.addEventListener('click',function(e){if(menu.open&&!menu.contains(e.target))menu.open=false;});
menu.addEventListener('keydown',function(e){if(e.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
});})();
(function(){document.querySelectorAll('.obh').forEach(function(root){
var dialog=root.querySelector('dialog');if(!dialog||typeof dialog.showModal!=='function')return;
var lastFocus=null;
root.querySelectorAll('.obh-photo').forEach(function(button){button.addEventListener('click',function(){
var img=button.querySelector('img');lastFocus=button;
dialog.querySelector('.obh-expanded').src=img.src;
dialog.querySelector('.obh-expanded').alt=img.alt;
dialog.querySelector('.obh-modal-caption').textContent=button.closest('figure').querySelector('figcaption').textContent;
dialog.showModal();
});});
dialog.querySelector('.obh-close').addEventListener('click',function(){dialog.close();});
dialog.addEventListener('click',function(e){var r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close();});
dialog.addEventListener('close',function(){if(lastFocus)lastFocus.focus();});
});})();

(function(){if(window.bnImageGuard)return;window.bnImageGuard=true;document.addEventListener('contextmenu',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});document.addEventListener('dragstart',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});})();