let bebidas = [

    {
        id: 1,
        nome: 'Old par',
        descricao: '1L',
        quantidade: 18,
        foto: 'https://www.designi.com.br/images/preview/10001669.jpg'
    },
    {
        id: 2,
        nome: 'black Label',
        descricao: '750ML',
        quantidade: 10,
        foto: 'https://www.emporioaugusta.com.br/loja/image/cache/catalog/data/Whisky/blacklabel-1024x1024.png'
    },
    {
        id: 3,
        nome: 'Buchanas',
        descricao: '750ML',
        quantidade: 7,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6SUhF85hKbzMwUin5mmvoczxROsKNkrcOKX_yTaISg&s'
    },
    {
        id: 4,
        nome: 'Red Label',
        descricao: '1L',
        quantidade: 24,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQraWYD5yAE1dPYGYeYq2Z1xk3J1jbcSeQcQC1Zc_GRhg&s'
    },
    {
        id: 5,
        nome: 'Gold Label',
        descricao: '1L',
        quantidade: 18,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYg6TkV1ypLS2nDzTg3fN8q3aO8qBRzW8bC5FWxk&s'
    },
    {
        id: 6,
        nome: 'Green Label',
        descricao: '750 ML',
        quantidade: 12,
        foto: 'https://imgs.pontofrio.com.br/1500074907/1xg.jpg?imwidth=292'
    },
    {
        id: 7,
        nome: 'Platinum Label',
        descricao: '1L',
        quantidade: 8,
        foto: 'http://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/whisky-johnnie-walker-platinum-label-18-anos1-78610fe9d2b578afa115676038434249-640-0.jpg'
    },
    {
        id: 8,
        nome: 'Royal Salute',
        descricao: '750ML',
        quantidade: 12,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiYs49NwgnU1hGSYvY3OdWdS1WcoaQoI5Vz8XXS8&s'
    },
    {
        id: 9,
        nome: 'Jack Daniels',
        descricao: '1L',
        quantidade: 20,
        foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr9v1ugb8qMRJgQhJs7ezaJM46SiwGYhAkHB6vblOsKw&s'
    },
    {
        id: 10,
        nome: 'ballantine',
        descricao: '750ML',
        quantidade: 10,
        foto:  'https://cdn.iset.io/assets/50100/produtos/2861/130135510sz.png'
    },
    

    ];

    function abrirModal(foto , nome) {
        modalFotoConteudo.innerHTML = `<img width="100%" src="${foto}">`;
        modalTitulo.innerHTML = nome;
    }


 


    function atualizarTabela(lista) {

        lista.map((cada) => {
            document.getElementById('tabela-dados').innerHTML += `
            <tr> 
                    <td>${cada.id}</td>
                    <td>${cada.nome}</td>
                    <td>${cada.descricao}</td>
                    <td>${cada.quantidade}</td>
                    <td> 
                    <a onclick="abrirModal('${cada.foto}')" href="#" data-bs-toggle="modal" data-bs-target="#modalFoto" >
                    <img src="${cada.foto}" width="50px"> 
                    </a>
                    </td>
                    
                    <td>
                    <button class="btn btn-outline-warning btn-sm">
            
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
            
                  </button>
                    <button class="btn btn-outline-danger btn-sm">
            
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                  
                  </button>
                    </td>
            
            </tr>
            
            `
                });
            

    }

    atualizarTabela(bebidas);