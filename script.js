const boomBtn = document.getElementById('boom');
const explosionSound = document.getElementById('explosion');
const secretDiv = document.querySelector('.secret');
let clickCount = 0;

// Pesan random
const messages = [
  "Kuromi bilang: Lo udah tua, jangan sok muda.",
  "HBD. Jangan lupa bayar tagihan.",
  "Ini bukan cinta, ini peringatan: lo lahir lagi hari ini.",
  "Kuromi ngeliat lo dari tempat sampah. Selamat ya.",
  "Jangan senyum-senyum. Ini serius. Tapi lucu.",
  "Lo sekarang punya 1 hari lebih banyak buat bikin masalah. Selamat!",
  "Kuromi nyiapin kue... tapi dijatuhin. Maaf."
];

boomBtn.addEventListener('click', () => {
  // Play sound
  explosionSound.currentTime = 0;
  explosionSound.play().catch(e => console.log("Sound blocked by browser"));

  // Add visual explosion
  boomBtn.classList.add('bomb-effect');
  setTimeout(() => boomBtn.classList.remove('bomb-effect'), 800);

  // Random message
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMsg);

  // Easter Egg: klik 3x → pesan rahasia
  clickCount++;
  if (clickCount === 3) {
    secretDiv.textContent = "🚨 EASTER EGG TERBUKA: Kuromi sebenernya sayang lo. Tapi jangan bilang dia bilang gitu.";
    secretDiv.classList.add('easter-egg');
    clickCount = 0; // reset
  }
});
