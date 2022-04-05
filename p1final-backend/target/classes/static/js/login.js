function loginEmp() {

	//gets the inputs from the employee's entry and assigns them to variables'
	var username = document.getElementById("uname").value;

	var password = document.getElementById("psw").value;

	let data = { username: username, password: password };

	console.log(data);

	fetch("/users/login", {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}).then(res => {

		if (res.status !== 200) {

			//if login attempt fails
			alert("Try Again to Get that Bread");
		}

		else {

			// Redirecting to other page.
			window.location = "P1Employee.html";
		}

		console.log("Request complete! response:", res);
	});
};

function loginMan() {

	var username = document.getElementById("uname").value;

	var password = document.getElementById("psw").value;

	let data = { username: username, password: password };

	console.log(data);

	fetch("/users/login", {
		method: "POST",
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}).then(res => {

		if (res.status !== 200) {

			//if login attempt fails
			alert("Try Again to Get that Bread");
		}

		else {

			// Redirecting to other page.
			window.location = "P1Manager.html";
		}

		console.log("Request complete! response:", res);
	});

};

function logOut() {

	window.location = "index.html";
}

function rembReq() {

	window.location = "SubmitReimbursements.html";
}

function oldReq() {

	window.location = "oldRequests.html";
}

function viewInfo() {

	window.location = "empInfo.html";
}

function appDeny() {

	window.location = "approveDeny.html";
}

function allPend() {

	window.location = "allPending.html";
}

function viewAll() {

	window.location = "allRequests.html";
}
function viewEmp() {

	window.location = "allEmployees.html";
}
function viewID() {

	window.location = "reqById.html";
}


//<script src="JS/login.js"></script> 




