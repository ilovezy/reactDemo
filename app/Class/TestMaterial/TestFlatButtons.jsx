import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import ActionAndroid from 'material-ui/svg-icons/action/android'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
    imageInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
    }
}

export default class FlatButtons extends React.Component {
    render() {
        return (
            <div>
                <h1>flat buttons</h1>
                <FlatButton label="Default" />
                <FlatButton label="Default" primary />
                <FlatButton label="Default" secondary />
                <FlatButton label="Default" disabled />

                <h1>icon buttons</h1>
                <FlatButton label="choose an Image" labelPosition="before">
                    <input type="file" style={styles.imageInput}/>
                </FlatButton>

                <FlatButton
                    label="label before"
                    labelPosition="before"
                    primary
                    style={styles.button}
                    icon={<ActionAndroid />} />

                <FlatButton
                    backgroundColor="#a4c639"
                    hoverColor="#428bca"
                    href="https://github.com/ilovezy"
                    target="_blank"
                    label="github link"
                    labelPosition="before"
                    secondary
                    icon={<FontIcon className="muidocs-icon-custom-github" />}
                />

                <h1>raised buttons</h1>
                <RaisedButton label="Default" />
                <RaisedButton label="Default" primary />
                <RaisedButton label="Default" secondary />
                <RaisedButton label="Default" disabled />

                <br/>
                <br/>

                <RaisedButton fullWidth label="Full width" secondary />

                <br/>
                <br/>
                <FloatingActionButton>
                    <ContentAdd />
                </FloatingActionButton>
                <FloatingActionButton mini>
                    <ContentAdd />
                </FloatingActionButton>

                <br/>
                <br/>

            </div>
        )
    }
}