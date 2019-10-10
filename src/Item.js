import React from 'react';
import Element from './Element';
import Content from './Content';
import CartContext from './CartContext';

const Item = (props) => {

  const value = React.useContext(CartContext);

  return <div style={{ backgroundColor: 'rgba(0,0,240,.5)', padding: 20 }}>
    Item

    {value.count}

    {props.desc && <Content desc={props.desc} />}
  </div>;
}

export default Item;