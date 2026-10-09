
// Memuat lagu YouTube saat pengguna menekan tombol. Klik lagi untuk menghentikannya.
const youtubeVideoId='2KIBAsqj7aQ';
let musicPlaying=false;
function toggleMusic(){
 const btn=document.getElementById('musicToggle');
 const dock=document.getElementById('musicDock');
 const status=document.getElementById('musicStatus');
 const panel=document.getElementById('youtubeMusicPanel');
 const host=document.getElementById('youtubePlayerHost');
 if(!musicPlaying){
  const frame=document.createElement('iframe');
  frame.title='Musik romantis untuk BBY';
  frame.allow='autoplay; encrypted-media; picture-in-picture; web-share';
  frame.referrerPolicy='strict-origin-when-cross-origin';
  frame.allowFullscreen=true;
  frame.src='https://www.youtube-nocookie.com/embed/'+youtubeVideoId+'?autoplay=1&playsinline=1&loop=1&playlist='+youtubeVideoId;
  host.replaceChildren(frame);
  panel.classList.remove('show');musicPlaying=true;dock.classList.add('playing');
  btn.textContent='Ⅱ';btn.setAttribute('aria-label','Hentikan musik');btn.setAttribute('aria-pressed','true');status.textContent='lagu YouTube diputar ♡';hearts(7);
 }else{
  host.replaceChildren();panel.classList.remove('show');musicPlaying=false;dock.classList.remove('playing');
  btn.textContent='♫';btn.setAttribute('aria-label','Putar musik dari YouTube');btn.setAttribute('aria-pressed','false');status.textContent='autoplay dicoba · sentuh ♫ jika belum berbunyi';
 }
}
document.getElementById('musicToggle').addEventListener('click',toggleMusic);

function hearts(n=5){
 const colors=['🩷','🩵','♡','💗','🤍','💖','💕','✧'];
 for(let i=0;i<n;i++){
  setTimeout(()=>{
   const e=document.createElement('span');e.className='heart';e.setAttribute('aria-hidden','true');e.textContent=colors[Math.floor(Math.random()*colors.length)];
   e.style.left=(5+Math.random()*90)+'vw';e.style.bottom=(5+Math.random()*18)+'vh';
   e.style.fontSize=(15+Math.random()*23)+'px';e.style.setProperty('--duration',(2.8+Math.random()*2)+'s');e.style.setProperty('--sway',(-35+Math.random()*70)+'px');document.body.appendChild(e);
   e.addEventListener('animationend',()=>e.remove(),{once:true});setTimeout(()=>e.remove(),5200);
  },i*95);
 }
}
// Hati kecil sesekali melayang di latar, tanpa menutupi isi halaman.
function ambientHeart(){
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||document.hidden)return;
 const e=document.createElement('span');e.className='heart ambient';e.setAttribute('aria-hidden','true');e.textContent=['♡','🩷','🩵','✧'][Math.floor(Math.random()*4)];
 e.style.left=(Math.random()*96)+'vw';e.style.bottom='-28px';e.style.fontSize=(12+Math.random()*13)+'px';e.style.setProperty('--duration',(8+Math.random()*6)+'s');document.body.appendChild(e);e.addEventListener('animationend',()=>e.remove(),{once:true});setTimeout(()=>e.remove(),15000);
}
setInterval(ambientHeart,1450);
function reveal(){
 const el=document.getElementById('pesan');el.classList.add('show');hearts(15);
 setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center'}),100);
}



// Pembuka floral yang elegan saat amplop cinta pertama kali dibuka.
let flowerRevealShown=false;
function showFlowerReveal(){
 if(flowerRevealShown)return;
 flowerRevealShown=true;
 const overlay=document.createElement('div');overlay.className='flower-reveal';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Pembuka bunga untukmu');
 overlay.innerHTML='<div class="flower-glow" aria-hidden="true"></div><div class="flower-copy"><div class="flower-eyebrow">SEBUAH PESAN UNTUKMU</div><h2 class="flower-title">Untuk kamu,<br>yang selalu istimewa.</h2><p class="flower-subtitle">Semoga hari-harimu selalu menemukan alasan untuk mekar.</p><button class="flower-continue" type="button">Buka surat cintaku&nbsp; →</button></div>';
 const blooms=[[-8,8,155,-18,0],[18,4,110,22,.12],[50,1,135,-10,.18],[82,8,160,25,.05],[106,29,112,-25,.2],[1,45,135,15,.12],[99,55,145,-18,.25],[8,88,150,25,.08],[42,99,118,-15,.24],[77,92,160,12,.16],[29,69,78,18,.34],[68,32,84,-24,.28],[48,76,96,12,.3]];
 blooms.forEach(([x,y,size,rot,delay])=>{const flower=document.createElement('span');flower.className='flower-bloom';flower.setAttribute('aria-hidden','true');flower.style.setProperty('--x',x+'%');flower.style.setProperty('--y',y+'%');flower.style.setProperty('--size',size+'px');flower.style.setProperty('--rot',rot+'deg');flower.style.setProperty('--delay',delay+'s');flower.innerHTML='<i></i><i></i><i></i><i></i><i></i><i></i><b></b>';overlay.appendChild(flower)});
 for(let i=0;i<24;i++){const petal=document.createElement('span');petal.className='flower-petal';petal.setAttribute('aria-hidden','true');petal.style.setProperty('--x',(Math.random()*100)+'vw');petal.style.setProperty('--dur',(4.4+Math.random()*3.2)+'s');petal.style.setProperty('--delay',(Math.random()*.9)+'s');petal.style.setProperty('--rot',(Math.random()*220)+'deg');petal.style.setProperty('--drift',(-90+Math.random()*180)+'px');overlay.appendChild(petal)}
 document.body.appendChild(overlay);requestAnimationFrame(()=>overlay.classList.add('show'));
 const close=()=>{overlay.classList.add('leaving');setTimeout(()=>overlay.remove(),1000)};
 overlay.querySelector('.flower-continue').addEventListener('click',close);
 // Beri waktu animasi mekar, lalu lanjut otomatis jika tombol belum ditekan.
 window.setTimeout(()=>{if(document.body.contains(overlay))close()},6200);
}

