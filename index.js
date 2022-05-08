// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');
const path =require('path');


// TODO: Create an array of questions for user input
const promptUser = () => {
      inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'what type of employee',
            choices: ['Employee', 'Engineer', 'Intern','Manager']
          }])
        }
