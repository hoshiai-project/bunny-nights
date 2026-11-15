(function(){document.querySelectorAll('.obv').forEach(function(root){
var menu=root.querySelector('.obv-menu');if(!menu||menu.dataset.ready)return;menu.dataset.ready='true';
menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){menu.open=false;});});
document.addEventListener('click',function(e){if(menu.open&&!menu.contains(e.target))menu.open=false;});
menu.addEventListener('keydown',function(e){if(e.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
});})();

(function(){document.querySelectorAll('.obv').forEach(function(root){
var config=root.querySelector('#obv-gallery-data'),grid=root.querySelector('#obv-gallery-grid'),pending=root.querySelector('#obv-preparing');
if(!config||!grid||!pending)return;
var photos;try{photos=JSON.parse(config.textContent);}catch(e){return;}
if(!Array.isArray(photos))return;
photos.forEach(function(photo){
if(!photo||typeof photo.src!=='string'||!photo.src.trim())return;
var url;try{url=new URL(photo.src.trim(),document.baseURI);if(!['http:','https:'].includes(url.protocol))return;}catch(e){return;}
var caption=typeof photo.caption==='string'?photo.caption:'';
var figure=document.createElement('figure');figure.className='obv-tile';
var button=document.createElement('button');button.type='button';button.className='obv-photo';button.setAttribute('aria-haspopup','dialog');button.setAttribute('aria-label',(caption||'接客風景')+'の画像を拡大');
var img=document.createElement('img');img.src=url.href;img.alt=typeof photo.alt==='string'?photo.alt:caption;img.loading='lazy';
var text=document.createElement('figcaption');text.textContent=caption;
button.appendChild(img);figure.appendChild(button);figure.appendChild(text);grid.appendChild(figure);
});
if(grid.children.length){grid.hidden=false;pending.hidden=true;root.querySelector('.obv-gallery-intro').textContent='写真をタップすると、大きく表示できます。';}
});})();
(function(){document.querySelectorAll('.obv').forEach(function(root){
var dialog=root.querySelector('dialog');if(!dialog||typeof dialog.showModal!=='function')return;
var lastFocus=null;
root.querySelectorAll('.obv-photo').forEach(function(button){button.addEventListener('click',function(){
var img=button.querySelector('img');lastFocus=button;
dialog.querySelector('.obv-expanded').src=img.src;
dialog.querySelector('.obv-expanded').alt=img.alt;
dialog.querySelector('.obv-modal-caption').textContent=button.closest('figure').querySelector('figcaption').textContent;
dialog.showModal();
});});
dialog.querySelector('.obv-close').addEventListener('click',function(){dialog.close();});
dialog.addEventListener('click',function(e){var r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close();});
dialog.addEventListener('close',function(){if(lastFocus)lastFocus.focus();});
});})();

(function(){if(window.bnImageGuard)return;window.bnImageGuard=true;document.addEventListener('contextmenu',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});document.addEventListener('dragstart',function(event){if(event.target.closest&&event.target.closest('img,canvas'))event.preventDefault();});})();