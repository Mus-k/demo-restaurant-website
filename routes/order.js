const appetizers = [
  {
    id: 0,
    title: "Appetizers",
    img: "../images/order/order1.PNG",
    title: "Appetizer one (450g)",
    span: "Gluten",
    price: "21.00",
    order: "order",
  },
  {
    id: 1,
    img: "../images/order/order2.PNG",
    title: "Appetizer 2 (450g)",
    span: "popularne",
    price: "21.00",
    order: "order",
  },
  {
    id: 2,
    img: "../images/order/order3.PNG",
    title: "Appetizer 3 (450g)",
    span: "popularne",
    price: "21.00",
    order: "order",
  },
];

const soups = [
  {
    id: 3,
    img: "../images/order/order4.PNG",
    title: "Soup 1 (450ml)",
    span: "Gluten",
    price: "5.00",
    order: "order",
  },
  {
    id: 4,
    img: "../images/order/order5.PNG",
    title: "Soup 2 (450ml)",
    span: "Gluten",
    price: "5.00",
    order: "order",
  },
  {
    id: 5,
    img: "../images/order/order6.PNG",
    title: "Soup 3 (450ml)",
    span: "popularne",
    price: "5.00",
    order: "order",
  },
];
const courses = [
  {
    id: 6,
    img: "../images/order/order7.PNG",
    title: "main course 1 (450g)",
    span: "Wegańskie",
    price: "17.00",
    order: "order",
  },
  {
    id: 7,
    img: "../images/order/order8.PNG",
    title: "main course 2 (450g)",
    span: "general",
    price: "16.00",
    order: "order",
  },
  {
    id: 8,
    img: "../images/order/order9.PNG",
    title: "main course (450g)",
    span: "Nowość",
    price: "21.00",
    order: "order",
  },
];

const pizza = [
  {
    id: 9,
    img: "../images/order/order10.PNG",
    title: "pizza 1",
    span: "Gluten",
    price: "17.00",
    order: "order",
  },
  {
    id: 10,
    img: "../images/order/order11.PNG",
    title: "pizza 2",
    span: "Gluten",
    price: "17.00",
    order: "order",
  },
  {
    id: 11,
    img: "../images/order/order12.PNG",
    title: "pizza 3",
    span: "popularne",
    price: "17.00",
    order: "order",
  },
];

const desserts = [
  {
    id: 12,
    img: "../images/order/order13.PNG",
    title: "Dessert 1 450",
    span: "Gluten",
    price: "12.00",
    order: "order",
  },
  {
    id: 13,
    img: "../images/order/order14.PNG",
    title: "Dessert 2 450g",
    span: "popularne",
    price: "16.00",
    order: "order",
  },
  {
    id: 14,
    img: "../images/order/order15.PNG",
    title: "Dessert 2 450g",
    span: "popularne",
    price: "17.00",
    order: "order",
  },
];
const drinks = [
  {
    id: 15,
    img: "../images/order/order16.PNG",
    title: "Drink 1 2l",
    price: "2.50",
    order: "order",
  },
  {
    id: 16,
    img: "../images/order/order17.PNG",
    title: "Dessert 2 45Drink 2 2l",
    price: "2.50",
    order: "order",
  },
  {
    id: 17,
    img: "../images/order/order18.PNG",
    title: "Drink 3 2l",
    price: "2.50",
    order: "order",
  },
];

const card = document.getElementById("menuCard");
const shopCart = document.getElementById("itemsValue");
const facartshopping = document.querySelector(".fa-cart-shopping");
const shoppingbtn = document.querySelector(".shoppingbtn");
const shoppingCart = document.querySelector(".shoppingCart");
const orderMenuright = document.querySelector(".orderMenu-right");
facartshopping.addEventListener("click", () => {
  shoppingCart.style.display = "none";
  orderMenuright.style.display = "block";
});
shoppingbtn.addEventListener("click", () => {
  shoppingCart.style.display = "none";
  orderMenuright.style.display = "block";
});

appetizers.forEach((item) => {
  const productCard = document.createElement("div");
  productCard.className = "main-card";
  productCard.innerHTML = `              
                    <img src=${item.img} alt="life" width="100%" />
                    <div class="nested-One">
                      <h4>${item.title}</h4>
                      <p class="menu-details">
                        <span class="d-One">${item.span}</span>
                      </p>
                    </div>
                    <div class="nested-Two">
                      <p>$${item.price}</p>
                      <button class="order-link"
                      onclick="addTocart(${item.id})">${item.order}</button>
                    </div> `;
  card.appendChild(productCard);
});

