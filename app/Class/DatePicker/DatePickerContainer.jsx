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
    console.log('date pick container mounted')
    NotificationListener.bind(UPDATE_NEW_DATE, this.updateNewDate.bind(this));
  }

  componentWillUnmount(){
    console.log('date pick container unmounted')
    NotificationListener.unbind(UPDATE_NEW_DATE);
  }

  updateNewDate(text){
    this.setState({pickedDate: text})
    console.log('!update New Date now 1111')
  }

  render(){
    let me = this

    return (
      <div>
        <Header title="Date picker" />
        <div style={{padding: '15px'}}>
          <h1>demo date picker</h1>
          <p>picked date: {me.state.pickedDate}</p>
          <DatePicker />
        </div>
      </div>
    )
  }
}
