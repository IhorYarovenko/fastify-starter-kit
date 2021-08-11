import EventEmmiter from 'events';

class Emmiter {
  constructor() {
    this.emmiter = new EventEmmiter();
  }

  once(event, fn) {
    return this.emmiter.once(event, fn);
  }

  emit(event, data) {
    this.emmiter.emit(event, data);
  }
}

const emmiter = new Emmiter();

export default emmiter;
