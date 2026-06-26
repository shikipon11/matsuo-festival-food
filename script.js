// =========================
// script.js　企画一覧を使いまわした形なのでタグや関数の名前が変だったり使わないコードをけしてなかったりするところに注意
// =========================

const products = [{
    number: 1,
    name: "ワッフル",
    section: "模擬店",
    price: "200円",
    description: "プレーン、チョコソース<br>キャラメルソース<br>いちごソース",
    image: ["images/IMG_0595.JPG"]
  },
  {
    number: 2,
    name: "チョコバナナ",
    section: "模擬店",
    price: "200円",
    description: "",
    image: ["images/IMG_0612.JPG"]
  },
  {
    number: 3,
    name: "タピオカ",
    section: "模擬店",
    price: "400円",
    description: "ミルクティー<br>抹茶<br>いちごミルク",
    image: ["images/3807A46D-9843-4BFF-93C8-16383E6A4D41.jpeg"]
  },
  {
    number: 4,
    name: "ポップコーン",
    section: "模擬店",
    price: "300円",
    description: "塩<br>キャラメル<br>チョコレート",
    image: ["images/C2CF8B4C-00ED-4072-8A7E-60A8271EE4ED.jpeg"]
  },
  {
    number: 5,
    name: "フランクフルト",
    section: "模擬店",
    price: "200円",
    description: "",
    image: ["images/4A964AA1-8E3E-4C3F-8489-0C16903063B9.jpeg"]
  },
  {
    number: 6,
    name: "焼き鳥",
    section: "模擬店",
    price: "3本 400円<br>10本 1200円",
    description: "塩,美味だれ<br>3本(もも2ねぎま1)<br>10本(もも5ねぎま5)",
    image: ["images/ED01DA8A-0670-4E2C-A34A-CAD3635ED83E.jpeg"]
  },
  {
    number: 7,
    name: "レモネード",
    section: "模擬店",
    price: "ノーマル 200円<br>蜂蜜入り 300円",
    description: "",
    image: ["images/A46B3191-6339-4825-AD63-B47F99E35908.jpeg"]
  },
  {
    number: 8,
    name: "クレープ",
    section: "模擬店",
    price: "400円",
    description: "クッキーアンドクリーム<br>キャラメルプレッツェル<br>いちご",
    image: ["images/IMG_0526.JPG"]
  },
  {
    number: 9,
    name: "たこ焼き",
    section: "模擬店",
    price: "200円",
    description: "ソース<br>明太チーズ",
    image: ["images/IMG_0525.JPG"]
  },
  {
    name: "きゅうり",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/きゅうり.JPG"]
  },
  {
    name: "トマト",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/トマト②.JPG"]
  },
  {
    name: "ミニトマト",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/ミニトマト.JPG"]
  },
  {
    name: "人参",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/にんじん.JPG"]
  },
  {
    name: "ピーマン",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "南瓜",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "ズッキーニ",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "アスパラガス",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "新玉ねぎ",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "じゃがいも",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "さつまいも",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "ブルーベリー",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "桃",
    section: "地域応援",
    category: "農産物",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },                 
  {
    name: "はちみつ",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/はちみつ.JPG"]
  },                 
  {
    name: "ラスク",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/ラスク.JPG"]
  },
  {
    name: "バウムクーヘン",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "米農家が作る<br>米粉シフォンケーキ",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/米粉シフォンケーキ.JPG"]
  },
  {
    name: "米農家が作る<br>米粉チーズケーキ",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/米粉チーズケーキ.JPG"]
  },
  {
    name: "郡山名物<br>クリームボックス",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/クリームボックスとカフェオレボックス.JPG"]
  },
  {
    name: "生ラーメン",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "福島果物たくさんの<br>フルーツサンド",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/フルーツサンド①.JPG"]
  },
  {
    name: "地元の牧場の<br>アイスキャンディー",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/アイスキャンディー.JPG"]
  },
  {
    name: "地元の名物<br>玄米パン",
    section: "地域応援",
    category: "加工品",
    price: "",
    description: "",
    image: ["images/IMG_0600.PNG"]
  },
  {
    name: "手作りキャベツメンチ",
    section: "地域応援",
    category: "軽食",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "手作り餃子メンチ",
    section: "地域応援",
    category: "軽食",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "ザンギ",
    section: "地域応援",
    category: "軽食",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "ふくしまフルーツティー",
    section: "地域応援",
    category: "軽食",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "ふくしまフルーツスカッシュ",
    section: "地域応援",
    category: "軽食",
    price: "",
    description: "",
    image: ["images/no-images.png"]
  },
  {
    name: "お好み焼き串",
    section: "地域応援",
    category: "軽食",
    price: "",
    description: "",
    image: ["images/IMG_0599.PNG"]
  },
  {
    name: "えごま豚水餃子",
    section: "地域応援",
    category: "軽食",
    price: "",
    description: "",
    image: ["images/IMG_0598.PNG"]
  },
  {
    name: "あんこ",
    section: "飲食係",
    category: "玉喜屋",
    price: "170円",
    description: "",
    image: ["images/IMG_0564.JPG"]
  },
  {
    name: "特製くるみだれ",
    section: "飲食係",
    category: "玉喜屋",
    price: "170円",
    description: "",
    image: ["images/IMG_0565.JPG"]
  },
  {
    name: "みたらし",
    section: "飲食係",
    category: "玉喜屋",
    price: "170円",
    description: "",
    image: ["images/IMG_0566.JPG"]
  },
  {
    name: "ツナコーンポテト",
    section: "飲食係",
    category: "ダーチャ",
    price: "200円",
    description: "",
    image: ["images/no-images.png"]
  },  
　{
    name: "テリヤキチキン",
    section: "飲食係",
    category: "ダーチャ",
    price: "200円",
    description: "",
    image: ["images/no-images.png"]
 },  
　{
    name: "ベーコンチーズ",
    section: "飲食係",
    category: "ダーチャ",
    price: "200円",
    description: "",
    image: ["images/no-images.png"]
  },  
　{
    name: "カレーパン",
    section: "飲食係",
    category: "ダーチャ",
    price: "200円",
    description: "",
    image: ["images/no-images.png"]
 },  
　{
    name: "メロンパン",
    section: "飲食係",
    category: "ダーチャ",
    price: "150円",
    description: "",
    image: ["images/no-images.png"]
  },  
　{
    name: "つぶしあん",
    section: "飲食係",
    category: "ダーチャ",
    price: "150円",
    description: "",
    image: ["images/no-images.png"]
 }, 
　{
    name: "たまごサラダパン",
    section: "飲食係",
    category: "ダーチャ",
    price: "200円",
    description: "",
    image: ["images/no-images.png"]
  },  
  {
    name: "クーリッシュバニラ",
    section: "飲食係",
    category: "協和食品",
    price: "150円",
    description: "",
    image: ["images/IMG_0586.JPG"]
  },                  
　{
    name: "クーリッシュマスカット",
    section: "飲食係",
    category: "協和食品",
    price: "150円",
    description: "",
    image: ["images/IMG_0585.JPG"]
  },                  
　{
    name: "ガリガリ君ソーダ",
    section: "飲食係",
    category: "協和食品",
    price: "100円",
    description: "",
    image: ["images/IMG_0584.JPG"]
  },                  
　{
    name: "パルムチョコレートバー",
    section: "飲食係",
    category: "協和食品",
    price: "150円",
    description: "",
    image: ["images/IMG_0583.JPG"]
  },                  
　{
    name: "チョコモナカジャンボ",
    section: "飲食係",
    category: "協和食品",
    price: "150円",
    description: "",
    image: ["images/IMG_0582.JPG"]
  },                  
　{
    name: "アイスの実（ぶどう）スマイルプラス",
    section: "飲食係",
    category: "協和食品",
    price: "100円",
    description: "",
    image: ["images/IMG_0581.JPG"]
  },                  
　{
    name: "BIGスイカバー",
    section: "飲食係",
    category: "協和食品",
    price: "100円",
    description: "",
    image: ["images/IMG_0580.JPG"]
  },



                
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
const foodSubtabs =
  document.getElementById("food-subtabs");

const subtabButtons =
  document.querySelectorAll(".subtab-button");
const supportSubtabs =
  document.getElementById("support-subtabs");
const supportSubtabButtons =
  document.querySelectorAll("#support-subtabs .subtab-button");

let statusData = {};

const API_URL =
  "https://script.google.com/macros/s/AKfycbyr9GAES93Rw8YTLaOs-sVSrkaugyt5UY48ziiHNms8modz9eAfFmJhsgmQAcr52aUZ-g/exec";
const FOOD_API_URL =
  "https://script.google.com/macros/s/AKfycbztXzBSMkZiU0wbBNnO_efdR6kqW3emGrNo8H3vOvnkWBaO7QVjKU3pauSBXumYzThP/exec";

async function loadStatus() {

  try {

    const response =
      await fetch(API_URL);

    statusData =
      await response.json();

    const now = new Date();

    document.getElementById(
        "last-update"
      ).textContent =
      `最終更新：${now.getHours().toString().padStart(2,"0")}:${now.getMinutes().toString().padStart(2,"0")}`;

  } catch (error) {

    console.error(error);

  }
}
let foodStatus = "";
let drinkStatus = "";
    
    async function loadFoodStatus() {

  try {

    const response =
      await fetch(FOOD_API_URL);

    const data =
      await response.json();

    foodStatus = data.food;
    drinkStatus = data.drink;

  } catch(error) {

    console.error(error);

  }

}

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

async function init() {

  renderNumberView();

  await Promise.all([
    loadStatus(),
    loadFoodStatus()
  ]);

  const activeTab =
    document.querySelector(
      ".tab-button.active"
    ).dataset.tab;

  if (activeTab === "number") {
    renderNumberView();
  }

  if (activeTab === "category") {
    renderCategoryView();
  }

  if (activeTab === "place") {
    renderPlaceView();
  }

}
init();

setInterval(async () => {

  await loadStatus();

  const activeTab =
    document.querySelector(
      ".tab-button.active"
    ).dataset.tab;

  if (activeTab === "number") {
    renderNumberView();
  }

  if (activeTab === "category") {
    renderCategoryView();
  }

  if (activeTab === "place") {
    renderPlaceView();
  }

}, 900000);

// =========================
// タブ切り替え
// =========================

tabButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      tabButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const tab = button.dataset.tab;

      if (tab === "number") {

        foodSubtabs.classList.add("hidden");
        supportSubtabs.classList.add("hidden");

        renderNumberView();

      }

      if (tab === "category") {

        foodSubtabs.classList.remove("hidden");
        supportSubtabs.classList.add("hidden");

        renderCategoryView();

      }

      if (tab === "place") {

        foodSubtabs.classList.add("hidden");

        supportSubtabs.classList.remove("hidden");

        renderPlaceView();

      }

    }
  );

});
// =========================
// 模擬店
// =========================
function getStatusClass(status) {

  switch (status) {

    case "empty":
      return "status-empty";

    case "normal":
      return "status-normal";

    case "busy":
      return "status-busy";

    case "limit":
      return "status-limit";

    default:
      return "status-default";

  }

}

