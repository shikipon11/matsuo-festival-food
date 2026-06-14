// =========================
// script.js
// =========================

const projects = [

  {
    number: 1,
    title: "フォトスポット",
    category: ["体験", "展示"],
    place: "教室棟",
    floor: "4階"
  },
  {
    number: 2,
    title: "お化け屋敷",
    category: ["体験"],
    place: "教室棟",
    floor: "4階"
  },
  {
    number: 3,
    title: "宝探し",
    category: ["体験"],
    place: "教室棟",
    floor: "4階"
  },
  {
    number: 4,
    title: "写真",
    category: ["展示"],
    place: "教室棟",
    floor: "4階",
    image: ["images/写真班.png"]
  },
  {
    number: 5,
    title: "CAM",
    category: ["展示"],
    place: "教室棟",
    floor: "4階",
    image: ["images/CAM班.PNG"]
  },
  {
    number: 6,
    title: "総合社会研究",
    category: ["体験", "展示"],
    place: "教室棟",
    floor: "3階",
    image: ["images/総合社会研究班.JPG"]
  },
  {
    number: 7,
    title: "書道",
    category: ["体験", "展示"],
    place: "教室棟",
    floor: "3階",
    image: ["images/書道班.jpg"]
  },
  {
    number: 8,
    title: "手相",
    category: ["体験"],
    place: "教室棟",
    floor: "3階",
    image: ["images/手相同好会.jpg"]
  },
  {
    number: 9,
    title: "競技かるた",
    category: ["体験"],
    place: "教室棟",
    floor: "2階"
  },
  {
    number: 10,
    title: "美術",
    category: ["体験", "展示", "販売"],
    places: [{
        building: "教室棟",
        floor: "2階"
      },
      {
        building: "管理棟",
        floor: "1階"
      },
      {
        building: "その他",
        floor: "渡り廊下"
      }
    ],
    image: ["images/美術班.png"]
  },
  {
    number: 11,
    title: "文芸",
    category: ["体験", "展示"],
    place: "教室棟",
    floor: "2階",
    image: ["images/文芸班.png"]
  },
  {
    number: 12,
    title: "松尾祭地域応援",
    category: ["展示", "飲食"],
    place: "教室棟",
    floor: "1階",
    image: ["images/松尾菜.png"]
  },
  {
    number: 13,
    title: "全校制作",
    category: ["展示"],
    place: "その他",
    floor: "渡り廊下"
  },
  {
    number: 14,
    title: "カンボジア井戸プロ",
    category: ["販売"],
    place: "管理棟",
    floor: "2階",
    image: ["images/カンボジア.png"]
  },
  {
    number: 15,
    title: "数学",
    category: ["体験"],
    place: "管理棟",
    floor: "2階",
    image: ["images/数学研究同好会.png"]
  },
  {
    number: 16,
    title: "被服",
    category: ["体験", "販売"],
    place: "管理棟",
    floor: "2階",
    image: ["images/被服班.png"]
  },
  {
    number: 17,
    title: "英語",
    category: ["体験", "飲食"],
    place: "管理棟",
    floor: "2階",
    image: ["images/英語班.jpeg"]
  },
  {
    number: 18,
    title: "図書",
    category: ["体験", "飲食"],
    place: "管理棟",
    floor: "2階",
    image: ["images/図書館.png"]
  },
  {
    number: 19,
    title: "茶道",
    category: ["飲食", "パフォーマンス"],
    place: "管理棟",
    floor: "1階",
    image: ["images/茶道班.png"]
  },
  {
    number: 20,
    title: "ものづくり販売",
    category: ["販売"],
    place: "その他",
    floor: "昇降口（中）"
  },
  {
    number: 21,
    title: "食品科学",
    category: ["飲食"],
    place: "管理棟",
    floor: "1階",
    image: ["images/食品科学班.JPG"]
  },
  {
    number: 22,
    title: "化学",
    category: ["体験", "パフォーマンス"],
    place: "管理棟",
    floor: "3階",
    image: ["images/化学班.png"]
  },
  {
    number: 23,
    title: "天文気象",
    category: ["展示"],
    place: "管理棟",
    floor: "3階",
    image: ["images/天文班.png"]
  },
  {
    number: 24,
    title: "棋道",
    category: ["体験"],
    place: "管理棟",
    floor: "3階"
  },
  {
    number: 25,
    title: "クイズ",
    category: ["体験"],
    place: "管理棟",
    floor: "3階",
    image: ["images/総合文化部クイズ班_page-0001.jpg"]
  },
  {
    number: 26,
    title: "吹奏楽/書道/ダンス",
    category: ["パフォーマンス"],
    place: "その他",
    floor: "第一体育館メイン",
    images: ["images/吹奏楽班コンサート.jpg", "images/書道班.jpg", "images/ダンス班_page-0001.jpg"]
  },
  {
    number: 27,
    title: "卓球",
    category: ["体験"],
    place: "その他",
    floor: "第一体育館ギャラリー"
  },
  {
    number: 28,
    title: "ちびっこ広場",
    category: ["体験"],
    place: "その他",
    floor: "定時棟 1階"
  },
  {
    number: 29,
    title: "合唱/小さな音楽会",
    category: ["パフォーマンス"],
    place: "その他",
    floor: "音楽室",
    images: ["images/混声合唱班_page-0001.jpg", "images/小さな音楽会.png"]
  },
  {
    number: 30,
    title: "剣道",
    category: ["体験"],
    place: "その他",
    floor: "格技室"
  },
  {
    number: 31,
    title: "弓道",
    category: ["体験"],
    place: "その他",
    floor: "ピロティ",
    image: ["images/弓道班.JPG"]
  },
  {
    number: 32,
    title: "現代音楽/吹奏楽",
    category: ["パフォーマンス"],
    place: "その他",
    floor: "中庭（野外ステージ）",
    images: ["images/現代音楽_page-0001.jpg", "images/吹奏楽班ステージ.jpg"]
  },
  {
    number: 33,
    title: "放送",
    category: ["体験"],
    place: "その他",
    floor: "昇降口(外)",
    image: ["images/放送班 - 1.png"]
  },
  {
    number: 34,
    title: "演劇",
    category: ["パフォーマンス"],
    place: "その他",
    floor: "同窓会館　1階",
    image: ["images/演劇班.jpg"]
  },
  {
    number: 35,
    title: "室内楽/合唱",
    category: ["パフォーマンス"],
    place: "その他",
    floor: "同窓会館　2階",
    images: ["images/室内楽班.png", "images/混声合唱班_page-0001.jpg"]
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

  contentArea.innerHTML = "";

  createProjectList(projects);

}
// =========================
// 飲食係
// =========================
function renderCategoryView() {

  contentArea.innerHTML = "";

  createProjectList(projects);

}
// =========================
// 松尾祭地域応援　
// =========================
function renderPlaceView() {

  contentArea.innerHTML = "";

  createProjectList(projects);

}
//仮
function createProjectList(data) {

  contentArea.innerHTML = "";

  data.forEach(project => {

    const card = document.createElement("div");

    card.className = "project-card";

    card.innerHTML = `
      <div class="project-top">

        <div class="project-circle">
          ${project.number}
        </div>

        <div class="project-title">
          ${project.title}
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
