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

  // fetch
  // success();
  // failure();
}
window.onload = setup;
