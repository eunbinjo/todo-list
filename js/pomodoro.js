// 포커스를 누르면 시계가 업어지고 뽀모도로가 생김
// 한 번 더 누르면 원래 시계로 돌아가게 하는거. 토글로 할 순없나 알아보기.
const onFocus = document.querySelector("#focus");

const mainClock = document.querySelector("#clock");
const pomodoro = document.querySelector("#pomodoro");

const loadPomodoro = function (event) {
  event.preventDefault();
  console.log("Dddddd");
  mainClock.classList.add(HIDDEN_CLASSNAME);
  hiddenGreeting.classList.add(HIDDEN_CLASSNAME);
  hiddenNameCorrect.classList.add(HIDDEN_CLASSNAME);
  pomodoro.classList.remove(HIDDEN_CLASSNAME);
};

onFocus.addEventListener("click", loadPomodoro);

//
