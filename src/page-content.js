const pageStart = `
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
			crossorigin="anonymous"
		/>
		<link rel="stylesheet" href="./sample.css" />
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
			rel="stylesheet"
		/>
		<link
			rel="stylesheet"
			href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
			integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
			crossorigin="anonymous"
		/>
		<title>My Team</title>
	</head>
	<body>
		<header class="header-bkg">
			<h1 class="text-center p-4">MY TEAM</h1>
		</header>
		<div class="container">
			<div class="row justify-content-center">
`;

const managerCard = (name, id, email, office) => {
    return `
                <div class="col-md-5 col-lg-4 mt-4">
					<div class="card">
						<div class="card-header manager-header">
							<h3 class="card-title">${name}</h3>
							<h4 class="card-title">
								<i class="fas fa-user-tie"></i> Manager
							</h4>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item"><span class="fw-bold">ID #: </span>${id}</li>
							<li class="list-group-item"><span class="fw-bold">Email: </span>${email}</li>
							<li class="list-group-item"><span class="fw-bold">Office #: </span>${office}</li>
						</ul>
					</div>
				</div>
`
}

const engineerCard = (name, id, email, github) => {
    return `
                <div class="col-md-5 col-lg-4 mt-4">
					<div class="card">
						<div class="card-header engineer-header">
							<h3 class="card-title">${name}</h3>
							<h4 class="card-title">
								<i class="fas fa-user-astronaut"></i> Engineer
							</h4>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item"><span class="fw-bold">ID #: </span>${id}</li>
							<li class="list-group-item"><span class="fw-bold">Email: </span>${email}</li>
							<li class="list-group-item"><span class="fw-bold">GitHub: </span>${github}</li>
						</ul>
					</div>
				</div>
`
}

const internCard = (name, id, email, school) => {
    return `
                <div class="col-md-5 col-lg-4 mt-4">
					<div class="card">
						<div class="card-header intern-header">
							<h3 class="card-title">${name}</h3>
							<h4 class="card-title">
								<i class="fas fa-user-graduate"></i> Intern
							</h4>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item"><span class="fw-bold">ID #: </span>${id}</li>
							<li class="list-group-item"><span class="fw-bold">Email: </span>${email}</li>
							<li class="list-group-item"><span class="fw-bold">School: </span>${school}</li>
						</ul>
					</div>
				</div>
`
}

const pageEnd = `
            </div>
		</div>
	</body>
</html>
`
module.exports = { pageStart, managerCard, engineerCard, internCard, pageEnd };