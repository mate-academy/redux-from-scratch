import React from 'react';
function createStore(reducer, initialState = {}) {
  let state = { ...initialState };
  let callbacks = [];

  return {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
      callbacks.forEach(f => f());
    },

    subscribe(f) {
      // callbacks.push(f);
      callbacks = [...callbacks, f];
    }
  };
}



export const connect = (
  OldComponent,
  mapStateToProps,
  mapDispatchToProps
) => {
  return class extends React.Component {
    componentDidMount() {
      store.subscribe(() => {
        this.forceUpdate();
      });
    }

    render() {
      return (
        <OldComponent
          {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    }
  }
};

/// --- My code ----
const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        count: state.count + 1,
      };

    case 'decrease':
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, { count: 0 });

export default store;





