// Fitur cerita interaktif: surat, kuis jahil, hadiah virtual, dan ending rahasia.
(function addRomanticInteractions(){
 const styleButton=(label,fn)=>{const b=document.createElement('button');b.className='story-action';b.type='button';b.textContent=label;b.addEventListener('click',fn);return b};
 const surat=document.getElementById('surat');
 if(surat&&!document.getElementById('envelopeCard')){
  const card=document.createElement('div');card.className='interactive-card';card.id='envelopeCard';
  card.innerHTML='<div class="section-tag">PESAN RAHASIA</div><h3 style="font:500 23px Georgia;color:#a85f82;margin:0">Ada surat untukmu 💌</h3><div class="envelope" id="loveEnvelope" role="button" tabindex="0" aria-label="Buka amplop cinta"><span>♡</span></div><div class="envelope-hint" id="envelopeHint">Ketuk amplopnya pelan-pelan untuk membuka surat</div>';
  const note=surat.querySelector('.note'); if(note){note.style.display='none';card.appendChild(styleButton('Buka surat cintaku ♡',()=>{if(!musicPlaying)toggleMusic();showFlowerReveal();note.style.display='block';note.scrollIntoView({behavior:'smooth',block:'nearest'});document.getElementById('loveEnvelope').classList.add('open');document.getElementById('envelopeHint').textContent='Kelopak bunga akan mengantarmu ke surat ini 🤍';hearts(8)}));note.style.transition='opacity .3s';}
  surat.appendChild(card);
  const open=()=>{if(!musicPlaying)toggleMusic();showFlowerReveal();const env=document.getElementById('loveEnvelope');env.classList.add('open');document.getElementById('envelopeHint').textContent='Musik cinta mulai mengiringi suratmu ♡';hearts(5)};
  document.getElementById('loveEnvelope').addEventListener('click',open);document.getElementById('loveEnvelope').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}});
 }
 const footer=document.querySelector('footer');
 if(footer&&!document.getElementById('quizStage')){
  const quiz=document.createElement('section');quiz.id='quizStage';quiz.innerHTML='<div class="section-tag">SEDIKIT UJIAN CINTA 😚</div><h2>Kuis kecil tentang kita</h2><p class="sub">Nggak ada nilai jelek kok… kecuali kalau kamu nggak pilih aku 😌💕</p><div class="interactive-card"><div id="quizQuestion" style="font:500 21px Georgia;color:#a85f82">Kalau aku lagi kangen, aku paling pengin…</div><div class="quiz-options" id="quizOptions"></div><div class="quiz-feedback" id="quizFeedback" aria-live="polite"></div><button class="story-action" id="quizNext" type="button" style="display:none">Pertanyaan berikutnya →</button></div>';
  footer.parentNode.insertBefore(quiz,footer);
  const qs=[{q:'Kalau aku lagi kangen, aku paling pengin…',a:['Dipeluk lamaaa 🤗','Dikirimin pesan manis 💌','Ditemenin walau cuma diam 🩷','Semua boleh, asal sama kamu 😚'],f:['Peluk virtual terkirim!','Satu pesan manis segera menyusul 💌','Kadang ditemani saja sudah cukup 🤍','Jawaban paling bikin hati meleleh! 💗']},{q:'Kalau kita punya satu hari bebas, pilih yang mana?',a:['Jalan-jalan berdua 🌷','Makan enak sampai kenyang 🍰','Nonton sambil rebahan 🧸','Apa saja, asal bareng kamu 💞'],f:['Petualangan kecil kita, yuk!','Aku sudah membayangkan dessert-nya 😋','Selimut dan film, sempurna.','Aduh, jawabanmu bikin senyum sendiri 🥹']},{q:'Pertanyaan terakhir… kamu sayang aku nggak?',a:['Sayang banget! 💗','Sayang polll 😭💗','Aku klik ini dua kali boleh?','Aku sayang, jangan ge-er 😏'],f:['Aku juga sayang kamu! 🩷','Peluk virtual paling besar buatmu!','Klik sekali cukup, rasa sayangnya dihitung berkali-kali.','Ketahuan malu-malu tapi sayang 😏💕']}];let qi=0;
  function renderQuiz(){document.getElementById('quizQuestion').textContent=qs[qi].q;const opts=document.getElementById('quizOptions');opts.replaceChildren();document.getElementById('quizFeedback').textContent='';document.getElementById('quizNext').style.display='none';qs[qi].a.forEach((a,i)=>{const b=document.createElement('button');b.type='button';b.textContent=a;b.addEventListener('click',()=>{document.getElementById('quizFeedback').textContent=qs[qi].f[i];Array.from(opts.children).forEach(x=>x.disabled=true);document.getElementById('quizNext').style.display='inline-block';hearts(4)});opts.appendChild(b)})}
  document.getElementById('quizNext').addEventListener('click',()=>{qi++;if(qi>=qs.length){document.getElementById('quizQuestion').textContent='LULUS DENGAN NILAI CINTA 1000% 💗';document.getElementById('quizOptions').replaceChildren();document.getElementById('quizFeedback').textContent='Hadiah kelulusanmu: satu peluk virtual dan banyak sayang.';document.getElementById('quizNext').style.display='none';}else renderQuiz()});renderQuiz();
 }
 if(footer&&!document.getElementById('giftStage')){
  const gift=document.createElement('section');gift.id='giftStage';gift.innerHTML='<div class="section-tag">HADIAH KECIL UNTUKMU</div><h2>Mesin hadiah sayang 🎁</h2><p class="sub">Klik kotaknya dan lihat hadiah manis apa yang kamu dapat hari ini.</p><div class="interactive-card"><button type="button" class="gift-box" id="giftDraw" aria-label="Ambil hadiah virtual">🎁</button><div class="gift-result" id="giftResult" aria-live="polite">Satu klik kecil, satu kejutan manis ♡</div><p style="font-size:12px;color:#a88799">Boleh dicoba berkali-kali, hadiahnya random!</p></div>';
  footer.parentNode.insertBefore(gift,footer);
  const gifts=['Voucher 1 pelukan lamaaa 🤗','Voucher pilih film untuk movie date 🎬','Satu traktiran camilan dari aku 🍰','1000 cium jauh 😘😘😘','Hak untuk minta kata-kata manis kapan saja 💌','Satu hari penuh perhatian ekstra 🩷','Voucher jalan berdua, tujuan kamu yang pilih 🌷','Hadiah rahasia: aku makin sayang kamu 💗'];document.getElementById('giftDraw').addEventListener('click',()=>{document.getElementById('giftResult').textContent=gifts[Math.floor(Math.random()*gifts.length)];hearts(8)});
 }
 if(footer&&!document.getElementById('moodJarStage')){
  const mood=document.createElement('section');mood.id='moodJarStage';mood.innerHTML='<div class="section-tag">UNTUK HARI-HARIMU</div><h2>Toples kecil untuk hatimu 💌</h2><p class="sub">Pilih yang paling menggambarkan perasaanmu sekarang. Ada pesan kecil dariku di dalamnya.</p><div class="interactive-card"><div class="mood-grid"><button class="mood-choice" type="button" data-mood="kangen"><span>🥺</span>Aku kangen kamu</button><button class="mood-choice" type="button" data-mood="sedih"><span>🌧️</span>Aku lagi sedih</button><button class="mood-choice" type="button" data-mood="ngambek"><span>😤</span>Aku lagi ngambek</button><button class="mood-choice" type="button" data-mood="sayang"><span>🥰</span>Ingin disayang</button></div><div class="mood-note" id="moodNote" aria-live="polite"></div></div>';
  footer.parentNode.insertBefore(mood,footer);
  const moodMessages={kangen:'Kalau aku bisa, sekarang aku sudah ada di sampingmu, menggenggam tanganmu dan bilang: sebentar lagi kita bikin kenangan baru, ya. Sampai saat itu, anggap ini peluk paling erat dariku. 🤍',sedih:'Hei, sayang. Kamu nggak harus kuat setiap saat. Istirahat dulu, tarik napas pelan-pelan. Aku bangga sama kamu, bahkan di hari ketika kamu merasa belum melakukan apa-apa. Kamu tetap layak disayang. 🌷',ngambek:'Oke, aku siap menerima protesnya 😭 Tapi setelah kamu siap, sini cerita pelan-pelan, ya. Perasaanmu penting buat aku. Aku mungkin nggak selalu langsung paham, tapi aku mau belajar memahami kamu. 🩷',sayang:'Ini pengingat kecil: kamu berharga, kamu cukup, dan kamu nggak perlu melakukan apa pun untuk pantas disayang. Aku suka kamu sebagai dirimu sendiri—hari ini, besok, dan di hari-hari biasa yang sederhana. 💗'};
  mood.querySelectorAll('[data-mood]').forEach(b=>b.addEventListener('click',()=>{const note=document.getElementById('moodNote');note.textContent=moodMessages[b.dataset.mood];note.classList.remove('show');requestAnimationFrame(()=>note.classList.add('show'));hearts(5)}));
 }
 
