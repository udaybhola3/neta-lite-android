window.addEventListener("load", function () {

  console.log("In App JS");

  $('#welcome-back').modal('show');

  document.getElementById('vote-button').addEventListener("click", function () {
    $('#if-not-login').modal('show');
  });

  document.getElementById('signup-button').addEventListener("click", function () {
    $('#register').modal('show');
  });

  document.getElementById('verify-phone-button').addEventListener("click", function () {
    $('#verify-otp').modal('show');
  });

  document.getElementById('verify-code-button').addEventListener("click", function () {
    console.log("code verified")
  });

});
