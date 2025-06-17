// models/Event.js

const mongoose = require('mongoose');

// Define the schema for a tour event
const EventSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  ticket_url: {
    type: String,
    required: true
  }
});

// Export the model for use in API routes
const Event = mongoose.model('Event', EventSchema);
module.exports = Event;

