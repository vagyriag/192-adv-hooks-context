import React from 'react';
import './App.css';
import Element from './Element';
import Main from './Main';
import Item from './Item';
import Content from './Content';
import CartContext from './CartContext';

function App() {

  const [ count, setCount ] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }

  const [ size, setSize ] = React.useState(0);

  const context = {
    count: count,
    setCount: setCount,
    size: size,
    setSize: setSize,
  }

  return (
    <div className="App">

      Carrito: {count}

      <button onClick={handleClick}>
        Agregar
      </button>

      <CartContext.Provider value={context}>
        <Main count={count} setCount={setCount} />
        <Element />
        <Item desc="outer" />
        <Content />
        <Element hasItems />

        <Element>
          <Item desc="inner" />
          <Item />
          <Item desc="asdasd" />
          <Item />
        </Element>
      </CartContext.Provider>

    </div>
  );
}

export default App;
