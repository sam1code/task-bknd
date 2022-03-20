const catchAsyncErrors = require("../middleWare/catchAsyncErrors.js");
const Employee = require("../models/employModel.js");
const ErrorHandler = require("../utils/errorHandler.js");

exports.employeeCntl = {
  // api to get all the employees
  getAllEmployees: catchAsyncErrors(async (req, res, next) => {
    const employees = await Employee.find();
    res.status(200).send(employees);
  }),

  // api to get specified employee
  getEmployee: catchAsyncErrors(async (req, res, next) => {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return next(new ErrorHandler("employee not found"));
    res.status(200).send({ message: "Employ added", employee: employee });
  }),

  // api to add employee
  addEmployee: catchAsyncErrors(async (req, res, next) => {
    const employee = await Employee.create(req.body);
    res.status(201).send({ message: "Employ added", employee: employee });
  }),

  // api to update employee
  updateEmployee: catchAsyncErrors(async (req, res, next) => {
    let employee = await Employee.findById(req.params.id);
    if (!employee) return next(new ErrorHandler("Employee not found", 404));
    employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    res.status(201).send({ message: "Updates successfully", employee });
  }),

  // api to delete employee
  deleteEmployee: catchAsyncErrors(async (req, res, next) => {
    const employee = Employee.findById(req.params.id);
    if (!employee) return next(new ErrorHandler("Employee not found", 404));
    await employee.remove();
    res
      .status(200)
      .json({ success: true, message: "Employee deleted successfully" });
  }),
};
