function generateHTML(employeeList){
    let allcards = ""
    for (let i= 0; i < employeeList.length; i++){
    let employee = employeeList[i]


    let employeecard = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${employee.getRole()}</h5>
      <p class="card-text">${employee.name}.</p>
      <p class="card-text">${employee.id}.</p>
      <p class="card-text">${employee.email}.</p>
      <p class="card-text">${employee.github || employee.officeNumber || employee.school}.</p>
    </div>
  </div>`

  allcards = allcards+employeecard
 }
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generater</title>
</head>
<body>
<h1>My Team</h1>   
${allcards}
</body>
</html>`
}



module.exports = generateHTML