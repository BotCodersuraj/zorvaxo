const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Tera actual AI chat API
const API_URL = "https://zorvaxo.vercel.app/api/main/ai-chatgpt";

sendBtn.addEventListener("click", async () => {
    const message = userInput.value.trim();
    if (!message) return;

    addMessage("You", message);
    userInput.value = "";

    try {
        // Send message to your AI API
        const response = await fetch(`${API_URL}?text=${encodeURIComponent(message)}&key=ZORVAXOxAI`);
        const data = await response.json();

        const reply = data.answer || "No response from API";
        addMessage("AI", reply.replace(/\n/g, "<br>")); // newline formatting
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