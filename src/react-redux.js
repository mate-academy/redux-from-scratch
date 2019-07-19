import React from 'react';

const StoreContext = React.createContext();

export const Provider = (props) => (
  <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
);


export const connect = (
  mapStateToProps,
  mapDispatchToProps
) => {
  return (OldComponent) => {
    return class extends React.Component {
      static contextType = StoreContext;

      componentDidMount() {
        const store = this.context;
        store.subscribe(() => {
          this.forceUpdate();
        });
      }

      render() {
        const store = this.context;
        return (
          <OldComponent
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  }
};
