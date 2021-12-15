const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const employeeList = []

function chooseEmployees() {
    inquirer.prompt([{
        type: 'list',
        message: 'What employee are you trying to make?',
        name: 'choice',
        choices: ['Engineer', 'Intern', 'Manager', 'Quit']

    }]).then(function (result) {
        console.log(result)
        if (result.choice === 'Engineer') {
            addEngineer()
        }
        if (result.choice === 'Intern') {
            addIntern()
        }
        if (result.choice === 'Manager') {
            addManager()
        }
        if (result.choice === 'Quit') {
            quit()
        }

    })
}
function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the employee name?',
        name: 'name'
    },{
        type: 'input',
        message: 'What is the employee id?',
        name: 'id'
    },{
        type: 'input',
        message: 'What is the employee email?',
        name: 'email'
    },{
        type: 'input',
        message: 'What is the employee github?',
        name: 'github'
    }]).then(function(result){
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        employeeList.push(engineer)
        chooseEmployees()
    })
 }
function addIntern() { }
function addManager() { }
function quit() {}
chooseEmployees()