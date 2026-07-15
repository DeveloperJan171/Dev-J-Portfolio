const previews = document.querySelectorAll(".browser-preview");

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.getElementById("modalClose");

previews.forEach(preview => {

    preview.addEventListener("click", () => {

        const img = preview.querySelector("img");

        modalImg.src = img.src;

        modal.classList.add("active");

        modal.scrollTop = 0;

        document.body.style.overflow = "hidden";

    });

});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {

    if(e.target === modal){

        closeModal();

    }

});

document.addEventListener("keydown", e => {

    if(e.key === "Escape"){

        closeModal();

    }

});

function closeModal(){

    modal.classList.remove("active");

    document.body.style.overflow = "";

}