const imageContainer = document.querySelector(".allProduct-container");
let getProductArray = JSON.parse(localStorage.getItem("productarray"));
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
    class="fa fa-minus minus1 num p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    <p class="item-num item4">${product.Mprice.length}</p>
    <p class=""
    ><i
    class="fa fa-plus num plus1 p-2 bg-gray"
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
    class="fa fa-minus minus2 num p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    <p class="item-num item4">${product.Lprice.length}</p>
    <p class=""
    ><i
    class="fa fa-plus num plus2 p-2 bg-gray"
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
    class="fa fa-minus minus3 num p-2 bg-gray"
    aria-hidden="true"
    ></i
    ></p>
    <p class="item-num item4">${product.XLprice.length}</p>
    <p class=""
    ><i
    class="fa fa-plus num plus3 p-2 bg-gray"
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

    // cart addition
    const addRemove = () => {
      const product = getProductArray.map((product, index) => product);

      if (e.target.classList.contains("plus1")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);

        if (amount < 5) {
          const proArray = product[dataId];
          proArray.sizeM++;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(Mprice)) {
            proMprice.push(Mprice);
          }
          if (!isFinite(Mprice) && isFinite(Lprice)) {
            proMprice.push(Lprice - 5);
          }
          if (!isFinite(Mprice) && !isFinite(Lprice) && isFinite(XLprice)) {
            proMprice.push(XLprice - 10);
          }

          if (
            !isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            isFinite(XXLprice)
          ) {
            proMprice.push(XXLprice - 15);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }

      //
      if (e.target.classList.contains("minus1")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);

        if (amount > 1) {
          const proArray = product[dataId];
          proArray.sizeM--;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(Mprice)) {
            proMprice.pop(Mprice);
          }
          if (!isFinite(Mprice) && isFinite(Lprice)) {
            proMprice.pop(Lprice - 5);
          }
          if (!isFinite(Mprice) && !isFinite(Lprice) && isFinite(XLprice)) {
            proMprice.pop(XLprice - 10);
          }

          if (
            !isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            isFinite(XXLprice)
          ) {
            proMprice.pop(XXLprice - 15);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }
      //
      if (e.target.classList.contains("plus2")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);
        if (amount < 5) {
          const proArray = product[dataId];
          proArray.sizeL++;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(Lprice)) {
            proLprice.push(Lprice);
          }
          if (!isFinite(Lprice) && isFinite(Mprice)) {
            proLprice.push(Mprice + 5);
          }
          if (!isFinite(Mprice) && !isFinite(Lprice) && isFinite(XLprice)) {
            proLprice.push(XLprice - 5);
          }

          if (
            !isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            isFinite(XXLprice)
          ) {
            proLprice.push(XXLprice - 10);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }

      if (e.target.classList.contains("minus2")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);

        if (amount > 1) {
          const proArray = product[dataId];
          proArray.sizeL--;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(Lprice)) {
            proLprice.pop(Lprice);
          }
          if (!isFinite(Lprice) && isFinite(Mprice)) {
            proLprice.pop(Mprice + 5);
          }
          if (!isFinite(Mprice) && !isFinite(Lprice) && isFinite(XLprice)) {
            proLprice.pop(XLprice - 5);
          }

          if (
            !isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            isFinite(XXLprice)
          ) {
            proLprice.pop(XXLprice - 10);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }

      if (e.target.classList.contains("plus3")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);

        if (amount < 5) {
          const proArray = product[dataId];
          proArray.sizeXL++;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(XLprice)) {
            proXLprice.push(XLprice);
          }
          if (!isFinite(XLprice) && isFinite(Lprice)) {
            proXLprice.push(Lprice + 5);
          }
          if (!isFinite(XLprice) && !isFinite(Lprice) && isFinite(Mprice)) {
            proXLprice.push(Mprice + 10);
          }

          if (
            !isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            isFinite(XXLprice)
          ) {
            proXLprice.push(XXLprice - 5);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }

      if (e.target.classList.contains("minus3")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);

        if (amount > 1) {
          const proArray = product[dataId];
          proArray.sizeM--;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(XLprice)) {
            proXLprice.pop(XLprice);
          }
          if (!isFinite(XLprice) && isFinite(Lprice)) {
            proXLprice.pop(Lprice + 5);
          }
          if (!isFinite(XLprice) && !isFinite(Lprice) && isFinite(Mprice)) {
            proXLprice.pop(XLprice + 10);
          }

          if (
            !isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            isFinite(XXLprice)
          ) {
            proXLprice.pop(XXLprice - 5);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }

      if (e.target.classList.contains("plus4")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);

        if (amount < 5) {
          const proArray = product[dataId];
          proArray.sizeXXL++;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(XXLprice)) {
            proXXLprice.push(XXLprice);
          }
          if (!isFinite(XXLprice) && isFinite(Lprice)) {
            proXXLprice.push(Lprice + 10);
          }
          if (!isFinite(XXLprice) && !isFinite(Lprice) && isFinite(XLprice)) {
            proXXLprice.push(XLprice + 5);
          }

          if (
            isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            !isFinite(XXLprice)
          ) {
            proXXLprice.push(Mprice + 15);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }

      if (e.target.classList.contains("minus4")) {
        const closestDiv = e.target.closest(".image-final");
        const closestAside = e.target.closest("aside");
        const asideChild = closestAside.children;
        const dataId =
          closestDiv.children[0].children[0].getAttribute("data-id");
        let amount = Number(asideChild[1].textContent);

        if (amount > 1) {
          const proArray = product[dataId];
          proArray.sizeXXL--;
          // Array
          const proMprice = proArray.Mprice;
          const proLprice = proArray.Lprice;
          const proXLprice = proArray.XLprice;
          const proXXLprice = proArray.XXLprice;
          // PRICE
          const Mprice = proMprice[0];
          const Lprice = proLprice[0];
          const XLprice = proXLprice[0];
          const XXLprice = proXXLprice[0];

          if (isFinite(XXLprice)) {
            proXXLprice.pop(XXLprice);
          }
          if (!isFinite(XXLprice) && isFinite(Lprice)) {
            proXXLprice.pop(Lprice + 10);
          }
          if (!isFinite(Mprice) && !isFinite(Lprice) && isFinite(XLprice)) {
            proXXLprice.pop(XLprice + 5);
          }

          if (
            isFinite(Mprice) &&
            !isFinite(Lprice) &&
            !isFinite(XLprice) &&
            !isFinite(XXLprice)
          ) {
            proXXLprice.pop(Mprice + 15);
          }
          if (proArray.imageLink === getProductArray.imageLink) {
            getProductArray.splice(dataId, 1);
            getProductArray.push(proArray);
          } else {
            getProductArray = getProductArray;
          }
          localStorage.setItem("productarray", JSON.stringify(getProductArray));
          location.reload();
        }
      }
    };
    addRemove();

    const checkoutClo = e.target.closest(".checkout");
    if (!checkoutClo) {
    } else {
      localStorage.removeItem("productarray");
      cartContainer.classList.add("hidden");
      document.querySelector(".checkout-container").classList.remove("hidden");
    }
  });
};
cartFunction();
