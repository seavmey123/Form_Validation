$(document).ready(function () {
  $("#myForm").submit(function (e) {
    e.preventDefault(); // prevent form submission

    $("#message").html("");

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let password = $("#password").val().trim();
    let errors = [];

    // Check empty fields
    if (name === "") errors.push("Name is required.");
    if (email === "") errors.push("Email is required.");
    if (password === "") errors.push("Password is required.");

    // Validate email
    if (email !== "" && !email.includes("@"))
      errors.push("Email must contain '@'.");

    // Validate password length (length < 6)
    if (password !== "" && password.length < 6)
      errors.push("Password must be at least 6 characters.");

    if (errors.length > 0) {
      $("#message")
        .html(errors.join("<br>"))
        .addClass("error")
        .removeClass("success");
    } else {
      $("#message")
        .html("Form Submitted Successfully!")
        .addClass("success")
        .removeClass("error");
    }
  });
});
