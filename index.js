import { cartFunction, likeFunction } from "./general.js";
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  freeMode: true,
  freeModeMomentum: false,
  speed: 1500,
  effect: "fade",
  autoplay: {
    delay: 3000,
    disableinteraction: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
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
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  }
});

document
  .querySelector(".bx-chevron-up")
  .addEventListener("click", function (e) {
    main.scrollIntoView({ behavior: "smooth" });
  });

// SEARCH
const optionSearch1 = document.querySelector(".product-search1");
const searched = document.querySelector(".searched");
const searchMain = document.querySelector(".search-main");

const getProductArray = JSON.parse(localStorage.getItem("productarray"));
if (!localStorage.productarray) {
} else {
  document.querySelector(".cart-number").textContent = getProductArray.length;
}

const optionFunction = function (loaded) {
  const text = loaded.value.toLowerCase();

  if (text.includes("sho")) {
    window.location = "shoe.html";
    console.log(text);
  } else if (text.includes("wom")) {
    window.location = "women.html";
    console.log(text);
  } else if (text.includes("clo")) {
    window.location = "cloth.html";
    console.log(text);
  } else if (text.includes("ma")) {
    window.location = "men.html";
    console.log(text);
  } else if (text.includes("wat")) {
    window.location = "watch.html";
    console.log(text);
  } else if (text.includes("acc")) {
    window.location = "accesory.html";
    console.log(text);
  }
  loaded.value = "";
};
document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    optionFunction(optionSearch);
    optionFunction(optionSearch1);
  }
});
searched.addEventListener("click", function () {
  optionFunction(optionSearch);
  optionFunction(optionSearch1);
});
searchMain.addEventListener("click", function () {
  optionFunction(optionSearch);
  optionFunction(optionSearch1);
});

document
  .querySelector(".buttonMain")
  .addEventListener("click", () => (window.location = "allProduct.html"));

//

const bxSearch = document.querySelector(".bx-search");
const swiperContainer = document.querySelector(".swiper-container");
const headerSearch = document.querySelector(".header-search");
const cancel = document.querySelector(".canceled");
const dense = document.querySelector(".dense");
cancel.addEventListener("click", function () {
  swiperContainer.style.opacity = 1;
  headerSearch.classList.add("hidden");
  dense.style.opacity = 1;
});

bxSearch.addEventListener("click", function () {
  swiperContainer.style.opacity = 0;
  headerSearch.classList.remove("hidden");
  dense.style.opacity = 0;
  optionSearch1.focus();
});

const observed = document.querySelector("header");
const observeFunction = function (entry) {
  entry.forEach((ent) => {
    if (ent.isIntersecting === true) {
      dense.classList.add("hidden");
    } else {
      dense.classList.remove("hidden");
    }
  });
};
const observer = new IntersectionObserver(observeFunction, { root: null });
observer.observe(observed);
document.querySelector(".bxs-cart-alt").addEventListener("click", function (e) {
  window.location = "cart.html";
});

//
const option = document.querySelector(".menuop");
const menu = document.querySelector(".handburger");
menu.addEventListener("click", function (e) {
  option.classList.toggle("hidden");
  menu.classList.toggle("hand");
});
const item = document.querySelector(".item");
const sumArr = [
  "images/banner(1).png",
  "images/banner(3).png",
  "images/banner(2).png",
];
const sumHeader = ["women", "men", "accessories"];
const subTopic = ["spring 2023", "sping 2023", "new Trend"];
const sectionInsert = function () {
  item.innerHTML = "";
  sumArr.forEach(function (arr, index) {
    const html = `
    <div
    class="first border-2 border-gray mx-3 text-seanText hover:text-white hover:bg-blue transition-all cursor-pointer duration-1000 part${index}"
  >
    <div>
      <h1 class="capitalize text-3xl font-bold w-fit ml-5 mt-5 absolute"
        >${sumHeader[index]}</h1
      >
      <p class="font-semibold ml-5 absolute mt-14">${subTopic[index]}</p>
      <p
        class="uppercase text-white shop   absolute mt-44  sm:mt-64 vs:mt-72 vd:mt-44 mw:mt-56 ld:mt-64 ux:mt-44 xl:mt-52  ml-5  font-semibold"
        >shop now
      </p>
      <p class="narrow absolute mt-52 sm:mt-72  vs:mt-80 vd:mt-52  mw:mt-64 ld:mt-72 ux:mt-52  xl:mt-60 "> </p>
  
      <img
        src="${arr}"
        alt=""
        class="hover:opacity-30 transition-all cursor-pointer duration-700"
      />
    </div>
  </div>
    `;
    item.insertAdjacentHTML("beforeend", html);
  });
};
sectionInsert();

