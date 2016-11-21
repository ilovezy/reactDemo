import React from 'react'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import FontIcon from 'material-ui/FontIcon'
import SvgIconFace from 'material-ui/svg-icons/action/face'
import Paper from 'material-ui/Paper';

export default class TestChip extends React.Component {
    constructor(props) {
        super(props)
        let me = this
        me.state = {chipData: [
            {key: 0, label: 'Angular'},
            {key: 1, label: 'JQuery'},
            {key: 2, label: 'Polymer'},
            {key: 3, label: 'ReactJS'}
        ]}
        me.styles = {
            chip: {
                margin: 4
            },
            wrapper: {
                display: 'flex',
                flexWrap: 'wrap'
            },
        }
    }

    handleRequestDelete = (key) => {
        if (key === 3) {
            alert('Why would you want to delete React?! :)')
            return
        }
        let me = this
        let chipData = me.state.chipData
        const chipToDelete = chipData.map((chip) => chip.key).indexOf(key)
        chipData.splice(chipToDelete, 1)
        me.setState({chipData: chipData})
    }

    renderChip(data) {
        return (
            data.map((item, index)=>{
                return (
                    <Chip key={item.key}
                          onRequestDelete={() => {this.handleRequestDelete(item.key)} }
                          style={this.styles.chip}>
                        {item.label}
                    </Chip>
                )
            })
        )
    }

    render() {
        let me = this
        let chipDOM = me.renderChip(me.state.chipData)
        return (
            <Paper style={me.styles.wrapper} rounded={false} zDepth={1}>
                {chipDOM}
            </Paper>
        );
    }
}