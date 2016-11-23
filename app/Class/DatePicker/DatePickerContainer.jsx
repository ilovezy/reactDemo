import React from 'react';
import Header from '../../components/Header'
import DatePickerWrap from './DatePickerWrap';

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
        <Header title="Date picker" />
        <h1>demo date picker</h1>
        <p>picked date: {me.state.pickedDate}</p>
        <DatePickerWrap />
      </div>
    )
  }
}