const optionSearch = document.querySelector(".product-search");

const burger1 = document.querySelector(".burger1");
const burger2 = document.querySelector(".burger2");
const search = document.querySelector(".search");
const arrow1 = document.querySelector(".arrow1");
const sorted = document.querySelector(".sorted");
const filter = document.querySelector(".filter");
const arrow2 = document.querySelector(".arrow2");
const searchbox = document.querySelector(".searchbox");
filter.addEventListener("click", function () {
  burger2.classList.toggle("hand");
  sorted.classList.toggle("hidden");
  arrow1.classList.toggle("hidden");
  filter.classList.toggle("filtercol");
  searchbox.classList.add("hidden");
  search.classList.remove("filtercol");
  arrow2.classList.add("hidden");
  burger1.classList.remove("hand");
});
search.addEventListener("click", function () {
  burger1.classList.toggle("hand");
  searchbox.classList.toggle("hidden");
  arrow2.classList.toggle("hidden");
  search.classList.toggle("filtercol");
  sorted.classList.add("hidden");
  filter.classList.remove("filtercol");
  arrow1.classList.add("hidden");
  burger2.classList.remove("hand");
  optionSearch.focus();
});
//

const gWoman = document.querySelector(".part0");
gWoman.addEventListener("click", function (e) {
  window.location = "women.html";
});

const gMan = document.querySelector(".part1");
gMan.addEventListener("click", function () {
  window.location = "men.html";
});
const gAccessory = document.querySelector(".part2");
gAccessory.addEventListener("click", function () {
  window.location = "accesory.html";
});

const productContainer = document.querySelector(".allProduct-container");
const womenContainer = document.querySelector(".women-container");
const menContainer = document.querySelector(".men-container");
const shoeContainer = document.querySelector(".shoe-container");
const watchContainer = document.querySelector(".watch-container");

//
const defaultContainer = document.querySelector(".default-container");
const popularContainer = document.querySelector(".popular-container");
const priceLowContainer = document.querySelector(".priceLow-container");
const priceHighContainer = document.querySelector(".priceHigh-container");
const zeroContainer = document.querySelector(".zero-container");
const fiftyContainer = document.querySelector(".fifty-container");
const hundredContainer = document.querySelector(".hundred-container");
const blackContainer = document.querySelector(".black-container");
const whiteContainer = document.querySelector(".white-container");
const brownContainer = document.querySelector(".brown-container");
const redContainer = document.querySelector(".red-container");
const smContainer = document.querySelector(".sm-container");
const mContainer = document.querySelector(".m-container");
const lContainer = document.querySelector(".l-container");
const xlContainer = document.querySelector(".xl-container");
//
const http = new XMLHttpRequest();
http.open("get", "asset.json", true);
http.send();

