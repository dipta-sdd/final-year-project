<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SkilNexus</title>
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
    <link rel="stylesheet" href="../style/profile.css" />
  </head>
  <body>
    <div aria-live="polite" aria-atomic="true" class="position-relative">
      <div class="toast-container top-0 end-0 p-3">
        <!-- Then put toasts within -->
      </div>
    </div>
    <?php include 'sidebar.php' ?>
  
      <div class="my-round" id="body"  data-bs-theme="light">
        <nav aria-label="breadcrumb" class="mybg-t breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="/">Home</a></li>
            <li class="breadcrumb-item" aria-current="page">Profile</li>
          </ol>
        </nav>
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <div class="row my-color mybg my-row">
            <div class="col d-flex">
              <div class="profile-pic">
                <!-- if no profile picture then it will be shown -->
                <i class="fa-regular fa-user fa-2xl"></i>
              </div>

              <div class="ps-3 profile-details">
                <div class="row">
                  <b class="name"></b>
                  <i class="username"></i>
                </div>
              </div>
              <div class="ms-auto">
                <button
                  type="button"
                  class="btn btn-outline-danger ms-auto me-0"
                >
                  Download CV
                </button>
              </div>
            </div>

            <div class=""></div>
          </div>

          <div class="row my-color mybg my-row">
            <div class="d-flex">
              <b class="flex-grow-1">Personal details</b>
              <div>
                <button type="button" class="btn btn-outline-danger btn-edit-p">
                  <i class="fa-solid fa-pen pe-1"> </i>Edit
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger btn-save-p d-none"
                  id="btn-save"
                >
                  Save
                </button>
              </div>
            </div>
            <div class="col-11"></div>
            <div class="col-1"></div>
            <hr class="profile-hr" />
            <div class="col-12">
              <div class="row personal-details"></div>
            </div>
          </div>
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
          <!-- main body-->
        
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
    <script src="../script/profile.js"></script>
    <script>
      $(document).ready(function () {
        on_page_load();
      });
    </script>
  </body>
</html>
 