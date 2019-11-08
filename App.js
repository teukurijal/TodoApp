import React, { Component } from 'react';
import TodoScreen from './src/component/todoScreen';
import { Provider } from 'react-redux';
import { store } from './src/_redux/store';


class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <TodoScreen />
      </Provider>
    );
  }
}
export default App;
console.disableYellowBox=true;