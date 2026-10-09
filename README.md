# Website Romantis — GitHub Pages

## File
- `index.html` — website romantis.
- `Code.gs` — endpoint Google Apps Script untuk menyimpan pilihan/jawaban ke Google Sheets.

## Aktifkan pencatatan Google Sheets

1. Buka https://script.google.com/ dengan akun Google yang ingin menerima jawaban, lalu buat **New project**.
2. Salin seluruh isi `Code.gs` dari paket ini ke editor Apps Script, menggantikan kode contoh.
3. Pilih fungsi `setupSpreadsheet` lalu klik **Run**. Setujui izin yang diminta. Buka **Execution log** untuk tautan spreadsheet `Jawaban Website Romantis` yang dibuat.
4. Klik **Deploy → New deployment → Web app**.
5. Pilih **Execute as: Me**. Pada **Who has access**, pilih **Anyone** jika tersedia dan kamu memang ingin website publik mengirim data. Klik **Deploy** dan salin URL Web app yang berakhiran `/exec`.
6. Buka `index.html`, cari `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`, lalu ganti teks tersebut dengan URL Web app yang kamu salin. Jangan hapus tanda kutip di sekeliling URL.
7. Simpan `index.html`, unggah ke repository GitHub Pages, lalu commit perubahan.
8. Buka website dan pilih **Setuju, simpan jawabanku** untuk mengaktifkan pencatatan di sesi browser itu. Pilihan **Lanjut tanpa menyimpan** tetap memungkinkan website digunakan tanpa mengirim jawaban.

## Data yang dicatat
Waktu, ID sesi acak, tahap website, jenis interaksi, pertanyaan, dan pilihan/jawaban. Website meminta persetujuan sebelum mulai mencatat. Kata rahasia tidak disimpan mentah; yang dicatat hanya apakah percobaannya berhasil. Data tidak dikirim jika endpoint belum diisi.

## Catatan privasi dan pengujian
- Endpoint Apps Script publik dapat menerima kiriman dari siapa pun yang mengetahui URL-nya. Jangan gunakan untuk kata sandi atau informasi sensitif; endpoint ini untuk jawaban ringan dari website romantis.
- `fetch` memakai mode `no-cors`, sehingga halaman tidak bisa membaca balasan server. Status browser hanya menunjukkan pengiriman telah dicoba; verifikasi dengan membuka Google Sheets setelah melakukan uji coba.
- Browser atau jaringan dapat memblokir pengiriman. Uji di browser yang sama setelah menyetujui pencatatan.
- Google Sheets dan Apps Script tunduk pada kuota dan ketentuan akun Google.
