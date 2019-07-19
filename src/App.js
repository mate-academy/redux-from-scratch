import React from 'react';

const App = () => (
  <div className="App">
    <h3>App</h3>
    <Modal children={123}/>
  </div>
);

const Modal = (props) => (
  <article>
    <header>Modal</header>
    <section>{props.children}</section>
  </article>
);


const List = (props) => {
  return (
    <ul>
      {props.items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

// //
// class CounterApp extends React.Component{
//   state = { count: 0 };
//
//   increase = () => {
//     this.setState(state => ({
//       count: state.count + 1,
//     }));
//   };
//
//   render() {
//     return (
//       <div className="App">
//         <h1>App count {this.state.count}</h1>
//         <button onClick={this.increase}>Add</button>
//         <Child count={this.state.count}/>
//       </div>
//     );
//   }
// }
//
// const Child = (props) => (
//   <h2>Child count {props.count}</h2>
// );

export default App;


