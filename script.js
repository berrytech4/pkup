function sendPickup() {

  const parent = document.getElementById("parent").value;
  const child = document.getElementById("child").value;
  const className = document.getElementById("class").value;
  const teacher = document.getElementById("teacher").value;

  const url = "https://script.google.com/macros/s/AKfycbxKF631nBK5pfjUkRpRAqpsapYkyUdZHiPLKVdnu1qdm6nOULI0ffeBRxsCqFSygtAgwA/exec";

  const formData = new URLSearchParams();
  formData.append("parent_name", parent);
  formData.append("child_name", child);
  formData.append("class", className);
  formData.append("teacher", teacher);

  fetch(url, {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById("message").innerText = data;
  })
  .catch(error => {
    document.getElementById("message").innerText = "Error sending request";
    console.log(error);
  });
}
