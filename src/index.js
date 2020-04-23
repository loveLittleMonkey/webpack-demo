import _ from "lodash";
import "./style.css";
import Icon from "./5.jpeg";

function component() {
  let element = document.createElement("div");

  element.innerHTML = _.join(
    [
      "说金钱是罪恶，都在捞;说美女是祸水，都想要;说高处不胜寒，都在爬;说烟酒伤身体，都不戒;说天堂最美好，都不去!",
      "字体库字体",
    ],
    " "
  );
  element.addEventListener("click", () => {
    alert("clicking");
  });
  element.classList.add("hello");

  // 将图像添加到我们已经存在的 div 中。
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

function component2() {
  let element = document.createElement("div");
  element.innerHTML =
    "说金钱是罪恶，都在捞;说美女是祸水，都想要;说高处不胜寒，都在爬;说烟酒伤身体，都不戒;说天堂最美好，都不去! 普通字体";
  return element;
}

document.body.appendChild(component2());

window.addEventListener("beforeunload", (event) => {
  debugger;
  // Cancel the event as stated by the standard.
  event.preventDefault();
  // Chrome requires returnValue to be set.
  event.returnValue = "";
});