if(footer&&!document.getElementById('moodBoosterStage')){
 const boost=document.createElement('section');boost.id='moodBoosterStage';boost.innerHTML='<div class="section-tag">SEDIKIT PELUK UNTUK HARI INI</div><h2>Mood booster buat BBY 🌷</h2><p class="sub">Kalau hari ini terasa berat, kamu nggak harus pura-pura baik-baik saja. Pilih yang kamu butuhkan sekarang, ya.</p><div class="boost-card"><div class="boost-message" id="boostMessage" aria-live="polite">Hai, sayang. Berhenti sebentar, tarik napas. Kamu nggak harus menyelesaikan semuanya hari ini. 🤍</div><div class="boost-actions"><button class="boost-action" type="button" data-boost="hug">🫂 Peluk virtual</button><button class="boost-action" type="button" data-boost="kiss">😘 Cium jauh</button><button class="boost-action" type="button" data-boost="compliment">🌸 Ingat hal baik</button><button class="boost-action" type="button" data-boost="breathe">☁️ Tenang sebentar</button><button class="boost-action" type="button" data-boost="laugh">💌 Pesan random</button></div><p class="boost-breath" id="boostBreath">Kamu boleh istirahat. Kamu tetap berharga, bahkan di hari yang tidak mudah.</p></div>';
 footer.parentNode.insertBefore(boost,footer);
 const boostMessages={
  hug:['Anggap ini peluk yang lama dan hangat dari aku. Nggak perlu cerita dulu kalau belum siap. Kita diam sebentar juga nggak apa-apa. 🫂','Sini, aku peluk dari jauh. Semoga sedikit rasa beratnya bisa kamu taruh sebentar di sini. 🤍'],
  compliment:['Aku harap kamu tahu betapa banyak hal baik dalam dirimu. Cara kamu berusaha, peduli, dan tetap melangkah itu berarti—meski nggak selalu kamu sadari. 🌷','Kamu nggak harus jadi sempurna supaya pantas disayang. Jadi dirimu sendiri saja sudah lebih dari cukup. 💗'],
  breathe:['Coba pelan-pelan: tarik napas selama 4 hitungan, tahan 2 hitungan, lalu hembuskan selama 6 hitungan. Ulangi kalau terasa nyaman. Nggak perlu buru-buru. ☁️','Lepaskan bahumu sebentar. Minum sedikit air, cari posisi nyaman, dan beri dirimu izin untuk berhenti sejenak. Satu langkah kecil sudah cukup. 🤍'],
  kiss:['Satu cium jauh yang lembut di kening—semoga kamu merasa disayang, bahkan dari jauh. 😘💗','Mwah! Satu cium kecil buat BBY, semoga hari ini terasa sedikit lebih ringan. 💋🌷'],
  laugh:['Pengumuman penting: BBY diwajibkan menerima satu peluk, satu camilan enak, dan pujian tanpa membantah. Ini peraturan resmi dari aku. 😌💗','Kalau hari ini kamu jadi awan, aku mau jadi langitnya. Kalau jadi kucing, aku tetap sayang—tapi tolong jangan cakar hati aku. 🐈💌','Tugasmu sekarang cuma satu: bertahan dengan lembut pada diri sendiri. Bonus tugas: senyum tipis kalau pesan ini berhasil bikin kamu senyum. 🌸']
 };
 function showAffectionAnimation(kind){
   let overlay=document.getElementById('affectionOverlay');
   if(!overlay){overlay=document.createElement('div');overlay.id='affectionOverlay';overlay.className='affection-overlay';overlay.innerHTML='<div class="affection-card" role="dialog" aria-modal="true" aria-labelledby="affectionTitle"><div class="affection-kicker">KIRIMAN SAYANG UNTUK BBY</div><div class="affection-stage"><div class="affection-scene cinematic-scene" aria-label="Ilustrasi pasangan saling mendekat lalu berpelukan"><div class="scene-glow"></div><svg class="couple-art" viewBox="0 0 340 220" role="img" aria-label="Pasangan romantis saat senja"><defs><linearGradient id="skyGlow" x1="0" y1="0" x2="0.9" y2="1"><stop offset="0" stop-color="#f9dce5"/><stop offset="1" stop-color="#e8b9cc"/></linearGradient><linearGradient id="boyCoat" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#54404f"/><stop offset="1" stop-color="#302b3b"/></linearGradient><linearGradient id="girlCoat" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f3d9d5"/><stop offset="1" stop-color="#c99aa9"/></linearGradient><linearGradient id="skinTone" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#f3c9b7"/><stop offset="1" stop-color="#dba18e"/></linearGradient></defs><circle cx="170" cy="86" r="77" fill="url(#skyGlow)" opacity=".68"/><circle cx="170" cy="86" r="28" fill="#fff0d7" opacity=".7"/><path d="M0 170 Q60 144 112 168 T220 163 T340 155 V220 H0Z" fill="#d9a5bb" opacity=".35"/><g class="svg-person svg-boy"><path class="boy-legs" d="M111 142 L119 198 Q120 205 130 204 L137 203 L138 157 L154 157 L158 202 Q161 208 170 204 L178 201 L174 139Z" fill="#383343"/><path d="M106 69 Q103 52 116 40 Q132 26 149 39 Q160 48 157 69 L153 89 L116 89Z" fill="#3a2d3a"/><path d="M117 53 Q128 37 145 47 Q153 53 151 70 L148 80 L118 80Z" fill="url(#skinTone)"/><path d="M112 48 Q118 29 140 34 Q158 37 161 57 L153 53 L147 43 Q133 50 116 51Z" fill="#352a37"/><path d="M109 78 Q126 70 151 80 Q168 91 171 124 L177 158 L103 158 L104 112 Q103 91 109 78Z" fill="url(#boyCoat)"/><path d="M111 86 Q99 99 93 119 L81 148 Q78 157 86 162 Q94 166 99 156 L117 127 L130 98Z" fill="#4b3949"/><path class="boy-arm" d="M153 91 Q169 97 177 119 L190 142 Q194 151 186 156 Q179 160 173 150 L154 128 L139 103Z" fill="#493747"/><path d="M126 48 Q136 45 145 50" stroke="#bd857e" stroke-width="1.5" fill="none" opacity=".6"/></g><g class="svg-person svg-girl"><path d="M204 142 L199 198 Q198 205 188 204 L181 202 L182 157 L165 157 L164 202 Q162 208 153 204 L145 201 L150 139Z" fill="#9e7189"/><path d="M185 43 Q201 29 218 42 Q232 53 226 78 L220 91 L184 87 L179 64Z" fill="#684754"/><path d="M189 51 Q199 39 213 48 Q222 55 218 73 L213 82 L188 79Z" fill="url(#skinTone)"/><path d="M181 57 Q181 36 201 34 Q223 33 229 55 L222 49 L214 43 Q202 51 185 50Z" fill="#684754"/><path d="M184 79 Q200 73 218 81 Q232 90 235 120 L237 158 L169 158 L171 111 Q171 91 184 79Z" fill="url(#girlCoat)"/><path d="M180 88 Q167 96 161 118 L151 144 Q148 153 156 158 Q164 162 169 151 L184 126 L197 98Z" fill="#d8b0bd"/><path class="girl-arm" d="M219 91 Q234 94 241 113 L253 141 Q257 150 249 155 Q241 159 236 149 L219 127 L206 102Z" fill="#e5c2c9"/><path d="M191 49 Q200 45 211 50" stroke="#bd857e" stroke-width="1.5" fill="none" opacity=".6"/></g><g class="embrace-arms"><path d="M120 98 Q139 121 166 130 Q191 137 215 109" stroke="#493747" stroke-width="17" stroke-linecap="round" fill="none"/><path d="M218 103 Q201 130 176 136 Q146 142 123 119" stroke="#d9aab8" stroke-width="15" stroke-linecap="round" fill="none"/></g><g class="kiss-hearts"><path d="M169 43 C159 32 146 44 169 61 C192 44 179 32 169 43Z" fill="#c77d9f"/><circle cx="194" cy="29" r="3" fill="#fff8fc"/><circle cx="143" cy="31" r="2.5" fill="#fff8fc"/></g></svg><span class="affection-hug-heart">♡</span><span class="petal petal-one">✿</span><span class="petal petal-two">✧</span><span class="petal petal-three">♡</span></div></div><h3 class="affection-title" id="affectionTitle">Peluk yang hangat</h3><p class="affection-copy" id="affectionCopy">Bayangkan kita bertemu setelah lama saling rindu, lalu berpelukan erat. 🤍</p><button class="affection-close" type="button" id="affectionClose">Makasih, sayang ♡</button></div>';document.body.appendChild(overlay);overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.closest('#affectionClose'))overlay.classList.remove('show')});document.addEventListener('keydown',e=>{if(e.key==='Escape')overlay.classList.remove('show')});}
   overlay.dataset.kind=kind;overlay.querySelector('.affection-hug-heart').textContent=kind==='kiss'?'💋':'♡';overlay.querySelector('#affectionTitle').textContent=kind==='kiss'?'Cium jauh buat BBY':'Akhirnya, peluk kamu';overlay.querySelector('#affectionCopy').textContent=kind==='kiss'?'Dua hati mendekat, lalu satu cium lembut di kening. Semoga kamu merasa disayang, bahkan dari jauh. 💗':'Bayangkan kita berlari kecil saling mendekat, lalu berpelukan erat tanpa ingin buru-buru melepas. Kamu aman di sini. 🤍';overlay.classList.remove('show');void overlay.offsetWidth;overlay.classList.add('show');
 }
 const breath=document.getElementById('boostBreath');
 boost.querySelectorAll('[data-boost]').forEach(b=>b.addEventListener('click',()=>{const list=boostMessages[b.dataset.boost];const msg=list[Math.floor(Math.random()*list.length)];const target=document.getElementById('boostMessage');target.textContent=msg;target.style.animation='none';void target.offsetWidth;target.style.animation='cinemaIn .65s ease both';breath.textContent=b.dataset.boost==='breathe'?'Lakukan hanya kalau terasa nyaman. Jika tidak ingin latihan napas, kamu boleh langsung memilih pesan lain.':'Kamu boleh tekan tombol lain kapan saja untuk menerima pesan berbeda. Aku ada di sini untuk mengingatkanmu bahwa kamu disayang. ♡';if(b.dataset.boost==='hug'||b.dataset.boost==='kiss')showAffectionAnimation(b.dataset.boost);if(typeof hearts==='function')hearts(3);if(typeof romanticRecordAnswer==='function')romanticRecordAnswer('mood_booster_'+b.dataset.boost,'Pilihan Mood Booster',b.textContent.trim()+' — '+msg)}));
}

