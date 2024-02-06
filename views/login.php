<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
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
          <h2>Login</h2>
          <form id="login_form">
            <div class="user-box username">
              <input
                type="text"
                name="username"
                autocomplete="off"
                required=""
              />
              <label>Username</label>
              <small class="err"> </small>
            </div>
            <div class="user-box password">
              <input
                type="password"
                name="password"
                autocomplete="off"
                required=""
              />
              <label>Password</label>
              <small class="err"> </small>
            </div>
            <div class="message">
              <small class="text-danger"></small>
            </div>
            <a href="#" class="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Login
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
        
        // on click login
        $(".button").click(function (e) {
          e.preventDefault();
          var data = $("#login_form").serializeArray(); //get all field
          const obj = toObj(data); //conver array to obj
          $("#login_form small").text(""); //clear all error

          $.ajax({
            type: "POST",
            url: "http://127.0.0.1:8000/api/login",
            data: data,
            // dataType: "application/json",
            success: function (response) {
              console.log(response);
              showToast(response.message, "info");
              localStorage.setItem("token", response.access_token);
              location.replace("/");
            },
            error: function (e) {
              const data = e.responseJSON;
              if ($.isPlainObject(data) && !data.message) {
                $.each(data, function (field, errors) {
                  $(`.${field} small`).text(errors.join(", "));
                });
              } else {
                $(`.message small`).text(data.message);
              }
            },
          });
        });
      });
    </script>
  </body>
</html>
