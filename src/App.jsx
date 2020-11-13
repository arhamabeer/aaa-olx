import React from 'react';
import './App.css';
import AppRouter from '../src/config/router'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {

    return (
      <div className="App">
        <AppRouter />
      </div>

    )
  }

}

export default App;