if(footer&&!document.getElementById('voucherStage')){
  const vouchers=document.createElement('section');vouchers.id='voucherStage';vouchers.innerHTML='<div class="section-tag">KUPON KHUSUS BUAT KAMU</div><h2>Buku voucher cinta 🎟️</h2><p class="sub">Pilih voucher yang ingin kamu klaim. Simpan baik-baik ya—nanti kita wujudkan di dunia nyata. ♡</p><div class="interactive-card"><div class="voucher-list"><button type="button" class="voucher" data-voucher="peluk"><span class="v-icon">🤗</span><span><strong>Voucher peluk 10 menit</strong><small>Peluk lama, tanpa buru-buru</small></span></button><button type="button" class="voucher" data-voucher="makan"><span class="v-icon">🍰</span><span><strong>Voucher camilan favorit</strong><small>Kamu pilih, aku traktir</small></span></button><button type="button" class="voucher" data-voucher="film"><span class="v-icon">🎬</span><span><strong>Voucher movie date</strong><small>Kamu pilih film dan camilannya</small></span></button><button type="button" class="voucher" data-voucher="jalan"><span class="v-icon">🌷</span><span><strong>Voucher jalan berdua</strong><small>Tujuan kecil pilihanmu</small></span></button><button type="button" class="voucher" data-voucher="manis"><span class="v-icon">💌</span><span><strong>Voucher kata-kata manis</strong><small>Bisa ditukar kapan saja saat butuh</small></span></button></div><div class="voucher-status" id="voucherStatus" aria-live="polite">Belum ada voucher yang diklaim ♡</div></div>';
  footer.parentNode.insertBefore(vouchers,footer);
  const voucherMessages={peluk:'Voucher peluk berhasil diklaim! Nanti aku peluk kamu erat-erat selama 10 menit. 🤗',makan:'Voucher camilan berhasil diklaim! Siapkan daftar makanan favoritmu ya. 🍰',film:'Movie date berhasil diklaim! Kamu yang pilih filmnya, aku yang siapkan camilan. 🎬',jalan:'Voucher jalan berdua berhasil diklaim! Kita cari hari yang pas dan bikin kenangan baru. 🌷',manis:'Voucher kata-kata manis berhasil diklaim. Kalau butuh diingatkan bahwa kamu disayang, bilang saja ya. 💌'};
  vouchers.querySelectorAll('[data-voucher]').forEach(b=>b.addEventListener('click',()=>{const claimed=b.classList.toggle('claimed');b.setAttribute('aria-pressed',String(claimed));document.getElementById('voucherStatus').textContent=claimed?voucherMessages[b.dataset.voucher]:'Voucher dilepas dulu. Kamu bisa klaim lagi kapan saja ♡';if(claimed)hearts(5)}));
 }
 if(!document.getElementById('cinemaEnding')){
  const overlay=document.createElement('div');overlay.id='cinemaEnding';overlay.className='cinema-overlay';overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-label','Ending romantis');overlay.innerHTML='<div class="finale-stars" aria-hidden="true"></div><div class="finale-vignette" aria-hidden="true"></div><span class="cinema-spark" style="left:8%;bottom:-10%;animation-delay:-2s">✧</span><span class="cinema-spark" style="left:84%;bottom:-15%;animation-delay:-5s">♡</span><span class="cinema-spark" style="left:48%;bottom:-20%;animation-delay:-3s">✦</span><div class="finale-orbit" aria-hidden="true"><span>♡</span></div><div class="cinema-content"><div class="cinema-kicker">A LITTLE UNIVERSE, MADE FOR YOU</div><div class="finale-overline">✦ UNTUK ORANG FAVORITKU ✦</div><div class="cinema-heart">♥</div><h2 class="cinema-title">Di antara miliaran kemungkinan,<br><em>aku memilih kamu.</em></h2><div class="finale-divider"><span>✧</span></div><p class="cinema-copy">Kalau semesta memutar waktu dari awal, aku tetap ingin menemukanmu—mengenalmu pelan-pelan, menertawakan hal-hal kecil bersamamu, dan jatuh cinta kepadamu lagi. Bukan karena kisah kita selalu sempurna, tapi karena kamu adalah seseorang yang ingin terus aku pilih, bahkan di hari-hari biasa.</p><p class="finale-promise">Ini bukan akhir cerita kita.<br><strong>Ini cuma jeda sebelum kenangan berikutnya. ♡</strong></p><div class="finale-signature">dengan seluruh sayangku, untuk BBY 🤍</div><div class="finale-actions"><button type="button" class="finale-voice" id="finaleVoice"><span>♫</span> Dengarkan pesan suaraku</button><button type="button" class="cinema-close" id="closeCinema"><span>♡</span> Simpan momen ini selamanya</button></div><p class="finale-voice-status" id="finaleVoiceStatus" aria-live="polite">Ada satu hal lagi yang ingin kamu dengar… 💌</p></div>';
  document.body.appendChild(overlay);document.getElementById('closeCinema').addEventListener('click',()=>{overlay.classList.remove('show');setTimeout(()=>{overlay.style.display='none'},1200)});
 }
 if(footer&&!document.getElementById('secretStage')){
  const secret=document.createElement('section');secret.id='secretStage';secret.innerHTML='<div class="section-tag">HALAMAN TERAKHIR</div><h2>Rahasia kecil yang terkunci 🔐</h2><p class="sub">Ada pesan terakhir yang cuma bisa dibuka dengan kata rahasia. Coba ketik kata yang paling pas untuk kita.</p><div class="interactive-card"><div class="lock-icon" id="lockIcon">🔒</div><form id="secretForm"><input class="lock-input" id="secretWord" autocomplete="off" placeholder="Kata rahasianya…" aria-label="Kata rahasia"><div><button class="story-action" type="submit">Buka rahasia ♡</button></div></form><div id="secretFeedback" class="quiz-feedback" aria-live="polite"></div><div id="secretMessage" class="secret-message">Kalau kamu sampai di sini, berarti kamu sudah membuka semua bagian kecil yang aku siapkan. Aku harap kamu tahu, kamu bukan cuma bagian dari website ini—kamu bagian dari banyak hal indah yang ingin aku jalani. Terima kasih sudah hadir, BBY. Semoga kita terus saling memilih, saling menjaga, dan punya banyak cerita untuk dikenang. Aku sayang kamu. Selalu, dengan cara yang lembut dan tulus. 🩷🩵🤍</div></div>';
  footer.parentNode.insertBefore(secret,footer);
  document.getElementById('secretForm').addEventListener('submit',e=>{e.preventDefault();const val=document.getElementById('secretWord').value.trim().toLowerCase();if(['sayang','sayangku','bby','cinta'].includes(val)){document.getElementById('secretMessage').classList.add('unlocked');document.getElementById('lockIcon').textContent='💖';document.getElementById('secretFeedback').textContent='Berhasil dibuka! Ini pesan paling spesial untukmu 🥹';hearts(16);const finale=document.getElementById('cinemaEnding');if(finale){finale.style.display='flex';requestAnimationFrame(()=>finale.classList.add('show'));if(!finale.dataset.celebrated){finale.dataset.celebrated='1';const symbols=['✦','♡','✧','♥','✿','✨'];for(let i=0;i<54;i++){const bit=document.createElement('span');bit.className='finale-firework';bit.textContent=symbols[i%symbols.length];bit.style.setProperty('--fx',(Math.random()*100)+'vw');bit.style.setProperty('--fy',(Math.random()*100)+'vh');bit.style.setProperty('--fd',(Math.random()*1.1)+'s');bit.style.setProperty('--fr',(Math.random()*360)+'deg');bit.style.setProperty('--dx',((Math.random()-.5)*180)+'px');bit.style.setProperty('--dy',((Math.random()-.5)*180)+'px');finale.appendChild(bit);setTimeout(()=>bit.remove(),3600)}}}}else{document.getElementById('secretFeedback').textContent='Belum cocok, coba kata: sayang, sayangku, bby, atau cinta ♡';document.getElementById('lockIcon').textContent='🔐'}});
 }
 // Maskot hati kecil hidup, bisa diketuk untuk kalimat penyemangat.
 if(!document.getElementById('livingHeart')){const heart=document.createElement('button');heart.id='livingHeart';heart.className='living-heart';heart.type='button';heart.textContent='💗';heart.setAttribute('aria-label','Ketuk hati kecil');const bubble=document.createElement('div');bubble.id='heartBubble';bubble.className='heart-bubble';bubble.textContent='Hai, BBY! Kamu lucu banget kalau senyum 🤍';document.body.append(heart,bubble);const lines=['Psst… kamu disayang, lho 🩷','Jangan lupa minum air ya, sayang 💧','Senyummu adalah plot twist favoritku ✨','Aku kirim peluk virtual dulu 🤗','Kamu sudah sampai sejauh ini, hebat! 💗','Klik menu berikutnya, ada hal manis menunggu…'];let bi=0;heart.addEventListener('click',()=>{bubble.textContent=lines[bi++%lines.length];bubble.classList.add('show');hearts(3);setTimeout(()=>bubble.classList.remove('show'),3200)})}
})();

