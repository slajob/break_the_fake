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

    if (r.find((article) => article.url === url)) {
      success();
      document.getElementById("score").innerHTML =
        (r.fake_rating + article.fake_rating_community) / 2;
    } else {
      failure();
    }
  });
}
window.onload = setup;
