// covert form data to js object
function toObj(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]["name"]] = arr[i]["value"];
  }
  return obj;
}

function showToast(msg, bgc) {
  $(".toast-container").append(`<div
          class="toast align-items-center text-bg-${bgc} border-0"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="d-flex">
            <div class="toast-body">${msg}</div>
            <button
              type="button"
              class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast"
              aria-label="Close"
            ></button>
          </div>
        </div>`);
  var newToast = $(".toast:last");
  newToast.toast("show");
  setTimeout(function () {
    newToast.toast("hide");
    newToast.remove(); // Remove the toast from the DOM after hiding
  }, 3000);
}

// side bar toggle button
$(btn_nav_toggle).click(function (e) {
  e.preventDefault();
  console.log("clicked");
  $(btn_nav_toggle).toggleClass("btn_nav_toggle_active");
  $(left_side).toggleClass("sidebar-active-con");
  $(nav_con).toggleClass("sidebar-active-nav");
  $(sidebar).toggleClass("sidebar-active");
});

// Function to create a cookie
function createCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Function to read a cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Function to delete a cookie
function deleteCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

// get current user from cookie and save it to local storage
function on_page_load() {
  $.ajax({
    type: "GET",
    url: "./api/current_user",
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  })
    .then(function (response) {
      localStorage.setItem("user", JSON.stringify(response));
      $(".logged-in").removeClass("d-none");

      hide_loader();
    })
    .catch(function (error) {
      localStorage.removeItem("user");
      $(".logged-out").removeClass("d-none");
      hide_loader();
    });
}

function get_user() {
  return JSON.parse(localStorage.getItem("user"));
  // return localStorage.getItem("user");
}

// on click logout
$(logout).click(function (e) {
  e.preventDefault();
  deleteCookie("token");
  localStorage.removeItem("user");
  setTimeout(location.reload(), 2000);
});

// hide loader
function hide_loader() {
  $(".loader-container").addClass("d-none");
}
