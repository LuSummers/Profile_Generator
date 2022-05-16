// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./src/generateMarkdown')
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = [];
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const startApp = () => {
  const mainMenu = () => {
    inquirer.prompt(
      {
        type: 'list',
        name: 'type',
        message: 'Please select employee title',
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
        buildTeam();
      }
    })
  };
  // An array of questions for user input

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
        message: 'Please enter your id # (Required)',
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
        message: 'What is your email address? (Required)',
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
      console.log(answers);
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
        message: 'Please enter your id # (Required)',
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
        message: 'What is your email address? (Required)',
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
      console.log(answers);
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      team.push(engineer);
      mainMenu();
    });
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
        message: 'Please enter your id # (Required)',
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
        message: 'What is your email address? (Required)',
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
      console.log(answers);
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      team.push(intern);
      mainMenu();
    });
  }

  const buildTeam = () => {
    console.log(`finished building team`);
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR)
  }
  fs.writeFileSync(outputPath, generateMarkdown(team), "UTF-8");

}

mainMenu();
}
  

startApp();

