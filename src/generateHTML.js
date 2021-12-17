function generateHTML(employeeList){
  let allcards = ""
  for (let i= 0; i < employeeList.length; i++){
  let employee = employeeList[i]


  let employeecard = `<div class="col-sm-12 col-md-4">
          <div class="custom-column">
              <div class="custom-column-header">
                  <div class="name">
                      ${employee.name}
                  </div>${employee.getRole()}
              </div>
              <div class="custom-column-content">
                  <ul class="list-group">
                      <li class="list-group-item">ID: ${employee.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a>
                      </li>
                      <li class="list-group-item">${employee.github || employee.officeNumber || employee.school}</li>
                  </ul>
              </div>
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
  <title>Team Generator</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
<style>
*{
margin: 0;
padding: 0;
font-family: sans-serif;
}

body {
background-color: #ccc;
}

h1 {
background: #e94757;
color: white;
text-align: center;
padding: 30px 0;
}
.custom-column {
margin-top: 20px;
background-color: #eee;
box-sizing: border-box;
filter: drop-shadow(2px 2px 5px #000);
}

.custom-column-header {
font-size: 24px;
font-weight: 700;
background-color: #007bff;
color: white;
padding: 15px;

}

.custom-column-content {
padding: 20px;
}
</style>
</head>
<body>
<h1>My Team</h1>
<div class="container">
  <div class="row"> 
${allcards}
</div>
</div>
</body>
</html>`
}



module.exports = generateHTML