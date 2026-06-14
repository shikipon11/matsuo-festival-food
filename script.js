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
