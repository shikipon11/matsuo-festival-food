const menuButton =
  document.getElementById("menu-button");

const headerNav =
  document.getElementById("header-nav");

menuButton.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    headerNav.classList.toggle(
      "open"
    );

  }
);

document.addEventListener(
  "click",
  event => {

    if (
      !headerNav.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {

      headerNav.classList.remove(
        "open"
      );

    }

  }
);

const scheduleToggle =
  document.getElementById(
    "schedule-toggle"
  );

const scheduleDropdown =
  document.getElementById(
    "schedule-dropdown"
  );

scheduleToggle.addEventListener(
  "click",
  event => {

    event.stopPropagation();

    scheduleDropdown.classList.toggle(
      "open"
    );

  }
);

document.addEventListener(
  "click",
  event => {

    if (
      !scheduleDropdown.contains(event.target) &&
      !scheduleToggle.contains(event.target)
    ) {

      scheduleDropdown.classList.remove(
        "open"
      );

    }

  }
);