function getStatusLabel(status) {

  switch (status) {

    case "empty":
      return "🟢 空いてます";

    case "normal":
      return "🟡 やや混雑";

    case "busy":
      return "🔴 大変混雑";

    case "limit":
      return "⚫ 休止中";

    default:
      return "⚪ 読み込み中";

  }

}

function renderNumberView() {

  createProjectList(
    products.filter(
      p => p.section === "模擬店"
    )
  );

}
// =========================
// 松尾祭地域応援
// =========================
function renderCategoryView() {

  foodSubtabs.classList.remove("hidden");

  // activeをリセット
  subtabButtons.forEach(btn => {
    btn.classList.remove("active");
  });

  // 農産物をactiveにする
  const defaultButton =
    document.querySelector(
      '#food-subtabs .subtab-button[data-category="農産物"]'
    );

  if (defaultButton) {
    defaultButton.classList.add("active");
  }

  contentArea.innerHTML = `

    <div class="food-status-box project-congestion ${getStatusClass(foodStatus)}">
      ${getStatusLabel(foodStatus)}
    </div>

  `;

  renderFoodCategory("農産物");

}
function renderFoodCategory(category) {

  const statusHtml = `
    <div class="food-status-box project-congestion ${getStatusClass(foodStatus)}">
      ${getStatusLabel(foodStatus)}
    </div>
  `;

  contentArea.innerHTML = statusHtml;

  createProjectList(
    products.filter(
      p =>
      p.section === "地域応援" &&
      p.category === category
    ),
    true
  );

}

