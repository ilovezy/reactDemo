import AppDispatcher from './AppDispatcher'
import MicroEvent from 'microevent';

class NotificationListener {}

MicroEvent.mixin(NotificationListener);
let listener = new NotificationListener();

AppDispatcher.register((payload) => {
  console.log('accept event ' + payload.eventName);
  listener.trigger(payload.eventName || '', payload.data || null);
});

export default listener;
