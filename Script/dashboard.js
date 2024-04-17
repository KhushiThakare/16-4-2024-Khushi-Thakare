// Function to display user information in table
function displayUserInfo() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';
    
    if(user) {
      const row = `<tr>
                    <td>${user.fullName}</td>
                    <td>${user.email}</td>
                    <td>${user.mobileNo}</td>
                    <td>
                      <button onclick="editUser()">Edit</button>
                      <button onclick="deleteUser()">Delete</button>
                    </td>
                  </tr>`;
      tableBody.innerHTML = row;
    }
  }
  
  // Function to handle edit user
function editUser() {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const fullName = prompt('Enter Full Name:', user.fullName);
    const email = prompt('Enter Email:', user.email);
    const mobileNo = prompt('Enter Mobile No:', user.mobileNo);
    
    if (fullName && email && mobileNo) {
      user.fullName = fullName;
      user.email = email;
      user.mobileNo = mobileNo;
      
      sessionStorage.setItem('user', JSON.stringify(user));
      displayUserInfo(); // Update table
    }
  }
  
  // Function to handle delete user
  function deleteUser() {
    if (confirm('Are you sure you want to delete your account?')) {
      sessionStorage.removeItem('user');
      window.location.href = 'login.html'; // Redirect to login page after deletion
    }
  }
  
  // Function to handle logout
  function logout() {
    sessionStorage.removeItem('user');
    window.location.href = 'login.html';
  }
  
  // Display user information on page load
  window.addEventListener('DOMContentLoaded', displayUserInfo);
  
  // Attach event listener to logout button
  document.getElementById('logoutButton').addEventListener('click', logout);
  