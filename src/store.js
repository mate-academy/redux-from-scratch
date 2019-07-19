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

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer, { count: 0 });

export default store;


export const connect = (OldComponent) => {
  return class extends React.Component {
    componentDidMount() {
      store.subscribe(() => {
        this.forceUpdate();
      });
    }

    increase = () => {
      store.dispatch({ type: 'increase' });
    };

    render() {
      const { count } = store.getState();

      return (
        <OldComponent
          {...this.props}
          count={count}
          increase={this.increase}
        />
      );
    }
  }
};
