// Simple localStorage based auth

function register() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value.trim();
  const msg = document.getElementById("msg");

  if (!username || !password) {
    msg.innerText = "⚠️ Please enter username & password!";
    return;
  }

  // Check if user exists
  if (localStorage.getItem("user_" + username)) {
    msg.innerText = "❌ Username already taken!";
    return;
  }

  // Save user
  localStorage.setItem("user_" + username, JSON.stringify({ username, password }));
  msg.innerText = "✅ Registered successfully! Now login.";
}

function login() {
  const username = document.getElementById("logUsername").value.trim();
  const password = document.getElementById("logPassword").value.trim();
  const msg = document.getElementById("msg");

  if (!username || !password) {
    msg.innerText = "⚠️ Enter username & password!";
    return;
  }

  const stored = localStorage.getItem("user_" + username);
  if (!stored) {
    msg.innerText = "❌ User not found!";
    return;
  }

  const user = JSON.parse(stored);
  if (user.password === password) {
    msg.innerText = "✅ Login successful! Redirecting...";
    localStorage.setItem("activeUser", username);
    setTimeout(() => {
      window.location.href = "chat.html";
    }, 1000);
  } else {
    msg.innerText = "❌ Wrong password!";
  }
}