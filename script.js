function sendPickup() {

  const parent = document.getElementById("parent").value;
  const child = document.getElementById("child").value;
  const className = document.getElementById("class").value;
  const teacher = document.getElementById("teacher").value;

  const formData = new URLSearchParams();
  formData.append("parent_name", parent);
  formData.append("child_name", child);
  formData.append("class", className);
  formData.append("teacher", teacher);

  fetch("https://script.google.com/macros/s/AKfycbwfSLe8k6SSOStmvrlY7zD_pDkmWQYbAqrQifWcA-UCDPS6ueXAj5VdeHeaK2nR-gHXKA/exec", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    document.getElementById("message").innerText = "Notification Sent!";
  })
  .catch(error => {
    document.getElementById("message").innerText = "Error sending request";
    console.log(error);
  });

}
