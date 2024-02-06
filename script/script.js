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
