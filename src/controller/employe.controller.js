const express = require("express");
const Employe = require("../model/employe.model");

const EmployeController = {
  createEmploye: async (req, res) => {
    try {
      console.log("req", req.body);
      const employe = new Employe(req.body);
      await employe.save();
      return res.status(201).json(employe);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: "Employe not created....!", error });
    }
  },
  
  getEmployeById: async (req, res) => {
    try {
      const id = req.params.id;
      console.log("id", id);
      const employe = await Employe.findOne({ employee_id: id });
      console.log("employe", employe);

      if (!employe) {
        return res.status(404).json({ message: "No Employee found....!" });
      }

      return res.status(200).json(employe);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error", error });
    }
  },

  getAllEmploye: async (req, res) => {
    try {
      const allEmploye = await Employe.find({});
      if (!allEmploye || allEmploye.length === 0) {
        return res.status(404).json({ message: "No Employees found....!" });
      }

      return res.status(200).json(allEmploye);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error", error });
    }
  },

  updateEmployeById: async (req, res) => {
    try {
      const id = req.params.id;
      const employe = await Employe.findOneAndUpdate({ employee_id: id }, req.body, { new: true });
      if (!employe) {
        return res.status(404).json({ message: "No Employee found....!" });
      }

      return res.status(200).json(employe);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error", error });
    }
  },

  deleteEmployeById: async (req, res) => {
    try {
      const id = req.params.id;
      const employe = await Employe.findOneAndDelete({ employee_id: id });
      if (!employe) {
        return res.status(404).json({ message: "No Employee found....!" });
      }

      return res.status(200).json({ message: "Employe deleted successfully....!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error", error });
    }
  },

  filterByDepartment: async (req, res) => {
    try {
      const department = req.query.department;
      const employees = await Employe.find({ department });
      if (!employees || employees.length === 0) {
        return res.status(404).json({ message: "No Employees found in this department....!" });
      }
      return res.status(200).json(employees);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error", error });
    }
  },
  sortBySalary: async (req, res) => {
    try {
      const order = req.query.order === 'desc' ? -1 : 1; // Use 'asc' or 'desc' for sorting order
      const employees = await Employe.find({}).sort({ salary: order });
      if (!employees || employees.length === 0) {
        return res.status(404).json({ message: "No Employees found....!" });
      }
      return res.status(200).json(employees);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Server error", error });
    }
  }
};

module.exports = EmployeController;
