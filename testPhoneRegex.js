document
  .getElementById("testPhoneRegexForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    //(1235) -123-4567
    const phoneRgx = /^\(\d{4}\)\s-\d{3}-\d{4}$/gi;
    const passwordRgx =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneInput = document.querySelector("#phone");
    const display = document.getElementById("displayPhone");
    const error = document.querySelector("#error");
    error.style.display = "none";
    const phoneVal = phoneInput.value;
    if (phoneRgx.test(phoneVal)) {
      display.insertAdjacentText(
        "afterbegin",
        `your phone ${phoneVal} is valid`,
      );
      phoneInput.value = "";
    } else {
      error.style.display = "block";
    }
  });
