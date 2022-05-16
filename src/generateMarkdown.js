const generateTeam = team => {
    console.log(team);



        const generateManager = manager => 
        {
            console.log(manager);
            return `
            <div class="card">
            <div class="top">
            <div class="card-header">${manager.name}</div>
                <card-title class="manager"><i class='fa fa-coffee'></i>  Manager </card-title> </div>
                <ul class ="list-group">
                    <li class="list-group-item ">ID: ${manager.id}</li>
                    <li class="list-group-item">Email: <span id = "email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div></card>`;
           
        };
        const generateEngineer = engineer => 
        {
            console.log(engineer);
            return `
            <div class="card">
            <div class="top">
            <div class="card-header">${engineer.name}</div>
            <card-title class="engineer"><i class='fas fa-glasses'></i> Engineer</card-title></div>
            <ul class ="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <span id = "email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                <li class="list-group-item">Github:<span id = "github"><a href="http://github.com/${engineer.github}">${engineer.github}</a></span></li>
            </ul>
        </div></card>`;
            
        };
        const generateIntern = intern =>
        {
            console.log(intern);
            return `
            <div class="card">
            <div class="top">
            <div class="card-header">${intern.name}</div>
            <card-title class="intern"><i class='fa fa-graduation-cap'></i>Intern</card-title></div>
            <ul class ="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <span id = "email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School:${intern.school}</li>
            </ul>
        </div></card>`;
        }

        const html = [];

        html.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
        );
        html.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => generateEngineer(engineer))
            .join("")
        );
        html.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => generateIntern(intern))
            .join("")
        );
    
        return html.join("");
    
    }


module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"> 
        <link rel="stylesheet" href="style.css">
        <title>TEAMS</title>
    </head>
    <body>
        <header>
        <h1>My Team</h1></header>
    <main>${generateTeam(team)}</main>
        
    </body>
        
    </body>
    </html>`;
}

