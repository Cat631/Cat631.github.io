// Data.js - simple client-side logic for Form.html (login/register simulation)
document.addEventListener('DOMContentLoaded', function(){
  const loginSection = document.getElementById('loginSection');
  const registerSection = document.getElementById('registerSection');
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');

  function showLogin(){ loginSection.classList.remove('hidden'); registerSection.classList.add('hidden'); }
  function showRegister(){ registerSection.classList.remove('hidden'); loginSection.classList.add('hidden'); }

  navLogin.addEventListener('click', showLogin);
  navRegister.addEventListener('click', showRegister);

  // Simple in-memory user store using localStorage (for demo only)
  const USERS_KEY = 'demo_users_v1';
  function loadUsers(){ try{ return JSON.parse(localStorage.getItem(USERS_KEY)||'[]'); }catch(e){return []} }
  function saveUsers(users){ localStorage.setItem(USERS_KEY, JSON.stringify(users)); }

  // Register handler
  const registerForm = document.getElementById('registerForm');
  registerForm.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const country = document.getElementById('regCountry').value;
    const agree = document.getElementById('regAgree').checked;
    if(!agree){ alert('请先同意用户隐私协议'); return; }
    if(!username || !email || !password || !country){ alert('请填写所有必填项'); return; }
    const users = loadUsers();
    if(users.find(u=>u.email===email)){ alert('该邮箱已被注册'); return; }
    users.push({username,email,password,country,created:Date.now()});
    saveUsers(users);
    alert('注册成功（仅本地测试）');
    registerForm.reset();
    showLogin();
  });

  // Login handler
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const users = loadUsers();
    const match = users.find(u=> (u.email===email || u.username===username) && u.password===password );
    if(match){
      alert('登录成功：' + match.username + '（仅本地测试）');
      loginForm.reset();
    }else{
      alert('登录失败：用户名/邮箱或密码不正确');
    }
  });

  // initial view
  showLogin();
});
