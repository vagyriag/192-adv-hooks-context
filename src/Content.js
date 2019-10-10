import React from 'react';
import CartContext from './CartContext';

const Content = (props) => {

  const value = React.useContext(CartContext);

  const handleClick = () => {
    value.setCount(value.count + 1);
  }

  const handleClickSize = () => {
    value.setSize(value.size + 10);
  }

  return <div style={{ backgroundColor: 'rgba(0,200,240,.5)', padding: 10 }}>
    Content {props.desc}
    <br />
    <strong>{value.count}</strong>
    <button onClick={handleClick}>+</button>
    <br />
    <strong>{value.size}</strong>
    <button onClick={handleClickSize}>+</button>
  </div>;
}

export default Content;