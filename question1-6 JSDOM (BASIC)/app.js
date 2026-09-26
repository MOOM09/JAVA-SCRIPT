
const register = document.getElementById("register");

const username = document.getElementById("username");
const usernameError = document.getElementById("usernameError");

const password = document.getElementById("password");
const passwordError = document.getElementById("passwordError");

const confirmPassword = document.getElementById("confirmPassword");
const confirmPasswordError = document.getElementById("confirmPasswordError");


username.addEventListener("input", function()
{
    if(username.value == "")
    {
        usernameError.innerHTML = "must to enter your name";
    }
    else
    {
        usernameError.innerHTML = "";
    }

    if(username.value != "" && password.value != "" && confirmPassword.value == password.value)
    {
        register.disabled = false;
    }
});


password.addEventListener("input", function()
{
    if(password.value == "")
    {
        passwordError.innerHTML = "must to enter your password";
    }
    else
    {
        passwordError.innerHTML = "";
    }

    if(username.value != "" && password.value != "" && confirmPassword.value == password.value)
    {
        register.disabled = false;
    }
});


confirmPassword.addEventListener("input", function()
{
    if(confirmPassword.value == "")
    {
        confirmPasswordError.innerHTML = "must to enter your confirm password";
    }
    else if(confirmPassword.value != password.value)
    {
        confirmPasswordError.innerHTML = "Password is not identical";
    }
    else
    {
        confirmPasswordError.innerHTML = "";
    }

    if(username.value != "" && password.value != "" && confirmPassword.value == password.value)
    {
        register.disabled = false;
    }
});


register.addEventListener("click", function()
{
    alert("registered successfully");
});
