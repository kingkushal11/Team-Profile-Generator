const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const employeeList = []
const generateHTML = require('./src/generateHTML')
const fs = require('fs');

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
function addManager() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the manager name?',
        name: 'name'
    },{
        type: 'input',
        message: 'What is the manager id?',
        name: 'id'
    },{
        type: 'input',
        message: 'What is the manager email?',
        name: 'email'
    },{
        type: 'input',
        message: 'What is the manager office number?',
        name: 'officeNumber'
    }]).then(function(data){
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employeeList.push(manager)
        chooseEmployees()
    })
 }
function addIntern() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the intern name?',
        name: 'name'
    },{
        type: 'input',
        message: 'What is the intern id?',
        name: 'id'
    },{
        type: 'input',
        message: 'What is the intern email?',
        name: 'email'
    },{
        type: 'input',
        message: 'What school did the intern go to?',
        name: 'school'
    }]).then(function(data){
        const intern = new Intern(data.name, data.id, data.email, data.school)
        employeeList.push(intern)
        chooseEmployees()
    })
 }
 function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is the engineer name?',
        name: 'name'
    },{
        type: 'input',
        message: 'What is the engineer id?',
        name: 'id'
    },{
        type: 'input',
        message: 'What is the engineer email?',
        name: 'email'
    },{
        type: 'input',
        message: 'What is the engineer github?',
        name: 'github'
    }]).then(function(data){
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        employeeList.push(engineer)
        chooseEmployees()
    })
 }
 
 function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if(err) throw err 
        console.log('file written');
    })
}

function quit() {
    console.log(employeeList)
    var stringfydata = generateHTML(employeeList)
    writeToFile("./dist/employee.html", stringfydata)
}
chooseEmployees()