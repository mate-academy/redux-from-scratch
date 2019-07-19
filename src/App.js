import React from 'react';
import { connect } from './store';


const App = ({ count, increase, decrease}) => (
  <div className="App">
    <h1>App count {count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
);

const mapState = (state) => ({
  count: state.count,
});

const mapDispatch = (dispatch) => ({
  increase: () => dispatch({ type: 'increase'}),
  decrease: () => dispatch({ type: 'decrease'}),
});

export default connect(App, mapState, mapDispatch);






















// class App2 extends React.Component{
//   componentDidMount() {
//     store.subscribe(() => {
//       this.forceUpdate();
//     });
//   }
//
//   increase = () => {
//     store.dispatch({ type: 'increase' });
//   };
//
//   render() {
//     const { count } = store.getState();
//
//     return (
//       <div className="App">
//         <h1>App count {count}</h1>
//         <button onClick={this.increase}>
//           Add
//         </button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   static contextType = CountContext;
//
//   render() {
//     return (
//       <h2>Child count {this.context}</h2>
//     );
//   }
// }
// Child.contextType = CountContext;

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

// const App = () => (
//   <>
//     <BoxWithTextColor text={123} color="purple" />
//     <CircleWithTextColor text={789} color="red" />
//   </>
// );
//
// const Box = (props) => (
//   <article>
//     {props.text}
//   </article>
// );
//
// const Circle = (props) => (
//   <section>
//     {props.text}
//   </section>
// );
//
// const withTextColor = (OldComponent) => {
//   return ({ color, ...props }) => (
//     <div style={{ color: color }}>
//       <OldComponent {...props} />
//     </div>
//   );
// };
//
// const CircleWithTextColor = withTextColor(Circle);
// const BoxWithTextColor = withTextColor(Box);



