import React from 'react';
import { withCount } from './CountContext';

const Child = (props) => (
  <h2>Child count {props.count}</h2>
);

export default withCount(Child);




// const Child = () => (
//   <CountContext.Consumer>
//     {(contextValue) => (
//       <h2>Child count {contextValue}</h2>
//     )}
//   </CountContext.Consumer>
// );
