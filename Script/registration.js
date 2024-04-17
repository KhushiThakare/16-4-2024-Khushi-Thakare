document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const mobileNo = document.getElementById('mobileNo').value;
    const password = document.getElementById('password').value;
    
    const user = {
      fullName: fullName,
      email: email,
      mobileNo: mobileNo,
      password: password
    };
    
    sessionStorage.setItem('user', JSON.stringify(user));
    
    // Redirect to login page
    window.location.href = 'login.html';
  });
  