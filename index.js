// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];


const mainMenu = () => {
  inquirer.prompt(
    {
      type: 'list',
      name: 'type',
      message: 'what type of employee',
      choices: ['Engineer', 'Intern', 'Manager', 'Build Team']
    }
  ).then(answers => {
    if (answers.type === 'Engineer') {
      //call engineer questions
      promptEngineer();

    } else if (answers.type === 'Manager') {
      //call Manager questions
      promptManager();

    } else if (answers.type === 'Intern') {
      //call intern questions
      promptIntern();

    } else {
      //run HTML generator function
    }
  })
};
// TODO: Create an array of questions for user input

//MANAGER
const promptManager = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Enter your id # (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your id#!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'NUMBER',
      message: 'What is your OFFICE NUMBER? (Required)',
      validate: numberInput => {
        if (numberInput) {
          return true;
        } else {
          console.log('Please enter OFFICE NUMBER!');
          return false;
        }
      }
    },

  ]).then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.NUMBER);
    team.push(manager);
    mainMenu();
  })

};
  //ENGINEER
  const promptEngineer = () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter your id # (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter your id# username!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your github username? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter github username!');
            return false;
          }
        }
      },
    ]).then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      team.push(engineer);
      mainMenu();
    })
  }
    //INTERN
    const promptIntern = () => {
      inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter your id # (Required)',
          validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('Please enter your id# !');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'email',
          message: 'What is your email? (Required)',
          validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please enter your email!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'school',
          message: 'What school do you attend? (Required)',
          validate: schoolInput => {
            if (schoolInput) {
              return true;
            } else {
              console.log('Please enter your school.');
              return false;
            }
          }
        },

      ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        mainMenu();
      })

    }

    mainMenu();
   