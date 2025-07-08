
// Função para obter a saudação baseada no horário
function getTimeGreeting() {
  const now = new Date();
  const hour = now.getHours();
  
  if (hour >= 5 && hour < 12) {
    return "Bom dia";
  } else if (hour >= 12 && hour < 18) {
    return "Boa tarde";
  } else {
    return "Boa noite";
  }
}

// Função para atualizar a saudação
function updateGreeting() {
  const greetingText = document.getElementById('greeting-text');
  if (greetingText) {
    greetingText.textContent = getTimeGreeting();
  }
}

onload = () => {
  // Atualizar a saudação baseada no horário
  updateGreeting();
  
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
