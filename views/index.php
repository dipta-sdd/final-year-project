<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>SkilNexus</title>
    <link href="../style/bootstrap.min.css" rel="stylesheet"/>
    <!-- <link href="../style" rel="stylesheet"/> -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="../style/style.css" />
    <link rel="stylesheet" href="../style/breadcrumb.css" />
    <link rel="stylesheet" href="../style/home.css" />
  </head>
  <body>
    <div aria-live="polite" aria-atomic="true" class="position-relative">
      <div class="toast-container top-0 end-0 p-3">
        <!-- Then put toasts within -->
      </div>
    </div>

    <?php include 'sidebar.php' ?>
  
      <div class="my-round" id="body" data-bs-theme="light">
          <div class="row my-color mybg my-row p-0">
            <div class="col-12 part1" style="background-color: #74b9ff">
              <div class="row">
                <div class="col-lg-6 text-light">
                  <div class="text-right">
                    <h1>Unlock Your Potential <br /></h1>
                    <h1>Chart Your Path</h1>
                    <b id="demo">
                      Explore career, gain practical skills <br />
                      achieve your goals.</b
                    >
                  </div>
                </div>
                <div class="col-lg-6 img">
                  <img
                    src="../images/1361472_193.svg"
                    style="width: 100%"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="col-12 pos-rel p-0" style="background-color: #0004ff">
              <img
                src="../images/wavesOpacity1.svg"
                style="width: 100%"
                alt=""
              />
            </div>
            <div class="col-12 part2" style="background-color: #0004ff">
              <div class="row">
                <div class="col-lg-6 img">
                  <img
                    src="../images/banner_student.svg"
                    style="width: 100%"
                    alt=""
                  />
                </div>
                <div class="col-lg-6 text-light">
                  <div class="text-right">
                    <h1>Unlock Your Potential <br /></h1>
                    <h1>Chart Your Path</h1>
                    <b id="demo">
                      Explore career, gain practical skills <br />
                      achieve your goals.</b
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>

    <script src="../script/bootstrap.bundle.min.js"></script>

    <script src="../script/jquery-3.7.1.min.js"></script>
    <script src="../script/script.js"></script>
    <script>
      $(document).ready(function () {
        hide_sidebar();
        on_page_load();
        
      });
    </script>
  </body>
</html>
