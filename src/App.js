import React from 'react';

const App = () => (
  <>
    <BoxWithTextColor text={123} color="purple" />
    <CircleWithTextColor text={789} color="red" />
  </>
);

const Box = (props) => (
  <article>
    {props.text}
  </article>
);

const Circle = (props) => (
  <section>
    {props.text}
  </section>
);

const withTextColor = (OldComponent) => {
  return ({ color, ...props }) => (
    <div style={{ color: color }}>
      <OldComponent {...props} />
    </div>
  );
};

const CircleWithTextColor = withTextColor(Circle);
const BoxWithTextColor = withTextColor(Box);




export default App;


// const App = () => (
//   <div className="App">
//     <h3>App</h3>
//     <Modal>
//       <div>{123}</div>
//       <b>456</b>
//       <p>789</p>
//     </Modal>
//   </div>
// );
// const Modal = (props) => {
//   console.log(props.children);
//   return (
//     <article>
//       <header>Modal</header>
//       <section>{props.children}</section>
//     </article>
//   );
// };

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

// const App = () => (
//   <div className="App">
//     <h3>App</h3>
//
//     <DataTable
//       items={todos}
//       header={() => (
//         <tr>
//           <th>ID</th>
//           <th>Title</th>
//           <th>User</th>
//         </tr>
//       )}
//       renderRow={(item) => (
//         <tr>
//           <td>{item.id}</td>
//           <td>{item.title}</td>
//           <td>{item.user.name}</td>
//         </tr>
//       )}
//     />
//
//     <List
//       items={[1, 2, 3]}
//       renderItem={(item) => (
//         <i>** {item}</i>
//       )}
//     />
//   </div>
// );
//
//
// const List = (props) => {
//   return (
//     <ul>
//       {props.items.map(item => (
//         <li key={item}>
//           {props.renderItem(item)}
//         </li>
//       ))}
//     </ul>
//   );
// };




