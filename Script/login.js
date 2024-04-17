document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    const user = JSON.parse(sessionStorage.getItem('user'));
    
    if (user && user.email === email && user.password === password) {
      // Redirect to dashboard page
      window.location.href = 'dashboard.html';
    } else {
      alert('Invalid email or password. Please try again.');
    }
  });
  