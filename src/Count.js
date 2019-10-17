import React from 'react';

export class Count extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      number: 0,
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(){
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return <div>
      {this.state.count} <button onClick={this.handleAdd}>add</button>
    </div>;
  }
}

export const CountHook = () => {
  const [ count, setCount ] = React.useState(0);
  const [ number, setNumber ] = React.useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleNumber = () => {
    setNumber(number + 10);
  }
  
  React.useEffect(() => {
    console.log('effect count');

    return () => {
      console.log('unmount');
    }
  }, [count, number]);

  React.useEffect(() => {
    console.log('effect number');
  }, [number]);

  //console.log('render');

  return <div>
    {count} <button onClick={handleAdd}>add</button>
    <hr />
    {number} <button onClick={handleNumber}>add</button>
  </div>;
}