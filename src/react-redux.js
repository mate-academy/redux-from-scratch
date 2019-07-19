import React from 'react';

const StoreContext = React.createContext();

export const Provider = StoreContext.Provider;

export const connect = (
  OldComponent,
  mapStateToProps,
  mapDispatchToProps
) => {
  return class extends React.Component {
    static contextType = StoreContext;

    componentDidMount() {
      this.context.subscribe(() => {
        this.forceUpdate();
      });
    }

    render() {
      return (
        <OldComponent
          {...this.props}
          {...mapStateToProps(this.context.getState())}
          {...mapDispatchToProps(this.context.dispatch)}
        />
      );
    }
  }
};
