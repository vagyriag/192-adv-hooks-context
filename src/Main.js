import React from 'react';
import Element from './Element';

const Main = (props) => {

  const handleClick = () => {
    props.setCount(props.count + 1);
  }

  return <div style={{ backgroundColor: 'rgba(200,0,0,.5)', padding: 20 }}>
    Main

    <p>
      Carrito: {props.count}

      <button onClick={handleClick}>
        Agregar
      </button>
    </p>

    <Element hasItems />
  </div>;
}

export default Main;