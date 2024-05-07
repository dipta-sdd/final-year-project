let levels = "";
levels = reload(levels);
function reload(levels) {
  $.ajax({
    type: "GET",
    url: apiLink + "/api/edu",
    async: false,
    success: function (res) {
      // console.log(res);
      if (res.length == 0) {
        $(".level-con").html(`<div class="alert alert-danger" role="alert">
        No level found.
        </div>`);
        $(".level-con").attr("isEmpty", "true");
      } else {
        $(".level-con").html(``);
        showLevel(res);
      }
      levels = res;
    },
  });
  return levels;
}

function showLevel(levels) {
  $.map(levels, function (level, indexOrKey) {
    $(`#addEduModel .form-control.level`).append(`
        <option value="${level.id}">${level.name}</option>
    `);
    $.map(level.degrees, function (degree, indexOrKey) {
      $(`#addEduModel .form-control.degree`).append(`
            <option class="level${level.id} d-none" value="${degree.id}">${degree.name}</option>
        `);
      $.map(degree.groups, function (group, indexOrKey) {
        $(`#addEduModel .form-control.group`).append(`
                <option class="degree${degree.id} d-none" value="${group.id}">${group.name}</option>
            `);
      });
    });
  });
  //   $(`#addEduModel .form-control.degree`).removeAttr("disabled");
}

// on selecting education level
$("#addEduModel .form-control.level").change(function (e) {
  // e.preventDefault();
  val = $(this).val();
  console.log(val);
  $(`#addEduModel .degree option`).addClass("d-none");
  $(`#addEduModel .degree option.level${val}`).removeClass("d-none");
  $(`#addEduModel .degree option.default`).removeClass("d-none");
  //   $("#addEduModel .form-control.degree").removeAttr("disabled");
  $("#addEduModel .form-control.degree").val("");
  $(`#addEduModel .group option`).addClass("d-none");
  $(`#addEduModel .group option.default`).removeClass("d-none");
  $("#addEduModel .form-control.group").val("");
  $("#addEduModel .form-control.result_type").val("");
});
$("#addEduModel .form-control.degree").change(function (e) {
  // e.preventDefault();
  val = $(this).val();
  console.log(val);
  $(`#addEduModel .group option`).addClass("d-none");
  $(`#addEduModel .group option.degree${val}`).removeClass("d-none");
  $(`#addEduModel .group option.default`).removeClass("d-none");
  //   $("#addEduModel .form-control.group").removeAttr("disabled");
  $("#addEduModel .form-control.group").val("");
  $("#addEduModel .form-control.result_type").val("");
});

$("#addEduModel .form-control.group").change(function (e) {
  // e.preventDefault();
});
