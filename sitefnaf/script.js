const body = document.querySelector("body"),
    visualName = document.querySelector(".visual-name"),
    nameText = visualName.querySelector("span"),
    visualList = document.querySelector(".visual-list"),
    visualCard = visualList.querySelectorAll(".visual"),
    charList = document.querySelector(".char-list"),
    charCard = charList.querySelectorAll(".char");

// URLs das imagens de fundo correspondentes para cada personagem
let backgroundImages = [
    "url('./assets/palco.webp')",          // Fundo para o primeiro item (Freddy)
    "url('./assets/part_and_services.webp')",          // Fundo para o segundo item (Bonnie)
    "url('./assets/images.jpeg')", // Fundo para o terceiro item (Chica)
    "url('./assets/Pirate_cove.webp')"       // Fundo para o quarto item (Foxy)
],
    charName = ["Freddy", "Bonnie", "Chica", "Foxy"];

visualCard.forEach((card, index) => {
    card.onclick = () => {
        // Define a imagem de fundo do body
        body.style.backgroundImage = backgroundImages[index];
        body.style.backgroundSize = "cover";  // Para a imagem cobrir toda a tela
        body.style.backgroundPosition = "center";  // Centraliza a imagem

        // Remove a classe "active" de todos os cartões e adiciona ao cartão clicado
        visualCard.forEach((card) => {
            card.classList.remove("active");
        });

        charCard.forEach((card) => {
            card.classList.remove("active");
        });

        card.classList.add("active");
        charCard[index].classList.add("active");

        // Animação do nome com GSAP
        gsap.registerPlugin(TextPlugin);

        gsap.to(nameText, {
            duration: 1,
            text: {
                value: charName[index]
            },
            ease: "expo.inOut",
        });
    };
});

document.addEventListener("mousemove", parallax);

const imageParallax = document.querySelectorAll(".char img");

function parallax(event) {
    imageParallax.forEach((img) => {
        const position = img.getAttribute("value"),
            y = (window.innerWidth - event.pageX * position) / 200,
            x = (window.innerHeight - event.pageY * position) / 800;

        img.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    const position = visualName.getAttribute("value"),
        x = (window.innerWidth - event.pageX * position) / 200,
        y = (window.innerHeight - event.pageY * position) / 800;

    nameText.style.transform = `translateX(${x}px) translateY(${y}px)`;
}
