function validatePasswords() {
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert("Password and confirm password fields do not match!");
      return false; // prevent form submission
    }
    
    return true; // allow form submission
}