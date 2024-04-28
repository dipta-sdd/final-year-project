const apiLink = "http://127.0.0.1:8000";
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
  // change theme to light default
  // $("body").addClass("theme-light");
  let current_theme = localStorage.getItem("theme");
  if (current_theme == "dark") {
    goDark();
    $("#theme").prop("checked", true);
  } else {
    goLight();
  }
  $.ajax({
    type: "GET",
    url: apiLink + "/api/current_user",
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  })
    .then(function (user) {
      localStorage.setItem("user", JSON.stringify(user));
      $(".logged-in").removeClass("d-none");
      if (user.profile_picture) {
        $("#nav_con .profile-con .icon").addClass("d-none");
        $("#nav_con .profile-con").append(`
          <img src="${apiLink + user.profile_picture}" alt="">
        `);
      }

      hide_loader();
    })
    .catch(function (error) {
      console.log(error);
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
$(".logout").click(function (e) {
  e.preventDefault();
  deleteCookie("token");
  localStorage.removeItem("user");
  location.reload();
});

// hide loader
function hide_loader() {
  $(".loader-container").addClass("d-none");
}

//profile pic click
$(".profile-con").click(function (e) {
  e.preventDefault();
  $(".profile-con .dropdown-menu").toggleClass("show");
});
// drop down item click
$(".dropdown-item").click(function (e) {
  e.preventDefault();
  let link = $(this).attr("href");
  location.replace(link);
});

// change theme to dark
function goDark() {
  $("#body").attr("data-bs-theme", "dark");
  $("body").css("--bg", "#293037");
  $("body").css("--bg2", "#ffffff0e");
  $("body").css("--color", "#ffffff");
  $("body").addClass("theme-dark");
  $("body").removeClass("theme-light");
  $(".navbar-btn").addClass("btn-outline-light");
  $(".navbar-btn").removeClass("btn-outline-dark");
  $("nav.navbar").removeClass("navbar-light");
  $("nav.navbar").addClass("navbar-dark");
  $("nav.navbar").attr("data-bs-theme", "dark");
}
// change theme to light
function goLight() {
  $("#body").attr("data-bs-theme", "light");
  $("body").css("--bg", "#ffffff");
  $("body").css("--bg2", "#ffffff69");
  $("body").css("--color", "#000000");
  $("body").addClass("theme-light");
  $("body").removeClass("theme-dark");
  $(".navbar-btn").addClass("btn-outline-dark");
  $(".navbar-btn").removeClass("btn-outline-light");
  $("nav.navbar").removeClass("navbar-dark");
  $("nav.navbar").addClass("navbar-light");
  $("nav.navbar").attr("data-bs-theme", "light");
}

// change the on click
$("#theme").change(function (e) {
  // e.preventDefault();
  if ($(this).prop("checked")) {
    goDark();
    localStorage.setItem("theme", "dark");
  } else {
    goLight();
    localStorage.setItem("theme", "light");
  }
  // console.log($(this).prop("checked"));
});

// mobile view sidebar button click
$(".sidebar_btn i").click(function (e) {
  e.preventDefault();
  $("#sidebar").toggleClass("sidebar_open");
  $(".sidebar_btn i").toggleClass("fa-rotate-90");
  $(".sidebar_btn i").toggleClass("fa-rotate-270");
});
