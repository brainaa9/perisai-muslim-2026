# Perisai Muslim 2026 — PWA

## Kandungan
- `index.html` — halaman aplikasi / pelancar kitab
- `manifest.webmanifest` — nama dan ikon aplikasi
- `sw.js` — cache untuk halaman aplikasi dan PDF
- `icons/` — ikon Home Screen

## Langkah pemasangan di GitHub Pages (percuma)
1. Cipta repositori GitHub baharu, contohnya `perisai-muslim-2026`.
2. Muat naik semua kandungan folder ini ke akar repositori.
3. Muat naik PDF asal dengan nama tepat:
   `Perisai-Muslim-Edisi-Kemas-Kini-2026-v5.pdf`
4. Pastikan PDF itu dibenarkan untuk dikongsi secara umum.
5. Dalam GitHub, buka **Settings → Pages**.
6. Pilih **Deploy from a branch**, pilih `main` dan folder `/ (root)`, kemudian Save.
7. Tunggu pautan Pages dipaparkan. Buka pautan itu menggunakan Chrome Android.
8. Pilih menu Chrome (⋮) → **Install app** atau **Add to Home screen**.

## Cara guna
- Ikon aplikasi membuka PDF secara automatik melalui pelayar yang menyokong pembukaan PDF.
- Jika automatik tidak berjalan, tekan **Buka Kitab** pada halaman aplikasi.
- Tekan **Simpan untuk bacaan luar talian** sekali ketika ada internet. Selepas PDF berjaya dicache, ia boleh dibuka semula tanpa internet pada peranti itu.

## Penting
- GitHub Pages ialah hosting awam. Sesiapa yang mempunyai URL boleh mengakses PDF.
- Uji pautan isi kandungan PDF selepas dimuat naik.
- PWA tidak boleh memaksa Android membuka fail dalam Samsung PDF Reader; Android/pelayar mungkin menggunakan pembaca PDF lalai.
