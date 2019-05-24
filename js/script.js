
const container = document.querySelector('.maravilhosas__box');


fetch(`https://theblackwomanhistory.firebaseio.com/.json`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data)
        data.content.forEach(mulheres => {

            const card = document.createElement('div');
            card.setAttribute('class', 'maravilhosas__perfil');
            container.appendChild(card);

            let ancora = document.createElement('a');
            ancora.setAttribute('href', '#');
            card.appendChild(ancora);

            let img = document.createElement('img');
            img.setAttribute('class', 'img-responsive');

            if (mulheres.metadata && mulheres.metadata.image) {
                img.setAttribute('src', mulheres.metadata.image.url) 
             } else {
                        img.setAttribute('src', './img/img-mulher.png');
                }

            let titulo = document.createElement("h1");
            titulo.textContent = mulheres.title;

            ancora.appendChild(titulo);
            card.appendChild(img)

        })
    })
    .catch((erro) => {
        console.log(erro)
    })


    const button = document.getElementById("botao");

button.addEventListener("click", (evento) => {
    evento.preventDefault();

    const nome = document.getElementById("name").value;
    const imagem = document.getElementById("img").value;

    fetch('http://localhost:5001/maravilhosas/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome,
            'metadata': {
                'image':{
                    'url':imagem,
                }
                },
        })
        
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log( "Sucesso!! :)");
    })
    .catch((erro) => {
        console.log(erro)
    })


})