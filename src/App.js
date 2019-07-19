import React from 'react';

class App extends React.Component{
  state = { count: 0 };

  increase = () => {
    this.setState(state => ({
      count: state.count + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>App count {this.state.count}</h1>
        <button onClick={this.increase}>Add</button>
        <Child count={this.state.count}/>
      </div>
    );
  }
}

const Child = ({ count }) => <h2>Child count {count}</h2>;

export default App;
