document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");
  const username = document.getElementById("userName");
  const password = document.getElementById("password");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (username.value.trim() !== "" && password.value.trim() !== "") {
      window.location.href = "inicio.html"; 
    } else {
      alert("Por favor completa todos los campos.");
    }
  });
});
document.getElementById("registerBtn").addEventListener("click", function (e) {
  e.preventDefault();
  
  window.location.href = "registro.html";
});
