<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Skil Nexus | Signup</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="../style/style.css" />
    <link rel="stylesheet" href="../style/login.css" />
  </head>
  <body>
    <div aria-live="polite" aria-atomic="true" class="position-relative">
      <div class="toast-container top-0 end-0 p-3">
        <!-- Then put toasts within -->
      </div>
    </div>

    <?php include 'sidebar.php' ?>


      <div class="my-round" id="body">
        <div class="login-box">
          <h2>Registration</h2>
          <form id="sign_form">
            <div class="radio-button-container role">
              <div class="radio-button">
                <input
                  type="radio"
                  class="radio-button__input"
                  id="radio1"
                  name="role"
                  value="regular_user"
                />
                <label class="radio-button__label" for="radio1">
                  <span class="radio-button__custom"></span>
                  Student
                </label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  class="radio-button__input"
                  id="radio2"
                  name="role"
                  value="employer"
                />
                <label class="radio-button__label" for="radio2">
                  <span class="radio-button__custom"></span>
                  Employer
                </label>
              </div>
              <div class="radio-button">
                <input
                  type="radio"
                  class="radio-button__input"
                  id="radio3"
                  name="role"
                  value="university"
                />
                <label class="radio-button__label" for="radio3">
                  <span class="radio-button__custom"></span>
                  University
                </label>
              </div>
              <br />
              <small class="err"></small>
            </div>

            <div class="user-box username">
              <input type="text" name="username" required="" />
              <label>Username </label>
              <small class="err"> </small>
            </div>

            <div class="user-box email">
              <input type="text" name="email" required="" />
              <label>Email</label>
              <small class="err"> </small>
            </div>

            <div class="user-box password">
              <input type="password" name="password" required="" />
              <label>Password</label>
              <small class="err"> </small>
            </div>

            <div class="user-box confirm_password">
              <input type="password" name="confirm_password" required="" />
              <label>Confirm Password</label>
              <small class="err"> </small>
            </div>

            <p style="color: white">
              Already have an account?
              <a class="link" href="/login.html">Login now!</a>
            </p>
            <a href="#" class="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign-up
            </a>
          </form>
        </div>
      </div>
    </div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
      crossorigin="anonymous"
    ></script>
    <script src="../script/jquery-3.7.1.min.js"></script>
    <script src="../script/script.js"></script>
    <script>
      $(document).ready(function () {
       

        $(".button").click(function (e) {
          e.preventDefault();
          var data = $("#sign_form").serializeArray(); //get all field
          const obj = toObj(data); //conver array to obj
          $("#sign_form small").text(""); //clear all error
          if (obj.password !== obj.confirm_password) {
            $(".confirm_password small").text("Password doesn't match");
          } else {
            $.ajax({
              type: "POST",
              url: "http://127.0.0.1:8000/api/signup",
              data: data,
              // dataType: "application/json",
              success: function (response) {
                console.log(response);
                showToast("Sign Up Succesfull. Login Now", "info");
              },
              error: function (e) {
                const data = e.responseJSON;
                if ($.isPlainObject(data)) {
                  $.each(data, function (field, errors) {
                    $(`.${field} small`).text(errors.join(", "));
                  });
                }
              },
            });
          }
        });
      });
    </script>
  </body>
</html>
