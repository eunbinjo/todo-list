const loginForm = document.querySelector("#login-form form");
const loginInput = document.querySelector("#login-form form input");

const hiddenHeader = document.querySelector("header");
const hiddenGreeting = document.querySelector("#greeting h1");
const hiddenClock = document.querySelector("#clock h2");
const hiddenQuote = document.querySelector("#quote");

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
  hiddenQuote.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUsername);
}
