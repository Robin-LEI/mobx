### redux
1. connect()是将state装饰为props，从而使得state变化视图也变化

### MobX
1. 任何事情因为state变化而变化的他就应该变化而且是自动的
2. npm i mobx -S, npm i mobx-react -S
3. 我们一定要深刻理解，react中一个组件，只因为两个事情的变化而变化
  - 组件的state变化(必须用setState来改变state的值)
  - 传入到组件的props变化
4. react的props本身是只读的
5. 使用了Proxy代理对象

### 使用修饰器
1. es6新增的语法，使用@开头
2. 修饰一个对象
```
{
  @observable a: 100
}
```
3. 修饰一个类
```
@observer
class App extends Components {

}
```
4. 需要安装如下插件
```
// babel-plugin-transform-decorators-legacy
```
5. 受修饰器的影响，修饰器只能修饰类，所以还得安装一个插件
```
npm i babel-plugin-transform-class-properties -S
```

### observable and observe
1. 前者表示可被观察的，来自mobx，类中的属性
2. 后者表示观察者，来自mobx-react，组件类
3. 类必须要实例化，传入组件当作props

### @action
### @computed