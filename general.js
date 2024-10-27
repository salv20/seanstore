const imageFinal = document.querySelector(".image-final");
export default class MyProduct {
  constructor(info) {
    this.product(info);
  }
  product(asset) {
    imageFinal.innerHTML = "";
    asset.forEach(function (pro, index) {
      const html = `
          <div class="image-final text-center image${index} pt-3 vs:pt-0">
          <div class="image-div ">
          <img
          src="${pro.imgsrc}"
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
          >${pro.imgname}</p
          >
          <p>${pro.imgprice}</p>
          </div>
          <div
          class="text-gray absolute right-1 hover:text-blue h-fit w-fit text-2xl transition-all cursor-pointer duration-500"
          ><i class="bx bxs-heart like"></i
          >
          <i class="bx bxs-heart hidden unlike text-blue"></i
          ></div>
          </div>
          </div>
          `;
      imageFinal.insertAdjacentHTML("beforebegin", html);
    });
  }
}

//
export function headearFunction() {
  const html = `
  <header class="bg-white lg:bg-gray">
        <div
          class="flex uppercase justify-between mx-auto pt-3 md:w-9/12 w-11/12 h-fit"
        >
          <div class="flex space-x-16 text-xl"
            ><h1 class="text-seanText font-bold font"
              >sean <span class="font-normal text-textBlack">store</span></h1
            >
            <div
              class="hidden lg:flex capitalize text-sm space-x-5 text-dropBlack font-medium my-1"
            >
              <p class="text-blue cursor-pointer home w-fit">home</p>
              <p class="hover:text-blue cursor-pointer shop w-fit">shop</p>
              <p class="hover:text-blue cursor-pointer shop w-fit"
                >features
                <span
                  class="rounded-2xl hot bg-lightRed text-white relative uppercase bottom-4 smallText px-1.5 right-2 py-0.5 tracking-widest cursor-default"
                  >hot</span
                >
              </p>
              <p class="hover:text-blue cursor-pointer w-fit">blog</p>
              <p class="hover:text-blue cursor-pointer contact w-fit"
                >contact</p
              >
            </div>
          </div>
          <div class="flex text-2xl sm:text-3xl sm:space-x-5 space-x-4 pr-5">
            <div class="cursor-pointer hover:text-blue"
              ><i class="bx bxs-cart-alt"></i>
              <p
                class="bg-blue cart-number text-white relative text-sm px-1.5 hel bottom-10 sm:bottom-11 left-4 sm:left-5 w-fit text-center"
                >0</p
              >
            </div>
            <div class="lg:hidden handburger my-1.5 sm:my-2.5 cursor-pointer">
              <p class="hand1"></p>
              <p class="hand2"></p>
              <p class="hand3"></p>
            </div>
          </div>
        </div>
      </header>

      <section class="bg-dropBlack text-sm hidden menuop lg:hidden">
        <div class="">
          <h3 class="bg-dropBlack text-white px-5 py-3"
            >Free shipping for standard order over $100</h3
          >
          <hr class="text-gray h-0.5"
        /></div>

        <div class="bg-dropBlack flex px-3 justify-around py-1 w-80">
          <div class="cross"></div>

          <p class="text-white hover:text-blue cursor-pointer">Help & FAQs </p>
          <div class="cross"></div>

          <p class="text-white hover:text-blue capitalize cursor-pointer"
            >my account</p
          >
          <div class="cross"></div>

          <p class="text-white hover:text-blue uppercase cursor-pointer">en</p>

          <div class="cross"></div>
          <p class="text-white hover:text-blue uppercase cursor-pointer">usd</p>
          <div class="cross"></div>
        </div>

        <div class="bg-blue space-y-4 font-bold text-white capitalize px-5">
          <p class="cursor-pointer pt-2 home w-fit">home</p>
          <p class="cursor-pointer shop w-fit">shop</p>
          <p class="cursor-pointer shop w-fit"
            >features
            <span
              class="rounded-2xl hot bg-lightRed text-white relative uppercase left-2 smallText px-1.5 py-0.5 tracking-widest cursor-default"
              >hot</span
            >
          </p>
          <p class="cursor-pointer w-fit">blog</p>
          <p class="cursor-pointer pb-4 contact w-fit">contact</p>
        </div>
      </section>
  `;
  document.querySelector("main").innerHTML = html;

  const button = document.querySelector("button");
  button.onclick = () => (window.location = "allProduct.html");
  const option = document.querySelector(".menuop");
  const menu = document.querySelector(".handburger");
  menu.addEventListener("click", function (e) {
    option.classList.toggle("hidden");
    menu.classList.toggle("hand");
  });
  const main = document.querySelector("main");
  main.addEventListener("click", function (e) {
    const target = e.target.classList;
    if (target.contains("home")) {
      console.log(e.target);
      window.location = "index.html";
    }
    if (target.contains("shop")) {
      window.location = "allProduct.html";
    }
    if (target.contains("hot")) {
      window.location = "popular.html";
    }
    if (target.contains("contact")) {
      window.location = "https://x.com/Salv_hub";
    }
  });

  const getProductArray = JSON.parse(localStorage.getItem("productarray"));
  if (!localStorage.productarray) {
  } else {
    document.querySelector(".cart-number").textContent = getProductArray.length;
  }
  document
    .querySelector(".bxs-cart-alt")
    .addEventListener("click", () => (window.location = "cart.html"));
}

