/**
 * 2a.3
 * events:
 * The events module provides the EventEmitter class, which is key for working with events in Node.js.
 * It allows you to create, fire, and listen for your own events.
 * 
 * 2b.3
 */

// events.js
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Define an event handler
myEmitter.on('event', () => {
  console.log('An event occurred!');
});

// Trigger the event
myEmitter.emit('event');
