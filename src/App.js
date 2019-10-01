import React from 'react';
import {observer} from 'mobx-react';
class App extends React.Component {
  render() {
    return (
      <>
        <p>
          hello world
          {this.props.appState.num}
        </p>
        <button onClick={() => {
          this.props.appState.num++
        }}>click</button>  
      </>
    )
  }
}

export default observer(App);