//
const cartoptionContainer = document.querySelector(".cartoption-container");

export function viewFunction(src, name, amount) {
  cartoptionContainer.innerHTML = "";
  const html = `
  <div
          class="p-10 bg-white capitalize md:grid grid-cols-2 md:gap-10 contol-box"
        >
          <aside class="lg:w-96 pb-5">
            <img
              src="${src}"
              alt=""
            />
          </aside>
          <article>
            
            <div class="empty-option">
              <aside class="md:py-8 lg:py-16">
                <div class="text-xl font-semibold text-dropBlack space-y-2">
                  <p>${name}</p>
                  <p>$${amount}</p>
                </div>


                <article class="choose my-5 space-y-3">
                  <div class="space-x-6"> </div>
                </article>

                <div>
                  <div class="uppercase font-semibold pb-1">variations:</div>
                  <div class="uppercase flex gap-5">
                    <p class="opt px-2 py-1">m</p>
                    <p class="opt px-2 py-1">l</p>
                    <p class="opt px-2 py-1">xl</p>
                    <p class="opt px-2 py-1">xxl</p>
                  </div>
                </div>
                <article class="my-5">
                  <button
                    type="button"
                    class="py-2 px-12 add transition-all duration-500 mb-2 bg-blue text-white hover:bg-black uppercase"
                    >add to cart</button
                  >
                </article>
                <div class="flex ml-2 space-x-5 text-blue">
                  <p class=""
                    ><a href="https://twitter.com/Salvati75317889"
                      ><i class="fa fa-twitter" aria-hidden="true"></i> </a
                  ></p>
                  <p class=""
                    ><a
                      href="https://www.linkedin.com/in/amoke-salvation-6b89a7248/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BAYjpA6EoQ7uaKA4FEv5UhA%3D%3D"
                      ><i class="fa fa-linkedin" aria-hidden="true"></i></a
                  ></p>
                  <p class=""
                    ><a href="https://github.com/salv20"
                      ><i class="fa fa-github" aria-hidden="true"></i></a
                  ></p>
                  <p class=""
                    ><a href="https://wa.me/qr/OYZTSSFW7TV7E1"
                      ><i class="fa fa-whatsapp" aria-hidden="true"></i></a
                  ></p>
                </div>
              </aside>
            </div>



            <div class="notempty-option hidden">
              <aside class="">
                <h1 class="pb-3 font-bold">please select a variation</h1>
                <div class="space-y-3">
                  <div class="flex justify-between variation">
                    <div class="font-bold tracking-tighter">
                      <p class="m">m</p>
                      <p>$${amount.toFixed(2)}</p>
                      <p class="text-sm font-normal normal-case">in stock</p>
                    </div>
                    <div class="flex gap-5">
                      <p class=""
                        ><i
                          class="fa fa-minus minus1 num p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                      <p class="item-num const item1">0</p>
                      <p class=""
                        ><i
                          class="fa fa-plus num plus1 p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                    </div>
                  </div> 

                  <div class="flex justify-between variation">
                    <div class="font-bold">
                      <p class="l">l</p>
                      <p>$${(amount + 5).toFixed(2)}</p>
                      <p class="text-sm font-normal normal-case">in stock</p>
                    </div>
                    <div class="flex gap-5">
                      <p class=""
                        ><i
                          class="fa fa-minus minus2 num p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                      <p class="item-num item2">0</p>
                      <p class=""
                        ><i
                          class="fa fa-plus num plus2 p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                    </div>
                  </div>


                  <div class="flex justify-between variation">
                    <div class="font-bold uppercase">
                      <p class="xl">xl</p>
                      <p>$${(amount + 10).toFixed(2)}</p>
                      <p class="text-sm font-normal normal-case">in stock</p>
                    </div>
                    <div class="flex gap-5">
                      <p class=""
                        ><i
                          class="fa fa-minus minus3 num p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                      <p class="item-num item3">0</p>
                      <p class=""
                        ><i
                          class="fa fa-plus num plus3 p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                    </div>
                  </div>

                  <div class="flex justify-between variation">
                    <div class="font-bold uppercase">
                      <p class="xxl">xxl</p>
                      <p>$${(amount + 15).toFixed(2)}</p>
                      <p class="text-sm font-normal normal-case">in stock</p>
                    </div>
                    <div class="flex gap-5">
                      <p class=""
                        ><i
                          class="fa fa-minus minus4 num  p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                      <p class="item-num item4">0</p>
                      <p class=""
                        ><i
                          class="fa fa-plus num plus4 p-2 bg-gray"
                          aria-hidden="true"
                        ></i
                      ></p>
                    </div>
                  </div>

                  </div>
                <div class="space-y-2 text-center py-5">
                  <p
                    class="uppercase cart-view text-sm px-3 sm:px-5 sm:text-base bg-blue py-3 text-white hover:bg-black rounded-lg transition-all duration-500 cursor-pointer"
                    >view cart and check out</p
                  >
                  <p
                    class="uppercase continue-shop bg-blue py-3 text-white hover:bg-black rounded-lg transition-all duration-500 cursor-pointer"
                    >continue shopping</p
                  >
                </div>
              </aside>
            </div>

          </article>
        </div>

  `;
  cartoptionContainer.innerHTML = html;
}
const body = document.querySelector("body");
const cartDiv = document.querySelector(".cart-div");
const overflow = document.querySelector(".overflow");
const cartCancel = document.querySelector(".cart-cancelled");

