let user = get_user();
// if (!user) {
//   location.replace("/login");
// }
console.log(user);
$(".profile-pic .fa-user").addClass("d-none");
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

// profile pic chosing
const imageInput = document.getElementById("imageUpload");
const imagePreview = document.getElementById("imagePreview");
let cropper;

imageInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      imagePreview.src = this.result;
      imagePreview.style.display = "block";

      // Create Cropper Container dynamically
      const cropperContainer = document.createElement("div");
      cropperContainer.style.maxWidth = imagePreview.width + "px";
      imagePreview.parentNode.insertBefore(
        cropperContainer,
        imagePreview.nextSibling
      );

      // Initialize Cropper.js
      const image = imagePreview;
      cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1,
        autoCropArea: 0.8,
      });
    });

    reader.readAsDataURL(file);
  }
});

// Example - Getting cropped image data for further actions
function getCroppedImage() {
  if (cropper) {
    const croppedCanvas = cropper.getCroppedCanvas();
    const croppedImageFile = dataURItoBlob(
      croppedCanvas.toDataURL("image/jpeg")
    );
    console.log(croppedImageFile);
    const formData = new FormData();
    formData.append(
      "profile_picture",
      croppedImageFile,
      user.username + ".jpg"
    );
    $.ajax({
      type: "POST",
      url: apiLink + "/api/edit_profile",
      data: formData,
      // data: JSON.stringify({ profile_picture: croppedImageFile }),
      processData: false,
      contentType: false,
      headers: {
        Authorization: "Bearer " + getCookie("token"),
      },
      success: function (res) {
        console.log(res);
      },
      // enctype: "multipart/form-data",
    });
  }
}
$(saveCropedPic).click(function (e) {
  e.preventDefault();
  getCroppedImage();
});
// Helper function to convert data URI to a Blob (which can be treated as a file)
function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: mimeString });
}
