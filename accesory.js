import MyProduct, { cartFunction, headearFunction } from "./general.js";
const http = new XMLHttpRequest();
http.open("get", "asset.json", true);
http.send();

const button = document.querySelector("button");

http.onload = function () {
  if (this.status == 200 && this.readyState == 4) {
    const result = JSON.parse(this.responseText);
    console.log(result);
    new MyProduct(result.accessory);
  }
};
headearFunction();
cartFunction();
