import React, { Component } from 'react'
import {observer} from 'mobx-react'
import Item from './Item'
@observer
class Body extends Component {
  render() {
    return (
      <div className='class-body'>
        {
          this.props.list.map(item => {
            return <Item changeDone={this.props.changeDone} deleteTodo={this.props.deleteTodo} key={item.id} item={item} />
          })
        }
      </div>
    )
  }
}
export default Body