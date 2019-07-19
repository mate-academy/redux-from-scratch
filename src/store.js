



// function createStore(reducer, initialState = {}) {
//   let callbacks = [];
//   let state = { ...initialState };
//
//   return {
//     getState() {
//       return state;
//     },
//
//     subscribe(callback) {
//       callbacks.push(callback);
//     },
//
//     dispatch(action) {
//       state = reducer(state, action);
//       callbacks.forEach(f => f());
//     }
//   };
// }
