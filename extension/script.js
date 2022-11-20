function success() {
  const root = document.querySelector("#success");
  root.classList.remove("hidden");
}

function failure() {
  const root = document.querySelector("#failure");
  root.classList.remove("hidden");
}

function raportClick() {
  console.log("btn click");
}

function btnBtn() {
  console.log("x");
}

async function setup() {
  const btn = document.querySelector("#raport-btn");
  btn.addEventListener("click", raportClick);

  const btn2 = document.querySelector("#btf-btn");
  btn2.addEventListener("click", btnBtn);

  const response = await fetch("http://localhost:8000/articles");
  const r = await response.json();

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let url = tabs[0].url;

    const art = r.find((article) => article.url === url);

    if (art) {
      success();
      document.getElementById("score").innerHTML =
        art.fake_rating === "None" ? 0 : art.fake_rating;
    } else {
      failure();
    }
  });
}
window.onload = setup;
