let capthachecked = false;
function beforesubmit(event) {
  if (capthachecked) {
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log(inputdate.value);
    console.log(typeof inputdate.value); //convert string to local date
    let formatedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value = formatedDate;
    console.log(outputdate.value);
  } else {
    alert("Please check the reCAPTHACA box to submit the lead");
    event.preventDefault();
  }
}
function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);
function captachaSuccess() {
  capthachecked = true;
}