// Navigasi cerita: setiap bagian dibuka dengan klik, bukan scroll panjang.
(function setupJourney(){
 const stages=[document.getElementById('atas'),...Array.from(document.querySelectorAll('section')),document.querySelector('footer')].filter(Boolean);
 if(!stages.length)return;
 const progress=document.createElement('div');progress.className='journey-progress';progress.innerHTML='<span></span>';document.body.appendChild(progress);
 const fill=progress.querySelector('span');let current=0;
 stages.forEach((stage,i)=>{
  stage.classList.add('story-stage');stage.classList.toggle('active',i===0);
  const controls=document.createElement('div');controls.className='journey-controls';
  if(i>0){const back=document.createElement('button');back.className='journey-btn';back.type='button';back.textContent='← Kembali';back.addEventListener('click',()=>go(i-1));controls.appendChild(back)}
  const next=document.createElement('button');next.className='journey-btn next';next.type='button';next.textContent=i===stages.length-1?'♡ Baca dari awal':'Lanjut pelan-pelan ♡';next.addEventListener('click',()=>go(i===stages.length-1?0:i+1));controls.appendChild(next);
  const counter=document.createElement('div');counter.className='stage-counter';counter.textContent=(i+1)+' / '+stages.length+' · cerita kecil kita';
  stage.appendChild(controls);stage.appendChild(counter);
 });
 function go(i){current=Math.max(0,Math.min(stages.length-1,i));stages.forEach((stage,j)=>stage.classList.toggle('active',j===current));
  const twelfth=stages[11];
  if(twelfth){twelfth.classList.toggle('page-twelve',current===11);if(current===11&&!twelfth.dataset.page12Stars){twelfth.dataset.page12Stars='1';const glyphs=['✦','✧','♡','⋆','✿','✴'];for(let k=0;k<24;k++){const star=document.createElement('span');star.className='page12-star';star.setAttribute('aria-hidden','true');star.textContent=glyphs[k%glyphs.length];star.style.setProperty('--x',(4+Math.random()*92)+'%');star.style.setProperty('--y',(8+Math.random()*82)+'%');star.style.setProperty('--size',(10+Math.random()*19)+'px');star.style.setProperty('--dur',(2.4+Math.random()*3.5)+'s');star.style.setProperty('--delay',(-Math.random()*4)+'s');twelfth.prepend(star)}}}
  fill.style.width=((current+1)/stages.length*100)+'%';window.scrollTo({top:0,behavior:'smooth'});hearts(current===11?18:(current===stages.length-1?9:3));}
 // Tombol utama di halaman pembuka diarahkan ke tahap berikutnya.
 const opener=document.querySelector('#atas .primary');if(opener){opener.onclick=()=>go(1);}
 fill.style.width=(100/stages.length)+'%';
})();

