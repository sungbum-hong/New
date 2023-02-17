// JS 구현

const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const input = document.getElementById("content");

// 클릭 된 요소를 저장하기 위한 전역 변수

// 내가 클릭한 td의 위치
let targetEl;

function calendarTask(e) {
  console.log(e.target);
  console.log(e.target.tagName);
  if (e.target.tagName === "P") {
    date.value = `2023년 2월 ${e.target.textContent}`;
    targetEl = e.target.parentNode;
  } else if (e.target.tagName === "TD") {
    console.log(e.target);
    const day = e.target.children[0].textContent;
    date.value = `2023년 2월 ${day}일`;
    targetEl = e.target;
  } else if (e.target.tagName === "DIV") {
    e.target.remove();
  }
}

function writeSchedule() {
  if (input.value === "" && date.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  } else if (input.value === "") {
    input.setAttribute("placeholder", "내용을 입력하세요!");
    return;
  } else if (date.value === "") {
    date.setAttribute("placeholder", "날짜를 선택하세요!");
    return;
  }

  const addDiv = document.createElement("div");
  addDiv.textContent = input.value;

  // 클릭시 지우는 법

  // addDiv.addEventListener("click", function (e) {
  //   addDiv.remove();
  // });

  targetEl.append(addDiv);
  input.value = "";
}
calendar.addEventListener("click", calendarTask);
