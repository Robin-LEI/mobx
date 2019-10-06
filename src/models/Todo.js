// 存放的是totolist每一项的相关数据

import {observable} from 'mobx'

export default class Todo {
  // todo项的标题
  @observable title
  // 新创建的todo项标记为未做
  @observable done

  constructor(title) {
    this.id = Math.random()
    this.title = title
    this.done = false
  }
}