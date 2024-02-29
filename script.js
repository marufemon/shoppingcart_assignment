const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
const cartItemsList = document.querySelector(".cart-items");

addToCartButtons.forEach( button => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const productName = product.querySelector(".product-name").textContent;
    const productPrice = product.querySelector(".product-price").textContent;

    const cartItem = document.createElement("li");
    cartItem.textContent = `${productName} - ${productPrice}`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");
    removeButton.addEventListener("click", () => {
      cartItem.remove();
    });

    cartItem.appendChild(removeButton);
    cartItemsList.appendChild(cartItem);
  });
});
