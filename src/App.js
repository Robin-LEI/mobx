import React from 'react';
import {observer} from 'mobx-react';
import 'antd/dist/antd.css';
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './index.css'
@observer
class App extends React.Component {
  render() {
    return (
      <div className="AppPage">
        <h1>mobx totolist</h1>
        <Header addTodo={this.props.todolist.addTodo.bind(this.props.todolist)} />
        <Body changeDone={this.props.todolist.changeDone.bind(this.props.todolist)} list={this.props.todolist.list} deleteTodo={this.props.todolist.delTodo.bind(this.props.todolist)} />
        <Footer doneCount={this.props.todolist.doneCount} />
      </div>
    )
  }
}

export default App;
