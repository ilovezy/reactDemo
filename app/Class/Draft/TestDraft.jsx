import React from 'react'
import Header from '../../components/Header'
import {Editor, EditorState, RichUtils} from 'draft-js';
import {Paper, FlatButton} from 'material-ui'
import './TestDraft.scss'

export default class TestDraft extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty()
    }
  }

  handleKeyCommand(command){
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command)
    if(newState){
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  onChange(editorState){
    this.setState({editorState: editorState})
  }

  _onBoldClick() {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  render(){
    let self = this
    return (
      <div>
        <Header title="Draft"/>
        <Paper>
          <Editor
            editorState={self.state.editorState}
            onChange={self.onChange.bind(self)}
            handleKeyCommand={self.handleKeyCommand.bind(self)}
          />
          <FlatButton label="Submit" primary onClick={this._onBoldClick.bind(this)}  />
        </Paper>
      </div>
    )
  }
}
