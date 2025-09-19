const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Replace this URL with your actual AI chat API endpoint
const API_URL = "https://zorvaxo.vercel.app/api/main/zffinfo"; 

sendBtn.addEventListener("click", async () => {
    const message = userInput.value.trim();
    if(!message) return;

    addMessage("You", message);
    userInput.value = "";

    // Send message to API
    try {
        const response = await fetch(`${API_URL}?uid=8080519000&key=DANGERxINFO&message=${encodeURIComponent(message)}`);
        const data = await response.json();
        
        // Assuming your API returns response in data.reply
        const reply = data.reply || "No response from API";
        addMessage("AI", reply);
    } catch (err) {
        addMessage("AI", "Error contacting API!");
        console.error(err);
    }
});

function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
}