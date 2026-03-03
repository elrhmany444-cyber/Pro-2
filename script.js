function talk(){
  const messages = [
    "Welcome 👋 Explore the projects.",
    "Security is not a product, it's a mindset.",
    "Check the cybersecurity work below 🔥",
    "Scroll down and discover technical skills."
  ];

  const msgBox = document.getElementById("petMsg");
  const random = messages[Math.floor(Math.random()*messages.length)];

  msgBox.innerText = random;
  msgBox.style.display="block";

  setTimeout(()=>{
    msgBox.style.display="none";
  },4000);
}
