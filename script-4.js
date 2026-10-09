
(function(){
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Reveal each page section gently as it enters the viewport.
  const revealTargets=document.querySelectorAll('section,.hero');
  revealTargets.forEach((el,i)=>{if(i>0)el.classList.add('reveal-on-scroll')});
  if('IntersectionObserver' in window && !reduced){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('revealed');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -4% 0px'});
    document.querySelectorAll('.reveal-on-scroll').forEach(el=>observer.observe(el));
  } else document.querySelectorAll('.reveal-on-scroll').forEach(el=>el.classList.add('revealed'));
  // Tiny hearts on every deliberate interactive click/tap, without blocking the control.
  const symbols=['💗','💕','💖','♡','💘','💞'];
  let lastBurst=0;
  function burst(x,y){
    const now=Date.now(); if(now-lastBurst<55)return; lastBurst=now;
    const count=reduced?1:4;
    for(let i=0;i<count;i++){
      const heart=document.createElement('span'); heart.className='love-burst'; heart.textContent=symbols[Math.floor(Math.random()*symbols.length)];
      heart.style.left=(x+(Math.random()*32-16))+'px'; heart.style.top=(y+(Math.random()*20-10))+'px';
      heart.style.setProperty('--size',(15+Math.random()*17)+'px');heart.style.setProperty('--drift',(Math.random()*90-45)+'px');heart.style.setProperty('--turn',(Math.random()*90-45)+'deg');
      document.body.appendChild(heart);heart.addEventListener('animationend',()=>heart.remove(),{once:true});setTimeout(()=>heart.remove(),1400);
    }
  }
  document.addEventListener('pointerdown',e=>{
    const target=e.target.closest('button,a,[role="button"],summary,label,input[type="checkbox"],input[type="radio"],.polaroid,.future-timecard,.comfort-choice');
    if(!target)return;
    // Avoid triggering on the hidden file input itself; the visible label gets the hearts.
    if(target.matches('input[type="file"]'))return;
    burst(e.clientX,e.clientY);
  },{passive:true});
  // A soft transition when internal links jump to another section.
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
    const id=a.getAttribute('href');if(!id||id==='#')return;const dest=document.querySelector(id);if(dest){dest.classList.remove('section-arrive');void dest.offsetWidth;dest.classList.add('section-arrive');setTimeout(()=>dest.classList.remove('section-arrive'),700)}
  }));
})();
