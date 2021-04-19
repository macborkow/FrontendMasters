let result = "0";

window.onload = () => {
  let screen = document.querySelector(".screen");
  screen.innerHTML = "0";
  let buttons = document.querySelectorAll(".button");

  buttons.forEach((item) => {
    if (isNaN(item.innerHTML)) {
      switch (item.innerHTML) {
        case "←":
          item.addEventListener("click", () => {
            if (screen.innerHTML.length > 1) {
              screen.innerHTML = screen.innerHTML.replace(/.$/, "");
            } else {
              screen.innerHTML = "0";
            }
          });
          break;
        case "C":
          item.addEventListener("click", () => {
            screen.innerHTML = "0";
          });
          break;
      }
    } else {
      item.addEventListener("click", () => {
        if (screen.innerHTML === "0") {
          screen.innerHTML = item.innerHTML;
        } else {
          screen.innerHTML += item.innerHTML;
        }
      });
    }
  });
};