const imageSummary = function (container, array) {
  container.innerHTML = "";
  array?.forEach(function (pro, index) {
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
    class="text-gray absolute right-1 hover:text-blue  w-fit text-2xl transition-all cursor-pointer duration-500"
    ><i class="bx bxs-heart like"></i>
    </div>
    </div>
    </div>
    `;
    container.insertAdjacentHTML("beforebegin", html);
  });
};
const products = document.querySelectorAll(".product-option");
const category = document.querySelectorAll(".category");
const inspection = document.querySelector(".inspection");
const input1 = document.querySelector(".option-input1");
const input2 = document.querySelector(".option-input2");
const input3 = document.querySelector(".option-input3");
const input4 = document.querySelector(".option-input4");
const input5 = document.querySelector(".option-input5");
const input6 = document.querySelector(".option-input6");
const input7 = document.querySelector(".option-input7");
const input8 = document.querySelector(".option-input8");
const input9 = document.querySelector(".option-input9");
const input10 = document.querySelector(".option-input10");
const input11 = document.querySelector(".option-input11");
const input12 = document.querySelector(".option-input12");
const input13 = document.querySelector(".option-input13");
const input14 = document.querySelector(".option-input14");
const input15 = document.querySelector(".option-input15");
const input16 = document.querySelector(".option-input16");
const input17 = document.querySelector(".option-input17");
const input18 = document.querySelector(".option-input18");
const input19 = document.querySelector(".option-input19");
const input20 = document.querySelector(".option-input20");

const cartoptionContainer = document.querySelector(".cartoption-container");
const cartDiv = document.querySelector(".cart-div");
const viewFunction = function (src, name, amount) {
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
};
const body = document.querySelector("body");
http.onload = function () {
  if (this.status == 200 && this.readyState == 4) {
    const responseText = JSON.parse(http.responseText);
    const allResponse = responseText.AllProduct;
    const womenResponse = responseText.Women;
    const menResponse = responseText.Men;
    const shoeResponse = responseText.shoes;
    const watchResponse = responseText.Watches;

    //
    const popularResponse = responseText.popular;
    const priceLow = responseText.lowHigh;
    const pricehigh = responseText.highLow;
    const zero = responseText.zero;
    const fifty = responseText.fifty;
    const hundred = responseText.hundred;
    const black = responseText.black;
    const white = responseText.white;
    //
    const brown = responseText.brown;
    const red = responseText.red;
    const small = responseText.sm;
    const medium = responseText.m;
    const l = responseText.l;
    const xl = responseText.xl;

    imageSummary(productContainer, allResponse);
    imageSummary(womenContainer, womenResponse);
    imageSummary(menContainer, menResponse);
    imageSummary(shoeContainer, shoeResponse);
    imageSummary(watchContainer, watchResponse);
    imageSummary(popularContainer, popularResponse);
    imageSummary(priceLowContainer, priceLow);
    imageSummary(priceHighContainer, pricehigh);
    imageSummary(zeroContainer, zero);
    imageSummary(fiftyContainer, fifty);
    imageSummary(hundredContainer, hundred);
    imageSummary(blackContainer, black);
    imageSummary(whiteContainer, white);
    imageSummary(brownContainer, brown);
    imageSummary(redContainer, red);
    imageSummary(smContainer, small);
    imageSummary(mContainer, medium);
    imageSummary(lContainer, l);
    imageSummary(xlContainer, xl);
    // //

    const targetFunction = function (target, addClass, removeClass) {
      if (target.contains(addClass)) {
        category.forEach((sect) => sect.classList.add("hidden"));
        removeClass.classList.remove("hidden");
      }
    };

    inspection.addEventListener("click", function (e) {
      const targetClass = e.target.classList;
      if (targetClass.contains("product-option")) {
        products.forEach((cat) => cat.classList.remove("active-state"));
        e.target.classList.add("active-state");
      }
      targetFunction(targetClass, "allproduct", input1);
      targetFunction(targetClass, "women", input2);
      targetFunction(targetClass, "men", input3);
      targetFunction(targetClass, "shoe", input4);
      targetFunction(targetClass, "watch", input5);
    });

    sorted.addEventListener("click", function (e) {
      const targetClass = e.target.classList;

      targetFunction(targetClass, "defaulted", input1);
      targetFunction(targetClass, "all", input1);
      targetFunction(targetClass, "popular", input7);
      targetFunction(targetClass, "price-low", input8);
      targetFunction(targetClass, "price-high", input9);
      //
      targetFunction(targetClass, "zero", input10);
      targetFunction(targetClass, "fifty", input11);
      targetFunction(targetClass, "hundred", input12);
      targetFunction(targetClass, "black", input13);
      targetFunction(targetClass, "white", input14);
      targetFunction(targetClass, "brown", input15);
      targetFunction(targetClass, "red", input16);
      targetFunction(targetClass, "sm", input17);
      targetFunction(targetClass, "m", input18);
      targetFunction(targetClass, "l", input19);
      targetFunction(targetClass, "xl", input20);
    });
  }

  cartFunction();

  body.addEventListener("click", (e) => {
    if (e.target.classList.contains("quickview")) {
      swiperContainer.style.opacity = 0.5;
    }
  });
};

document.querySelector(".main_footer").addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.classList.contains("men")) {
    window.location = "men.html";
  }

  if (e.target.classList.contains("women")) {
    window.location = "women.html";
  }
  if (e.target.classList.contains("shoe")) {
    window.location = "shoe.html";
  }
  if (e.target.classList.contains("watches")) {
    window.location = "watch.html";
  }

  if (e.target.classList.contains("accesory")) {
    window.location = "accesory.html";
  }
  if (e.target.classList.contains("home")) {
    window.location = "index.html";
  }
});