// Coba mulai musik saat halaman dibuka. Browser tertentu tetap mewajibkan sentuhan pengguna.
(function tryAutoplay(){
 const host=document.getElementById('youtubePlayerHost');
 const panel=document.getElementById('youtubeMusicPanel');
 if(!host||!panel)return;
 const frame=document.createElement('iframe');
 frame.title='Musik romantis untuk BBY';
 frame.allow='autoplay; encrypted-media; picture-in-picture; web-share';
 frame.referrerPolicy='strict-origin-when-cross-origin';
 frame.allowFullscreen=true;
 frame.src='https://www.youtube-nocookie.com/embed/'+youtubeVideoId+'?autoplay=1&playsinline=1&loop=1&playlist='+youtubeVideoId;
 host.replaceChildren(frame);
 // Tampilkan panel agar pengguna bisa menekan play bila autoplay diblokir.
 panel.classList.add('show');
})();


// Pencatatan jawaban ke Google Sheets. Isi URL setelah deploy Apps Script.
const ROMANTIC_SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzUcKt4fT1vhzNzAzrTYrVE9IW7WrsFPi_rI7ySq_pe_HYMdpf_ZncF8-D3KoSuGYCidw/exec';
const ROMANTIC_TRACKING_CONSENT_KEY = 'romanticAnswersConsentV1';
let romanticSessionId = '';
let romanticTrackingAllowed = false;

