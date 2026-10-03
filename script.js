const modal=document.getElementById('loginModal');
const title=document.getElementById('loginTitle');
const subtitle=document.getElementById('loginSubtitle');
function openLogin(role){
  title.textContent=role+' Login';
  subtitle.textContent='Sign in to your CareerNexus '+role.toLowerCase()+' workspace.';
  modal.classList.remove('hidden');
  document.getElementById('email').focus();
}
function closeLogin(){modal.classList.add('hidden')}
modal.addEventListener('click',e=>{if(e.target===modal)closeLogin()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLogin()});
function demoLogin(e){
  e.preventDefault();
  closeLogin();
  const toast=document.getElementById('toast');
  toast.textContent='Demo login submitted — backend authentication will be connected in the next phase.';
  toast.classList.add('show');
  setTimeout(()=>toast.classList.remove('show'),3500);
}
