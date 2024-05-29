
document.getElementById('login-toggle').classList.add('active');
document.getElementById('login-form').style.display = 'block';  


function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-toggle').classList.add('active');
    document.getElementById('signup-toggle').classList.remove('active');
}


function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('signup-toggle').classList.add('active');
    document.getElementById('login-toggle').classList.remove('active');
}


document.getElementById('signup-form').addEventListener('submit', function(event) {
    var username = document.querySelector('#signup-form input[type="text"]').value;
    var email = document.querySelector('#signup-form input[type="email"]').value;
    var password = document.querySelector('#signup-form input[type="password"]').value;

    if (username === '' || email === '' || password === '') {
        alert('All fields are required!');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address!');
        event.preventDefault();
    }
});


function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
