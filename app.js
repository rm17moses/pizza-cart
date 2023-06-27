document.addEventListener('alpine:init', function () {
    Alpine.data('data', function () {
        return {
            // Your code goes here
            
                  cartItems: [],
                  paymentAmount: 0,
                  showCheckout: false,
                  showMessage: false,
                  messageTimeout: null,
                  checkout: function() {
                    if (this.paymentAmount >= this.getTotalPrice()) {
                      this.showMessage = true;
                      this.cartItems = [];
                      this.paymentAmount = 0;
                    } else {
                      this.showMessage = true;
                    }
                    clearTimeout(this.messageTimeout);
                    this.messageTimeout = setTimeout(function() {
                      this.showMessage = false;
                    }.bind(this), 3000);
                  },
                  addToCart: function(item) {
                    const existingItem = this.cartItems.find(function(i) {
                      return i.name === item.name;
                    });
                    if (existingItem) {
                      existingItem.quantity += 1;
                    } else {
                      this.cartItems.push(Object.assign({}, item, { quantity: 1 }));
                    }
                    this.showCheckout = true;
                  },
                  removeFromCart: function(index) {
                    this.cartItems.splice(index, 1);
                    if (this.cartItems.length === 0) {
                      this.showCheckout = false;
                    }
                  },
                  incrementQuantity: function(item) {
                    item.quantity += 1;
                  },
                  decrementQuantity: function(item) {
                    if (item.quantity > 1) {
                      item.quantity -= 1;
                    }
                  },
                  getTotalPrice: function() {
                    return this.cartItems.reduce(function(total, item) {
                      return total + (item.price * item.quantity);
                    }, 0);
                  }
                };
              })})
