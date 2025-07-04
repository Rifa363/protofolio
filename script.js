// Mobile menu toggle
// Mendapatkan elemen tombol menu mobile
const menuButton = document.querySelector('.mobile-menu-button');
// Mendapatkan elemen menu mobile
const mobileMenu = document.querySelector('.mobile-menu');

// Menambahkan event listener untuk klik pada tombol menu mobile
menuButton.addEventListener('click', () => {
    // Mengubah visibilitas menu mobile (menambah/menghapus class 'hidden')
    mobileMenu.classList.toggle('hidden');
});

// Back to top button
// Mendapatkan elemen tombol kembali ke atas
const backToTopButton = document.getElementById('backToTop');

// Menambahkan event listener untuk scroll pada jendela
window.addEventListener('scroll', () => {
    // Jika posisi scroll lebih dari 300px dari atas
    if (window.pageYOffset > 300) {
        // Menampilkan tombol dengan menghapus class 'opacity-0' dan 'invisible'
        backToTopButton.classList.remove('opacity-0', 'invisible');
        // Menambahkan class 'opacity-100' dan 'visible' untuk menampilkan tombol
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        // Menyembunyikan tombol dengan menghapus class 'opacity-100' dan 'visible'
        backToTopButton.classList.remove('opacity-100', 'visible');
        // Menambahkan class 'opacity-0' dan 'invisible' untuk menyembunyikan tombol
        backToTopButton.classList.add('opacity-0', 'invisible');
    }
});

// Menambahkan event listener untuk klik pada tombol kembali ke atas
backToTopButton.addEventListener('click', () => {
    // Menggulir halaman ke bagian paling atas dengan animasi mulus
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form submission
// Mendapatkan elemen formulir kontak
const contactForm = document.querySelector('form');
// Memastikan formulir ditemukan sebelum menambahkan event listener
if (contactForm) {
    // Menambahkan event listener untuk submit formulir
    contactForm.addEventListener('submit', (e) => {
        // Mencegah perilaku submit formulir default (reload halaman)
        e.preventDefault();
        // Menampilkan pesan pop-up (alert) kepada pengguna
        // Catatan: Dalam lingkungan produksi, lebih baik menggunakan modal kustom
        // daripada alert() untuk pengalaman pengguna yang lebih baik.
        alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi saya.');
        // Mereset formulir setelah pengiriman
        contactForm.reset();
    });
}
