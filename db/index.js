const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Sales = require("./lib/Sales");
const Engineering = require("./lib/Engineering");
const Finance = require("./lib/Finance");
const Legal = require("./lib/Legal");

const employeeManager = [];
const idArray = [];

function appMenu() {
    function viewEmplyoyee() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "View All Employees By Department",
                    "View All Employees By Manager",
                    "Add Employee",
                    "Remove Eployee",
                    "Update Employee Role",
                    "Update Employee Manager",
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Sales":
                    addSales();
                    break;
                case "Engineering":
                    addEngineering();
                    break;
                case "Finance":
                    addFinance();
                    break;
                case "Legal":
                    addLegal();
                    break;
                default:
                    buildTeam();
            }
        });   
    }
}