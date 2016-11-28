import React from 'react';
import Header from '../../components/Header'
import {Editor, EditorState} from 'draft-js';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }

  render(){
    const {editorState} = this.state;
    return (
      <div>
        <Header title="Draft"/>
        <Editor editorState={editorState} onChange={this.onChange} />
      </div>
    )
  }
}
