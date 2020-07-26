$('#signup').click(function (e) {
    e.preventDefault();
    var fName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var uName = document.getElementById('uname').value;
    var passWd = document.getElementById('passwd').value;
    var validName = !/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._0-9]/.test(fName);
    var number = /[0-9]/.test(passWd);
    var upperCase = /[A-Z]/.test(passWd);
    var lowerCase = /[a-z]/.test(passWd);
    var specialChar = /[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/.test(passWd);

    var validEmail = checkEmail();
    function checkEmail() {
        if (email.trim() === '')
            return false;
        if (email.indexOf('@') <= 0)
            return false;
        if (email.charAt(email.length - 4) != '.' && email.charAt(email.length - 3) != '.')
            return false;

        return true;
    }
    console.log(email.charAt(email.length - 4));
    console.log(email.charAt(email.length - 3));
    console.log(email.indexOf('@'));
    console.log(validEmail);

    if (fName != '' && validName) {
        if (validEmail) {
            if (mobile.toString().length === 10) {
                if (uName != '') {
                    if (passWd.length >= 8 && number && upperCase && lowerCase && specialChar) {
                        window.location.href = 'signin.html';
                    }
                    else
                        document.getElementById('error').innerHTML = "invalid password";
                }
                else
                    document.getElementById('error').innerHTML = "invalid username";
            }
            else
                document.getElementById('error').innerHTML = "invalid mobile";
        }
        else
            document.getElementById('error').innerHTML = "invalid email";
    }
    else
        document.getElementById('error').innerHTML = "invalid name";
});

