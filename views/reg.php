<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SkilNexus | Signup</title>
    <link
      href="../style/bootstrap.min.css"
      rel="stylesheet"
       
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
        <nav aria-label="breadcrumb" class="mybg-t breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Register</li>
          </ol>
        </nav>
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
              <a class="link" href="/login">Login now!</a>
            </p>
            <a href="#" class="button" id="btn_reg">
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
    </div>

    <script src="../script/bootstrap.bundle.min.js"></script>

    <script src="../script/jquery-3.7.1.min.js"></script>
    <script src="../script/script.js"></script>
    <script src="../script/auth.js"></script>
    <script>
      $(document).ready(function () {
        on_page_load();
      });
    </script>
  </body>
</html>
