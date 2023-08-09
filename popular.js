import MyProduct, { cartFunction, headearFunction } from "./general.js";

const htttp = new XMLHttpRequest();
htttp.open("get", "asset.json", true);
htttp.send();

htttp.onload = function () {
  if (this.status == 200 && this.readyState == 4) {
    const request = JSON.parse(this.responseText);
    new MyProduct(request.popular);
  }
};
headearFunction();
cartFunction();
