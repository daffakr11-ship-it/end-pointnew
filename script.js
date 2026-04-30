let game = "";
let diamond = "";

function pilihGame(nama) {
  game = nama;
  document.getElementById('page1').classList.add('hidden');
  document.getElementById('page2').classList.remove('hidden');
  document.getElementById('judulGame').innerText = "Top Up " + nama;
}

function kembali() {
  document.getElementById('page1').classList.remove('hidden');
  document.getElementById('page2').classList.add('hidden');
}

function pilihDiamond(el, val) {
  document.querySelectorAll('.grid .card').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  diamond = val;
}

function kirimData() {
  let id = document.getElementById("userId").value;

  if (id === "" || diamond === "") {
    alert("Lengkapi semua data!");
    return;
  }

  let nomor = "6285183997674";

  let pesan = `Halo, saya ingin top up:
Game: ${game}
ID: ${id}
Paket: ${diamond}`;

  let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, '_blank');
}