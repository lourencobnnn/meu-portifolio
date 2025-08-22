function toggleMode() { // função que alterna entre os modos claro e escuro
    const html = document.documentElement;  // seleciona o elemento html (<html>) da pagina
    html.classList.toggle("light"); // altera a clase "light" no elemento html. se a classe existir, ela é removida; se não, ela é adicionada

    // alterar imagem de perfil
    const img = document.querySelector("#profile img");  // seleciona a imagem dentro do elemento com id "profile"(a foto do perfil)

    // condicional para verificar se a classe "lihgt" foi adicionada ao elemento html
    if (html.classList.contains("light")) {  // verifica se o elemento html contem a classe "light" (modo claro)
        img.setAttribute("src", "img/Passeio.jpg"); // se estiver no modo claro, altera a imagem para "img/Passeio.jpg"
    } else {
        img.setAttribute("src", "img/Foto 2.jpg"); // se não estiver no modo claro (modo escuro), mantém ou coloca a imagem "img/Foto 2.jpg"
    }
}