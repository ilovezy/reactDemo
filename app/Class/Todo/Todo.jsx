import React from 'react'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
// import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
require('./Todo.scss')

export default class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTodo: '',
            todos: [{
                text: 'add some todo',
                done: false
            }]
        }
    }

    renderListGroupItems(todos){
        let me = this
        if(!todos.length){
            return null
        }
        // {/*
        //  <li className="list-group-item"
        //  key={item+index}
        //  data-index={index}
        //  data-item={item.text}
        //  onClick={me.changeItemState.bind(me)}>
        //  <span className="badge" data-index={index} data-item={item.text} onClick={me.deleteThisTodo.bind(me)}>x</span>
        //  <span className={item.done ? 'text-deleted text-danger' : ''}>{item.text}</span>
        //  </li>
        //  */}
        let todosDOM = todos.map((item, index)=>{
            return (
                <ListItem primaryText={item.text}
                          key={item+index}
                          data-index={index}
                          data-item={item.text}
                          rightIconButton={<ActionInfo />}
                          onClick={me.changeItemState.bind(me)}>
                </ListItem>

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
        e.stopPropagation()
        let me = this
        let index = e.currentTarget.getAttribute('data-index')
        me.state.todos.splice(index, 1);
        me.setState({todos: me.state.todos})
    }

    changeItemState(e){
        let me = this
        let index = e.currentTarget.getAttribute('data-index')
        let todo = me.state.todos[index]
        todo.done = !todo.done
        me.setState({ todos: me.state.todos })
    }

    clearAllTodos(){
        this.setState({todos: []})
    }

    clearFinishedTodo(){
        let me = this
        let todos = me.state.todos
        todos = _.filter(todos, function (item) {
            return !item.done
        })
        me.setState({todos: todos})
    }

    render(){
        let me = this;
        let listGroupItems = me.renderListGroupItems(me.state.todos);

        return (
            <div className="container">
                <h1 className="text-center">Todo</h1>

                <input className="form-control"
                       type="text"
                       placeholder="add some todo?"
                       onKeyDown={me.addTodo.bind(me)}/>

                <List>
                    {listGroupItems}
                </List>

                <button className="btn btn-danger pull-right"
                    onClick={me.clearAllTodos.bind(me)}>clear</button>
                <button className="btn btn-info pull-right"
                        onClick={me.clearFinishedTodo.bind(me)}>clear finished</button>
            </div>
        )
    }
}

