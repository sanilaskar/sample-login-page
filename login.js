const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if(username === 'myusername' && password === 'mypassword') {
    alert('Login successful');
    // Redirect to dashboard or home page
  } else {
    alert('Invalid username or password');
  }
});