// =========================
// 飲食
// =========================
function renderPlaceView() {

  supportSubtabs.classList.remove("hidden");

  contentArea.innerHTML = `
    <div class="food-status-box project-congestion ${getStatusClass(drinkStatus)}">
      ${getStatusLabel(drinkStatus)}
    </div>
  `;

  // activeリセット
  supportSubtabButtons.forEach(btn => {
    btn.classList.remove("active");
  });

  // 玉喜屋をactiveにする
  const defaultButton =
    document.querySelector(
      '#support-subtabs .subtab-button[data-category="玉喜屋"]'
    );

  if (defaultButton) {
    defaultButton.classList.add("active");
  }

  renderSupportCategory("玉喜屋");

}
//仮
subtabButtons.forEach(button => {

  button.addEventListener(
    "click",
    () => {

      subtabButtons.forEach(btn => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      renderFoodCategory(
        button.dataset.category
      );

    }
  );

});
function renderSupportCategory(category) {

  const statusHtml = `
  <div class="food-status-box project-congestion ${getStatusClass(drinkStatus)}">
    ${getStatusLabel(drinkStatus)}
  </div>
`;

contentArea.innerHTML = statusHtml;

  createProjectList(
    products.filter(
      p =>
      p.section === "飲食係" &&
      p.category === category
     ),
      true
  );

}
supportSubtabButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        supportSubtabButtons.forEach(
          btn => {
            btn.classList.remove(
              "active"
            );
          }
        );

        button.classList.add(
          "active"
        );

        renderSupportCategory(
          button.dataset.category
        );

      }
    );

  }
);

function createProjectList(
  data,
  append = false
) {
  if(!append){
    contentArea.innerHTML = "";
  }

  data.forEach(product => {

    const card =
      document.createElement("div");

    card.className = "product-card";

    const status =
      statusData[product.number];

    card.innerHTML = `

      <div class="product-container">

        <div class="product-image">
          <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="product-info">

  <div class="product-name">
    ${product.name}
  </div>

  <div class="product-top-row">

    <div class="product-price">
      ${product.price}
    </div>

    ${
      product.section === "模擬店" ? `
      <div class="project-congestion ${getStatusClass(status)}">
        ${getStatusLabel(status)}
      </div>
      ` : ""
    }

  </div>

  <div class="product-description">
    ${product.description || ""}
  </div>

</div>
      </div>

    `;

    contentArea.appendChild(card);

  });

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
