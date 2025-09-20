function showRegister(){ document.getElementById("loginForm").style.display="none"; document.getElementById("registerForm").style.display="block"; }
function showLogin(){ document.getElementById("registerForm").style.display="none"; document.getElementById("loginForm").style.display="block"; }

function register(){
  const user=document.getElementById("regUser").value;
  const pass=document.getElementById("regPass").value;
  if(!user||!pass){ alert("Fill all fields"); return; }
  let users=JSON.parse(localStorage.getItem("users")||"[]");
  if(users.find(u=>u.user===user)){ alert("Username already exists"); return; }
  users.push({user,pass}); localStorage.setItem("users",JSON.stringify(users));
  alert("Registered! Now login"); showLogin();
}

function login(){
  const user=document.getElementById("loginUser").value;
  const pass=document.getElementById("loginPass").value;
  let users=JSON.parse(localStorage.getItem("users")||"[]");
  let found=users.find(u=>u.user===user && u.pass===pass);
  if(found){ localStorage.setItem("currentUser",user); location.href="chat.html"; }
  else alert("Invalid login");
}