document.addEventListener("alpine:init", () => {
  Alpine.data("data", () => ({
    pizzas: [
      {
        id: 1,
        name: "Margherita",
        description:
          "A classic pizza offering a simple yet delicious combination of flavors.",
        toppings: [
          "Basil Leaves",
          "Mozzarella Cheese",
          "Tomato Sauce",
          "Olive Oil",
          "Grated Parmesan Cheese",
        ],
        price: 79.99,
        image: "images/Margherita.png",
        selectedToppings: [],
      },
      {
        id: 2,
        name: "Ham & Mushroom",
        description:
          "This pizza combines smoky ham slices with earthy mushrooms.",
        toppings: [
          "Ham",
          "Mozzarella Cheese",
          "Tomato Sauce",
          "Mushrooms",
          "Fresh Herbs",
        ],
        price: 99.99,
        image: "images/Ham and Mushroom.png",
        selectedToppings: [],
      },
      {
        id: 3,
        name: "Chicken & Mushroom",
        description:
          "A delectable combination of tender chicken pieces and savory mushrooms.",
        toppings: [
          "Chicken",
          "Mozzarella Cheese",
          "Red Onions",
          "Mushrooms",
          "Fresh Herbs",
        ],
        price: 119.99,
        image: "images/Chicken and Mushroom.png",
        selectedToppings: [],
      },
    ],
    cartItems: [],
    paymentAmount: 0,
    showCheckout: false,
    showMessage: false,
    
    pay() {
      console.log(this.paymentAmount);
      console.log(this.getTotalPrice());
      if (this.paymentAmount >= this.getTotalPrice()) {
        this.showMessage = true;
        setTimeout(() => {
          this.cartItems = [];
          this.paymentAmount = 0;
          this.showMessage = false;
        }, 3000);
      } else {
        this.showMessage = true;
        setTimeout(() => {
          this.showMessage = false;
        }, 3000);
      }
    },

    addToCart(item) {
      const existingItem = this.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Create a copy of the item and add the extraToppingsCost property
        const newItem = { ...item, quantity: 1 };
        this.cartItems.push(newItem);
      }
      this.showCheckout = true;
    },

    removeFromCart(index) {
      this.cartItems.splice(index, 1);
      if (this.cartItems.length === 0) {
        this.showCheckout = false;
      }
    },
    incrementQuantity(item) {
      item.quantity += 1;
    },
    decrementQuantity(item) {
      if (item.quantity >= 0) {
        item.quantity -= 1;
      }
    },
    
    clearCartAndMessage() {
      this.cartItems = [];
      this.paymentAmount = 0;
      this.showMessage = false;
    },

    getTotalPrice() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    
  }));
});
