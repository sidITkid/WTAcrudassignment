const mongoose = require('mongoose');

var Employee = mongoose.model('Employee', {
    name: { type: String },
    position: { type: String },
    office: { type: String },
    salary: { type: Number },
    rating: { type: Number },
    department: { type: String },
    phone: { type: Number }
});

module.exports = { Employee };