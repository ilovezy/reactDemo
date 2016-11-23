import React from 'react';
import Header from '../../components/Header'
import DatePicker from './DatePicker';
import { UPDATE_NEW_DATE } from '../../constants/Constants'
import NotificationListener from '../../actions/NotificationListener'

export default class DatePickerContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pickedDate: ''
    }
  }

  componentDidMount(){
    NotificationListener.bind(UPDATE_NEW_DATE, this.updateNewDate.bind(this));
  }

  componentWillUnmount(){
    NotificationListener.bind(UPDATE_NEW_DATE, this.updateNewDate.bind(this));
  }

  updateNewDate(text){
    this.setState({pickedDate: text})
    console.log('!update New Date now')
  }

  render(){
    let me = this

    return (
      <div>
        <h2>demo date picker wrap</h2>
        <p>picked date: {me.state.pickedDate}</p>
        <DatePicker />
      </div>
    )
  }
}
