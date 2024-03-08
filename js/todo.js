//투두리스트 보이게 하기
const todoIcon = document.querySelector("#todoIcon");
const box = document.querySelector("#box");

const toggleHideenTodo = function () {
  box.classList.toggle(HIDDEN_CLASSNAME);
};

todoIcon.addEventListener("click", toggleHideenTodo);

//투두리스트 만들기
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array를 텍스트로 변환해 저장
}

function deleteTodo(event) {
  const targetLi = event.target.parentElement;
  targetLi.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(targetLi.id));
  //filter를 이용해 true값이 나오는 새로운 array를 만든다. parseInt는 id의 스트링값을 비교를 위한 숫자로 변환해줌.
  saveTodos();
}

function checked(checkBox, selectedSpan) {
  if (checkBox.checked === true) {
    checkBox.checked = false;
    selectedSpan.classList.remove("complete");
  } else {
    checkBox.checked = true;
    selectedSpan.classList.add("complete");
  }
}

function paintToDo(newTodo) {
  const newList = document.createElement("div");
  newList.id = newTodo.id; //div 태그에 id 추가
  const checkBox = document.createElement("input");
  checkBox.id = newList.id; //체크 표시 연동
  checkBox.type = "checkbox";
  const newLabel = document.createElement("label");
  newLabel.htmlFor = newList.id; // label 텍스트를 눌러도 체크 표시 됨
  const listSpan = document.createElement("span");
  listSpan.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "🗙";
  button.addEventListener("click", deleteTodo);
  newLabel.addEventListener("click", () => {
    checked(checkBox, listSpan);
  });
  newList.appendChild(checkBox);
  newLabel.appendChild(listSpan);
  newList.appendChild(newLabel);
  newList.appendChild(button);
  toDoList.appendChild(newList);
} // html를 동적으로 추가함

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //랜덤 숫자로 id 지정
  };
  toDos.push(newTodoObj); // array에 객체 저장
  paintToDo(newTodoObj); // html 화면에 출력
  saveTodos(); // 로컬스토리지에 저장
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos); //텍스트로 저장되어있던 array를 다시 자바스크립트 언어로 바꿈
  toDos = parsedTodos;
  parsedTodos.forEach(paintToDo); // foreach로 배열의 요소 하나하나를 다시 paintToDo() 함.
}

// for (let i = 0; i < checkList.length; i++) {
//   checkList[i].addEventListener("click", function () {
//     const selectedInput = this.previousSibling;
//     const selectedSpan = checkList[i].lastChild;
//     if (selectedInput.checked === true) {
//       selectedInput.checked = false;
//       selectedSpan.classList.remove("complete");
//     } else {
//       selectedInput.checked = true;
//       selectedSpan.classList.add("complete");
//     }
//   });
// }
