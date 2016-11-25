import React from 'react';
import 'react-date-picker/index.css'
import {Calendar} from 'react-date-picker'
import Notification from '../../actions/Notification'

export default class DatePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  _onChange(dateString){
    console.log(dateString)
    Notification.updateNewDate(dateString)
  }

  render(){
    let me = this

    return (
      <Calendar dateFormat="yyyy-mm-dd" date="2017-4-24" onChange={me._onChange.bind(me)} />
    )
  }
}
