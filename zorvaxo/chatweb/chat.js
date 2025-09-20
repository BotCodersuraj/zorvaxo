let currentUser=localStorage.getItem("currentUser");
if(!currentUser) location.href="index.html";

let chatWith=null;

function loadUsers(){
  const users=JSON.parse(localStorage.getItem("users")||"[]");
  const list=document.getElementById("userList");
  list.innerHTML="";
  users.forEach(u=>{
    if(u.user!==currentUser){
      const li=document.createElement("li");
      li.textContent=u.user;
      li.onclick=()=>openChat(u.user);
      list.appendChild(li);
    }
  });
}

function openChat(user){
  chatWith=user;
  document.getElementById("chatHeader").textContent="Chat with "+user;
  loadMessages();
}

function loadMessages(){
  const allChats=JSON.parse(localStorage.getItem("messages")||"[]");
  const msgs=allChats.filter(m=>(m.from===currentUser&&m.to===chatWith)||(m.from===chatWith&&m.to===currentUser));
  const box=document.getElementById("chatMessages");
  box.innerHTML="";
  msgs.forEach(m=>{
    const div=document.createElement("div");
    div.className="message "+(m.from===currentUser?"from-me":"from-them");
    div.textContent=m.text;
    box.appendChild(div);
  });
  box.scrollTop=box.scrollHeight;
}

function sendMessage(){
  const text=document.getElementById("chatText").value.trim();
  if(!text||!chatWith) return;
  let allChats=JSON.parse(localStorage.getItem("messages")||"[]");
  allChats.push({from:currentUser,to:chatWith,text});
  localStorage.setItem("messages",JSON.stringify(allChats));
  document.getElementById("chatText").value="";
  loadMessages();
}

function logout(){ localStorage.removeItem("currentUser"); location.href="index.html"; }

loadUsers();