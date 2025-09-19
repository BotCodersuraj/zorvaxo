function checkApi() {
  fetch("/api/main/ai-chatgpt?text=hello&key=ZORVAXOxAI")
    .then(res => res.json())
    .then(data => {
      document.getElementById("apiResponse").innerText = JSON.stringify(data);
    })
    .catch(err => {
      document.getElementById("apiResponse").innerText = "Error: " + err;
    });
}