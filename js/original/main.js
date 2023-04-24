

let inputElement = document.getElementById("myInput");

if (inputElement) {
  $(document).ready(function () {
    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
      });
    });
  });
} else {
  console.log("Input element not found");
}

function changeLanguage(language) {
  if (language === "en") {
    // set an item in localStorage
    localStorage.setItem("language", "en");
    window.location.href = "index.html";
  } else if (language === "ar") {
    localStorage.setItem("language", "ar");
    window.location.href = "index-ar.html";
  }
}
