/* Bank soal terpisah dari tampilan dan logika aplikasi. answer adalah indeks opsi yang benar (0-3). */
window.QUESTION_BANK = [
  {
    "q": "Apa yang dimaksud dengan perkembangan teknologi dalam bidang Desain Pemodelan dan Informasi Bangunan (DPIB)?",
    "options": [
      "Perubahan dan kemajuan alat, metode, serta sistem digital untuk merancang dan mengelola informasi bangunan",
      "Penggunaan alat manual saja tanpa perubahan metode",
      "Pengurangan kebutuhan perencanaan bangunan",
      "Kegiatan mengganti semua tenaga ahli dengan mesin"
    ],
    "answer": 0,
    "explain": "Perkembangan teknologi mencakup kemajuan perangkat, metode, dan sistem yang membantu perancangan, dokumentasi, koordinasi, serta pengelolaan bangunan."
  },
  {
    "q": "Perangkat lunak CAD paling umum digunakan untuk ....",
    "options": [
      "Menggambar dan menyunting gambar teknik secara digital",
      "Mengukur kadar air tanah tanpa alat tambahan",
      "Menggantikan seluruh proses pemeriksaan struktur",
      "Menentukan harga material secara otomatis tanpa data"
    ],
    "answer": 0,
    "explain": "CAD (Computer-Aided Design) membantu membuat, menyunting, dan mendokumentasikan gambar teknik secara digital."
  },
  {
    "q": "Apa keunggulan utama BIM dibandingkan gambar 2D yang berdiri sendiri?",
    "options": [
      "BIM hanya menghasilkan gambar yang lebih berwarna",
      "BIM mengintegrasikan model 3D dengan informasi elemen bangunan untuk koordinasi",
      "BIM menghilangkan kebutuhan semua pemeriksaan",
      "BIM selalu menjamin proyek selesai tanpa keterlambatan"
    ],
    "answer": 1,
    "explain": "BIM menghubungkan geometri model dengan informasi elemen sehingga dapat membantu koordinasi dan pengelolaan informasi proyek."
  },
  {
    "q": "Dalam model BIM, informasi seperti jenis material, ukuran, dan kode elemen dapat membantu tim untuk ....",
    "options": [
      "Menghapus dokumentasi proyek",
      "Menghindari komunikasi dengan disiplin lain",
      "Mengelola informasi elemen dan mendukung pengambilan keputusan",
      "Menentukan hasil akhir tanpa pemeriksaan"
    ],
    "answer": 2,
    "explain": "Data elemen dalam BIM membantu tim memahami spesifikasi dan mengelola informasi sepanjang proses proyek."
  },
  {
    "q": "Apa yang dimaksud dengan clash detection pada proyek BIM?",
    "options": [
      "Proses memilih warna dinding",
      "Proses mendeteksi benturan atau konflik antarunsur desain",
      "Proses menghitung nilai rapor",
      "Proses menghapus semua model 3D"
    ],
    "answer": 1,
    "explain": "Clash detection membantu menemukan konflik, misalnya pipa yang berpotongan dengan balok, sebelum pekerjaan dilakukan di lapangan."
  },
  {
    "q": "Contoh penggunaan kecerdasan buatan (AI) yang tepat dalam pekerjaan DPIB adalah ....",
    "options": [
      "Membuat keputusan struktur tanpa data dan pemeriksaan ahli",
      "Membantu mengelompokkan informasi atau menghasilkan alternatif desain yang kemudian ditinjau manusia",
      "Menghilangkan seluruh tanggung jawab perancang",
      "Menjamin setiap hasil digital selalu benar"
    ],
    "answer": 1,
    "explain": "AI dapat membantu analisis dan eksplorasi ide, tetapi hasilnya perlu diverifikasi oleh tenaga kompeten dan tidak menggantikan tanggung jawab profesional."
  },
  {
    "q": "Mengapa hasil yang dibuat oleh AI perlu diperiksa kembali sebelum digunakan dalam dokumen teknis?",
    "options": [
      "Karena AI tidak dapat menghasilkan teks apa pun",
      "Karena hasil AI dapat keliru, tidak lengkap, atau tidak sesuai konteks",
      "Karena semua hasil AI pasti melanggar aturan",
      "Karena pemeriksaan ulang membuat data tidak berguna"
    ],
    "answer": 1,
    "explain": "AI dapat menghasilkan informasi yang tampak meyakinkan tetapi salah atau tidak sesuai. Verifikasi sumber, standar, dan konteks tetap diperlukan."
  },
  {
    "q": "Apa fungsi utama Internet of Things (IoT) pada bangunan pintar?",
    "options": [
      "Menghubungkan sensor dan perangkat untuk mengumpulkan atau bertukar data",
      "Mengubah semua bahan menjadi bahan daur ulang",
      "Menggantikan pondasi bangunan",
      "Membuat koneksi internet tidak lagi dibutuhkan"
    ],
    "answer": 0,
    "explain": "IoT menghubungkan sensor dan perangkat untuk memantau kondisi seperti suhu, penggunaan energi, atau kualitas udara."
  },
  {
    "q": "Sensor suhu yang terhubung ke sistem bangunan dapat dimanfaatkan untuk ....",
    "options": [
      "Mengukur panjang pondasi tanpa sensor jarak",
      "Memantau suhu ruangan dan membantu pengaturan sistem HVAC",
      "Menentukan mutu beton hanya dari warna",
      "Menggantikan gambar kerja struktur"
    ],
    "answer": 1,
    "explain": "Sensor suhu menyediakan data kondisi ruangan yang dapat digunakan untuk pemantauan dan pengaturan sistem pemanas, ventilasi, dan pendingin."
  },
  {
    "q": "Teknologi realitas virtual (VR) dapat membantu pembelajaran DPIB dengan cara ....",
    "options": [
      "Memberi pengalaman menjelajahi model atau ruang bangunan secara imersif",
      "Menghilangkan kebutuhan memahami gambar teknik",
      "Menjamin semua dimensi bangunan benar tanpa pengecekan",
      "Menggantikan seluruh kegiatan praktik secara permanen"
    ],
    "answer": 0,
    "explain": "VR memungkinkan pengguna mengeksplorasi lingkungan digital secara imersif, misalnya untuk memahami ruang dan presentasi desain."
  },
  {
    "q": "Apa perbedaan umum augmented reality (AR) dan virtual reality (VR)?",
    "options": [
      "AR menambahkan objek digital ke lingkungan nyata, sedangkan VR membawa pengguna ke lingkungan virtual",
      "AR hanya digunakan untuk menghitung volume, sedangkan VR hanya untuk mengetik",
      "AR tidak memakai teknologi digital, sedangkan VR memakai kertas",
      "Keduanya selalu memiliki fungsi yang sama"
    ],
    "answer": 0,
    "explain": "AR memadukan elemen digital dengan pandangan dunia nyata, sementara VR menciptakan lingkungan virtual yang menggantikan pandangan sekitar."
  },
  {
    "q": "Drone dalam proyek konstruksi dapat digunakan secara tepat untuk ....",
    "options": [
      "Mengganti seluruh pengujian tanah",
      "Membantu dokumentasi udara dan pemantauan kemajuan lokasi proyek",
      "Menentukan kekuatan tulangan tanpa pemeriksaan",
      "Memastikan semua pekerja tidak membutuhkan APD"
    ],
    "answer": 1,
    "explain": "Drone dapat mengambil foto atau data udara untuk dokumentasi, survei, dan pemantauan, dengan tetap memperhatikan aturan keselamatan dan privasi."
  },
  {
    "q": "Teknologi pencetakan 3D pada konstruksi merujuk pada ....",
    "options": [
      "Mencetak dokumen dalam tiga salinan",
      "Membentuk objek atau komponen secara berlapis berdasarkan model digital",
      "Menggambar tiga tampak secara manual",
      "Mengukur luas tanah menggunakan pita ukur"
    ],
    "answer": 1,
    "explain": "Pencetakan 3D membentuk objek dengan menambahkan material lapis demi lapis berdasarkan model digital dan parameter proses."
  },
  {
    "q": "Apa manfaat utama penggunaan penyimpanan awan (cloud storage) dalam kerja tim proyek?",
    "options": [
      "Membuat semua file otomatis bebas dari risiko",
      "Memungkinkan penyimpanan dan berbagi berkas dari berbagai perangkat dengan pengaturan akses",
      "Menghapus kebutuhan pencadangan data",
      "Menjamin semua orang selalu mengedit file yang sama tanpa konflik"
    ],
    "answer": 1,
    "explain": "Cloud storage memudahkan akses dan kolaborasi, tetapi tetap memerlukan pengaturan izin, versi berkas, dan pencadangan."
  },
  {
    "q": "Seorang siswa akan membagikan gambar proyek melalui layanan cloud. Langkah keamanan yang paling tepat adalah ....",
    "options": [
      "Mengatur izin akses sesuai kebutuhan dan tidak membagikan tautan sensitif secara terbuka",
      "Menggunakan kata sandi yang sama untuk semua akun",
      "Membuat semua dokumen dapat diedit siapa saja",
      "Mengunggah data pribadi tanpa persetujuan"
    ],
    "answer": 0,
    "explain": "Pengaturan akses, kata sandi kuat, dan pembatasan berbagi membantu melindungi data serta mencegah perubahan yang tidak sah."
  },
  {
    "q": "Apa yang dimaksud dengan keamanan siber dalam penggunaan teknologi digital?",
    "options": [
      "Cara mempercepat warna pada gambar CAD",
      "Upaya melindungi perangkat, jaringan, dan data dari akses atau serangan yang tidak sah",
      "Kegiatan mencetak gambar teknik",
      "Metode menghitung kebutuhan keramik"
    ],
    "answer": 1,
    "explain": "Keamanan siber meliputi langkah untuk melindungi sistem digital dan informasi dari pencurian, kerusakan, atau akses tanpa izin."
  },
  {
    "q": "Sebuah email mengaku dari penyedia aplikasi dan meminta kata sandi melalui tautan yang mencurigakan. Tindakan terbaik adalah ....",
    "options": [
      "Segera memasukkan kata sandi",
      "Meneruskan email kepada semua teman",
      "Tidak mengeklik tautan, memeriksa pengirim melalui kanal resmi, dan melaporkan jika mencurigakan",
      "Mengunduh semua lampiran untuk diperiksa"
    ],
    "answer": 2,
    "explain": "Permintaan kata sandi melalui tautan mencurigakan dapat merupakan phishing. Gunakan kanal resmi dan jangan membagikan kredensial."
  },
  {
    "q": "Mengapa versi berkas gambar kerja perlu dikelola dengan baik?",
    "options": [
      "Agar tim tidak menggunakan revisi yang salah atau kedaluwarsa",
      "Agar setiap orang membuat nama file berbeda tanpa aturan",
      "Agar semua perubahan tidak tercatat",
      "Agar gambar lama selalu menggantikan gambar terbaru"
    ],
    "answer": 0,
    "explain": "Pengelolaan versi membantu tim mengidentifikasi dokumen terbaru, melacak revisi, dan mengurangi risiko pekerjaan berdasarkan gambar yang salah."
  },
  {
    "q": "Konsep bangunan hijau (green building) terutama menekankan ....",
    "options": [
      "Penggunaan kaca sebanyak mungkin tanpa analisis",
      "Efisiensi energi dan air serta pengurangan dampak lingkungan sepanjang siklus bangunan",
      "Penggunaan material termahal pada semua bagian",
      "Penghilangan seluruh ruang terbuka"
    ],
    "answer": 1,
    "explain": "Bangunan hijau berupaya mengurangi dampak lingkungan melalui efisiensi sumber daya, kenyamanan penghuni, dan pertimbangan siklus hidup."
  },
  {
    "q": "Contoh strategi desain yang dapat mengurangi kebutuhan energi pencahayaan pada siang hari adalah ....",
    "options": [
      "Menutup seluruh jendela sepanjang hari",
      "Menggunakan pencahayaan alami melalui bukaan yang dirancang sesuai kondisi iklim dan silau",
      "Menambah lampu di semua ruang tanpa perhitungan",
      "Memilih warna gelap untuk semua permukaan tanpa analisis"
    ],
    "answer": 1,
    "explain": "Pencahayaan alami yang dirancang dengan baik dapat mengurangi penggunaan lampu, dengan tetap mengendalikan silau dan panas matahari."
  },
  {
    "q": "Mengapa pemilihan material bangunan perlu mempertimbangkan dampak lingkungan?",
    "options": [
      "Karena harga merupakan satu-satunya faktor penting",
      "Karena material tidak memengaruhi lingkungan",
      "Karena produksi, transportasi, daya tahan, dan akhir masa pakai material dapat menimbulkan dampak lingkungan",
      "Karena semua material memiliki dampak yang sama"
    ],
    "answer": 2,
    "explain": "Dampak material perlu dinilai dari berbagai tahap siklus hidup, termasuk produksi, transportasi, penggunaan, dan pembuangan atau daur ulang."
  },
  {
    "q": "Perubahan iklim dapat memengaruhi perencanaan bangunan karena ....",
    "options": [
      "Risiko panas ekstrem, hujan lebat, banjir, atau angin dapat memengaruhi kenyamanan dan ketahanan bangunan",
      "Iklim tidak berhubungan dengan bangunan",
      "Semua lokasi memiliki risiko yang identik",
      "Perubahan iklim hanya memengaruhi interior"
    ],
    "answer": 0,
    "explain": "Perancangan perlu mempertimbangkan bahaya iklim setempat dan proyeksi risiko agar bangunan lebih aman, nyaman, dan tangguh."
  },
  {
    "q": "Apa contoh penerapan prinsip ekonomi sirkular dalam konstruksi?",
    "options": [
      "Membuang seluruh sisa material tanpa pemilahan",
      "Menggunakan material sekali pakai untuk semua pekerjaan",
      "Membongkar bangunan tanpa rencana pengelolaan limbah",
      "Memilah, menggunakan kembali, atau mendaur ulang material yang masih layak sesuai persyaratan"
    ],
    "answer": 3,
    "explain": "Ekonomi sirkular berupaya mempertahankan nilai material melalui pengurangan limbah, penggunaan kembali, dan daur ulang yang aman."
  },
  {
    "q": "Salah satu isu global terkait perkembangan teknologi adalah kesenjangan digital. Kesenjangan digital berarti ....",
    "options": [
      "Perbedaan warna antarmuka aplikasi",
      "Ketimpangan akses, keterampilan, atau manfaat teknologi digital antarindividu atau kelompok",
      "Perbedaan ukuran kertas gambar",
      "Kondisi ketika semua orang memiliki akses teknologi yang sama"
    ],
    "answer": 1,
    "explain": "Kesenjangan digital mencakup perbedaan akses perangkat dan internet, kemampuan menggunakan teknologi, serta kesempatan memperoleh manfaatnya."
  },
  {
    "q": "Dalam penggunaan AI untuk tugas sekolah, tindakan yang menunjukkan integritas akademik adalah ....",
    "options": [
      "Mengaku seluruh hasil AI sebagai karya sendiri tanpa pemeriksaan",
      "Menyalin jawaban tanpa memahami isi",
      "Menggunakan AI secara transparan sesuai aturan, memeriksa kebenaran, dan menyatakan bantuan bila diwajibkan",
      "Meminta AI membuat sumber referensi palsu"
    ],
    "answer": 2,
    "explain": "Integritas akademik menuntut kejujuran, verifikasi, dan kepatuhan pada aturan sekolah tentang penggunaan alat AI."
  },
  {
    "q": "Mengapa data pribadi pada foto lokasi proyek harus diperhatikan sebelum dipublikasikan?",
    "options": [
      "Karena semua foto bangunan selalu rahasia",
      "Karena publikasi foto tidak pernah diizinkan",
      "Karena foto tidak mungkin mengandung informasi pribadi",
      "Karena foto dapat menampilkan wajah, identitas, lokasi, atau informasi sensitif yang perlu dilindungi"
    ],
    "answer": 3,
    "explain": "Foto dapat mengungkap identitas orang atau informasi sensitif. Perlu izin dan pemeriksaan sebelum dibagikan secara publik."
  },
  {
    "q": "Seorang siswa menggunakan AI untuk mencari standar teknis, tetapi AI memberikan nomor standar yang tidak ditemukan pada sumber resmi. Apa langkah terbaik?",
    "options": [
      "Memakai nomor tersebut karena ditulis dengan yakin",
      "Memverifikasi melalui sumber resmi dan tidak menggunakan informasi yang belum terbukti",
      "Membuat nomor standar baru sendiri",
      "Menyebarkan informasi itu ke kelompok lain"
    ],
    "answer": 1,
    "explain": "Informasi teknis harus diverifikasi melalui dokumen resmi atau sumber tepercaya. Informasi yang tidak dapat dibuktikan tidak boleh dianggap benar."
  },
  {
    "q": "Bagaimana teknologi digital dapat membantu kolaborasi antara arsitek, insinyur struktur, dan insinyur MEP?",
    "options": [
      "Dengan menyediakan model atau dokumen bersama, aturan revisi, dan mekanisme koordinasi",
      "Dengan melarang setiap disiplin berkomunikasi",
      "Dengan menghapus catatan perubahan",
      "Dengan membiarkan tiap disiplin memakai data yang tidak diperbarui"
    ],
    "answer": 0,
    "explain": "Platform kolaborasi dan BIM dapat membantu pertukaran informasi, koordinasi lintas disiplin, serta penelusuran perubahan desain."
  },
  {
    "q": "Apa yang dimaksud dengan otomatisasi dalam industri konstruksi?",
    "options": [
      "Melakukan semua pekerjaan tanpa rencana",
      "Menghapus kebutuhan operator dan pengawasan dalam semua situasi",
      "Memanfaatkan sistem atau mesin untuk menjalankan tugas tertentu dengan campur tangan manusia yang berkurang",
      "Mengganti seluruh standar keselamatan"
    ],
    "answer": 2,
    "explain": "Otomatisasi menggunakan teknologi untuk menjalankan tugas tertentu. Pengawasan, perawatan, dan prosedur keselamatan tetap penting."
  },
  {
    "q": "Penerapan teknologi baru di tempat kerja sebaiknya disertai pelatihan karena ....",
    "options": [
      "Pelatihan menjamin tidak akan ada kesalahan",
      "Teknologi baru tidak membutuhkan pemahaman",
      "Pelatihan hanya diperlukan untuk pimpinan",
      "Pekerja perlu memahami penggunaan, batasan, risiko, dan prosedur teknologi tersebut"
    ],
    "answer": 3,
    "explain": "Pelatihan membantu pengguna bekerja secara kompeten, memahami risiko, dan menggunakan teknologi sesuai prosedur."
  },
  {
    "q": "Sebuah tim menggunakan AI untuk menghasilkan visualisasi bangunan. Hasilnya menarik, tetapi ukuran jendela pada gambar tidak sesuai gambar kerja. Apa keputusan yang tepat?",
    "options": [
      "Menggunakan visualisasi itu sebagai dokumen konstruksi tanpa revisi",
      "Memperbaiki atau memberi keterangan bahwa visualisasi bersifat konseptual dan memverifikasi kesesuaian dengan gambar kerja",
      "Mengubah gambar kerja agar sama dengan visualisasi tanpa persetujuan",
      "Mengabaikan ukuran karena tampilan lebih penting"
    ],
    "answer": 1,
    "explain": "Visualisasi AI dapat mengandung ketidaktepatan geometri. Dokumen teknis yang telah diverifikasi tetap menjadi acuan sesuai status dan prosedur proyek."
  },
  {
    "q": "Apa manfaat utama penggunaan sensor untuk memantau konsumsi energi gedung?",
    "options": [
      "Membantu mengidentifikasi pola pemakaian energi dan peluang efisiensi",
      "Menentukan kekuatan pondasi secara langsung",
      "Menghilangkan kebutuhan perawatan gedung",
      "Menjamin biaya energi selalu nol"
    ],
    "answer": 0,
    "explain": "Data sensor dapat menunjukkan pola konsumsi energi sehingga pengelola dapat menilai dan memperbaiki penggunaan energi."
  },
  {
    "q": "Dalam memilih teknologi digital untuk proyek kecil, pertimbangan yang paling tepat adalah ....",
    "options": [
      "Memilih teknologi paling mahal agar terlihat modern",
      "Menggunakan semua aplikasi yang tersedia",
      "Menyesuaikan fungsi, biaya, keterampilan pengguna, kebutuhan proyek, keamanan, dan manfaatnya",
      "Mengabaikan kompatibilitas berkas"
    ],
    "answer": 2,
    "explain": "Pemilihan teknologi perlu didasarkan pada kebutuhan nyata, biaya, kemampuan tim, interoperabilitas, keamanan, dan manfaat yang diharapkan."
  },
  {
    "q": "Apa risiko jika tim konstruksi menggunakan berkas dari sumber tidak dikenal tanpa memeriksa keamanannya?",
    "options": [
      "Berkas pasti meningkatkan kualitas gambar",
      "Tidak ada risiko jika nama file terlihat profesional",
      "Berkas akan selalu terbuka lebih cepat",
      "Berkas dapat berisi malware atau konten berbahaya yang mengancam perangkat dan data"
    ],
    "answer": 3,
    "explain": "Berkas dari sumber tidak tepercaya dapat membawa malware atau tautan berbahaya. Gunakan sumber resmi dan pemeriksaan keamanan."
  },
  {
    "q": "Bagaimana cara yang tepat menilai apakah informasi teknologi yang ditemukan di internet dapat dipercaya?",
    "options": [
      "Memilih informasi dengan judul paling menarik",
      "Memeriksa penulis atau lembaga, tanggal, bukti, sumber rujukan, dan membandingkannya dengan sumber tepercaya",
      "Menganggap semua hasil pencarian benar",
      "Memercayai informasi yang paling sering dibagikan saja"
    ],
    "answer": 1,
    "explain": "Evaluasi kredibilitas membutuhkan pemeriksaan sumber, kebaruan, bukti pendukung, dan konfirmasi silang."
  },
  {
    "q": "Apa yang dimaksud dengan interoperabilitas pada perangkat lunak proyek?",
    "options": [
      "Kemampuan sistem atau aplikasi bertukar dan menggunakan informasi dengan sistem lain",
      "Kemampuan aplikasi mengubah semua data menjadi gambar saja",
      "Keadaan ketika setiap aplikasi hanya dapat bekerja sendiri",
      "Kemampuan menghapus format berkas standar"
    ],
    "answer": 0,
    "explain": "Interoperabilitas memungkinkan pertukaran dan penggunaan informasi antarperangkat lunak, meskipun perlu memeriksa dukungan format dan kualitas data."
  },
  {
    "q": "Saat menggunakan model 3D untuk presentasi kepada klien, tindakan yang paling profesional adalah ....",
    "options": [
      "Menyatakan model pasti mencerminkan kondisi akhir tanpa perubahan",
      "Menyembunyikan asumsi dan keterbatasan model",
      "Menjelaskan tujuan model, tingkat detail, asumsi, dan bagian yang masih perlu dikonfirmasi",
      "Menghapus seluruh catatan revisi"
    ],
    "answer": 2,
    "explain": "Komunikasi profesional perlu menjelaskan status model, asumsi, keterbatasan, dan hal yang belum final agar tidak menimbulkan salah pengertian."
  },
  {
    "q": "Mengapa teknologi tidak selalu dapat menyelesaikan seluruh masalah dalam proyek konstruksi?",
    "options": [
      "Karena teknologi tidak pernah berguna",
      "Karena semua masalah hanya berasal dari perangkat lunak",
      "Karena teknologi selalu memperlambat pekerjaan",
      "Karena keberhasilan juga bergantung pada manusia, proses, data, biaya, kondisi lapangan, dan pengambilan keputusan"
    ],
    "answer": 3,
    "explain": "Teknologi adalah alat pendukung. Hasil proyek tetap dipengaruhi kompetensi tim, kualitas data, proses kerja, sumber daya, dan kondisi nyata."
  },
  {
    "q": "Sebuah sekolah ingin merancang ruang praktik yang hemat energi dan nyaman. Pendekatan awal yang paling baik adalah ....",
    "options": [
      "Memasang sebanyak mungkin perangkat digital tanpa analisis",
      "Mengkaji kebutuhan pengguna, kondisi iklim dan tapak, pencahayaan, ventilasi, serta kebutuhan energi",
      "Menentukan warna dinding sebagai satu-satunya dasar desain",
      "Meniru bangunan lain tanpa menilai kesesuaian lokasi"
    ],
    "answer": 1,
    "explain": "Perancangan yang baik dimulai dari kebutuhan pengguna dan analisis tapak serta iklim, kemudian menilai strategi kenyamanan dan efisiensi energi."
  },
  {
    "q": "Dalam konteks isu global, mengapa pekerja bidang DPIB perlu terus memperbarui keterampilan digital?",
    "options": [
      "Agar tidak perlu memahami prinsip konstruksi",
      "Agar dapat menghindari semua bentuk kerja tim",
      "Karena perangkat dan standar kerja dapat berkembang, sehingga kompetensi perlu disesuaikan dengan kebutuhan industri",
      "Karena keterampilan digital hanya dibutuhkan untuk hiburan"
    ],
    "answer": 2,
    "explain": "Pembelajaran berkelanjutan membantu tenaga kerja mengikuti perubahan alat, alur kerja, standar, dan kebutuhan industri konstruksi."
  }
];
