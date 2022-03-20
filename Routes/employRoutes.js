const express = require("express");
const { employeeCntl } = require("../controllers/employController");

const Router = express.Router();

const {
  getAllEmployees,
  getEmployee,
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = employeeCntl;

// 1--> api to get all the employees
Router.get("/employees", getAllEmployees);

// 2--> api to get an employee
Router.get("/employee/:id", getEmployee);

// 3--> api to add an employee
Router.post("/employee/add", addEmployee);

// 4--> api to update an employee
Router.put("/employee/:id", updateEmployee);

// 5--> api to delete employee
Router.delete("/employee/:id", deleteEmployee);

module.exports = Router;