let cart = JSON.parse(localStorage.getItem("CART")) || [];

// domcontentloaded
document.addEventListener("DOMContentLoaded", () => {
  updateCart();
});
function addTocart(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = appetizers.find((item) => item.id === id);
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}

const cartItem = document.getElementById("cartItems");
function cartItems() {
  cartItem.innerHTML = ""; //clear
  cart.forEach((item) => {
    cartItem.innerHTML += `
      <div class='cart-item'>
                  <div class='row-img'>
                  <img class='rowimg' src=${item.img}>
                  </div>
             <div class='cart-nested'>
             <p style='font-size:12px' >${item.title}</p>
             <p style='font-size:12px'
            >$${item.price}</p>
            
             <div class='flex'>
             <p class=' minus'
             onclick=" changeNumberOfUnits('minus', ${item.id})">-</p>
             <p class='number'>${item.numberOfUnits}</p>
             <p class='plus'
             onclick=" changeNumberOfUnits('plus', ${item.id})">+</p>
             </div>
             <div>
            
             </div>
             </div>
             
            <i class='fa-solid fa-trash' onclick="delElement(${item.id})"> 
      </div>`;
  });
}
function updateCart() {
  cartItems();
  subTotal();

  localStorage.setItem("CART", JSON.stringify(cart));
}
function delElement(id) {
  cart = cart.filter((item) => item.id !== id);
  updateCart();
}
function subTotal() {
  let text = "";
  const totalContent = document.querySelector(".totalPrice");

  let totalPrice = 0;
  totalItems = 0;
  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  if (totalItems > 1) {
    text = "items";
  } else {
    text = "item";
  }
  shopCart.innerHTML = `${totalItems}`;
  totalContent.innerHTML = `
  <span class="totalPrice">(${totalItems}  ${text}): $${totalPrice.toFixed(
    2
  )}</span>
  `;
}
// number of unit
function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;
    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus") {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}

function addSoup(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const soup = soups.find((item) => item.id === id);
    cart.push({
      ...soup,

      numberOfUnits: 1,
    });
  }

  updateCart();
}
const soupsMenu = document.getElementById("soupsMenu");

soups.forEach((item) => {
  const productCard = document.createElement("div");
  productCard.className = "main-card";
  productCard.innerHTML = `              
                    <img src=${item.img} alt="life" width="100%" />
                    <div class="nested-One">
                      <h4>${item.title}</h4>
                      <p class="menu-details">
                        <span class="d-One">${item.span}</span>
                      </p>
                    </div>
                    <div class="nested-Two">
                      <p>$${item.price}</p>
                      <button class="order-link"
                      onclick="addSoup(${item.id})">${item.order}</button>
                    </div> `;
  soupsMenu.appendChild(productCard);
});

