function checkApi() {
  fetch("/api/hello")
    .then(res => res.json())
    .then(data => {
      document.getElementById("apiResponse").innerText = JSON.stringify(data);
    })
    .catch(err => {
      document.getElementById("apiResponse").innerText = "Error: " + err;
    });
}