import React from 'react';

const CartContext = React.createContext({
  count: 100,
  setCount: () => null
});

export default CartContext;