import React from 'react'

export default class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTodo: '',
            todos: [{
                text: 'add some todo',
                done: true
            }]
        }
    }

    renderListGroupItems(todos){
        let me = this
        if(!todos.length){
            return null
        }

        let todosDOM = todos.map((item, index)=>{
            return (
                <li className="list-group-item"
                    key={item+index}
                    data-item={item.text}
                    onClick={me.changeItemState.bind(me)}>
                    <span className="badge" data-item={item.text} onClick={me.deleteThisTodo.bind(me)}>x</span>
                    <span className={item.done ? 'text-active' : ''}>{item.text}</span>
                </li>
            )
        })
        return todosDOM
    }

    addTodo(e){
        let me = this
        let currentTarget = e.currentTarget
        if(e.keyCode == 13 && currentTarget.value != ''){
            let todos = me.state.todos
            todos.push({text: currentTarget.value})
            me.setState({todos: todos, done: false})
            currentTarget.value = ''
        }
    }

    deleteThisTodo(e){
        let me = this
        let itemText = e.currentTarget.getAttribute('data-item')
        let todos = _.remove(me.state.todos, function (todo) {
            return todo.text != itemText
        })
        me.setState({todos: todos})
    }

    // TODO change item status
    changeItemState(e){
        let me = this
        let itemText = e.currentTarget.getAttribute('data-item')
        let thisTodo = _.find(me.state.todos, function (todo) {
            return todo.text == itemText
        })
    }

    clearAllTodos(){
        this.setState({todos: []})
    }

    render(){
        let me = this;
        let listGroupItems = me.renderListGroupItems(me.state.todos);

        return (
            <div className="container">
                <h1 className="text-center">Todo</h1>
                <p className="alert alert-info">this is a todo app</p>

                <input className="form-control"
                       type="text"
                       placeholder="add some todo?"
                       onKeyDown={me.addTodo.bind(me)}/>
                <ul className="list-group">
                    {listGroupItems}
                </ul>

                <button className="btn btn-danger pull-right"
                    onClick={me.clearAllTodos.bind(me)}>clear</button>
            </div>
        )
    }
}

