const API_URL =
"https://script.google.com/macros/s/AKfycbxxqs7nc0gnhbGMkelwQKpM9R9CcOKEI5r75PpMz3S4XX1Ve6ONLD_FHet4-zUUbqsS/exec";
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
document.getElementById("project-list");

projects.forEach(project => {

  const card =
  document.createElement("div");

  card.className = "admin-card";
  
  card.dataset.number = project.number;

  card.innerHTML = `
  
  <div class="title">
    ${project.number}
    ${project.title}
  </div>

  <div class="buttons">

    <button
      class="empty"
      onclick="updateStatus(${project.number}, 'empty')">
      🟢
    </button>

    <button
      class="normal"
      onclick="updateStatus(${project.number}, 'normal')">
      🟡
    </button>

    <button
      class="busy"
      onclick="updateStatus(${project.number}, 'busy')">
      🔴
    </button>

    <button
      class="limit"
      onclick="updateStatus(${project.number}, 'limit')">
      ⚫
    </button>

  </div>

  `;
  
  loadCurrentStatus();

  list.appendChild(card);

});
