
/* Cinematic opening + gift reveal enhancement. Existing interactions and assets remain intact. */
(function(){
 if(!document.getElementById('cinematicIntro')){
  const intro=document.createElement('div');intro.id='cinematicIntro';intro.className='cinematic-intro';intro.setAttribute('role','dialog');intro.setAttribute('aria-modal','true');intro.setAttribute('aria-labelledby','introTitle');
  intro.innerHTML='<div class="intro-stars" aria-hidden="true"></div><div class="intro-inner"><div class="intro-eyebrow">A LITTLE FILM MADE OF US</div><h1 class="intro-title" id="introTitle">Untuk kamu,<br><em>pemeran favoritku.</em></h1><p class="intro-copy">Ada cerita kecil yang kusimpan di sini. Tentang hal-hal sederhana, tentang kamu, dan tentang betapa senangnya aku karena semesta mempertemukan kita.</p><button class="intro-start" id="startLoveFilm" type="button">MULAI CERITA KITA ♡</button><div class="intro-foot">tekan untuk membuka kenangan · chapter one</div></div>';
  document.body.appendChild(intro);
  const start=()=>{intro.classList.add('dismissed');document.body.style.overflow='';setTimeout(()=>intro.remove(),1100);try{if(typeof toggleMusic==='function'&&!window.musicPlaying)toggleMusic()}catch(e){};try{if(typeof hearts==='function')hearts(18)}catch(e){};const first=document.querySelector('.story-stage.active')||document.querySelector('#atas');if(first)first.scrollIntoView({behavior:'smooth',block:'start'});};
  document.body.style.overflow='hidden';document.getElementById('startLoveFilm').addEventListener('click',start);
  intro.addEventListener('keydown',e=>{if(e.key==='Escape')start()});
 }
 const giftButton=document.getElementById('giftDraw'), result=document.getElementById('giftResult');
 if(giftButton&&result&&!giftButton.dataset.cinematicEnhanced){giftButton.dataset.cinematicEnhanced='true';giftButton.addEventListener('click',()=>{
   giftButton.classList.remove('drawing');result.classList.remove('reveal');void giftButton.offsetWidth;giftButton.classList.add('drawing');
   const finish=()=>{result.classList.remove('reveal');void result.offsetWidth;result.classList.add('reveal');giftBurst();};
   setTimeout(finish,650);
 });}
 function giftBurst(){const symbols=['♡','✦','💗','✨','🌷','💕'];for(let i=0;i<22;i++){const el=document.createElement('span');el.className='gift-burst';el.textContent=symbols[Math.floor(Math.random()*symbols.length)];el.style.left=(35+Math.random()*30)+'vw';el.style.top=(40+Math.random()*20)+'vh';el.style.setProperty('--dx',(Math.random()*440-220)+'px');el.style.setProperty('--dy',(Math.random()*-420-60)+'px');el.style.animationDelay=(Math.random()*.25)+'s';document.body.appendChild(el);setTimeout(()=>el.remove(),2100)}}
})();
