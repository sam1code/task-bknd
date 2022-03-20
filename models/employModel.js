const { default: mongoose } = require("mongoose");

const employeeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  employee_name: {
    type: String,
    required: true,
    minlength: [4, "name can't be less than 4 character long"],
    maxlength: [30, "name can't be more than 30 character long"],
  },
  employee_salary: {
    type: Number,
    required: true,
  },
  employee_age: {
    type: Number,
    minimum: 18,
    maximum: 80,
  },
  profile_image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("employees", employeeSchema);
