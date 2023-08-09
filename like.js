import { headearFunction, cartFunction } from "./general.js";
cartFunction();
const imageFinal = document.querySelector(".image-final");
headearFunction();
const loadoption = document.querySelector(".loadoption");
const emptyCart = document.querySelector(".emptycart");
const getLike = JSON.parse(localStorage.getItem("likecontainer"));
const likeText = document.querySelector(".like-num");

if (!localStorage.likecontainer || getLike.src.length === 0) {
  emptyCart.classList.remove("hidden");
  loadoption.classList.add("hidden");
} else {
  const getLike = JSON.parse(localStorage.getItem("likecontainer"));
  likeText.textContent = getLike.src.length;

  const src = getLike.src;
  const price = getLike.price;
  const name = getLike.name;
  const likeFunctionBox = () => {
    imageFinal.innerHTML = "";
    src.forEach(function (pro, index) {
      const html = `
          <div class="image-final text-center image${index} pt-3 vs:pt-0">
          <div class="image-div ">
          <img
          src="${pro}"
          alt=""
          data-id="${index}"
          />
          <button
          class="relative quickview opacity-0 bottom-24 transition-all duration-500 capitalize tracking-wide font-semibold px-3 py-2 bg-white text-dropBlack rounded-3xl hover:bg-black hover:text-white"
          >quick view</button
          >
          </div>
          <div class="flex justify-between relative bottom-3 font-bold">
          <div class="text-left">
          <p class="cursor-pointer text-imgText hover:text-blue"
          >${name[index]}</p
          >
          <p>${price[index]}</p>
          </div>
          <div
          class="text-gray absolute right-1 hover:text-blue h-fit w-fit text-2xl transition-all cursor-pointer duration-500"
          ><i class="bx bxs-heart text-blue unlike"></i
          ></div>
          </div>
          </div>
          `;
      imageFinal.insertAdjacentHTML("beforebegin", html);
    });
    loadoption.addEventListener("click", (e) => {
      if (e.target.classList.contains("unlike")) {
        const parent = e.target.closest(".image-final");
        if (!parent) {
        } else {
          const num = parent.children[0].children[0];
          const targetnum = Number(num.getAttribute("data-id"));
          console.log(targetnum, num);
          src.splice(targetnum, 1);
          price.splice(targetnum, 1);
          name.splice(targetnum, 1);
          console.log(getLike);
          localStorage.setItem("likecontainer", JSON.stringify(getLike));

          window.location.reload();
        }
      }
    });
  };
  likeFunctionBox();
}
