import React from 'react';



export class CountClass extends React.Component {

  state = {
    count: 0,
    otra: 10,
  }

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({ count: this.state.count + 1 })
  }

  render(){
    return (
      <div className="App">
  
        Count: {this.state.count}
        <br />
        <button onClick={this.handleClick}>
          Add
        </button>
  
      </div>
    );
  }
}



export function Count (props) {
  const [ count, setCount ] = React.useState(0);
  const [ otra, setOtra ] = React.useState('inicial');

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleClick2 = () => {
    setOtra(otra + 10);
  }

  React.useEffect(() => {
    paragraph.current.style.background = `rgb(0,0,${Math.round(Math.random() * 200 + 50)})`;
  }, [count]);

  const paragraph = React.useRef();

  return (
    <div className="App">

      <p ref={paragraph}>
        test
      </p>

      Count: {count}
      <br />
      <button onClick={handleClick}>
        Add
      </button>

      <br />

      Count: {otra}
      <br />
      <button onClick={handleClick2}>
        Add
      </button>

    </div>
  );
}