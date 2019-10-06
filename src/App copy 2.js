import React from 'react';
import {observer} from 'mobx-react';
@observer
class App extends React.Component {
  render() {
    return (
      <>
        <p>
          hello world
          {this.props.home.a}
        </p>
        <button onClick={() => {
          this.props.home.a++
        }}>click</button>  
      </>
    )
  }
}

export default App;
