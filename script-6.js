
(function finaleVoiceButton(){
 const btn=document.getElementById('finaleVoice'),status=document.getElementById('finaleVoiceStatus');
 if(!btn||btn.dataset.ready)return;btn.dataset.ready='1';
 btn.addEventListener('click',async()=>{
  const audio=document.getElementById('personalVoicePlayer');
  if(!audio){if(status)status.textContent='File pesan-suara.wav belum ditemukan di website ini 💗';return;}
  try{
   if(!audio.paused){audio.pause();btn.innerHTML='<span>♫</span> Dengarkan pesan suaraku';if(status)status.textContent='Pesan suara dijeda. Ketuk lagi untuk melanjutkan.';return;}
   audio.currentTime=0;await audio.play();btn.innerHTML='<span>Ⅱ</span> Jeda pesan suaraku';if(status)status.textContent='Dengarkan sampai selesai ya… pesan ini khusus untukmu. 💗';
   audio.onended=()=>{btn.innerHTML='<span>♫</span> Putar lagi pesan suaraku';if(status)status.textContent='Semoga suaraku bisa memelukmu dari jauh. 🤍';};
  }catch(e){if(status)status.textContent='Browser belum bisa memutar audio. Coba tekan tombol putar pada pemutar suara di halaman.';}
 });
})();
