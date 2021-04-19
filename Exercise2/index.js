let result = "0";
let operator = "";
let makeMinus = false;
let resultShown = false;

window.onload = () => {
  let screen = document.querySelector(".screen");
  screen.innerHTML = "0";
  let buttons = document.querySelectorAll(".button");

  buttons.forEach((item) => {
    if (isNaN(item.innerHTML)) {
      switch (item.innerHTML) {
        case "←":
          item.addEventListener("click", () => {
            if (!resultShown) {
              if (screen.innerHTML.length > 1) {
                screen.innerHTML = screen.innerHTML.replace(/.$/, "");
              } else {
                screen.innerHTML = "0";
              }
            }
          });
          break;
        case "C":
          item.addEventListener("click", () => {
            screen.innerHTML = "0";
            result = "0";
            resultShown = false;
          });
          break;
        case "=":
          item.addEventListener("click", () => {
            if (!resultShown) {
              switch (operator) {
                case "+":
                  result = (
                    parseInt(result) + parseInt(screen.innerHTML)
                  ).toString();
                  screen.innerHTML = result;
                  resultShown = true;
                  operator = "";
                  break;
                case "-":
                  result = (
                    parseInt(result) - parseInt(screen.innerHTML)
                  ).toString();
                  screen.innerHTML = result;
                  resultShown = true;
                  operator = "";
                  break;
                case "÷":
                  result = Math.floor(
                    parseInt(result) / parseInt(screen.innerHTML)
                  ).toString();
                  screen.innerHTML = result;
                  resultShown = true;
                  operator = "";
                  break;
                case "×":
                  result = (
                    parseInt(result) * parseInt(screen.innerHTML)
                  ).toString();
                  screen.innerHTML = result;
                  resultShown = true;
                  operator = "";
                  break;
              }
            }
          });
          break;
        default:
          item.addEventListener("click", () => {
            if (operator !== "-" && screen.innerHTML === "0") {
              makeMinus = true;
            } else operator = item.innerHTML;

            if (result === "0") {
              result = screen.innerHTML;
              resultShown = true;
            }

            if (resultShown) {
              screen.innerHTML = "0";
              resultShown = false;
            }
          });
      }
    } else {
      item.addEventListener("click", () => {
        if (!resultShown) {
          if (screen.innerHTML === "0") {
            if (makeMinus) {
                screen.innerHTML = -item.innerHTML;
                makeMinus = false;
            }
            else screen.innerHTML = item.innerHTML;
          } else {
            screen.innerHTML += item.innerHTML;
          }
        }
      });
    }
  });
};
