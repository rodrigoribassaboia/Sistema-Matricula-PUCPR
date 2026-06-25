document.getElementById('form').addEventListener('submit',e=>{
e.preventDefault();
document.getElementById('msg').classList.remove('d-none');
e.target.reset();
window.scrollTo({top:document.body.scrollHeight,behavior:'smooth'});
});