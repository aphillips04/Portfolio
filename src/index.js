document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".close-button");
  const projectTitle = document.querySelector("#popup h2");
  const description = document.querySelector(".description");
  const slideshow = document.querySelector(".slideshow");
  const slideshowImages = document.querySelectorAll(".slideshow img");
  const slideshowControls = document.querySelector(".slideshow-controls");

  // Load projects from ./assets/projects.json and append to projects grid
  fetch("./assets/projects.json")
    .then((response) => response.json())
    .then((projects) => {
      const projectsGrid = document.querySelector(".projects-grid");
      console.log(projects);
      projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.innerHTML = `
  <img src="${project.thumbnail}" alt="Project thumbnail">
  <h3>${project.title}</h3>
  <p>${project.short_desc}</p><br>
  `;

        // Add click event listener to project card
        projectCard.addEventListener("click", () => {
          // Open popup
          popup.style.display = "block";

          // Set project title
          projectTitle.textContent = project.title;

          // Set project description
          description.innerHTML = project.long_desc;

          // Add images to slideshow
          project.slideshow_imgs.forEach((image) => {
            const img = document.createElement("img");
            img.src = image;
            img.alt = "Project image";
            slideshow.appendChild(img);
          });
        });

        projectsGrid.appendChild(projectCard);
      });
    });

  // Add click event listener to close button
  closeButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Add click event listener to window to close popup when clicked outside of popup content
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
      projectTitle.textContent = "";
      description.innerHTML = "";
      slideshow.children;
    }
  });
});