const mainCourse = document.getElementById("main-course");
courses.forEach((item) => {
  const productCard = document.createElement("div");
  productCard.className = "main-card";
  productCard.innerHTML = `              
                    <img src=${item.img} alt="life" width="100%" />
                    <div class="nested-One">
                      <h4>${item.title}</h4>
                      <p class="menu-details">
                        <span class="d-One">${item.span}</span>
                      </p>
                    </div>
                    <div class="nested-Two">
                      <p>$${item.price}</p>
                      <button class="order-link"
                      onclick="addCourse(${item.id})">${item.order}</button>
                    </div> `;
  mainCourse.appendChild(productCard);
});
function addCourse(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const courseItem = courses.find((item) => item.id === id);
    cart.push({
      ...courseItem,

      numberOfUnits: 1,
    });
  }

  updateCart();
}
const pizzaContainer = document.getElementById("pizza-menu");
pizza.forEach((item) => {
  const productCard = document.createElement("div");
  productCard.className = "main-card";
  productCard.innerHTML = `              
                    <img src=${item.img} alt="life" width="100%" />
                    <div class="nested-One">
                      <h4>${item.title}</h4>
                      <p class="menu-details">
                        <span class="d-One">${item.span}</span>
                      </p>
                    </div>
                    <div class="nested-Two">
                      <p>$${item.price}</p>
                      <button class="order-link"
                      onclick="addPizza(${item.id})">${item.order}</button>
                    </div> `;
  pizzaContainer.appendChild(productCard);
});
function addPizza(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const pizzaItem = pizza.find((item) => item.id === id);
    cart.push({
      ...pizzaItem,

      numberOfUnits: 1,
    });
  }

  updateCart();
}
const dessertContainer = document.getElementById("dessert");
desserts.forEach((item) => {
  const productCard = document.createElement("div");
  productCard.className = "main-card";
  productCard.innerHTML = `              
                    <img src=${item.img} alt="life" width="100%" />
                    <div class="nested-One">
                      <h4>${item.title}</h4>
                      <p class="menu-details">
                        <span class="d-One">${item.span}</span>
                      </p>
                    </div>
                    <div class="nested-Two">
                      <p>$${item.price}</p>
                      <button class="order-link"
                      onclick="addDessert(${item.id})">${item.order}</button>
                    </div> `;
  dessertContainer.appendChild(productCard);
});
function addDessert(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const dessertItem = desserts.find((item) => item.id === id);
    cart.push({
      ...dessertItem,

      numberOfUnits: 1,
    });
  }

  updateCart();
}
const drinksContainer = document.getElementById("drink");
drinks.forEach((item) => {
  const productCard = document.createElement("div");
  productCard.className = "main-card";
  productCard.innerHTML = `              
                    <img src=${item.img} alt="life" width="100%" />
                    <div class="nested-One">
                      <h4>${item.title}</h4>
                     
                    </div>
                    <div class="nested-Two">
                      <p>$${item.price}</p>
                      <button class="order-link"
                      onclick="addDrink(${item.id})">${item.order}</button>
                    </div> `;
  drinksContainer.appendChild(productCard);
});
function addDrink(id) {
  if (cart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const drink = drinks.find((item) => item.id === id);
    cart.push({
      ...drink,

      numberOfUnits: 1,
    });
  }

  updateCart();
}

// checkout validation
const customtextarea = document.querySelector(".custom-textarea");
const checkout = document.getElementById("checkout");
const phone = document.getElementById("phone");
const textareaInput = document.getElementById("textarea");
const selectOption = document.getElementById("select");

let optionvisible = true;
selectOption.addEventListener("change", function () {
  const selectedValue = selectOption.value;
  if (selectedValue === "pickup") {
    customtextarea.style.display = "none";
    optionvisible = false;
  } else if (selectedValue === "delivery") {
    customtextarea.style.display = "block";
    optionvisible = true;
  }
});

checkout.addEventListener("click", () => {
  const selectedOption = selectOption.value;
  const textareaValue = textareaInput.value;
  const phoneValue = phone.value;
  if (phone.value === "" || phone.value.length < 7) {
    alert("please enter number minimum 8");
    return;
  } else if (
    optionvisible &&
    textareaValue === "" &&
    textareaValue.length < 6
  ) {
    alert("please enter address minimum 6 letters");
    return;
  } else {
    validateInputs(phoneValue, textareaValue, selectedOption);
  }
  if (cart.length < 1) {
    alert("cart is empty");
    return;
  } else {
    setTimeout(() => {
      window.location.href = "./payment.html";
    }, 3000);
  }
  textareaInput.value = "";
  phone.value = "";
  localStorage.removeItem("CART");
});

function validateInputs(phone, textarea, option) {}

function generateStyledWeekdays() {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const fullTimeRange = "00:00 - 23:59";

  const todayIndex = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)

  const weekdaysContainer = document.getElementById("weekdays-container");
  weekdays.forEach((day, index) => {
    const dayDiv = document.createElement("div");
    dayDiv.textContent = `${day}\n ${fullTimeRange}`;
    dayDiv.classList.add("day");

    if (index === todayIndex) {
      dayDiv.classList.add("current-day");
    }

    weekdaysContainer.appendChild(dayDiv);
  });
}

generateStyledWeekdays();

const altdropdown = document.querySelector(".alt-dropdown");
const select = document.querySelector(".selected");
const altmenu = document.querySelector(".alt-menu");
select.addEventListener("click", () => {
  select.classList.toggle("select-clicked");
  altmenu.classList.toggle("alt-menu-open");
});

// offset scrolling at the top

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const offset = -150;
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop + offset,
        behavior: "smooth",
      });
    }
  });
});
