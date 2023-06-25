document.addEventListener('alpine:init', () => {
  Alpine.data('data', () => ({
     // Your code goes here

     document.addEventListener('DOMContentLoaded', function() {
      const cart = [];
    
      function calculateTotalCost() {
        const margheritaCount = $margherita.count;
        const hamCount = $ham.count;
        const chickenCount = $chicken.count;
    
        const margheritaPrice = $margherita.price;
        const hamPrice = $ham.price;
        const chickenPrice = $chicken.price;
    
        return (margheritaCount * margheritaPrice + hamCount * hamPrice + chickenCount * chickenPrice);
      }
    
      function addToCart(pizza, count, price) {
        const index = cart.findIndex(item => item.pizza === pizza);
        if (index > -1) {
          cart[index].count += count;
        } else {
          cart.push({ pizza, count, price });
        }
      }
    
      function removeFromCart(pizza) {
        const index = cart.findIndex(item => item.pizza === pizza);
        if (index > -1) {
          cart.splice(index, 1);
        }
      }
    
      Alpine.data('pizzaApp', () => ({
        cart,
        $margherita: { count: 0, price: 79.99 },
        $ham: { count: 0, price: 99.99 },
        $chicken: { count: 0, price: 119.99 },
        calculateTotalCost,
        addToCart,
        removeFromCart,
      }));
    })
  }))
})