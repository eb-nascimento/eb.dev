document.addEventListener("DOMContentLoaded", () => {
  toggleExperienceDescription();
  toggleAutomationDescription();
});

function toggleExperienceDescription() {
  const experienceContainers = document.querySelectorAll(".experience");
  experienceContainers.forEach((container) => {
    container.addEventListener("click", () => {
      const isExpanded = container.classList.contains("expanded");
      experienceContainers.forEach((otherContainer) => {
        if (otherContainer !== container) {
          otherContainer.classList.remove("expanded");
          const otherDescriptionSpans =
            otherContainer.querySelectorAll(".descricao-detalhe");
          otherDescriptionSpans.forEach((span) => {
            span.classList.remove("visivel");
          });
        }
      });
      container.classList.toggle("expanded");
      const currentDescriptionSpans =
        container.querySelectorAll(".descricao-detalhe");
      currentDescriptionSpans.forEach((span) => {
        if (isExpanded) {
          span.classList.remove("visivel");
        } else {
          span.classList.add("visivel");
        }
      });
    });
  });
}

function toggleAutomationDescription() {
  const automationContainers = document.querySelectorAll(".automacao");
  automationContainers.forEach((container) => {
    container.addEventListener("click", () => {
      const isExpanded = container.classList.contains("expanded");
      automationContainers.forEach((otherContainer) => {
        if (otherContainer !== container) {
          otherContainer.classList.remove("expanded");
          const otherDescriptionSpans =
            otherContainer.querySelectorAll(".descricao-detalhe");
          otherDescriptionSpans.forEach((span) => {
            span.classList.remove("visivel");
          });
        }
      });
      container.classList.toggle("expanded");
      const currentDescriptionSpans =
        container.querySelectorAll(".descricao-detalhe");
      currentDescriptionSpans.forEach((span) => {
        if (isExpanded) {
          span.classList.remove("visivel");
        } else {
          span.classList.add("visivel");
        }
      });
    });
  });
}

const containers = document.querySelectorAll(".container");
let currentContainerIndex = 0;
let isScrolling = false;

let scrollTimeout;
const SCROLL_DEBOUNCE_TIME = 100;

let keyboardTimeout;
const KEYBOARD_DEBOUNCE_TIME = 200;

function scrollToContainer(index) {
  if (index >= 0 && index < containers.length) {
    isScrolling = true;
    const targetContainer = containers[index];
    const targetPosition = targetContainer.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    currentContainerIndex = index;

    const onScrollEnd = () => {
      isScrolling = false;
      window.removeEventListener("scrollend", onScrollEnd);
    };
    window.addEventListener("scrollend", onScrollEnd);
  }
}

window.addEventListener(
  "wheel",
  (event) => {
    event.preventDefault();

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (isScrolling) {
        return;
      }
      if (event.deltaY > 0) {
        // Scroll down
        if (currentContainerIndex < containers.length - 1) {
          scrollToContainer(currentContainerIndex + 1);
        }
      } else {
        // Scroll up
        if (currentContainerIndex > 0) {
          scrollToContainer(currentContainerIndex - 1);
        }
      }
    }, SCROLL_DEBOUNCE_TIME);
  },
  { passive: false }
);

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();

    clearTimeout(keyboardTimeout);
    keyboardTimeout = setTimeout(() => {
      if (isScrolling) {
        return;
      }
      if (event.key === "ArrowDown") {
        // Scroll down
        if (currentContainerIndex < containers.length - 1) {
          scrollToContainer(currentContainerIndex + 1);
        }
      } else if (event.key === "ArrowUp") {
        // Scroll up
        if (currentContainerIndex > 0) {
          scrollToContainer(currentContainerIndex - 1);
        }
      }
    }, KEYBOARD_DEBOUNCE_TIME);
  }
});
