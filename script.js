// =========================
// script.js
// =========================

const products = [
  {
  name: "ワッフル",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: ["B8B6702C-AEC4-4301-822E-DB9095A9BEDF.jpeg"]
},
  {
  name: "チョコバナナ",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: ["5E6C9A38-FC99-4B18-9C24-A5066DFCC89F.jpeg"]
},
    {
  name: "タピオカ",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: [""]
},
    {
  name: "ポップコーン",
  section: "模擬店",
  price: "200",
  quantity: 0,
  image: ["C2CF8B4C-00ED-4072-8A7E-60A8271EE4ED.jpeg"]
},
    {
  name: "フランクフルト",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: ["4A964AA1-8E3E-4C3F-8489-0C16903063B9.jpeg"]
},
    {
  name: "焼き鳥",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: ["ED01DA8A-0670-4E2C-A34A-CAD3635ED83E.jpeg"]
},
    {
  name: "レモネード",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: ["A46B3191-6339-4825-AD63-B47F99E35908.jpeg"]
},
    {
  name: "クレープ",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: [""]
},
    {
  name: "たこ焼き",
  section: "模擬店",
  price: "300",
  quantity: 0,
  image: [""]
},
    {
  name: "あれこれ",
  section: "飲食",
  price: "300",
  quantity: 0,
  image: [""]
},
      {
  name: "いろいろ",
  section: "地域応援",
  price: "300",
  quantity: 0,
  image: [""]
}
];

// =========================
// 要素取得
// =========================

const contentArea =
  document.getElementById("content-area");

const tabButtons =
  document.querySelectorAll(".tab-button");

const modal =
  document.getElementById("modal");

const closeModal =
  document.getElementById("close-modal");

const modalTitle =
  document.getElementById("modal-title");

const modalPlace =
  document.getElementById("modal-place");

const modalNumber =
  document.getElementById(
    "modal-number"
  );

const modalCategoryTag =
  document.getElementById(
    "modal-category-tag"
  );
const modalImages =
  document.getElementById(
    "modal-images"
  );

// =========================
// ハンバーガーメニュー
// =========================

const menuButton =
  document.getElementById("menu-button");

const headerNav =
  document.getElementById("header-nav");

/* 開閉 */
menuButton.addEventListener(
  "click",
  event => {

    /* 外側クリック防止 */
    event.stopPropagation();

    /* 開閉 */
    headerNav.classList.toggle(
      "open"
    );

  }
);

// =========================
// 外側クリックで閉じる
// =========================

document.addEventListener(
  "click",
  event => {

    /* メニュー内 */
    const isNav =
      headerNav.contains(
        event.target
      );

    /* ボタン */
    const isButton =
      menuButton.contains(
        event.target
      );

    /* 外側 */
    if (
      !isNav &&
      !isButton
    ) {

      headerNav.classList.remove(
        "open"
      );

    }

  }
);

// =========================
// スケジュール開閉
// =========================

const scheduleToggle =
  document.getElementById(
    "schedule-toggle"
  );

const scheduleDropdown =
  document.getElementById(
    "schedule-dropdown"
  );

/* 開閉 */
scheduleToggle.addEventListener(
  "click",
  event => {

    /* 外側クリック防止 */
    event.stopPropagation();

    /* 開閉 */
    scheduleDropdown.classList.toggle(
      "open"
    );

  }
);

// =========================
// 外側クリックで閉じる
// =========================

document.addEventListener(
  "click",
  event => {

    /* ドロップダウン内 */
    const isDropdown =
      scheduleDropdown.contains(
        event.target
      );

    /* ボタン */
    const isButton =
      scheduleToggle.contains(
        event.target
      );

    /* 外側 */
    if (
      !isDropdown &&
      !isButton
    ) {

      scheduleDropdown.classList.remove(
        "open"
      );

    }

  }
);

// =========================
// 初期表示
// =========================

renderNumberView();

// =========================
// タブ切り替え
// =========================

tabButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      /* active削除 */
      tabButtons.forEach(btn => {

        btn.classList.remove("active");

      });

      /* active追加 */
      button.classList.add("active");

      /* データ取得 */
      const tab =
        button.dataset.tab;

      /* 表示切り替え */
      if (tab === "number") {

        renderNumberView();

      }

      if (tab === "category") {

        renderCategoryView();

      }

      if (tab === "place") {

        renderPlaceView();

      }

    }
  );

});

// =========================
// 模擬店
// =========================
function renderNumberView() {

  createProjectList(
    products.filter(
      p => p.section === "模擬店"
    )
  );

}
// =========================
// 飲食係
// =========================
function renderCategoryView() {

  createProjectList(
    products.filter(
      p => p.section === "飲食係"
    )
  );

}
// =========================
// 松尾祭地域応援　
// =========================
function renderPlaceView() {

  createProjectList(
    products.filter(
      p => p.section === "地域応援"
    )
  );

}
//仮
function createProjectList(data) {

  contentArea.innerHTML = "";

  data.forEach(product => {

    const card = document.createElement("div");

    card.className = "product-card";

    card.innerHTML = `
      <div class="product-container">

        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">

          <div class="product-name">
            ${product.name}
          </div>

          <div class="product-price">
            ${product.price}円
          </div>

          <div class="quantity-box">

            <button class="minus">
              −
            </button>

            <span class="count">
              ${product.quantity}
            </span>

            <button class="plus">
              ＋
            </button>

          </div>

        </div>

      </div>
    `;

    const count =
      card.querySelector(".count");

    card.querySelector(".plus")
      .addEventListener("click", () => {

        product.quantity++;

        count.textContent =
          product.quantity;

        updateTotal();

      });

    card.querySelector(".minus")
      .addEventListener("click", () => {

        if (product.quantity > 0) {

          product.quantity--;

          count.textContent =
            product.quantity;

          updateTotal();

        }

      });

    contentArea.appendChild(card);

  });

}
function updateTotal() {

  let total = 0;

  products.forEach(product => {

    total +=
      product.price *
      product.quantity;

  });

  document.getElementById(
    "total-price"
  ).textContent =
    `合計金額：${total}円`;

}
// =========================
// モーダルを閉じる
// =========================

/* ×ボタン */
closeModal.addEventListener(
  "click",
  () => {

    modal.classList.remove(
      "show"
    );

  }
);

/* 背景クリック */
modal.addEventListener(
  "click",
  event => {

    if (event.target === modal) {

      modal.classList.remove(
        "show"
      );

    }

  }
);

/* ESCキー */
document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {

      modal.classList.remove(
        "show"
      );

    }

  }
);
// =========================
// 隠し演出
// =========================

const heroTitle =
  document.getElementById(
    "hero-title"
  );

let secretCount = 0;

/* タイトル押下 */
heroTitle.addEventListener(
  "click",
  () => {

    secretCount++;

    /* 5回押した */
    if (secretCount >= 5) {

      /* アニメーション */
      heroTitle.classList.add(
        "secret-active"
      );

      /* 紙吹雪 */
      createConfetti();

      /* リセット */
      secretCount = 0;

      /* アニメ終了後 */
      setTimeout(() => {

        heroTitle.classList.remove(
          "secret-active"
        );

      }, 1000);

    }

  }
);

// =========================
// 紙吹雪生成
// =========================

function createConfetti() {

  for (let i = 0; i < 40; i++) {

    const confetti =
      document.createElement("div");

    confetti.className =
      "confetti";

    /* ランダム位置 */
    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.setProperty(
      "--drift",
      Math.random()
    );
    /* ランダム色 */
    const colors = [
      "#ff4d6d",
      "#ffd60a",
      "#4cc9f0",
      "#80ed99",
      "#b388eb"
    ];

    confetti.style.backgroundColor =
      colors[
        Math.floor(
          Math.random() *
          colors.length
        )
      ];

    /* ランダムサイズ */
    const size =
      Math.random() * 8 + 6;

    confetti.style.width =
      size + "px";

    confetti.style.height =
      size + "px";

    document.body.appendChild(
      confetti
    );
    /* 落下タイミングをずらす */
    confetti.style.animationDelay =
      Math.random() * 1.5 + "s";
    /* 削除 */
    setTimeout(() => {

      confetti.remove();

    }, 3000);

  }

}
