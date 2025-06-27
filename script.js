const api = "https://fakestoreapi.com/products";

let basket = JSON.parse(localStorage.getItem("data")) || []; // localhost 


// ==========
// Product Template function
// ==========

async function fetchData() {
  const fetchHere = await fetch(api);
  const convertJson = await fetchHere.json();
  const productRow = document.getElementById("productRow");

  convertJson.map((val) => {
    const incre = val.id;
    let search = basket.find((x) => x.id === incre) || [];

    productRow.innerHTML += `
          <div class="product-col">
                <div class="center-image">           
                     <img src="${
                       val.image
                     }" alt="product loading..." width="200px">
                </div>
                        <h3 class="product-title">${val.title}</h3>
                        <p class="description">${
                          val.description.length > 125
                            ? val.description.slice(0, 125) + "..."
                            : val.description
                        }</p>
                        <div class="quantity">
                            <div class="price"> $${val.price}</div>
                            <div class="quan-count">
                                <div onclick="decrement(${incre})" class="decreing"><i class="bi bi-dash-lg"></i></div>
                                <div id=${incre} class="showing-update"><span>${search.item === undefined ? 0 : search.item}</span></div>
                                <div onclick="increment(${incre})" class="increing"><i class="bi bi-plus-lg"></i></div>
                            </div>
                        </div>
                    </div>`;
  });
}

fetchData();

// ==========
// Increment function
// ==========

const increment = (incre) => {
  const search = basket.find((x) => x.id === incre);

  if (search === undefined) {
    basket.push({
      id: incre,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  localStorage.setItem("data", JSON.stringify(basket));

  update(incre);
};


// ==========
// Decreament function
// ==========

const decrement = (incre) => {

  const search = basket.find((x) => x.id === incre);


  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(incre);

  localStorage.setItem("data", JSON.stringify(basket));
  basket = basket.filter((x)=> x.item !== 0)


};

// ==========
// User Update Product Quantity function
// ==========

let update = (id) => {
  const search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;

calculation();
};

// ==========
// User Cart Product Quantity function
// ==========

const calculation = () => {
  const cardQuantity = document.getElementById("card-quantity");
  cardQuantity.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();



// https://www.youtube.com/watch?v=cT_ZYrS3tKc&t=4264s

// create basic html, css product page
// fetch date using freeproduct-api in javascript
//


//  Card Page

// total bill 
// two button showing checkout and clear Cart
// product card image, title and amount, quantity, total amount of card product
// top right conner button delete product card