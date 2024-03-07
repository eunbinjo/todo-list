// 포커스를 누르면 시계가 업어지고 뽀모도로가 생김 (토글 이용)
const onFocus = document.querySelector("#focus");

const mainClock = document.querySelector("#clock");
const pomodoro = document.querySelector("#hiddenPomodoro");

const loadPomodoro = function (event) {
  event.preventDefault();
  mainClock.classList.toggle(HIDDEN_CLASSNAME);
  hiddenGreeting.classList.toggle(HIDDEN_CLASSNAME);
  hiddenNameCorrect.classList.toggle(HIDDEN_CLASSNAME);
  pomodoro.classList.toggle(HIDDEN_CLASSNAME);
};

onFocus.addEventListener("click", loadPomodoro);

//분, 초 표시
const pomoMinutes = document.querySelector("#pomodoro #minutes");
const pomoSeconds = document.querySelector("#pomodoro #seconds");
const pomoSet = document.querySelector("#pomodoro #setting");
