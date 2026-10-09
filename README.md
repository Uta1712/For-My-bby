# Website Romantis untuk BBY ♡

Website statis romantis untuk GitHub Pages. Fitur lama tetap dipertahankan, termasuk galeri/kenangan, surat, kejutan, musik, fitur ruang nyaman, mode sebelum tidur, dan pemutar rekaman suara pribadi.

## File yang diperlukan
- `index.html`
- `pesan-suara.wav`

Simpan kedua file tersebut di folder yang sama dalam repositori GitHub Pages agar pemutar suara bekerja. Jika nama file rekaman diganti, perbarui atribut `src` pada elemen `audio#personalVoicePlayer` di `index.html`.

## Fitur tambahan
Bagian **Surat dari masa depan** menyediakan empat surat interaktif dan satu pesan penutup emosional. Tombol dengarkan suaraku mengarahkan pengunjung ke rekaman suara yang sudah disertakan.

Website tidak mengirim rekaman ke server lain. Namun, bila repositori/website publik, siapa pun yang memiliki akses ke halaman dan file audio mungkin dapat mendengarkannya.

## Upgrade cinematic
- Opening film interaktif dengan tombol mulai; musik tetap mengikuti kebijakan autoplay browser.
- Mesin hadiah mendapat animasi pengocokan dan ledakan dekoratif saat hadiah muncul.
- Foto tetap tertanam di HTML; rekaman suara disertakan sebagai `pesan-suara.wav`.
