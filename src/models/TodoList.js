import {observable, action, computed} from 'mobx'
import Todo from './Todo'
export default class TodoList {
  @observable list
  constructor() {
    this.list = [
      new Todo('vue'),
      new Todo('react'),
      new Todo('angular')
    ]
  }

  @action
  addTodo(title) {
    this.list.push(new Todo(title))
  }

  @action
  delTodo(id) {
    this.list = this.list.filter(item => item.id !== id)
  }

  @action
  changeDone(id, done) {
    this.list = this.list.map(item => item.id === id ? {...item, done} : item)
  }

  @computed
  get doneCount() {

    return this.list.filter(item => item.done).length
  }

}