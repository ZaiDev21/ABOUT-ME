// Fungsi untuk menangani pengiriman form
function submitForm() {
    // Menyembunyikan form dan menampilkan pesan konfirmasi
    document.getElementById('form-contact').style.display = 'none';
    document.getElementById('confirmation-message').style.display = 'block';

    // Menambahkan log pesan di console untuk pengembangan (opsional)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Pesan diterima dari: ${name}, Email: ${email}, Pesan: ${message}`);

    // Reset form setelah pengiriman
    document.getElementById('form-contact').reset();
}