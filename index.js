const container = document.querySelector('.container');

    function getData() {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            // faz um loop pelo data, que é um array []
            // esse element que está dentro do forEach, representa um unico item dentro do data
            // na duvida console.log(element)
            data.forEach(element => {
              // crio uma div, que vai ser um card pra adicionar as informações
              const card = document.createElement("div");
              card.classList.add('card');
             
              // crio um h3 que vai ser o título dentro do card
              const title = document.createElement("h3");
              // crio um paragrafo que vai ser
              const content = document.createElement("p");
              
              // adiciono o conteudo do titulo
              // cada element, tem body, id, title, userId
              // como o element é um objeto eu consigo acessar ele através do .
              // element.title
              // element.id
              // elemenet.body
              // isso serve pra qualquer obj
              title.textContent = element.title;

              // no paragrafo adiciono o conteudo do element.body
              content.textContent = element.body;
              
              // adiciono o titulo dentro do card
              // o esperado seria
              // <div>
              //   <h3></h3>  
              // </div>
              card.appendChild(title);
              // adiciono o paragrafo dentro do card também
              // <div>
              //   <h3></h3>
              //   <p></p>  
              // </div>
              card.appendChild(content);

              // no fim adiciono tudo no container que já está criado no HTML
              // que está dentro do body e peguei com o queryselector
              container.appendChild(card);
            });
        });
    }
    getData();