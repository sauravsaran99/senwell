const express = require("express");
const EmployeController = require("../controller/employe.controller");

const router = express.Router();

router.post("/", EmployeController.createEmploye);
router.get("/", EmployeController.getAllEmploye);
router.get("/:id", EmployeController.getEmployeById);
router.put("/:id", EmployeController.updateEmployeById);
router.delete("/:id", EmployeController.deleteEmployeById);
router.get("/filter/department", EmployeController.filterByDepartment);
router.get("/sort/salary", EmployeController.sortBySalary);

module.exports = router;

// dto
// io opration