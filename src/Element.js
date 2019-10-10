import React from 'react';
import Item from './Item';

const Element = (props) => {

  return <div style={{ backgroundColor: 'rgba(0,200,0,.5)', padding: 15 }}>
    Element

    {props.children}

    {props.hasItems && <div>
      <Item />
      <Item />
      <Item />
      <Item desc="inner" />
    </div>}

  </div>;
}

export default Element;