function romanticGetSessionId(){
  try {
    let id = sessionStorage.getItem('romanticAnswerSessionId');
    if(!id){id = 'sesi-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2,10);sessionStorage.setItem('romanticAnswerSessionId',id)}
    return id;
  } catch(e) { return 'sesi-' + Date.now().toString(36); }
}
function romanticActiveStage(){
  const active = document.querySelector('.story-stage.active');
  if(!active) return document.title || 'Website romantis';
  const heading = active.querySelector('h1,h2,h3');
  return (heading && heading.textContent.trim()) || active.id || 'Tahap website';
}
function romanticRecordAnswer(eventName, question, answer){
  if(!romanticTrackingAllowed || !ROMANTIC_SHEETS_ENDPOINT || ROMANTIC_SHEETS_ENDPOINT.includes('PASTE_GOOGLE_APPS_SCRIPT')) return;
  const payload = {
    sessionId: romanticSessionId,
    stage: String(romanticActiveStage()).slice(0,180),
    event: String(eventName || 'interaksi').slice(0,80),
    question: String(question || '').slice(0,500),
    answer: String(answer || '').slice(0,1500),
    timestamp: new Date().toISOString()
  };
  try {
    const body = new URLSearchParams({payload: JSON.stringify(payload)}).toString();
    fetch(ROMANTIC_SHEETS_ENDPOINT, {
      method:'POST', mode:'no-cors',
      headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
      body
    }).then(()=>{
      const status=document.getElementById('romanticSaveStatus');
      if(status) status.textContent='Pilihanmu sedang dikirim dengan aman. ♡';
    }).catch(()=>{
      const status=document.getElementById('romanticSaveStatus');
      if(status) status.textContent='Koneksi belum berhasil. Kamu tetap bisa melanjutkan cerita. ♡';
    });
  } catch(e) { /* Website tetap berfungsi meski pencatatan tidak tersedia. */ }
}
function romanticShowConsent(){
  romanticSessionId = romanticGetSessionId();
  const overlay=document.createElement('div');
  overlay.id='romanticConsentDialog';
  overlay.setAttribute('role','dialog');overlay.setAttribute('aria-modal','true');overlay.setAttribute('aria-labelledby','romanticConsentTitle');
  overlay.innerHTML = '<div class="romantic-consent-card"><div class="romantic-consent-kicker">CATATAN KECIL ♡</div><h2 id="romanticConsentTitle">Sebelum kita mulai</h2><p>Kalau kamu setuju, pilihan di kuis dan fitur interaktif di halaman ini akan dikirim ke Google Sheets milik pembuat website agar bisa dibaca nanti. Kalau tidak, kamu tetap bisa menikmati seluruh website tanpa menyimpan jawaban.</p><p class="romantic-consent-small">Yang dicatat: jawaban/pilihan, nama tahap, dan waktu. Jangan masukkan informasi yang sangat pribadi.</p><div class="romantic-consent-actions"><button type="button" id="romanticConsentYes">Setuju, simpan jawabanku</button><button type="button" id="romanticConsentNo">Lanjut tanpa menyimpan</button></div><div id="romanticSaveStatus" role="status" aria-live="polite"></div></div>';
  document.body.appendChild(overlay);
  const close=(allow)=>{romanticTrackingAllowed=allow;try{sessionStorage.setItem(ROMANTIC_TRACKING_CONSENT_KEY,allow?'yes':'no')}catch(e){}overlay.classList.add('romantic-consent-hide');setTimeout(()=>overlay.remove(),260);};
  document.getElementById('romanticConsentYes').addEventListener('click',()=>close(true));
  document.getElementById('romanticConsentNo').addEventListener('click',()=>close(false));
}
(function initRomanticAnswerTracking(){
  const style=document.createElement('style');
  style.textContent = '#romanticConsentDialog{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:22px;background:rgba(37,25,33,.62);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);opacity:1;transition:opacity .26s ease}#romanticConsentDialog.romantic-consent-hide{opacity:0;pointer-events:none}.romantic-consent-card{width:min(100%,440px);padding:clamp(24px,6vw,38px);background:#fbf7f5;color:#46333e;border:1px solid rgba(255,255,255,.72);box-shadow:0 28px 90px #160d1540;border-radius:5px;text-align:left}.romantic-consent-kicker{font-size:10px;letter-spacing:.22em;color:#a46d84;font-weight:700}.romantic-consent-card h2{font:normal clamp(27px,6vw,36px)/1.15 Georgia,serif;margin:14px 0;color:#4a3340}.romantic-consent-card p{font-size:14px;line-height:1.75;color:#75616c}.romantic-consent-card .romantic-consent-small{font-size:12px;color:#927f88}.romantic-consent-actions{display:grid;gap:10px;margin-top:22px}.romantic-consent-actions button{width:100%;border:1px solid #d9b8c6;background:#563c4b;color:#fffafc;padding:13px 16px;cursor:pointer;font:inherit;font-size:13px;letter-spacing:.02em}.romantic-consent-actions button+button{background:transparent;color:#6e5662;border-color:#e5d7dd}.romantic-consent-actions button:focus-visible{outline:2px solid #b67f99;outline-offset:3px}#romanticSaveStatus{font-size:11px;color:#967284;margin-top:12px;min-height:1em}@media(prefers-reduced-motion:reduce){#romanticConsentDialog{transition:none}}';
  document.head.appendChild(style);
  let choice='';try{choice=sessionStorage.getItem(ROMANTIC_TRACKING_CONSENT_KEY)||''}catch(e){}
  romanticTrackingAllowed=choice==='yes';
  if(!choice) romanticShowConsent(); else romanticSessionId=romanticGetSessionId();

  // Kuis: simpan pertanyaan dan pilihan yang diketuk.
  document.addEventListener('click',function(e){
    const quizButton=e.target.closest('#quizOptions button');
    if(quizButton){const q=document.getElementById('quizQuestion');romanticRecordAnswer('jawaban_kuis',q?q.textContent.trim():'Kuis',quizButton.textContent.trim());return;}
    const moodButton=e.target.closest('[data-mood]');
    if(moodButton){romanticRecordAnswer('pilihan_suasana_hati','Suasana hati saat ini',moodButton.textContent.trim());return;}
    const voucherButton=e.target.closest('[data-voucher]');
    if(voucherButton){const claimed=voucherButton.classList.contains('claimed');romanticRecordAnswer(claimed?'klaim_voucher':'batalkan_voucher','Buku voucher pasangan',voucherButton.textContent.trim()+' — '+(claimed?'diklaim':'dibatalkan'));return;}
    const giftButton=e.target.closest('#giftDraw');
    if(giftButton){const result=document.getElementById('giftResult');romanticRecordAnswer('hadiah_virtual','Hadiah apa yang didapat?',result?result.textContent.trim():'Hadiah virtual');return;}
    const surpriseButton=e.target.closest('button.primary');
    if(surpriseButton && /kejutan/i.test(surpriseButton.textContent)){const result=document.getElementById('pesan');romanticRecordAnswer('membuka_kejutan','Pesan kejutan',result?result.textContent.trim():'Membuka kejutan');return;}
  },false);
  document.addEventListener('submit',function(e){
    if(e.target && e.target.id==='secretForm'){
      const input=document.getElementById('secretWord');
      const value=input?input.value.trim().toLowerCase():'';
      const accepted=['sayang','sayangku','bby','cinta'].includes(value);
      romanticRecordAnswer('jawaban_kata_rahasia','Kata rahasia untuk membuka ending',accepted?'Berhasil membuka ending (kata cocok)':'Percobaan belum cocok');
    }
  },true);
})();

