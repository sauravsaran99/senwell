const mongoose = require("mongoose");

const employeSchema = new mongoose.Schema({
  employee_id: {
    type: String,
    required: true,
    unique: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

const Employe = mongoose.model("Employe", employeSchema);

module.exports = Employe;

// Create a basic endpoints using NodeJS. with the following schema

// 1)Create a Endpoints for( GET, POST, UPDATE, DELETE)
// 2)Create a API to search by employee_id,
// 3)Create a API to filter by department.
// 4)Create a API to sort by salary.

// {
// employee_id: '1'
// first_name: "xyz",
// last_name: "xyz",
// department: "IT",
// Address: "xyz",
// dob:"01-02-2012",
// salary:'123456'
// }
