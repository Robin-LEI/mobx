import React, { Component } from 'react'
import {observer} from 'mobx-react'
@observer
class Footer extends Component {
  render() {
    return (
      <div>
        <h4>当前已完成{this.props.doneCount}项任务</h4>
      </div>
    )
  }
}
export default Footer