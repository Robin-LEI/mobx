import React, { Component } from 'react'
import {observer} from 'mobx-react'
import { Button, Input } from 'antd';
@observer
class Header extends Component {
  // constructor(props) {
  //   super(props)
  //   this.addClick = this.addClick.bind(this)
  // }
  render() {
    return (
      <div>
        <Input ref='inputText' />
        <Button onClick={() => {
          this.props.addTodo(this.refs.inputText.value)
          this.refs.inputText.value = ''
        }}>add</Button>
      </div>
    )
  }
}
export default Header