const themeBtn = document.getElementById('themeToggle');
if(themeBtn){
  themeBtn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('dark') ? '🌙' : '☀️';
  });
}