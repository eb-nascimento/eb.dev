// script.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAwHU-S7VId2UA7bVtofjFTYqG0SQvEZk",
  authDomain: "portfolio-7f919.firebaseapp.com",
  projectId: "portfolio-7f919",
  storageBucket: "portfolio-7f919.firebasestorage.app",
  messagingSenderId: "575875580929",
  appId: "1:575875580929:web:e07abfae647d42ca506c00",
  measurementId: "G-CC7HH1RNVP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// --- O resto do seu código JavaScript viria abaixo desta seção ---
// Ex: Funções para interagir com o DOM, eventos, etc.
// Você pode usar 'app' e 'analytics' em outras funções dentro deste mesmo arquivo.

const containers = document.querySelectorAll(".container");
let currentIndex = 0;
let isScrolling = false;

// Função para rolar até o contêiner correto
function scrollToContainer(index) {
  const container = containers[index];
  container.scrollIntoView({
    behavior: "smooth",
    block: "start", // Garante que o contêiner comece no topo
  });
}

// Função para lidar com a rolagem
function handleScroll(direction) {
  if (isScrolling) return; // Evita múltiplos eventos simultâneos

  if (direction === "down" && currentIndex < containers.length - 1) {
    currentIndex++;
  } else if (direction === "up" && currentIndex > 0) {
    currentIndex--;
  } else {
    return;
  }

  scrollToContainer(currentIndex);
  isScrolling = true;

  setTimeout(() => {
    isScrolling = false;
  }, 800); // Delay de 800ms para evitar rolagem excessiva
}

// Detecta a rolagem do mouse
document.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault(); // Impede o comportamento padrão da rolagem
    if (event.deltaY > 0) {
      handleScroll("down");
    } else {
      handleScroll("up");
    }
  },
  { passive: false }
);

// Detecta as teclas de seta (cima/baixo)
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    handleScroll("down");
  } else if (event.key === "ArrowUp") {
    handleScroll("up");
  }
});
