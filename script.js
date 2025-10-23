const boomBtn = document.getElementById('boom');
const explosionSound = document.getElementById('explosion');
const kuromiLaugh = document.getElementById('kuromi-laugh');
const secretDiv = document.querySelector('.secret');
const countdownEl = document.getElementById('timer');
const giftBox = document.getElementById('gift-box');
const giftMessage = document.getElementById('gift-message');
const closeGiftBtn = document.getElementById('close-gift');
let clickCount = 0;

// Target Date: 27 Oktober 2025
const targetDate = new Date('2025-10-27T00:00:00').getTime();

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

// Hadiah Rahasia (bisa diganti teksnya)
const giftText = `
🎉 SELAMAT! LO SUKSES MENUNGGU SAMPAI 27 OKTOBER 2025!

Kuromi kasih lo:
✨ Satu hari tanpa tanggung jawab
✨ Satu jam ngeliat Kuromi ngejail
✨ Satu kue yang udah dijatuhin (tapi tetep enak)

Dan satu pesan rahasia:
> "Kuromi sebenernya sayang lo. Tapi jangan bilang dia bilang gitu."

P.S. Lo keren banget nunggu sampe sekarang. 💀🖤
`;

// Update Countdown
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdownEl.textContent = "✅ SUDAH BISA DIBUKA!";
    boomBtn.disabled = false;
    boomBtn.style.opacity = 1;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Set interval update countdown
setInterval(updateCountdown, 1000);
updateCountdown(); // init

// BOOM Button
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

  // Check if date has passed → show gift
  const now = new Date().getTime();
  if (now >= targetDate) {
    openGift();
  } else {
    kuromiLaugh.currentTime = 0;
    kuromiLaugh.play().catch(e => console.log("Laugh sound blocked"));
    alert("Kuromi bilang: Belum waktunya. Nunggu dulu sampe 27 Oktober 2025!");
  }

  // Easter Egg: klik 3x → pesan rahasia
  clickCount++;
  if (clickCount === 3) {
    secretDiv.textContent = "🚨 EASTER EGG TERBUKA: Kuromi sebenernya sayang lo. Tapi jangan bilang dia bilang gitu.";
    secretDiv.classList.add('easter-egg');
    clickCount = 0; // reset
  }
});

// Open Gift
function openGift() {
  giftMessage.textContent = giftText;
  giftBox.classList.remove('hidden');

  // Confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#000', '#ff00ff', '#330033']
  });
}

// Close Gift
closeGiftBtn.addEventListener('click', () => {
  giftBox.classList.add('hidden');
});});
