// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  const result = price * quantity;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerText = result;
}

function calculateAll() {
  // ITERATION 2
  // Get all the product rows in the table
  const allProducts = document.querySelectorAll(".product");

  // Loop through each product and update its subtotal
  allProducts.forEach((product) => {
    updateSubtotal(product);
  });

  // ITERATION 3
  const products = document.querySelectorAll(".product");
  let totalPrice = 0;
  products.forEach((product) => {
    const subtotal = parseFloat(
      product.querySelector(".subtotal span").innerText
    );
    totalPrice += subtotal;
  });

  document.querySelector("#total-value span").innerText = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  //... your code goes here
});
