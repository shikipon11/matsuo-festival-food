// =========================
// script.js
// 別ページでも使う共通処理
// =========================
 
 
// =========================
// ハンバーガーメニュー
// =========================
 
const menuButton =
  document.getElementById("menu-button");
 
const headerNav =
  document.getElementById("header-nav");
 
/* 開閉 */
menuButton.addEventListener("click", event => {
  event.stopPropagation();
  headerNav.classList.toggle("open");
});
 
/* 外側クリックで閉じる */
document.addEventListener("click", event => {
  const isNav    = headerNav.contains(event.target);
  const isButton = menuButton.contains(event.target);
  if (!isNav && !isButton) {
    headerNav.classList.remove("open");
  }
});
 
 
// =========================
// スケジュール ドロップダウン
// =========================
 
const scheduleToggle =
  document.getElementById("schedule-toggle");
 
const scheduleDropdown =
  document.getElementById("schedule-dropdown");
 
/* 開閉 */
scheduleToggle.addEventListener("click", event => {
  event.stopPropagation();
  scheduleDropdown.classList.toggle("open");
});
 
/* 外側クリックで閉じる */
document.addEventListener("click", event => {
  const isDropdown = scheduleDropdown.contains(event.target);
  const isButton   = scheduleToggle.contains(event.target);
  if (!isDropdown && !isButton) {
    scheduleDropdown.classList.remove("open");
  }
});
 
 
// =========================
// 隠し演出（ヒーロータイトル5回タップ）
// ヒーローがないページは何もしない
// =========================
 
const heroTitle =
  document.getElementById("hero-title");
 
if (heroTitle) {
 
  let secretCount = 0;
 
  heroTitle.addEventListener("click", () => {
 
    secretCount++;
 
    if (secretCount >= 5) {
 
      heroTitle.classList.add("secret-active");
      createConfetti();
      secretCount = 0;
 
      setTimeout(() => {
        heroTitle.classList.remove("secret-active");
      }, 1000);
 
    }
 
  });
 
}
 
 
// =========================
// 紙吹雪生成
// =========================
 
function createConfetti() {
 
  for (let i = 0; i < 40; i++) {
 
    const confetti = document.createElement("div");
    confetti.className = "confetti";
 
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.setProperty("--drift", Math.random());
 
    const colors = [
      "#ff4d6d",
      "#ffd60a",
      "#4cc9f0",
      "#80ed99",
      "#b388eb"
    ];
 
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
 
    const size = Math.random() * 8 + 6;
    confetti.style.width  = size + "px";
    confetti.style.height = size + "px";
 
    confetti.style.animationDelay =
      Math.random() * 1.5 + "s";
 
    document.body.appendChild(confetti);
 
    setTimeout(() => confetti.remove(), 3000);
 
  }
 
}
