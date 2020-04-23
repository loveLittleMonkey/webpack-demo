function component() {
  let element = document.createElement("div");

  element.innerHTML = "测试webpack知识点";
  element.addEventListener("click", () => {
    alert("clicking");
  });
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
