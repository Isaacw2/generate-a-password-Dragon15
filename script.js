function generatePassword() {
	var length = 8,
		 charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+={}[]|?/><;:",
		 password = "";
   
	for (var i = 0, n = charset.length; i < length; i++) {
		 password += charset.charAt(Math.floor(Math.random() * n));
	}
   
	document.getElementById("password").textContent = password;
   }

