let activeUser = localStorage.getItem("activeUser");
if (!activeUser) {
  window.location.href = "index.html"; // Force login
}

const userListEl = document.getElementById("userList");
const chatHeader = document.getElementById("chatHeader");
const messagesEl = document.getElementById("messages");
let currentChatUser = null;

// Load all users
function loadUsers() {
  userListEl.innerHTML = "";
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (key.startsWith("user_")) {
      let user = JSON.parse(localStorage.getItem(key));
      if (user.username !== activeUser) {
        let li = document.createElement("li");
        li.innerText = user.username;
        li.onclick = () => openChat(user.username);
        userListEl.appendChild(li);
      }
    }
  }
}

function openChat(username) {
  currentChatUser = username;
  chatHeader.innerText = `Chat with ${username}`;
  loadMessages();
}

function loadMessages() {
  messagesEl.innerHTML = "";
  if (!currentChatUser) return;

  let chatKey = `chat_${activeUser}_${currentChatUser}`;
  let reverseKey = `chat_${currentChatUser}_${activeUser}`;

  let msgs = JSON.parse(localStorage.getItem(chatKey)) || [];
  let msgs2 = JSON.parse(localStorage.getItem(reverseKey)) || [];

  let allMsgs = [...msgs, ...msgs2].sort((a, b) => a.time - b.time);

  allMsgs.forEach(m => {
    let div = document.createElement("div");
    div.className = m.from === activeUser ? "msg right" : "msg left";
    div.innerText = `${m.from}: ${m.text}`;
    messagesEl.appendChild(div);
  });

  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function sendMessage() {
  if (!currentChatUser) return;
  let input = document.getElementById("msgInput");
  let text = input.value.trim();
  if (!text) return;

  let chatKey = `chat_${activeUser}_${currentChatUser}`;
  let msgs = JSON.parse(localStorage.getItem(chatKey)) || [];

  msgs.push({ from: activeUser, to: currentChatUser, text, time: Date.now() });
  localStorage.setItem(chatKey, JSON.stringify(msgs));

  input.value = "";
  loadMessages();
}

loadUsers();