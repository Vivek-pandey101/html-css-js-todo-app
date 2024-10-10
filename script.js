let container = document.querySelector(".container");
let body = document.querySelector("body");
let image = document.getElementById("image");
let inputCheck = document.querySelector("#inputCheck");
let todoInput = document.querySelector("#todoInput");
let input = document.querySelector(".input");
let todos = document.querySelector(".todos");
let mainSection = document.querySelector(".main-section");
let counter = document.querySelector("#count");
let links = document.querySelector(".linkTwo");
let count = 0;

image.addEventListener("click", () => {
  if (image.getAttribute("src") === "./images/icon-moon.svg") {
    image.setAttribute("src", "./images/icon-sun.svg");
    body.style.backgroundColor = "black";
    mainSection.style.backgroundColor = "hsl(235, 19%, 35%)";
    input.style.backgroundColor = "hsl(235, 19%, 35%)";
    links.style.backgroundColor = "hsl(240, 1%, 32%)";
    container.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
  } else {
    image.setAttribute("src", "./images/icon-moon.svg");
    body.style.backgroundColor = "white";
    mainSection.style.backgroundColor = "white";
    input.style.backgroundColor = "white";
    links.style.backgroundColor = "white";
    container.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
  }
});

todoInput.addEventListener("keydown", () => {
  if (event.key === "Enter") {
    let para = document.createElement("p");
    let span = document.createElement("button");
    let checkImage = document.createElement("img");
    span.style.background = "white";
    let todoItem = document.createElement("div");
    let cross = document.createElement("img");
    cross.style.cursor = "pointer";
    cross.id = "cross";
    para.style.cursor = "pointer";
    para.addEventListener("mouseover", () => {
      cross.setAttribute("src", "./images/icon-cross.svg");
      cross.addEventListener("mouseover", () => {
        cross.setAttribute("src", "./images/icon-cross.svg");
      });
    });

    if (mainSection.offsetHeight >= 400) {
      mainSection.style.overflowY = "scroll";
    } else {
      mainSection.style.overflow = "hidden";
    }

    para.addEventListener("mouseout", () => {
      cross.setAttribute("src", "");
    });
    todoItem.id = "todo";
    span.id = "checkBox";
    todoItem.appendChild(span);
    todoItem.appendChild(para);
    todoItem.appendChild(cross);
    count++;
    counter.innerText = count;
    if (todos) {
      para.innerText = todoInput.value;
      todos.appendChild(todoItem);
    }
    span.addEventListener("click", () => {
      checkImage.id = "img";
      span.appendChild(checkImage);
      if (checkImage.getAttribute("src") === "./images/icon-check.svg") {
        span.removeChild(checkImage);
        checkImage.setAttribute("src", "");
        para.style.textDecoration = "none";
        para.style.color = "black";
      } else {
        checkImage.setAttribute("src", "./images/icon-check.svg");
        checkImage.style.background =
          " linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
        para.style.textDecoration = "line-through";
        para.style.color = "hsl(236, 9%, 61%)";
      }
    });
    todoInput.value = "";
  }
});
