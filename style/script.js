function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value

	if (username=="user" && password=="admin") {
		alert("Login Successful");
		return false;
	} else {
		alert("Login Failed");
	}
}