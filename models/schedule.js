const Joi = require('joi');
const mongoose = require('mongoose');
const moment = require('moment');

const scheduleSchema = new mongoose.Schema({
  employeeInfo: {
    type: new mongoose.Schema({
      firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
      },
      lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
      }

    }),
    required: true
  },
  scheduledOrders: [{
    clientName: String,
    clientPhone: String,
    info:{
      type: String,
      default: "none",
      maxlength: 500
    },
    spefications:{
      type: String,
      default: "none",
      maxlength: 500
    }

  }],
  scheduleDate: {
    type: Date,
    default: Date.now
  }

  }
);




const Schedule = mongoose.model('Schedule', scheduleSchema);

function validateSchedule(schedule) {
  const schema = {
    empId: Joi.objectId().required()
  };

  return Joi.validate(schedule, schema);
}

exports.Schedule = Schedule;
exports.validate = validateSchedule;
