const nomePessoa = document.getElementById("nome")


    const app = document.getElementById('root');
    const quadro=document.getElementById("container")
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    // const foto = document.getElementById("foto").value
    // console.log(foto)
    //const img = document.getElementById("img").value

    fetch(`https://theblackwomanhistory.firebaseio.com/.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            data.content.forEach(mulheres => {
            const card = document.createElement('div');
            card.setAttribute('class', 'box');
            container.setAttribute("class","nome")
            container.appendChild(card);
            console.log(data.content,"contet")
            
         let image = document.createElement('img');
          image.src = mulheres.content.image.url
         console.log( mulheres.content.image.url)

        let titulo = document.createElement("h1");
         titulo.textContent = mulheres.content.title;
         console.log(titulo,"titulo")
         
        


        card.appendChild(image)
        card.appendChild(titulo); 

        container.appendChild(card);
        quadro.appendChild(container)

            })
        })
        .catch((erro) => {
            console.log(erro)
        })