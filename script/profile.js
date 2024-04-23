let user = get_user();
// if (!user) {
//   location.replace("/login");
// }
console.log(user);
$(".profile-pic i").addClass("d-none");
$(".profile-pic").append(
  `<img src="${apiLink + user.profile_picture}" alt=""/>`
);
$(".name").text(user.first_name + " " + user.last_name);
$(".username").text(user.username);
showPersonalDetails(user);
// click on save on personal details
$(".btn-edit-p").click(function (e) {
  e.preventDefault();
  // alert("gfh");
  $(".btn-edit-p").toggleClass("d-none");
  $(".btn-save-p").toggleClass("d-none");
  $(".personal-details").html(`
  <div class="col-6">
    <div class="input-group mb-3">
      <span class="input-group-text">First Name</span>
      <input type="text" value="${
        user.first_name
      }" class="form-control f-name"  />
    </div>
  </div>
  <div class="col-6">
    <div class="input-group mb-3">
      <span class="input-group-text">Last Name</span>
      <input type="text" value="${
        user.last_name
      }" class="form-control l-name"  />
    </div>
  </div>
  <div class="col-6">
    <div class="input-group mb-3">
      <span class="input-group-text">Username </span>
      <input type="text" value="${
        user.username
      }" class="form-control u-name" disabled />
    </div>
  </div>
  <div class="col-6">
    <div class="input-group mb-3">
      <span class="input-group-text">Mobile </span>
      <input type="number" value="${
        user.mobile ? user.mobile : ""
      }" class="form-control mobile" />
    </div>
  </div>
  <div class="col-6">
    <div class="input-group mb-3">
      <span class="input-group-text">Email </span>
      <input type="email" value="${
        user.email
      }" class="form-control email" disabled/>
    </div>
  </div>
  <div class="col-6">
    <div class="input-group mb-3">
      <span class="input-group-text">Country</span>
      <input type="text" value="${
        user.country ? user.country : ""
      }" class="form-control country" />
    </div>
  </div>
  <div class="col-12">
    <div class="input-group mb-3">
      <span class="input-group-text">Bio</span>
      <textarea type="text"  class="form-control bio" >${
        user.bio ? user.bio : ""
      }</textarea>
    </div>
  </div>
`);
});

$(".btn-save-p").on("click", function (e) {
  e.preventDefault();

  let data = {
    id: user.id,
    mobile: $(".mobile").val(),
    email: $(".email").val(),
    first_name: $(".f-name").val(),
    last_name: $(".l-name").val(),
    bio: $(".bio").val(),
    country: $(".country").val(),
  };
  $.ajax({
    type: "POST",
    url: apiLink + "/api/edit_profile",
    async: "false",
    data: data,
    headers: {
      Authorization: "Bearer " + getCookie("token"),
    },
  })
    .then(function (res) {
      console.log(res);
      showToast("Details Successfully updated.", "primary");
      showPersonalDetails(res);
    })
    .catch(function (error) {
      console.log(error);
      showToast("Details update failed.", "danger");
    });
});

// showing personal detail of the user
function showPersonalDetails(user) {
  $(".personal-details").html(`
    
    <div class="col-6">
      <div class="input-group mb-3">
        <span class="input-group-text">Name</span>
        <input type="text" value="${
          user.first_name + " " + user.last_name
        }" class="form-control per-name" disabled />
      </div>
    </div>
    <div class="col-6"></div>
    <div class="col-6">
      <div class="input-group mb-3">
        <span class="input-group-text">Username </span>
        <input type="text" value="${
          user.username
        }" class="form-control per-name" disabled />
      </div>
    </div>
    <div class="col-6">
      <div class="input-group mb-3">
        <span class="input-group-text">Mobile </span>
        <input type="text" value="${
          user.mobile ? user.mobile : ""
        }" class="form-control per-name" disabled />
      </div>
    </div>
    <div class="col-6">
      <div class="input-group mb-3">
        <span class="input-group-text">Email </span>
        <input type="email" value="${
          user.email
        }" class="form-control per-name" disabled />
      </div>
    </div>
    <div class="col-6">
      <div class="input-group mb-3">
        <span class="input-group-text">Country</span>
        <input type="text" value="${
          user.country ? user.country : ""
        }" class="form-control per-name" disabled />
      </div>
    </div>
    <div class="col-12">
      <div class="input-group mb-3">
        <span class="input-group-text">Bio</span>
        <textarea type="text"  class="form-control per-name" disabled >${
          user.bio ? user.bio : ""
        }</textarea>
      </div>
    </div>
  `);
}
