import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import ActionClose from 'material-ui/svg-icons/navigation/close';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
var classNames = require('classnames');
import Header from '../../components/Header'

require('./Todo.scss')

export default class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currentTodo: '',
            todos: [{
                text: 'add some todo',
                done: false,
                finishedTime: ''
            }],
            dialogOpen: false
        }
    }

    renderListGroupItems(todos){
        let me = this
        if(!todos.length){
            return null
        }

        let todosDOM = todos.map((item, index)=>{
            return (
              <div key={'div_'+item+index}>
                <ListItem primaryText={item.text}
                          key={'listItem_' + item+index}
                          data-index={index}
                          data-item={item.text}
                          className={classNames({'text-deleted text-danger': item.done})}
                          secondaryText={item.finishedTime}
                          rightIcon={
                              <ActionClose
                                  key={'close_' + item+index}
                                  data-index={index}
                                  data-item={item.text}
                                  onClick={me.deleteThisTodo.bind(me)} />}
                          onClick={me.changeItemState.bind(me)}>
                </ListItem>
                <Divider key={'divider_' + item+index} />
              </div>
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
            me.setState({todos: todos, done: false, finishedTime: ''})
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
        todo.finishedTime = todo.finishedTime ? '' : 'finished at: ' + new Date().toDateString()
        me.setState({ todos: me.state.todos })
    }

    clearAllTodos(){
        let me = this
        me.setState({todos: []})
        me.closeDialog()
    }

    clearFinishedTodo(){
        let me = this
        let todos = me.state.todos
        todos = _.filter(todos, function (item) {
            return !item.done
        })
        me.setState({todos: todos})


    }

    openDialog(){
        this.setState({dialogOpen: true});
    }

    closeDialog(){
        this.setState({dialogOpen: false});
    }

    render(){
        let me = this;
        let listGroupItems = me.renderListGroupItems(me.state.todos);

        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={me.closeDialog.bind(me)} />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onTouchTap={me.clearAllTodos.bind(me)} />,
        ];

        return (
            <div>
                <Header title="todo" />
                <h1>Todo</h1>

                <TextField hintText="add some todo?"
                           floatingLabelText="add some todo?"
                           onKeyDown={me.addTodo.bind(me)}/>

                <List>
                    {listGroupItems}
                </List>

                <FlatButton
                    secondary
                    onClick={me.openDialog.bind(me)}>clear</FlatButton>
                <FlatButton
                    primary
                    onClick={me.clearFinishedTodo.bind(me)}>clear finished</FlatButton>

                <Dialog
                  title="Dialog With Actions"
                  actions={actions}
                  modal={false}
                  open={me.state.dialogOpen}
                  onRequestClose={me.closeDialog.bind(me)}>
                    fuck all of these ??????????
                </Dialog>
            </div>
        )
    }
}

