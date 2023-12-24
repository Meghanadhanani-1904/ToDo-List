let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let listContainer = document.querySelector(".listContainer");
let list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Add something");
  } else if (input.value.length < 4) {
    alert("Your Task should have at least 4 letters");
  } else {
    let newDiv = document.createElement("div");
    newDiv.className = "list";
    listContainer.appendChild(newDiv);

    let items = document.createElement("div");
    items.className = "item";
    newDiv.appendChild(items);

    let newH1 = document.createElement("h1");
    newH1.innerText = input.value;
    newH1.className = "h1Text";
    items.appendChild(newH1);

    let delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.innerHTML = "Delete";
    newDiv.append(delBtn);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    // console.log("click", e.target);
    // console.log("click", e.target.parentElement);

    if (e.target.className === "h1Text") {
      e.target.style.textDecoration = "line-through";
      saveData();
    } else if (e.target.className === "delete") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let listContainer = document.querySelector(".listContainer");
let list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Add something");
  } else if (input.value.length < 4) {
    alert("Your Task should have at least 4 letters");
  } else {
    let newDiv = document.createElement("div");
    newDiv.className = "list";
    listContainer.appendChild(newDiv);

    let items = document.createElement("div");
    items.className = "item";
    newDiv.appendChild(items);

    let newH1 = document.createElement("h1");
    newH1.innerText = input.value;
    newH1.className = "h1Text";
    items.appendChild(newH1);

    let delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.innerHTML = "Delete";
    newDiv.append(delBtn);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    // console.log("click", e.target);
    // console.log("click", e.target.parentElement);

    if (e.target.className === "h1Text") {
      e.target.style.textDecoration = "line-through";
      saveData();
    } else if (e.target.className === "delete") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let listContainer = document.querySelector(".listContainer");
let list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Add something");
  } else if (input.value.length < 4) {
    alert("Your Task should have at least 4 letters");
  } else {
    let newDiv = document.createElement("div");
    newDiv.className = "list";
    listContainer.appendChild(newDiv);

    let items = document.createElement("div");
    items.className = "item";
    newDiv.appendChild(items);

    let newH1 = document.createElement("h1");
    newH1.innerText = input.value;
    newH1.className = "h1Text";
    items.appendChild(newH1);

    let delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.innerHTML = "Delete";
    newDiv.append(delBtn);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    // console.log("click", e.target);
    // console.log("click", e.target.parentElement);

    if (e.target.className === "h1Text") {
      e.target.style.textDecoration = "line-through";
      saveData();
    } else if (e.target.className === "delete") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let listContainer = document.querySelector(".listContainer");
let list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Add something");
  } else if (input.value.length < 4) {
    alert("Your Task should have at least 4 letters");
  } else {
    let newDiv = document.createElement("div");
    newDiv.className = "list";
    listContainer.appendChild(newDiv);

    let items = document.createElement("div");
    items.className = "item";
    newDiv.appendChild(items);

    let newH1 = document.createElement("h1");
    newH1.innerText = input.value;
    newH1.className = "h1Text";
    items.appendChild(newH1);

    let delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.innerHTML = "Delete";
    newDiv.append(delBtn);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    // console.log("click", e.target);
    // console.log("click", e.target.parentElement);

    if (e.target.className === "h1Text") {
      e.target.style.textDecoration = "line-through";
      saveData();
    } else if (e.target.className === "delete") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let listContainer = document.querySelector(".listContainer");
let list = document.querySelector(".list");

addBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Add something");
  } else if (input.value.length < 4) {
    alert("Your Task should have at least 4 letters");
  } else {
    let newDiv = document.createElement("div");
    newDiv.className = "list";
    listContainer.appendChild(newDiv);

    let items = document.createElement("div");
    items.className = "item";
    newDiv.appendChild(items);

    let newH1 = document.createElement("h1");
    newH1.innerText = input.value;
    newH1.className = "h1Text";
    items.appendChild(newH1);

    let delBtn = document.createElement("button");
    delBtn.className = "delete";
    delBtn.innerHTML = "Delete";
    newDiv.append(delBtn);
  }
  input.value = "";
  saveData();
});

listContainer.addEventListener(
  "click",
  (e) => {
    // console.log("click", e.target);
    // console.log("click", e.target.parentElement);

    if (e.target.className === "h1Text") {
      e.target.style.textDecoration = "line-through";
      saveData();
    } else if (e.target.className === "delete") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
