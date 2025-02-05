function beforesubmit() {
  let inputdate = document.querySelector(".inputdate");
  let outputdate = document.querySelector(".outputdate");
  console.log(inputdate.value);
  console.log(typeof inputdate.value); //convert string to local date
  let formatedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
  outputdate.value = formatedDate;
  console.log(outputdate.value);
}
