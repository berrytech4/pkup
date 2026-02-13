function sendPickup() {
  const data = {
    parent_name: document.getElementById("parent").value,
    child_name: document.getElementById("child").value,
    class: document.getElementById("class").value,
    teacher: document.getElementById("teacher").value,
  };

  fetch(
    "https://script.google.com/macros/s/AKfycbwfSLe8k6SSOStmvrlY7zD_pDkmWQYbAqrQifWcA-UCDPS6ueXAj5VdeHeaK2nR-gHXKA/exec",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    },
  )
    .then((response) => response.json())
    .then((result) => {
      document.getElementById("message").innerText = "Notification Sent!";
    })
    .catch((error) => {
      document.getElementById("message").innerText = "Error sending request";
      console.log(error);
    });
}
