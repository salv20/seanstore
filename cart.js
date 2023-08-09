const imageContainer = document.querySelector(".allProduct-container");
const getProductArray = JSON.parse(localStorage.getItem("productarray"));
const loadoption = document.querySelector(".loadoption");
const emptyCart = document.querySelector(".emptycart");
const total = document.querySelector(".totalamount");
const cartContainer = document.querySelector(".cart-container");
let priceArray = [];

const removeBtn = document.querySelector(".removebtn");
document
  .querySelector(".shop-more")
  .addEventListener("click", () => (window.location = "index.html"));
document
  .querySelector(".shop")
  .addEventListener("click", () => (window.location = "index.html"));

const cartFunction = function () {
  if (!getProductArray || getProductArray.length === 0) {
    emptyCart.classList.remove("hidden");
    loadoption.classList.add("hidden");
  } else {
    getProductArray.map((product, index) => {
      if (
        product.sizeL === 0 &&
        product.sizeM === 0 &&
        product.sizeXL === 0 &&
        product.sizeXXL === 0
      ) {
      } else {
        emptyCart.classList.add("hidden");
        loadoption.classList.remove("hidden");
        // console.log(product, index);
        const html = `
      <div class="image-final text-center pt-3 vs:pt-0">
  <div class="image-div">
  
    <img
    src="${product.imageLink}"
    data-id="${index}"
    alt=""
    />
    </div>
    <div class=" justify-between relative bottom-3 font-bold mt-8 cartarea">
    <div class="text-left">
    <p class="uppercase text-blue removebtn cursor-pointer mb-3"
    ><i class="fa fa-trash-o" aria-hidden="true"></i>
    <span class="ml-2">remove</span></p
    >
    </div>
    <section class="gap-4 grid grid-cols-2">
    <div class="flex space-x-3.5">
    <p>M</p>
    <aside class="flex gap-3">
    <p class=""
    ><i
    class="fa fa-minus minus4 num p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    <p class="item-num item4">${product.Mprice.length}</p>
    <p class=""
    ><i
    class="fa fa-plus num plus4 p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    </aside>
    </div>
    
    <div class="flex space-x-6">
    <p>L</p>
    <aside class="flex gap-3">
    <p class=""
    ><i
    class="fa fa-minus minus4 num p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    <p class="item-num item4">${product.Lprice.length}</p>
    <p class=""
    ><i
    class="fa fa-plus num plus4 p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    </aside>
    </div>
    <div class="flex space-x-3">
    <p>XL</p>
    <aside class="flex gap-3">
    <p class=""
    ><i
    class="fa fa-minus minus4 num p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    <p class="item-num item4">${product.XLprice.length}</p>
    <p class=""
    ><i
    class="fa fa-plus num plus4 p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    </aside>
    </div>
    <div class="flex space-x-2">
    <p>XXl</p>
    <aside class="flex gap-3">
    <p class=""
    ><i
    class="fa fa-minus minus4 num p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    <p class="item-num item4">${product.XXLprice.length}</p>
    <p class=""
    ><i
    class="fa fa-plus num plus4 p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    </aside>
    </div>
    </section>
    </div>
    </div>
    `;
        imageContainer.insertAdjacentHTML("beforebegin", html);
      }
      let Mtotal;
      let Ltotal;
      let XLtotal;
      let XXLtotal;
      let finalAmount;
      if (product.Mprice.length === 0) {
      } else {
        Mtotal = product.Mprice.reduce((a, b) => a + b);
      }
      if (product.Lprice.length === 0) {
      } else {
        Ltotal = product.Lprice.reduce((a, b) => a + b);
      }
      if (product.XLprice.length === 0) {
      } else {
        XLtotal = product.XLprice.reduce((a, b) => a + b);
      }
      if (product.XXLprice.length === 0) {
      } else {
        XXLtotal = product.XXLprice?.reduce((a, b) => a + b);
      }

      if (isFinite(Mtotal)) {
        priceArray.push(Mtotal);
      }
      if (isFinite(Ltotal)) {
        priceArray.push(Ltotal);
      }
      if (isFinite(XLtotal)) {
        priceArray.push(XLtotal);
      }
      if (isFinite(XXLtotal)) {
        priceArray.push(XXLtotal);
      }
      if (priceArray.length === 0) {
      } else {
        finalAmount = priceArray.reduce((a, b) => a + b);
      }

      total.textContent = `($${finalAmount.toFixed(2)})`;
    });
  }
  // REMOVE CART
  cartContainer.addEventListener("click", function (e) {
    const targetParent = e.target.parentElement;
    if (targetParent.classList.contains("removebtn")) {
      const parent = e.target.closest(".image-final");
      if (!parent) {
      } else {
        const num = parent.children[0].children[0];
        const targetnum = Number(num.getAttribute("data-id"));
        console.log(targetnum);
        getProductArray.splice(targetnum, 1);
        localStorage.setItem("productarray", JSON.stringify(getProductArray));
        console.log(getProductArray);
        window.location.reload();
      }
    }
  });
};
cartFunction();
