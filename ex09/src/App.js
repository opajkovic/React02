import React, {Component} from 'react';
import Flower from './Flower';

class App extends Component {
  render () {
    const color = "red";
    return (
      <div className='container'>
        <Flower color={color}/>
      </div>
    )
  }
}

export default App;
