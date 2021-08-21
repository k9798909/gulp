"use strict";

var buycar = document.getElementsByClassName("buycar")[0];
buycar.style = "display:none";

var buycarEvent = function buycarEvent() {
  if (buycar.style.display == "none") {
    buycar.style = "display:show";
  } else {
    buycar.style = "display:none";
  }
};
//# sourceMappingURL=all.js.map
