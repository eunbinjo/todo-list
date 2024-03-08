// 포커스를 누르면 시계가 업어지고 뽀모도로가 생김 (토글 이용)
const onFocus = document.querySelector("#focus");
const mainClock = document.querySelector("#clock");
const pomodoro = document.querySelector("#hiddenPomodoro");

const loadPomodoro = function () {
  mainClock.classList.toggle(HIDDEN_CLASSNAME);
  hiddenGreeting.classList.toggle(HIDDEN_CLASSNAME);
  hiddenNameCorrect.classList.toggle(HIDDEN_CLASSNAME);
  pomodoro.classList.toggle(HIDDEN_CLASSNAME);
};

onFocus.addEventListener("click", loadPomodoro);

//집중 시간&휴식시간 설정하기
const pomoSet = document.querySelector("#pomodoro #setting");
const setTimer = document.querySelector("#timerSet");

const setTime = function () {
  timerSet.classList.toggle(HIDDEN_CLASSNAME);
};

pomoSet.addEventListener("click", setTime);

let setSessionMin = document.querySelector("#setMinute");
let setBreakMin = document.querySelector("#setSecond");

const setSession = document.querySelectorAll("#sessionSetting i");
const setBreak = document.querySelectorAll("#breakSetting i");

const upMinute = function () {
  const selectSpan = this.nextSibling.nextSibling;
  let upNum = Number(selectSpan.innerText) + 1;
  selectSpan.innerText = `${upNum}`;
};

const downMinute = function () {
  const selectSpan = this.previousSibling.previousSibling;
  let downNum = Number(selectSpan.innerText) - 1;
  selectSpan.innerText = `${downNum}`;
};

setSession[0].addEventListener("click", upMinute);
setSession[1].addEventListener("click", downMinute);
setBreak[0].addEventListener("click", upMinute);
setBreak[1].addEventListener("click", downMinute);

let sessionMinutes = document.querySelector("#pomodoro #minutes");

const okBtn = document.querySelector("#ok");

const setNewTime = function () {
  sessionMinutes.innerText = setSessionMin.innerText;
  timerSet.classList.add(HIDDEN_CLASSNAME);
};
//break 시간 나중에 반영. - 사유 : 아직 브레이크로 바뀌는 타이머 구현 않함

okBtn.addEventListener("click", setNewTime);

//타이머 만들기
