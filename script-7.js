
(function upgradeHeartAndGiftMachine(){
 const heart=document.getElementById('livingHeart'), bubble=document.getElementById('heartBubble');
 if(heart&&bubble&&!heart.dataset.reactionsUpgraded){
  heart.dataset.reactionsUpgraded='1';let taps=0,hideTimer;
  const reactions=[
   ['Psst… kamu itu rumah kecil yang selalu ingin aku pulangi. 🏡💗','💗'],
   ['Kalau hari ini terasa berat, istirahat dulu ya. Kamu nggak harus kuat setiap saat. 🫶','🥺'],
   ['Senyummu masih jadi notifikasi favoritku. ✨','😍'],
   ['Peluk virtual terkirim! Bayangkan aku memelukmu erat sebentar. 🤗','🫂'],
   ['Satu fakta penting: kamu berharga, bahkan di hari ketika kamu merasa biasa saja. 🌷','💖'],
   ['Misi kecil hari ini: minum air, tarik napas, lalu ingat ada yang sayang kamu. 💧','🥰'],
   ['Kamu menemukan easter egg hati! Hadiah rahasianya: satu cium jauh. Muah! 😘','😘'],
   ['Terima kasih sudah sampai sejauh ini di cerita kecil kita. Aku senang kamu ada. 💌','💝']
  ];
  heart.addEventListener('click',()=>{taps++;const active=document.querySelector('.story-stage.active');let pick=reactions[(taps-1)%reactions.length];if(active&&(/surat|letter/i.test((active.innerText||'').slice(0,120))))pick=['Kalau surat ini bisa memelukmu, pasti aku sudah menyelipkan seribu peluk di dalamnya. 💌','🥹'];if(taps%4===0)pick=['BONUS HATI KE-' + taps + '! Kamu berhak mendapat pelukan ekstra dan semua hal baik hari ini. 🎉💗','💘'];heart.textContent=pick[1];bubble.textContent=pick[0];bubble.classList.add('show');heart.classList.remove('mascot-pop');void heart.offsetWidth;heart.classList.add('mascot-pop');if(typeof hearts==='function')hearts(taps%4===0?10:4);clearTimeout(hideTimer);hideTimer=setTimeout(()=>bubble.classList.remove('show'),4300)});
 }
 const oldButton=document.getElementById('giftDraw'), oldResult=document.getElementById('giftResult');
 if(oldButton&&oldResult&&!oldButton.dataset.noRepeatUpgrade){
  const button=oldButton.cloneNode(true);oldButton.replaceWith(button);button.dataset.noRepeatUpgrade='1';
  const result=oldResult;const caption=document.createElement('div');caption.className='gift-machine-caption';caption.id='giftMachineCaption';caption.textContent='Mesin siap! Setiap putaran memberi kejutan baru ♡';result.parentNode.insertBefore(caption,result.nextSibling);
  const prizes=[
   {icon:'💌',title:'Surat mini untukmu',message:'Kalau aku bisa memilih satu hal untuk diulang, aku ingin mengulang momen saat aku sadar kamu begitu spesial.'},
   {icon:'🤗',title:'Voucher pelukan hangat',message:'Kupon satu pelukan lamaaa—tanpa buru-buru melepas. Bisa ditagih kapan saja kita bertemu.'},
   {icon:'🌷',title:'Alasan kamu istimewa',message:'Kamu membuat hal sederhana terasa punya arti. Terima kasih sudah menjadi dirimu sendiri.'},
   {icon:'🍰',title:'Voucher camilan favorit',message:'Hari camilan! Kamu pilih yang kamu suka, dan kita nikmati sambil cerita tentang apa saja.'},
   {icon:'🎬',title:'Movie date pilihanmu',message:'Kamu yang pilih filmnya, camilannya, dan tempat duduk ternyaman. Tugasku menemani kamu.'},
   {icon:'✨',title:'Permintaan kecil',message:'Hari ini kamu boleh minta satu hal manis dariku: pujian, kata penyemangat, atau pesan suara.'},
   {icon:'🌙',title:'Janji malam ini',message:'Sebelum tidur, semoga kamu ingat tiga hal: kamu dicintai, kamu berharga, dan kamu tidak sendirian.'},
   {icon:'💗',title:'Hadiah paling rahasia',message:'Di antara banyak kemungkinan, aku tetap ingin mengenalmu lagi, memilihmu lagi, dan merawat cerita kita.'},
   {icon:'🧸',title:'Hari manja gratis',message:'Voucher untuk hari ketika kamu ingin dimanja: boleh minta perhatian ekstra dan peluk virtual sebanyak yang kamu mau.'},
   {icon:'🌈',title:'Pengingat kecil',message:'Kamu nggak perlu sempurna untuk disayang. Kamu yang sekarang pun sudah sangat berarti.'}
  ];let bag=[],draws=0,busy=false;
  function refill(){bag=prizes.map((_,i)=>i);for(let i=bag.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]]}}
  refill();
  button.addEventListener('click',()=>{if(busy)return;busy=true;button.disabled=true;button.classList.remove('drawing');result.classList.remove('reveal');void button.offsetWidth;button.classList.add('drawing');caption.textContent='Mesin sedang memilih kejutan khusus buat kamu… ✨';
   setTimeout(()=>{if(!bag.length)refill();const prize=prizes[bag.pop()];draws++;result.innerHTML='<div style="font-size:34px;margin-bottom:5px">'+prize.icon+'</div><strong>'+prize.title+'</strong><div style="margin-top:7px">'+prize.message+'</div>';result.classList.remove('reveal');void result.offsetWidth;result.classList.add('reveal');caption.textContent=bag.length+' hadiah berbeda tersisa sebelum mesin mengacak ulang. Putaran ke-'+draws+' 💞';button.textContent='🎁';button.disabled=false;button.classList.remove('drawing');busy=false;if(typeof hearts==='function')hearts(12);const mascot=document.getElementById('livingHeart'),mb=document.getElementById('heartBubble');if(mascot&&mb){mb.textContent='Hadiah baru terbuka! '+prize.title+' '+prize.icon;mb.classList.add('show');setTimeout(()=>mb.classList.remove('show'),3500)}burstGift();},650);
  });
  function burstGift(){const symbols=['♡','✦','💗','✨','🌷','💕'];for(let i=0;i<20;i++){const el=document.createElement('span');el.className='gift-burst';el.textContent=symbols[Math.floor(Math.random()*symbols.length)];el.style.left=(35+Math.random()*30)+'vw';el.style.top=(40+Math.random()*20)+'vh';el.style.setProperty('--dx',(Math.random()*440-220)+'px');el.style.setProperty('--dy',(Math.random()*-420-60)+'px');el.style.animationDelay=(Math.random()*.25)+'s';document.body.appendChild(el);setTimeout(()=>el.remove(),2100)}}
 }
})();
