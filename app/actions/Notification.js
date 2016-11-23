import AppDispatcher from './AppDispatcher'
import { UPDATE_NEW_DATE } from '../constants/Constants';

var loading = false;
export default class Notification {
  static updateNewDate(data) {
    AppDispatcher.dispatch({
      eventName: UPDATE_NEW_DATE,
      data: data
    })
  }
}