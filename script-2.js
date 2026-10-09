
(function(){
 const letters={
  today:{title:'Untuk kamu, hari ini',text:`Hai, sayang.

Kalau hari ini kamu merasa belum cukup baik, berhenti sebentar, ya. Kamu bukan daftar hal yang berhasil kamu selesaikan. Kamu juga bukan kesalahan yang pernah kamu buat. Kamu adalah seseorang yang sedang belajar, bertumbuh, dan mencoba lagi—dan itu layak dihargai.

Aku nggak ingin kamu hanya menyayangi dirimu saat semuanya berjalan baik. Tolong tetap lembut pada dirimu saat kamu sedang berjuang. Kamu berharga, bahkan di hari ketika kamu sendiri sulit mempercayainya.`},
  hard:{title:'Kamu boleh beristirahat',text:`Sayang, kamu nggak harus menyelesaikan semuanya malam ini. Kamu boleh berhenti, menarik napas, menangis kalau memang perlu, atau meminta ditemani tanpa harus punya penjelasan yang rapi.

Aku nggak bisa menghapus semua hal sulit dari hidupmu, dan aku nggak mau berpura-pura bisa. Tapi aku ingin menjadi seseorang yang mau mendengarkanmu, bukan menghakimimu. Kita bisa mengambil satu langkah kecil dulu. Hari ini, itu sudah cukup.`},
  distance:{title:'Jarak bukan berarti kamu sendirian',text:`Kalau aku belum bisa ada di sampingmu sekarang, aku tahu pesan di layar ini nggak sama dengan pelukan sungguhan. Aku nggak akan berpura-pura itu sama.

Tapi rasa sayangku nggak berhenti hanya karena kita sedang berjauhan. Kamu boleh merindukanku, dan kamu juga boleh menjalani harimu sendiri. Nanti, saat kita bertemu, ceritakan semuanya—yang lucu, yang melelahkan, bahkan hal kecil yang kamu pikir nggak penting. Aku ingin mendengarnya.`},
  future:{title:'Untuk kita yang belum sampai di sana',text:`Aku nggak tahu persis seperti apa hidup kita nanti. Aku nggak bisa menebak semua jalan yang akan kita lewati. Tapi aku berharap, saat kita berubah, kita tetap memberi ruang untuk saling mengenal lagi.

Aku berharap kita belajar meminta maaf tanpa mencari menang, mendengar tanpa buru-buru membela diri, dan merayakan hal kecil yang sering luput. Aku nggak menjanjikan hubungan yang selalu mudah. Aku ingin ikut membangun hubungan yang aman untuk berkata jujur, bertumbuh, dan tetap menjadi diri sendiri.

Terima kasih sudah menjadi bagian dari ceritaku sekarang.`}
 };
 const card=document.getElementById('futureLetter'),title=document.getElementById('futureLetterTitle'),body=document.getElementById('futureLetterBody'),last=document.getElementById('futureLast');
 document.querySelectorAll('[data-future]').forEach(btn=>btn.addEventListener('click',()=>{const item=letters[btn.dataset.future];if(!item)return;title.textContent=item.title;body.textContent=item.text;card.classList.add('show');last.classList.remove('show');card.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});}));
 document.getElementById('futureVoice').addEventListener('click',()=>{const player=document.getElementById('personalVoicePlayer');if(player){player.scrollIntoView({behavior:'smooth',block:'center'});player.play().catch(()=>{});}});
 document.getElementById('futureContinue').addEventListener('click',()=>{last.classList.add('show');last.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'nearest'});});
 document.getElementById('futureCloseLast').addEventListener('click',()=>{last.classList.remove('show');const hug=document.getElementById('comfortAffection');if(hug)hug.classList.add('show');});
})();
