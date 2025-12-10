const wrapper = document.querySelector('.wrapper');
const gif = document.querySelector('img');
const noBtn = document.querySelector('.no-btn');
const questionText = document.querySelector('.question'); // Untuk mengubah teks

// Fungsi yang memindahkan tombol 'No'
function moveNoButton() {
    // Ubah teks saat tombol 'No' ditekan di HP
    questionText.innerHTML = "Coba klik 'Yes' saja, sayangku! 🥰";
    
    // Pastikan posisi tombol adalah 'absolute'
    noBtn.style.position = 'absolute';

    const noBtnRect = noBtn.getBoundingClientRect();
    
    // Hitung batas dalam area wrapper, bukan seluruh window, agar tombol tidak lari terlalu jauh
    const wrapperRect = wrapper.getBoundingClientRect();
    
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    // Terapkan posisi relatif terhadap wrapper (jika wrapper punya position: relative)
    // Jika tidak, terapkan posisi absolut pada window
    
    // Karena style.css yang diperbaiki tidak menggunakan position: absolute; secara default,
    // kita gunakan posisi absolut pada window/viewport
    const windowMaxX = window.innerWidth - noBtnRect.width;
    const windowMaxY = window.innerHeight - noBtnRect.height;
    
    const randomWindowX = Math.floor(Math.random() * windowMaxX);
    const randomWindowY = Math.floor(Math.random() * windowMaxY);

    noBtn.style.left = randomWindowX + 'px';
    noBtn.style.top = randomWindowY + 'px';
}

// Event untuk Desktop (saat kursor diarahkan)
noBtn.addEventListener('mouseover', moveNoButton);

// Tambahkan event click/tap untuk HP sebagai cadangan (jika ontouchstart tidak bekerja)
noBtn.addEventListener('click', (e) => {
    // Ini mencegah link (jika tombol NO adalah link) berfungsi. Karena ini button, ini tidak terlalu krusial.
    e.preventDefault(); 
    moveNoButton();
});