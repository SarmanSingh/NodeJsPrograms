// const EventEmitter=require('events')
// const Event=new EventEmitter()

// Event.on("greet",(name)=>{
//     console.log("Hello ",name)
// })
// Event.on("bye",()=>{
//     console.log("Bye Bye")
// })

// Event.emit("greet","Sarman Singh")
// Event.emit("bye")

const EventEmitter = require('events');

class TemperatureMonitor extends EventEmitter {
  constructor(threshold) {
    super();
    this.threshold = threshold;
  }

  startMonitoring() {
    // Simulating temperature readings every second
    setInterval(() => {
      const temperature = Math.random() * 100; // Random temperature value
      this.emit('temperatureChange', temperature);
    }, 1000);
  }
}

class Alarm {
  constructor() {
    // Subscribe to the 'temperatureChange' event
    temperatureMonitor.on('temperatureChange', this.handleTemperatureChange.bind(this));
  }

  handleTemperatureChange(temperature) {
    if (temperature > temperatureMonitor.threshold) {
      console.log(`Temperature exceeds threshold! Current temperature: ${temperature}`);
      this.soundAlarm();
    }
  }

  soundAlarm() {
    console.log('ALARM: Temperature exceeded threshold!');
    // Logic to trigger an alarm action (e.g., send a notification, activate a physical alarm, etc.)
  }
}

// Create an instance of the TemperatureMonitor with a threshold of 80
const temperatureMonitor = new TemperatureMonitor(80);

// Create an instance of the Alarm
const alarm = new Alarm();

// Start monitoring the temperature
temperatureMonitor.startMonitoring();
