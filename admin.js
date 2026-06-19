const products = [
  {
    number: 1,
    title: "ワッフル"
  },
  {
    number: 2,
    title: "チョコバナナ"
  },
  {
    number: 3,
    title: "タピオカ"
  },
  {
    number: 4,
    title: "ポップコーン"
  },
  {
    number: 5,
    title: "フランクフルト"
  },
  {
    number: 6,
    title: "焼き鳥"
  },
  {
    number: 7,
    title: "レモネード"
  },
  {
    number: 8,
    title: "クレープ"
  },
  {
    number: 9,
    title: "たこ焼き"
  }
];
const API_URL =
"https://script.google.com/macros/s/AKfycbyr9GAES93Rw8YTLaOs-sVSrkaugyt5UY48ziiHNms8modz9eAfFmJhsgmQAcr52aUZ-g/exec";
let isUpdating = false;

async function loadCurrentStatus(){

  try{

    const response =
      await fetch(API_URL);

    const data =
      await response.json();

    Object.entries(data)
      .forEach(([number,status]) => {

        const card =
          document.querySelector(
            `[data-number="${number}"]`
          );

        if(!card) return;

        card
          .querySelector(`.${status}`)
          ?.classList.add("selected");

      });

  }catch(error){

    console.error(error);

  }

}

function updateStatus(number, status){

  if(isUpdating) return;

  isUpdating = true;

  document.body.classList.add("loading");

  fetch(API_URL,{
    method:"POST",
    body:JSON.stringify({
      number,
      status
    })
  })
  .then(() => {

    const card =
      document.querySelector(
        `[data-number="${number}"]`
      );

    if(card){

      card
      .querySelectorAll("button")
      .forEach(btn =>
        btn.classList.remove("selected")
      );

      card
      .querySelector(`.${status}`)
      ?.classList.add("selected");

    }

  })
  .catch(error => {

    console.error(error);

    alert("更新に失敗しました");

  })
  .finally(() => {

    isUpdating = false;

    document.body.classList.remove("loading");

  });

}
const list =
document.getElementById("products-list");

products.forEach(products => {

  const card =
  document.createElement("div");

  card.className = "admin-card";
  
  card.dataset.number = products.number;

  card.innerHTML = `
  
  <div class="title">
    ${products.number}
    ${products.title}
  </div>

  <div class="buttons">

    <button
      class="empty"
      onclick="updateStatus(${products.number}, 'empty')">
      🟢
    </button>

    <button
      class="normal"
      onclick="updateStatus(${products.number}, 'normal')">
      🟡
    </button>

    <button
      class="busy"
      onclick="updateStatus(${products.number}, 'busy')">
      🔴
    </button>

    <button
      class="limit"
      onclick="updateStatus(${products.number}, 'limit')">
      ⚫
    </button>

  </div>

  `;
  
  loadCurrentStatus();

  list.appendChild(card);

});
