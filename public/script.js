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
