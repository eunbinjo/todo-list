const loginForm = document.querySelector("#login-form form");
const loginInput = document.querySelector("#login-form form input");

let correctNameForm = document.querySelector("#greeting form");
let correctNameInput = document.querySelector("#greeting form input");

const hiddenHeader = document.querySelector("header");
const hiddenGreeting = document.querySelector("#greeting h1");
const hiddenNameCorrect = document.querySelector("#greeting p");
const hiddenClock = document.querySelector("#clock h2");
const hiddenFooter = document.querySelector("footer");
const hiddenTodo = document.querySelector("#todo");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본 동작을 막는 함수
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  hiddenGreeting.innerText = `Have a good day, ${username}.`;
  hiddenGreeting.classList.remove(HIDDEN_CLASSNAME);
  hiddenHeader.classList.remove(HIDDEN_CLASSNAME);
  hiddenClock.classList.remove(HIDDEN_CLASSNAME);
  hiddenFooter.classList.remove(HIDDEN_CLASSNAME);
  hiddenTodo.classList.remove(HIDDEN_CLASSNAME);
}

// 수정 버튼 만들기
function paintArrow() {
  hiddenNameCorrect.innerHTML = `<i class="fa-solid fa-caret-down"></i>`;
  hiddenNameCorrect.classList.remove(HIDDEN_CLASSNAME);
}

function hindArrow() {
  hiddenNameCorrect.classList.add(HIDDEN_CLASSNAME);
}

hiddenGreeting.addEventListener("mouseover", paintArrow);
hiddenNameCorrect.addEventListener("mouseout", hindArrow);

//클릭 시 이름 수정 창 뜨게 하기
function clickArrow() {
  hiddenGreeting.innerHTML = `Have a good day, `;
  correctNameInput.classList.remove(HIDDEN_CLASSNAME);
}

hiddenNameCorrect.addEventListener("click", clickArrow);

//로컬스토리지 이름 수정
let savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}

function onCorrectName(event) {
  event.preventDefault();
  savedUsername = correctNameInput.value;
  localStorage.setItem(USERNAME_KEY, savedUsername);
  hiddenGreeting.innerText = `Have a good day, ${savedUsername}.`;
  correctNameInput.classList.add(HIDDEN_CLASSNAME);
}

if (document.contains(correctNameForm)) {
  correctNameForm.addEventListener("submit", onCorrectName);
}
