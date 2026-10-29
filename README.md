# Asesmen Digital — AI FOR TEACHERS

Aplikasi asesmen statis untuk **Elemen Perkembangan Teknologi dan Isu-isu Global**, kelas X Desain Pemodelan dan Informasi Bangunan (DPIB), SMK Negeri 1 Singkawang.

## Isi folder
- `index.html` — struktur halaman dan antarmuka Bootstrap
- `style.css` — tema responsif biru, kuning, dan putih
- `questions.js` — bank soal 40 butir
- `app.js` — logika asesmen, pengacakan, timer, umpan balik, dan hasil

## Menjalankan secara lokal
Buka `index.html` pada browser modern. Koneksi internet diperlukan untuk memuat Bootstrap dari CDN dan font web; komponen inti dapat tetap diuji dengan font cadangan jika font web tidak tersedia.

## Publikasi ke GitHub Pages
1. Masuk ke GitHub dan buat repository baru, misalnya `asesmen-dpib-ai`.
2. Unggah ke direktori utama repository keempat file: `index.html`, `style.css`, `questions.js`, dan `app.js`.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/(root)`, lalu tekan **Save**.
6. Tunggu proses publikasi selesai. GitHub akan menampilkan URL Pages pada bagian Pages; buka URL tersebut untuk menguji aplikasi.
7. Jika memperbarui soal atau kode, commit perubahan ke branch yang dipublikasikan.

## Cara kerja
- Identitas wajib diisi sebelum asesmen dimulai.
- Setiap sesi mengacak urutan 40 soal dan urutan empat pilihan jawaban.
- Kunci mengikuti objek opsi yang benar sehingga pengacakan tidak mengubah jawaban benar.
- Setelah pilihan diklik, opsi terkunci dan umpan balik langsung muncul.
- Durasi 90 menit. Jika waktu habis, asesmen otomatis selesai.
- Nilai = (jumlah jawaban benar / 40) × 100. Soal yang tidak dijawab dihitung tidak benar.
- Tombol **Cetak hasil** membuka dialog cetak browser.

## Privasi dan batasan penting
Ini adalah aplikasi frontend statis: identitas dan hasil tidak disimpan ke database dan tidak dikirim otomatis kepada guru. Data sesi berada di memori browser dan akan hilang ketika halaman dimuat ulang atau sesi baru dimulai. Untuk pengumpulan nilai terpusat, diperlukan backend atau integrasi layanan yang aman.
Karena kunci jawaban berada di file JavaScript yang diunduh browser, aplikasi ini cocok untuk latihan atau asesmen berisiko rendah, bukan ujian berpengawasan tinggi. GitHub Pages tidak menyediakan autentikasi atau penyimpanan hasil siswa dengan sendirinya.

## Pemeriksaan cepat
- Isi semua kolom identitas dan mulai sesi.
- Pastikan timer berjalan dan urutan soal berubah pada sesi baru.
- Pilih jawaban: semua opsi terkunci dan umpan balik muncul.
- Lanjutkan sampai soal terakhir atau uji waktu habis melalui alat pengujian lokal sebelum dipakai siswa.
