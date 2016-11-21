import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

export default class TestAutoComplete extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataSource: []
        }
    }

    handleUpdateInput(value) {
        let me = this
        me.setState({
            dataSource: [
                value,
                value + value
            ]
        })
    }

    render(){
        let me = this
        return (
            <div>
                <AutoComplete
                    hintText="type anything"
                    dataSource={me.state.dataSource}
                    onUpdateInput={me.handleUpdateInput.bind(me)}
                    floatingLabelText="let gogogog somethign"
                    fullWidth={true}/>

                <AutoComplete
                    hintText="Type anything"
                    dataSource={this.state.dataSource}
                    onUpdateInput={this.handleUpdateInput.bind(me)}
                    floatingLabelText="Full width"
                    fullWidth={true}/>
            </div>
        )
    }
}