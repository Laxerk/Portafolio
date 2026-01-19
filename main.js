const links = document.querySelectorAll('[data-link]');
const sections = document.querySelectorAll('.section');
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".modal-close");

let currentSection = document.querySelector('.section.active');

function showSection(sectionName) {
    if (currentSection.dataset.section === sectionName) return;

    const nextSection = document.querySelector(
        `.section[data-section="${sectionName}"]`
    );

    
    currentSection.classList.remove('active');
    nextSection.classList.add('active');

    currentSection = nextSection;

    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });

}

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        showSection(link.dataset.link);
    });
});

document.querySelectorAll(".insignia").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Cerrar al hacer clic en X
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});
