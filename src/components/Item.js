import React, { Component } from 'react'
import {observer} from 'mobx-react'
import { Button, Checkbox } from 'antd';
@observer
class Item extends Component {
  render() {
    return (
      <div>
        <Checkbox className='' type='checkbox' checked={this.props.item.done} onChange={(e) => {
          this.props.changeDone(this.props.item.id, e.target.checked)
        }} />
        {
          this.props.item.title
        }
        <Button style={{marginLeft: '20px'}} onClick={() => {
          this.props.deleteTodo(this.props.item.id)
        }}>delete</Button>
      </div>
    )
  }
}
export default Item
