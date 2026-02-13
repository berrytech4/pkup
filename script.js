function sendPickup() {

  const parent = document.getElementById("parent").value;
  const child = document.getElementById("child").value;
  const className = document.getElementById("class").value;
  const teacher = document.getElementById("teacher").value;

  const url = "https://script.google.com/macros/s/AKfycbw3UYTFTOF97b0AjRoxGoI06lhryWGrMMGxK8K-FCy7PyMdlxYjojsKZM8zFsKVxef5/exec";

  const formData = new FormData();
  formData.append("parent_name", parent);
  formData.append("child_name", child);
  formData.append("class", className);
  formData.append("teacher", teacher);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors"
  });

  document.getElementById("message").innerText = "Notification Sent!";
}
