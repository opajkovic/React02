import React, {Component} from 'react';
import Box from './Box';

class App extends Component {
  render () {
    const size = "20";
    return (
      <div className='container'>
        <Box size={size}/>
      </div>
    )
  }
}

export default App;
