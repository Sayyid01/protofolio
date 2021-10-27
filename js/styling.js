// 1. ambil element main
const mainNode = document.querySelector('main');
// 2. tambahkan event mousemove pada mainNode
mainNode.addEventListener('mousemove', (e) => {
    // 3. simpan posisi koordinat x dan y dari kursor lalu dibagi 9
    // pembagian 9 agar pergeseran koodinat x dan y tidak terlalu jauh
    var moveX = (e.clientX / -9);
    var moveY = (e.clientY / -9);
    // 4. update posisi gambar menggunakan property: backgroundPosition
    mainNode.style.backgroundPosition = moveX + 'px ' + moveY + 'px';
});