export function cartFunction() {
  body.addEventListener("click", function (e) {
    if (e.target.classList.contains("quickview")) {
      const parent = e.target.parentElement;
      const children = parent.children;
      const src = [...children][0].src;
      const next = parent.nextElementSibling.children;
      const paragraph = [...next][0];
      const name = paragraph.children[0].textContent;
      const price = paragraph.children[1].textContent;
      const amount = Number(price.slice(1));
      viewFunction(src, name, amount);
      overflow.classList.remove("hidden");
      cartDiv.classList.remove("hidden");
    }
  });
  let CartData = {
    id: 0,
    sizeM: 0,
    sizeL: 0,
    sizeXL: 0,
    sizeXXL: 0,
    Mprice: [],
    Lprice: [],
    XLprice: [],
    XXLprice: [],
    imageLink: "",
    productGrade: "",
  };
  let ProductArray = [];

  cartoptionContainer.addEventListener("click", function (e) {
    const item1 = document.querySelector(".item1");
    const item2 = document.querySelector(".item2");
    const item3 = document.querySelector(".item3");
    const item4 = document.querySelector(".item4");

    const cartVariation = () => {
      const parent = e.target.parentElement;
      const parentPrev = parent.closest(".contol-box");
      const children = parentPrev.children;
      const src = [...children][0].children[0].src;
      const constAside = [...children][1].children[0].children;
      const nameAside = [...constAside][0].children[0].children;
      const name = nameAside[0].textContent;
      const price = nameAside[1].textContent;
      const amount = Number(price.slice(1));

      document.querySelector(".notempty-option").classList.remove("hidden");
      document.querySelector(".empty-option").classList.add("hidden");

      const getProductArray = JSON.parse(localStorage.getItem("productarray"));
      if (!localStorage.productarray) {
      } else {
        ProductArray = getProductArray;
      }
      ProductArray.forEach((obj, index) => {
        if (obj.imageLink === src) {
          CartData = obj;
          ProductArray.splice(index, 1);
        } else {
          CartData = CartData;
        }
      });

      item1.textContent = CartData.sizeM;
      item2.textContent = CartData.sizeL;
      item3.textContent = CartData.sizeXL;
      item4.textContent = CartData.sizeXXL;
    };

    if (e.target.classList.contains("add")) {
      cartVariation();
    }
    //
    if (e.target.classList.contains("opt")) {
      cartVariation();
    }

    //
    if (e.target.classList.contains("plus1")) {
      if (CartData.sizeM < 5) {
        const parent = e.target.closest(".contol-box");
        const link = parent.children[0].children[0].src;
        const variety = e.target.closest(".variation").children[0].children;
        const grade = variety[0].textContent.toUpperCase();
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));
        CartData.Mprice.push(price);
        CartData.imageLink = link;
        CartData.productGrade = grade;
        CartData.sizeM++;
        item1.textContent = CartData.sizeM;

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }

    //
    if (e.target.classList.contains("minus1")) {
      if (CartData.sizeM > 0) {
        const parent = e.target.closest(".contol-box");
        const link = parent.children[0].children[0].src;
        const variety = e.target.closest(".variation").children[0].children;
        const grade = variety[0].textContent.toUpperCase();
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));

        CartData.Mprice.pop(price);
        CartData.sizeM--;
        item1.textContent = CartData.sizeM;

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }
    //
    if (e.target.classList.contains("plus2")) {
      if (CartData.sizeL < 5) {
        const variety = e.target.closest(".variation").children[0].children;
        const grade = variety[0].textContent.toUpperCase();
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));

        const parent = e.target.closest(".contol-box");
        const img = parent.children[0].children[0].src;
        CartData.sizeL++;
        item2.textContent = CartData.sizeL;
        CartData.imageLink = img;
        CartData.productGrade = grade;
        CartData.Lprice.push(price);

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }

    if (e.target.classList.contains("minus2")) {
      if (CartData.sizeL > 0) {
        const variety = e.target.closest(".variation").children[0].children;
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));
        CartData.sizeL--;
        CartData.Lprice.pop(price);
        item2.textContent = CartData.sizeL;

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }
    //

    if (e.target.classList.contains("plus3")) {
      if (CartData.sizeXL < 5) {
        const variety = e.target.closest(".variation").children[0].children;
        const grade = variety[0].textContent.toUpperCase();
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));

        CartData.sizeXL++;
        item3.textContent = CartData.sizeXL;
        const parent = e.target.closest(".contol-box");
        const img = parent.children[0].children[0].src;
        CartData.imageLink = img;
        CartData.productGrade = grade;
        CartData.XLprice.push(price);

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }

    if (e.target.classList.contains("minus3")) {
      if (CartData.sizeXL > 0) {
        const variety = e.target.closest(".variation").children[0].children;
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));
        CartData.sizeXL--;
        CartData.XLprice.pop(price);
        item3.textContent = CartData.sizeXL;

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }
    //

    if (e.target.classList.contains("plus4")) {
      if (CartData.sizeXXL < 5) {
        const variety = e.target.closest(".variation").children[0].children;
        const grade = variety[0].textContent.toUpperCase();
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));

        const parent = e.target.closest(".contol-box");
        const img = parent.children[0].children[0].src;
        CartData.sizeXXL++;
        item4.textContent = CartData.sizeXXL;
        CartData.imageLink = img;
        CartData.productGrade = grade;
        CartData.XXLprice.push(price);

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }

    if (e.target.classList.contains("minus4")) {
      if (CartData.sizeXXL > 0) {
        const variety = e.target.closest(".variation").children[0].children;
        const priceText = variety[1].textContent;
        const price = Number(priceText.slice(1));
        CartData.sizeXXL--;
        CartData.XXLprice.pop(price);
        item4.textContent = CartData.sizeXXL;

        const dataStorage = localStorage.setItem(
          "cartdata",
          JSON.stringify(CartData)
        );
      }
    }
  });

  const addToCart = () => {
    overflow.classList.add("hidden");
    cartDiv.classList.add("hidden");
    const getCartData = JSON.parse(localStorage.getItem("cartdata"));
    if (CartData.imageLink === "") {
      return;
    } else {
      ProductArray.push(getCartData);
      document.querySelector(".cart-number").textContent = ProductArray.length;
    }
    const productStorage = localStorage.setItem(
      "productarray",
      JSON.stringify(ProductArray)
    );
    // CLEARING OF CART
    CartData.sizeM = CartData.sizeL = CartData.sizeXL = CartData.sizeXXL = 0;
    CartData.Mprice = [];
    CartData.Lprice = [];
    CartData.XLprice = [];
    CartData.XXLprice = [];

    CartData.imageLink = CartData.productGrade = "";
  };

  cartCancel.addEventListener("click", () => addToCart());
  cartDiv.addEventListener("click", function (e) {
    if (e.target.classList.contains("cart-view")) {
      addToCart();
      window.location = "cart.html";
    }
    if (e.target.classList.contains("continue-shop")) {
      addToCart();
    }
  });
}
export function likeFunction() {
  body.addEventListener("click", (e) => {
    if (e.target.classList.contains("like")) {
      e.target.classList.toggle("activelike");
    }
  });
}
likeFunction();
