function toggleDescription() {
  const experienceContainers = document.querySelectorAll(".experience");
  experienceContainers.forEach((container) => {
    container.addEventListener("click", () => {
      experienceContainers.forEach((otherContainer) => {
        if (otherContainer !== container) {
          const otherDescriptionSpans =
            otherContainer.querySelectorAll(".descricao-detalhe");
          otherDescriptionSpans.forEach((span) => {
            span.classList.remove("visivel");
          });
        }
      });
      const currentDescriptionSpans =
        container.querySelectorAll(".descricao-detalhe");
      currentDescriptionSpans.forEach((span) => {
        span.classList.toggle("visivel");
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  toggleDescription();
});
